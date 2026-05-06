"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ScrambleText } from "@/components/scramble-title";
import type { PortfolioProject } from "@/data/projects";

interface ProjectCardProps {
  project: PortfolioProject;
  index: number;
  scrambleTrigger: number;
}

export function ProjectCard({ project, index, scrambleTrigger }: ProjectCardProps) {
  const isActive = project.status === "active";

  const visualStyle = isActive
    ? {
        background: `radial-gradient(140% 120% at 0% 0%, ${project.accentFrom}4d 0%, transparent 58%), radial-gradient(120% 120% at 100% 100%, ${project.accentTo}59 0%, rgba(24,24,27,0.65) 62%), linear-gradient(135deg, rgba(9,9,11,0.9), rgba(24,24,27,0.75))`,
        borderColor: `${project.accentFrom}66`
      }
    : {
        background:
          "linear-gradient(135deg, rgba(39,39,42,0.92), rgba(24,24,27,0.86)), linear-gradient(0deg, rgba(24,24,27,0.9), rgba(24,24,27,0.9))",
        borderColor: "rgba(82,82,91,0.9)"
      };

  const cardClasses = [
    "group relative flex h-full flex-col overflow-hidden rounded-2xl border border-zinc-800/90 bg-zinc-900/70 p-4 md:p-5",
    "shadow-[0_8px_30px_rgba(0,0,0,0.35)] backdrop-blur-xl transition-colors duration-300",
    isActive
      ? "hover:border-cyan-300/70 hover:shadow-glow"
      : "cursor-not-allowed border-zinc-700/90 opacity-75"
  ].join(" ");

  const contentClasses = isActive ? "" : "blur-[1.7px] grayscale saturate-0 brightness-90";

  const inner = (
    <>
      <div
        className="relative mb-5 min-h-40 rounded-xl border p-4"
        style={visualStyle}
        aria-hidden="true"
      >
        {project.previewImage ? (
          <>
            <Image
              src={project.previewImage}
              alt=""
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="rounded-[0.7rem] object-cover object-top opacity-85"
            />
            <div
              className="absolute inset-0 rounded-[0.7rem]"
              style={{
                background: `linear-gradient(165deg, ${project.accentFrom}22, rgba(9,9,11,0.06) 32%, rgba(9,9,11,0.58) 86%)`
              }}
            />
          </>
        ) : null}
        <div className="absolute right-3 top-3 rounded-full border border-zinc-400/30 bg-zinc-900/65 px-3 py-1">
          <ScrambleText
            as="span"
            text={isActive ? "Activo" : "En desarrollo"}
            trigger={scrambleTrigger}
            className="text-xs font-medium tracking-wide text-zinc-200"
          />
        </div>
        <div className="absolute bottom-3 left-3">
          <ScrambleText
            as="span"
            text="Full Stack Project"
            trigger={scrambleTrigger}
            className="text-sm font-medium text-zinc-200/90"
          />
        </div>
      </div>

      <ScrambleText
        as="h3"
        text={project.title}
        trigger={scrambleTrigger}
        className="text-2xl font-semibold leading-tight tracking-tight text-zinc-100 md:text-3xl"
      />

      <ScrambleText
        as="p"
        text={project.description}
        trigger={scrambleTrigger}
        className="mt-3 text-sm leading-relaxed text-zinc-300"
      />

      <div className="mt-4 flex flex-wrap gap-2">
        {project.stack.map((item) => (
          <ScrambleText
            key={`${project.title}-${item}`}
            as="span"
            text={item}
            trigger={scrambleTrigger}
            className="rounded-full border border-zinc-700 bg-zinc-800/70 px-3 py-1 text-xs text-zinc-200"
          />
        ))}
      </div>

      <div className="mt-6 text-sm font-medium">
        <ScrambleText
          as="span"
          text={isActive ? "Ver demo ->" : "Proximamente"}
          trigger={scrambleTrigger}
          className={isActive ? "text-cyan-300" : "text-zinc-400"}
        />
      </div>
    </>
  );

  const motionProps = {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.3 },
    transition: { delay: index * 0.06, duration: 0.45, ease: "easeOut" as const },
    whileHover: isActive ? { y: -8, scale: 1.015 } : undefined,
    className: cardClasses
  };

  if (isActive && project.href) {
    return (
      <motion.a {...motionProps} href={project.href} target="_blank" rel="noreferrer">
        <div className={contentClasses}>{inner}</div>
      </motion.a>
    );
  }

  return (
    <motion.div {...motionProps} aria-disabled="true">
      <div className={contentClasses}>{inner}</div>
      <div className="absolute inset-0 z-20 flex items-center justify-center rounded-2xl bg-zinc-950/55 backdrop-blur-[2.8px]">
        <span className="rounded-full border border-zinc-500/70 bg-zinc-900/85 px-6 py-2 text-sm font-semibold uppercase tracking-[0.22em] text-zinc-200 shadow-[0_0_30px_rgba(161,161,170,0.28)]">
          Próximamente
        </span>
      </div>
    </motion.div>
  );
}
