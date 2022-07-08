import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Docch.pl</title>
        <meta name="description" content="Ta podstrona to swego rodzaju generator miniaturek." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Witaj na <a href="https://docchi.pl/">OG-Docchi!</a>
        </h1>

        <p className={styles.description}>
          Ta podstrona to swego rodzaju generator miniaturek.
        </p>

        <div className={styles.grid}>
          <a href="https://docchi.pl/" className={styles.card}>
            <h2>Główna strona &rarr;</h2>
            <p>Znajdziesz tam wszystkie anime.</p>
          </a>

          <a href="https://twitter.com/docchifun" className={styles.card}>
            <h2>Twitter &rarr;</h2>
            <p>Ogłaszamy tam nowe odcinki.</p>
          </a>

          <a
            href="https://www.cda.pl/docchi"
            className={styles.card}
          >
            <h2>CDA &rarr;</h2>
            <p>Serie które tłumaczyliśmy.</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
