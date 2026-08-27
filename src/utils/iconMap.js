import {
  Trophy,
  Building2,
  GraduationCap,
  BriefcaseBusiness,
  Sparkles,
  HeartHandshake,
  LineChart,
  ArrowUpRight,
} from "lucide-react";

const iconMap = {
  Trophy,
  Building2,
  GraduationCap,
  BriefcaseBusiness,
  Sparkles,
  HeartHandshake,
  LineChart,
  ArrowUpRight,
};

export function getIconFromName(iconName) {
  if (!iconName) return GraduationCap;

  // Mongo may store either the icon component name (e.g., "Trophy")
  // or a value that includes it. Keep fallback safe.
  const normalized = String(iconName).trim();
  return iconMap[normalized] || GraduationCap;
}

