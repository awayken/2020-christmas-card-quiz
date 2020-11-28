import Head from 'next/head';

import styles from './layout.module.css';

export default function Layout({ children, title }) {
    return (
        <>
            <Head>
                <title>{`${
                    title ? `${title} - ` : ''
                }2020 Rausch Quiz`}</title>

                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                {children}
            </main>

            <footer className={styles.footer}>
                <a
                    href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Powered by Next.js
                </a>
            </footer>
        </>
    );
}
