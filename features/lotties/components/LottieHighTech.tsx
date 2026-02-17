"use client";
import React from "react";
import { useLottieQuery } from "../hooks";
import { LottieView } from "./LottieView";

export const LottieHighTech = (
  props: React.HTMLAttributes<HTMLDivElement> = {}
) => {
  const { lottieQuery } = useLottieQuery({
    lottieUrl: "/Lotties/big_data.json",
  });

  const { data: animationData, isLoading, isError, error } = lottieQuery;
  return (
    <LottieView
      {...props}
      animationData={animationData}
      isLoading={isLoading}
      isError={isError}
      error={error}
    />
  );
};
