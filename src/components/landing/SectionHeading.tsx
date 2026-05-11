import React from "react";

type Props = {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: Props) {
  const alignment = align === "center" ? "items-center text-center" : "items-start text-left";

  return (
    <div className={`flex max-w-2xl flex-col gap-3 ${alignment}`}>
      <span className="text-caption inline-flex rounded-full border border-border bg-secondary/60 px-3 py-1 text-secondary-foreground shadow-sm">
        {eyebrow}
      </span>
      <h2 className="text-display-sm text-balance text-foreground md:text-display-md">
        {title}
      </h2>
      <p className="text-body-lg max-w-xl text-muted-foreground">{description}</p>
    </div>
  );
}
