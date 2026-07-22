"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import {
  projectCategories,
  projects,
  type Project,
  type ProjectCategory,
} from "@/data/site";
import { trackEvent } from "@/lib/analytics";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

type Filter = "All" | ProjectCategory;

export default function Projects() {
  const [filter, setFilter] = useState<Filter>("All");
  const [openProject, setOpenProject] = useState<Project | null>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const lastTrigger = useRef<HTMLElement | null>(null);

  const visible =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);

  const openModal = useCallback((project: Project, trigger: HTMLElement) => {
    lastTrigger.current = trigger;
    setOpenProject(project);
    trackEvent("project_open", { project: project.id });
  }, []);

  const closeModal = useCallback(() => {
    setOpenProject(null);
    lastTrigger.current?.focus();
  }, []);

  // Modal accessibility: Escape to close, focus containment, scroll lock
  useEffect(() => {
    if (!openProject) return;
    const dialog = dialogRef.current;
    dialog?.querySelector<HTMLElement>("button")?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
      if (e.key === "Tab" && dialog) {
        const focusables = dialog.querySelectorAll<HTMLElement>(
          'button, [href], [tabindex]:not([tabindex="-1"])'
        );
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [openProject, closeModal]);

  return (
    <section id="projects" className="bg-brand-charcoal py-16 md:py-28">
      <div className="mx-auto max-w-site px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            dark
            label="Featured Projects"
            title="Selected Work Across India"
            intro="A cross-section of our portfolio — every image is a design visualization prepared by our studio for a real client project."
          />
        </div>

        {/* Filters */}
        <div
          role="tablist"
          aria-label="Filter projects by category"
          className="no-scrollbar mt-10 flex gap-2 overflow-x-auto pb-1"
        >
          {projectCategories.map((cat) => {
            const selected = filter === cat;
            return (
              <button
                key={cat}
                role="tab"
                aria-selected={selected}
                onClick={() => {
                  setFilter(cat);
                  trackEvent("project_filter", { category: cat });
                }}
                className={`whitespace-nowrap rounded-sm px-4 py-2.5 text-sm font-medium transition-colors ${
                  selected
                    ? "bg-brand-red text-white"
                    : "border border-white/20 text-white/75 hover:border-white/50 hover:text-white"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Asymmetric editorial grid */}
        <ul className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:auto-rows-[260px]">
          {visible.map((project, i) => (
            <Reveal
              as="li"
              key={project.id}
              delay={Math.min(i * 0.05, 0.3)}
              className={
                project.size === "wide"
                  ? "lg:col-span-2"
                  : project.size === "tall"
                    ? "lg:row-span-2"
                    : ""
              }
            >
              <button
                type="button"
                onClick={(e) => openModal(project, e.currentTarget)}
                className="group relative block h-64 w-full overflow-hidden text-left sm:h-72 lg:h-full"
                aria-label={`View project: ${project.title}, ${project.location}`}
              >
                <Image
                  src={project.image}
                  alt={project.alt}
                  fill
                  sizes="(min-width: 1024px) 50vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/85 via-brand-charcoal/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <p className="text-[11px] font-semibold uppercase tracking-caps text-brand-red">
                    {project.category}
                  </p>
                  <p className="mt-1 font-heading text-lg font-bold text-white">
                    {project.title}
                  </p>
                  <p className="mt-0.5 flex items-center gap-1.5 text-sm text-white/70">
                    <span className="h-px w-3 bg-white/50" aria-hidden="true" />
                    {project.location}
                  </p>
                  <p className="mt-3 text-sm font-semibold text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    View Project →
                  </p>
                </div>
              </button>
            </Reveal>
          ))}
        </ul>

        <div className="mt-12 text-center">
          <a
            href="#contact"
            onClick={() => trackEvent("cta_book_consultation", { placement: "projects" })}
            className="inline-flex items-center justify-center rounded-sm border border-white/30 px-8 py-4 text-base font-semibold text-white transition-colors hover:border-white hover:bg-white/10"
          >
            Discuss a Similar Project
          </a>
        </div>
      </div>

      {/* Project modal / lightbox */}
      {openProject ? (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-brand-charcoal/90 p-4 backdrop-blur-sm"
          onClick={closeModal}
        >
          <div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-label={`${openProject.title}, ${openProject.location}`}
            className="relative max-h-[92dvh] w-full max-w-4xl overflow-y-auto bg-white"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[16/10] w-full">
              <Image
                src={openProject.image}
                alt={openProject.alt}
                fill
                sizes="(min-width: 1024px) 56rem, 100vw"
                className="object-cover"
                priority
              />
            </div>
            <div className="flex flex-wrap items-center justify-between gap-4 p-5 md:p-6">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-caps text-brand-red">
                  {openProject.category} · Design Visualization
                </p>
                <p className="mt-1 font-heading text-xl font-bold text-brand-charcoal">
                  {openProject.title}
                </p>
                <p className="text-sm text-brand-grey">{openProject.location}</p>
              </div>
              <a
                href="#contact"
                onClick={() => {
                  closeModal();
                  trackEvent("cta_book_consultation", { placement: "project_modal" });
                }}
                className="rounded-sm bg-brand-red px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-redDark"
              >
                Start a Project Like This
              </a>
            </div>
            <button
              type="button"
              onClick={closeModal}
              aria-label="Close project view"
              className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full bg-brand-charcoal/70 text-xl leading-none text-white transition-colors hover:bg-brand-red"
            >
              ×
            </button>
          </div>
        </div>
      ) : null}
    </section>
  );
}
