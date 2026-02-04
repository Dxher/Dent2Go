"use client";

import styles from "./contact.module.css";

export default function ContactPage() {
  return (
    <main className={styles.page}>
      <div className="container">
        <header className={styles.header}>
          <h1 className={styles.h1}>Contact Us</h1>
          <p className={styles.sub}>
            Reach out for a quote, questions, or to book an appointment.
          </p>
        </header>

        {/* Top: 2-column layout */}
        <section className={styles.grid}>
          {/* Left column: contact details */}
          <aside className={styles.card}>
            <h2 className={styles.cardTitle}>Contact Details</h2>
            <div className={styles.rule} />

            <div className={styles.detailList}>
              <div className={styles.detailRow}>
                <span className={styles.label}>Phone</span>
                <a className={styles.valueLink} href="tel:+16137694443">
                  (613) 769-4443
                </a>
              </div>

              <div className={styles.detailRow}>
                <span className={styles.label}>Email</span>
                <a
                  className={styles.valueLink}
                  href="mailto:inquiries@dent2go.ca"
                >
                  inquiries@dent2go.ca
                </a>
              </div>

              <div className={styles.detailRow}>
                <span className={styles.label}>Hours</span>
                <span className={styles.valueText}>
                  Weekdays: 9:00AM–5:00PM
                  <br />
                  Saturday: By Appointment Only
                  <br />
                  Sunday: Closed
                </span>
              </div>

              <div className={styles.detailRow}>
                <span className={styles.label}>Location</span>
                <span className={styles.valueText}>
                  Ottawa, ON, Canada
                </span>
              </div>
            </div>

            <div className={styles.note}>
              <strong className={styles.noteStrong}>Tip:</strong>{" "}
              Include your vehicle make/model and what service you want in the
              message for a faster quote.
            </div>
          </aside>

          {/* Right column: contact form */}
          <section className={styles.card}>
            <h2 className={styles.cardTitle}>Send a Message</h2>
            <div className={styles.rule} />

            {/* Placeholder form (we’ll wire it later) */}
            <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
              <div className={styles.row2}>
                <div className={styles.field}>
                  <label className={styles.fieldLabel} htmlFor="fullName">
                    Full Name
                  </label>
                  <input
                    className={styles.input}
                    id="fullName"
                    name="fullName"
                    type="text"
                    placeholder="John Doe"
                    autoComplete="name"
                    required
                  />
                </div>

                <div className={styles.field}>
                  <label className={styles.fieldLabel} htmlFor="phone">
                    Phone Number
                  </label>
                  <input
                    className={styles.input}
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="(613) 555-1234"
                    autoComplete="tel"
                    required
                  />
                </div>
              </div>

              <div className={styles.field}>
                <label className={styles.fieldLabel} htmlFor="email">
                  Email Address
                </label>
                <input
                  className={styles.input}
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  autoComplete="email"
                  required
                />
              </div>

              <div className={styles.field}>
                <label className={styles.fieldLabel} htmlFor="message">
                  Message
                </label>
                <textarea
                  className={styles.textarea}
                  id="message"
                  name="message"
                  placeholder="Tell us about your vehicle and what you’re looking for..."
                  rows={6}
                  required
                />
              </div>

              <button className={styles.button} type="submit">
                Send Message
              </button>
            </form>
          </section>
        </section>

        {/* FAQ section */}
        <section className={styles.faq}>
          <h2 className={styles.faqTitle}>FAQ</h2>
          <p className={styles.faqSub}>
            Quick answers to the most common questions.
          </p>

          <div className={styles.faqGrid}>
            <details className={styles.faqItem}>
              <summary className={styles.faqSummary}>
                How long does a detail take?
              </summary>
              <div className={styles.faqBody}>
                Most details take 1–4 hours depending on the package and vehicle
                condition. We’ll confirm an estimate when you book.
              </div>
            </details>

            <details className={styles.faqItem}>
              <summary className={styles.faqSummary}>
                Do you offer mobile detailing?
              </summary>
              <div className={styles.faqBody}>
                Yes (placeholder). Let us know your address and we’ll confirm if
                you’re within our service area.
              </div>
            </details>

            <details className={styles.faqItem}>
              <summary className={styles.faqSummary}>
                What do I need to do before my appointment?
              </summary>
              <div className={styles.faqBody}>
                Remove personal items if possible. If we’re doing an interior
                deep clean, empty the trunk and floor areas.
              </div>
            </details>

            <details className={styles.faqItem}>
              <summary className={styles.faqSummary}>
                Do you charge deposits?
              </summary>
              <div className={styles.faqBody}>
                For larger jobs, we may require a deposit to hold the time slot
                (placeholder). We’ll tell you upfront.
              </div>
            </details>
          </div>
        </section>
      </div>
    </main>
  );
}
