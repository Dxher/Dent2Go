"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import styles from "./navbar.module.css";

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();

  const goToAbout = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // If already on home page, smooth scroll
    if (pathname === "/") {
      e.preventDefault();
      document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
      return;
    }
    // If not on home page, navigate to /#about
    // (Home page will scroll on load automatically via anchor)
    e.preventDefault();
    router.push("/#about");
  };

  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        {/* Left: Logo */}
        <Link href="/" className={styles.logoWrap} aria-label="Go to home">
          {/* Replace src with your logo file in /public/logo.png */}
          <img className={styles.logo} src="/logo.png" alt="Company logo" />
        </Link>

        {/* Right: Nav links */}
        <nav className={styles.nav}>
          <a href="/#about" onClick={goToAbout} className={styles.link}>
            About
          </a>
          <Link href="/services" className={styles.link}>
            Services
          </Link>
          <Link href="/gallery" className={styles.link}>
            Gallery
          </Link>
          <Link href="/contact" className={`${styles.link} ${styles.cta}`}>
            Contact Us
          </Link>
        </nav>
      </div>
    </header>
  );
}
