import { useState } from 'react';
import styles from './App.css';

export default function App() {
  return (
    <>
      <main>
        <section className={styles.heroSection}>
          <div className={styles.container}>
            <header>
              <nav>
                <a href="/#">logo</a>
                <ul>
                  <li>
                    <a href="/#">Product</a>
                  </li>
                  <li>
                    <a href="/#">Use cases</a>
                  </li>
                  <li>
                    <a href="/#">Pricing</a>
                  </li>
                  <li>
                    <a href="/#">Blog</a>
                  </li>
                  <li>
                    <a href="/#">FAQ & Support</a>
                  </li>
                </ul>
                <div>
                  <a href="/#">Sign in</a>
                  <a href="/#">Sign up</a>
                </div>
              </nav>
            </header>
            Section1
          </div>
        </section>
        <section>Section2</section>
      </main>
      <footer>footer</footer>
    </>
  );
}
