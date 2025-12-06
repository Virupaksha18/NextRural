
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import React from "react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  className?: string;
  style?: React.CSSProperties;
}

const FeatureCard = ({ title, description, icon: Icon, className, style }: FeatureCardProps) => {
  return (
    <div className={cn("p-6 rounded-lg border bg-card text-card-foreground transition-all hover:shadow-md", className)} style={style}>
      <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
        <Icon className="h-6 w-6 text-primary" />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

export default FeatureCard;
