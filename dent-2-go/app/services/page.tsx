import Link from "next/link";
import styles from "./services.module.css";

export default function ServicesPage() {
  return (
    <main className={styles.page}>
      <div className="container">
        <header className={styles.header}>
          <h1 className={styles.h1}>Services</h1>
          <p className={styles.sub}>
            Professional correction work to restore your vehicle’s finish.
          </p>
        </header>

        {/* Services */}
        <section className={styles.section}>
          <h2 className={styles.h2}>What We Offer</h2>
          <div className={styles.servicesGrid}>
            <article className={styles.card}>
              <h3 className={styles.cardTitle}>Polishing Services</h3>
              <p className={styles.cardText}>
                Enhance gloss and clarity by reducing swirl marks and light
                imperfections for a cleaner, deeper shine.
              </p>
              <Link href="/gallery" className={styles.cta}>
                View Results →
              </Link>
            </article>

            <article className={styles.card}>
              <h3 className={styles.cardTitle}>Dent Removal Services</h3>
              <p className={styles.cardText}>
                Paint-safe dent correction (where applicable) to restore panels
                and improve overall appearance.
              </p>
              <Link href="/gallery" className={styles.cta}>
                View Results →
              </Link>
            </article>

            <article className={styles.card}>
              <h3 className={styles.cardTitle}>Scratch Removal Services</h3>
              <p className={styles.cardText}>
                Reduce or remove scratches depending on depth, then refine the
                finish to blend and restore shine.
              </p>
              <Link href="/gallery" className={styles.cta}>
                View Results →
              </Link>
            </article>
          </div>
        </section>

        {/* Pricing */}
        <section className={styles.section}>
          <h2 className={styles.h2}>Pricing</h2>

          <div className={styles.pricingGrid}>
            <div className={styles.priceCard}>
              <div className={styles.priceTop}>
                <h3 className={styles.priceTitle}>Standard Hourly Rate</h3>
                <div className={styles.priceValue}>$199 / hour</div>
              </div>
              <p className={styles.priceNote}>Minimum 1 hour</p>
              <Link href="/contact" className={styles.priceBtn}>
                Get a Quote →
              </Link>
            </div>

            <div className={styles.priceCard}>
              <div className={styles.priceTop}>
                <h3 className={styles.priceTitle}>Baseline Quotes</h3>
                <div className={styles.priceValue}>Starting $45</div>
              </div>
              <p className={styles.priceNote}>Per job</p>
              <Link href="/contact" className={styles.priceBtn}>
                Get a Quote →
              </Link>
            </div>

            <div className={styles.priceCard}>
              <div className={styles.priceTop}>
                <h3 className={styles.priceTitle}>Returning Customers</h3>
                <div className={styles.priceValue}>Starting $35</div>
              </div>
              <p className={styles.priceNote}>Per job</p>
              <Link href="/contact" className={styles.priceBtn}>
                Book Again →
              </Link>
            </div>
          </div>

          {/* Additional Charges */}
          <div className={styles.addOn}>
            <p className={styles.addOnText}>
              <span className={styles.addOnStar}>*</span> Additional Service
              Charges: All calls outside of Ottawa, are subject to an additional
              service charge
            </p>

            <div className={styles.chargeGrid}>
              <div className={styles.chargeItem}>
                <span className={styles.chargePlace}>Orleans</span>
                <span className={styles.chargePrice}>$40.00</span>
              </div>
              <div className={styles.chargeItem}>
                <span className={styles.chargePlace}>Kanata</span>
                <span className={styles.chargePrice}>$60.00</span>
              </div>
              <div className={styles.chargeItem}>
                <span className={styles.chargePlace}>Barhaven</span>
                <span className={styles.chargePrice}>$50.00</span>
              </div>
              <div className={styles.chargeItem}>
                <span className={styles.chargePlace}>Vars</span>
                <span className={styles.chargePrice}>$75.00</span>
              </div>
              <div className={styles.chargeItem}>
                <span className={styles.chargePlace}>Limoges</span>
                <span className={styles.chargePrice}>$75.00</span>
              </div>
              <div className={styles.chargeItem}>
                <span className={styles.chargePlace}>Carp</span>
                <span className={styles.chargePrice}>$75.00</span>
              </div>
              <div className={styles.chargeItem}>
                <span className={styles.chargePlace}>Carleton Place</span>
                <span className={styles.chargePrice}>$75.00</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
