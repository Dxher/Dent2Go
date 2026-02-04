import Link from "next/link";
import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        {/* Left: Logo + copyright */}
        <div className={styles.brand}>
          {/* Replace /logo.png with your real logo in /public */}
          <img
            src="/logo.png"
            alt="Company logo"
            className={styles.logo}
          />

          <div className={styles.copy}>
            © <span>{new Date().getFullYear()}</span> Your Detailing Company
          </div>
        </div>

        {/* Middle: Links */}
        <div className={styles.col}>
          <div className={styles.colTitle}>LINKS</div>
          <div className={styles.rule} />

          <nav className={styles.links}>
            <Link href="/" className={styles.link}>Home</Link>
            <Link href="/#about" className={styles.link}>About</Link>
            <Link href="/services" className={styles.link}>Services</Link>
            <Link href="/gallery" className={styles.link}>Gallery</Link>
            <Link href="/contact" className={styles.link}>Contact Us</Link>
          </nav>
        </div>

        {/* Right: Contact Us */}
        <div className={styles.col}>
          <div className={styles.colTitle}>CONTACT US</div>
          <div className={styles.rule} />

          <div className={styles.contactGrid}>
            <div className={styles.label}>ADDRESS:</div>
            <div className={styles.value}>123 Placeholder St, Your City, ON, A1A 1A1</div>

            <div className={styles.label}>HOURS:</div>
            <div className={styles.value}>
              Weekdays: 9:00–6:00<br />
              Weekends: 10:00–4:00
            </div>

            <div className={styles.label}>PHONE:</div>
            <div className={styles.value}>(613) 000-0000</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
