"use client";

import React from "react";
import { useTranslations, useLocale } from "next-intl";
import { useQuery } from "@tanstack/react-query";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Loader2, CheckCircle, AlertCircle } from "lucide-react";
import { useContactForm, MESSAGE_MAX_LENGTH } from "../hooks/useContactForm";
import { getContactTopics } from "../services/contactTopics.services";
import styles from "./btnContact.module.css";
import { cn } from "@/lib/utils";

export const ContactForm = () => {
  const t = useTranslations("contact.form");
  const locale = useLocale();
  const { form, onSubmit, isLoading, isSuccess, isError, error, reset } =
    useContactForm();

  const {
    data: topics = [],
    isLoading: topicsLoading,
    isError: topicsError,
  } = useQuery({
    queryKey: ["contact-topics"],
    queryFn: getContactTopics,
  });

  const topicLabel = (topic: { title: string; title_es: string }) =>
    locale === "es" ? topic.title_es : topic.title;

  return (
    <Card className="p-6 mx-auto container">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-foreground mb-2">
          {t("formTitle")}
        </h2>
        <p className="text-muted-foreground text-sm md:text-base">
          {t("formSubtitle")}
        </p>
      </div>

      {isSuccess && (
        <Alert className="mb-6 border-success/50 bg-success/10">
          <CheckCircle className="h-4 w-4 text-success" />
          <AlertDescription className="text-success">
            {t("success")}
          </AlertDescription>
        </Alert>
      )}

      {isError && (
        <Alert className="mb-6 border-destructive/50 bg-destructive/10">
          <AlertCircle className="h-4 w-4 text-destructive" />
          <AlertDescription className="text-destructive">
            {error?.message || t("error")}
          </AlertDescription>
        </Alert>
      )}

      <Form {...form}>
        <form onSubmit={onSubmit} className="space-y-8">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t("name")}</FormLabel>
                <FormControl>
                  <Input
                    placeholder="John Doe"
                    disabled={isLoading}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t("email")}</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="john.doe@example.com"
                    disabled={isLoading}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="company"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t("company")}</FormLabel>
                <FormControl>
                  <Input
                    placeholder={t("companyPlaceholder")}
                    disabled={isLoading}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="role"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t("role")}</FormLabel>
                <FormControl>
                  <Input
                    placeholder={t("rolePlaceholder")}
                    disabled={isLoading}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {!topicsError && (
            <FormField
              control={form.control}
              name="topic"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t("topic")}</FormLabel>
                  <FormControl>
                    <select
                      disabled={isLoading || topicsLoading}
                      className={cn(
                        "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background",
                        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                        "disabled:cursor-not-allowed disabled:opacity-50",
                        "file:border-0 file:bg-transparent file:text-sm file:font-medium"
                      )}
                      value={field.value}
                      onChange={(e) => field.onChange(e.target.value)}
                      onBlur={field.onBlur}
                      ref={field.ref}
                    >
                      <option value="">
                        {topicsLoading ? t("topicsLoading") : t("topicPlaceholder")}
                      </option>
                      {!topicsLoading &&
                        topics.map((topic) => (
                          <option
                            key={topic.documentId}
                            value={topic.documentId}
                          >
                            {topicLabel(topic)}
                          </option>
                        ))}
                    </select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          )}

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => {
              const charCount = field.value?.length || 0;
              const remaining = MESSAGE_MAX_LENGTH - charCount;
              const isNearLimit = remaining <= 50;
              const isOverLimit = remaining < 0;

              return (
                <FormItem>
                  <FormLabel>{t("message")}</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder={t("messagePlaceholder")}
                      disabled={isLoading}
                      {...field}
                    />
                  </FormControl>
                  <div className="flex justify-between items-center">
                    <FormMessage />
                    <span
                      className={cn(
                        "text-xs",
                        isOverLimit && "text-destructive",
                        isNearLimit && !isOverLimit && "text-amber-500",
                        !isNearLimit && !isOverLimit && "text-muted-foreground"
                      )}
                    >
                      {charCount} / {MESSAGE_MAX_LENGTH}
                    </span>
                  </div>
                </FormItem>
              );
            }}
          />
          <div className="flex gap-4">
            <button
              type="submit"
              disabled={isLoading}
              className={styles.btnGlow}
            >
              {isLoading && (
                <Loader2 className="h-4 w-4 animate-spin shrink-0" />
              )}
              {isLoading ? t("submitting") : t("submit")}
            </button>
          </div>
        </form>
      </Form>
    </Card>
  );
};
