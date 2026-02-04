import styles from "./page.module.css";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className={styles.page}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={`container ${styles.heroInner}`}>
          <div className={styles.heroText}>
            <h1 className={styles.h1}>Premium Car Detailing, Done Right.</h1>
            <p className={styles.sub}>
              Paint correction, interior deep clean, ceramic coatings, and more.
              Serving your area with professional results.
            </p>

            <div className={styles.heroActions}>
              <Link href="/contact" className={styles.primaryBtn}>
                Get a Quote
              </Link>
              <Link href="/services" className={styles.secondaryBtn}>
                View Services
              </Link>
            </div>
          </div>

          <div className={styles.heroCard}>
            <div className={styles.heroBadge}>Trusted • Insured • Mobile</div>
            <div className={styles.heroCardBody}>
              <p className={styles.heroCardTitle}>Open 7 days</p>
              <p className="muted">
                Flexible appointments. Quick response times.
              </p>
              <div className={styles.heroMiniGrid}>
                <div className={styles.miniItem}>
                  <span className={styles.miniLabel}>Exterior</span>
                  <span className={styles.miniValue}>Wash + Seal</span>
                </div>
                <div className={styles.miniItem}>
                  <span className={styles.miniLabel}>Interior</span>
                  <span className={styles.miniValue}>Deep Clean</span>
                </div>
                <div className={styles.miniItem}>
                  <span className={styles.miniLabel}>Protection</span>
                  <span className={styles.miniValue}>Ceramic</span>
                </div>
                <div className={styles.miniItem}>
                  <span className={styles.miniLabel}>Finish</span>
                  <span className={styles.miniValue}>Gloss</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About section (scroll target) */}
      <section id="about" className="section">
        <div className="container">
          <h2 className="sectionTitle">About</h2>

          <div className={styles.aboutGridNew}>
            <div className={styles.aboutCardNew}>
              <p className={styles.aboutP}>
                Dent2Go is an on the road, mobile company, that specializes in paint
                less dent removal. We are proud to offer scratch removal services, car
                polishing services, Headlights restoration services and Windshield
                Repair Services all starting in the Ottawa Region. We will come to you
                and are flexible with our schedule.
              </p>

              <p className={styles.aboutP}>
                Dent 2 Go was founded by Robert Daher, who started his long standing
                Automotive career over 30 years ago in Toronto, and recently moved to
                Ottawa and has established his mobile business to serve the greater
                Ottawa area. He has a wide range of expertise in the car industry.
              </p>

              <p className={styles.aboutP}>
                We pride ourselves on our attention to detail and our customer
                relations. Everyone of our clients is important to us, and we do our
                best to provide top quality work at all times.
              </p>

              <p className={styles.aboutP}>
                Our goal is to get the dents off your car without leaving any in your
                pocket.
              </p>
            </div>

            {/* Keep your right-side stats area if you want, or remove it.
                Here’s a cleaner “info block” version (placeholders). */}
            <div className={styles.aboutInfoNew}>
              <div className={styles.infoItem}>
                <div className={styles.infoLabel}>Owner</div>
                <div className={styles.infoValue}>Robert Daher</div>
              </div>
              <div className={styles.infoItem}>
                <div className={styles.infoLabel}>Service Area</div>
                <div className={styles.infoValue}>Ottawa Region</div>
              </div>
              <div className={styles.infoItem}>
                <div className={styles.infoLabel}>Type</div>
                <div className={styles.infoValue}>Mobile • On-the-road</div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Services CTA */}
      <section className="section">
        <div className="container">
          <div className={styles.ctaCard}>
            <div>
              <h2 className={styles.ctaTitle}>See our detailing packages</h2>
              <p className="muted">
                From quick maintenance to full interior/exterior resets.
              </p>
            </div>
            <Link href="/services" className={styles.primaryBtn}>
              Go to Services
            </Link>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section">
        <div className="container">
          <div className={styles.ctaCardAlt}>
            <div>
              <h2 className={styles.ctaTitle}>Ready to book?</h2>
              <p className="muted">
                Message us for a quote — we’ll reply fast.
              </p>
            </div>
            <Link href="/contact" className={styles.primaryBtn}>
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
