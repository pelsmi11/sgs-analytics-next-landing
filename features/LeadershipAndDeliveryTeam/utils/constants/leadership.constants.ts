import type { LucideIcon } from "lucide-react";
import { Briefcase, Cpu } from "lucide-react";

export type TeamMemberRole = "ceo" | "lead" | "consultant";

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  roleKey: string;
  focus: string;
  skills: [string, string, string];
  certifications: string;
  english?: string;
  usClientsRemote?: boolean;
  stack?: string; // For Hugo - tech stack
  icon: LucideIcon;
  photoUrl?: string;
  linkedInUrl?: string;
}

const photosUrl = {
  hugoEstrada: "https://res.cloudinary.com/dyt42oe9i/image/upload/v1771466524/hugo_z8rhsy.jpg",
  julioMonterroso: "https://res.cloudinary.com/dyt42oe9i/image/upload/v1771466524/julioMonterroso_xw9wgr.jpg",
} as const;

export const getTeamMembers = (t: (key: string) => string): TeamMember[] => [
  {
    id: "julio",
    name: "Julio",
    role: t("team.julio.role"),
    roleKey: "julio",
    focus: t("team.julio.focus"),
    skills: [
      t("team.julio.skills.0"),
      t("team.julio.skills.1"),
      t("team.julio.skills.2"),
    ],
    certifications: t("team.julio.certifications"),
    icon: Briefcase,
    photoUrl: photosUrl.julioMonterroso,
    linkedInUrl: "https://www.linkedin.com/in/julio-monterroso-2a884b1ab/",
  },
  {
    id: "hugo",
    name: "Hugo",
    role: t("team.hugo.role"),
    roleKey: "hugo",
    focus: t("team.hugo.focus"),
    skills: [
      t("team.hugo.skills.0"),
      t("team.hugo.skills.1"),
      t("team.hugo.skills.2"),
    ],
    certifications: t("team.hugo.certifications"),
    stack: t("team.hugo.stack"),
    usClientsRemote: true,
    english: "Fluent",
    icon: Cpu,
    photoUrl: photosUrl.hugoEstrada,
    linkedInUrl: "https://www.linkedin.com/in/hugoestradas/",
  },
];
