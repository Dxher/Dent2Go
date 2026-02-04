"use client";

import { useMemo, useState } from "react";
import styles from "./gallery.module.css";

type ServiceKey = "polishing" | "dent" | "scratch";

type Job = {
  id: string;
  title: string;
  location?: string;
  vehicle?: string;
  summary: string;
  beforeSrc: string;
  afterSrc: string;
};

const SERVICE_COPY: Record<
  ServiceKey,
  { label: string; description: string }
> = {
  polishing: {
    label: "Polishing Services",
    description:
      "Dent2Go is able to come to your place and restore your old treasure back to new. We have been in the business for over 20 years and have extensive experience in paint restorations, headlight restoration, and car paint protection.",
  },
  dent: {
    label: "Dent Removal Services",
    description:
      "Dent2Go Offers a special mobile Dent removal Service. Our Expert has the best training for removing the most complex and difficult to remove dents. Dent Removal, can help maintain the value of your car, avoid cracks in the paint job, in turn avoid rust on the body of your car. For best results, combine our dent removal service, with a polishing finish to best protect your car.",
  },
  scratch: {
    label: "Scratch Removal Services",
    description:
      "Water Sanding, and polishing combined expertise, allows us to get rid of most pesky scratches, and restore your beautiful car back to its original look. Have you scratched your car against a wall? Did you hit your mirror against something? did someone scratch your car? we can help!",
  },
};

// Placeholder jobs (swap images later)
const JOBS: Record<ServiceKey, Job[]> = {
  polishing: [
    {
      id: "pol-1",
      title: "Gloss Restoration",
      vehicle: "Sedan",
      location: "Ottawa, ON",
      summary: "Light swirl removal + polish for a deeper shine.",
      beforeSrc: "/before/before-1.jpg",
      afterSrc: "/after/after-1.jpg",
    },
    {
      id: "pol-2",
      title: "Swirl Correction",
      vehicle: "SUV",
      location: "Ottawa, ON",
      summary: "Single-stage polish to reduce haze and swirls.",
      beforeSrc: "/before/before-7.jpg",
      afterSrc: "/after/after-7.jpg",
    },
    {
      id: "pol-3",
      title: "Finish Cleanup",
      vehicle: "Coupe",
      location: "Ottawa, ON",
      summary: "Refine paint clarity and bring back gloss.",
      beforeSrc: "/before/before-3.jpg",
      afterSrc: "/after/after-3.jpg",
    },
  ],
  dent: [
    {
      id: "den-1",
      title: "Door Dent Repair",
      vehicle: "Sedan",
      location: "Orleans, ON",
      summary: "Panel dent reduced and reshaped (where applicable).",
      beforeSrc: "/before/before-4.jpg",
      afterSrc: "/after/after-4.jpg",
    },
    {
      id: "den-2",
      title: "Fender Dent Fix",
      vehicle: "SUV",
      location: "Ottawa, ON",
      summary: "Dent correction with paint-safe approach.",
      beforeSrc: "/before/before-5.jpg",
      afterSrc: "/after/after-5.jpg",
    },
    {
      id: "den-3",
      title: "Quarter Panel Dent",
      vehicle: "Truck",
      location: "Kanata, ON",
      summary: "Improved panel shape and appearance.",
      beforeSrc: "/before/before-6.jpg",
      afterSrc: "/after/after-6.jpg",
    },
  ],
  scratch: [
    {
      id: "scr-1",
      title: "Door Scratch Correction",
      vehicle: "Sedan",
      location: "Ottawa, ON",
      summary: "Scratch reduction + refinement for a cleaner finish.",
      beforeSrc: "/before/before-2.jpg",
      afterSrc: "/after/after-2.jpg",
    },
    {
      id: "scr-2",
      title: "Bumper Scuff Cleanup",
      vehicle: "SUV",
      location: "Barhaven, ON",
      summary: "Scuff minimized and polished for a better match.",
      beforeSrc: "/before/before-8.jpg",
      afterSrc: "/after/after-8.jpg",
    },
    {
      id: "scr-3",
      title: "Door Scratch Correction",
      vehicle: "Coupe",
      location: "Ottawa, ON",
      summary: "Scratch reduced depending on depth and paint condition.",
      beforeSrc: "/before/before-9.jpg",
      afterSrc: "/after/after-9.jpg",
    },
  ],
};

export default function GalleryPage() {
  const [tab, setTab] = useState<ServiceKey>("polishing");
  const [activeJob, setActiveJob] = useState<Job | null>(null);

  const jobs = useMemo(() => JOBS[tab], [tab]);
  const copy = SERVICE_COPY[tab];

  const closeModal = () => setActiveJob(null);

  return (
    <main className={styles.page}>
      <div className="container">
        <header className={styles.header}>
          <h1 className={styles.h1}>Gallery</h1>
          <p className={styles.sub}>
            Browse before/after results by service type.
          </p>
        </header>

        {/* Tabs */}
        <div className={styles.tabs}>
          {(["polishing", "dent", "scratch"] as ServiceKey[]).map((key) => {
            const isActive = tab === key;
            return (
              <button
                key={key}
                type="button"
                className={`${styles.tab} ${isActive ? styles.tabActive : ""}`}
                onClick={() => setTab(key)}
              >
                {SERVICE_COPY[key].label}
              </button>
            );
          })}
        </div>

        {/* Description under tabs */}
        <div className={styles.descWrap}>
          <p className={styles.desc}>{copy.description}</p>
        </div>

        {/* Horizontal scrolling jobs list */}
        <section className={styles.railSection}>
          <div className={styles.railHeader}>
          </div>

          <div className={styles.rail} role="list">
            {jobs.map((job) => (
              <button
                key={job.id}
                type="button"
                className={styles.jobCard}
                role="listitem"
                onClick={() => setActiveJob(job)}
              >
                <div className={styles.imageWrap}>
                  {/* BEFORE */}
                  <img
                    src={job.beforeSrc}
                    alt={`${job.title} before`}
                    className={`${styles.img} ${styles.imgBefore}`}
                  />
                  {/* AFTER (appears on hover) */}
                  <img
                    src={job.afterSrc}
                    alt={`${job.title} after`}
                    className={`${styles.img} ${styles.imgAfter}`}
                  />
                </div>

                <div className={styles.jobMeta}>
                  <div className={styles.jobTitle}>{job.title}</div>
                  <div className={styles.jobSub}>
                    {job.vehicle ? job.vehicle : "Vehicle"}{" "}
                    {job.location ? `• ${job.location}` : ""}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </section>
      </div>

      {/* Modal popup */}
      {activeJob && (
        <div
          className={styles.modalOverlay}
          role="dialog"
          aria-modal="true"
          onMouseDown={(e) => {
            // click outside closes
            if (e.target === e.currentTarget) closeModal();
          }}
        >
          <div className={styles.modal}>
            <div className={styles.modalTop}>
              <div>
                <div className={styles.modalTitle}>{activeJob.title}</div>
                <div className={styles.modalSub}>
                  {activeJob.vehicle ? activeJob.vehicle : "Vehicle"}{" "}
                  {activeJob.location ? `• ${activeJob.location}` : ""}
                </div>
              </div>

              <button
                type="button"
                className={styles.closeBtn}
                onClick={closeModal}
                aria-label="Close"
              >
                ✕
              </button>
            </div>
            <div className={styles.modalContent}>
                <div className={styles.modalGrid}>
                    <div className={styles.modalImageCard}>
                        <div className={styles.modalLabel}>Before</div>
                        <img
                        src={activeJob.beforeSrc}
                        alt={`${activeJob.title} before`}
                        className={styles.modalImg}
                        />
                    </div>

                    <div className={styles.modalImageCard}>
                        <div className={styles.modalLabel}>After</div>
                        <img
                        src={activeJob.afterSrc}
                        alt={`${activeJob.title} after`}
                        className={styles.modalImg}
                        />
                    </div>
                </div>

                <div className={styles.modalDetails}>
                    <div className={styles.detailRow}>
                        <span className={styles.detailLabel}>Service</span>
                        <span className={styles.detailValue}>{copy.label}</span>
                    </div>
                    <div className={styles.detailRow}>
                        <span className={styles.detailLabel}>Job Details</span>
                        <span className={styles.detailValue}>{activeJob.summary}</span>
                    </div>
                </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
