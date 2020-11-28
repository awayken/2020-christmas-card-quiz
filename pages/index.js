import Link from 'next/link';

import Layout from '../components/layout/layout';

import styles from '../styles/Home.module.css';

export default function Home() {
    return (
        <Layout>
            <section className={styles.container}>
                <h1 className="introduction__heading">
                    <span className="visuallyhidden">
                        Rausch Family: 2020 Christmas Quiz
                    </span>
                </h1>

                <p>
                    <strong>Pop quiz (again), Hot Shot!</strong>
                </p>

                <p>Introduction paragraph.</p>

                <Link href="/quiz">
                    <a>Take the Quiz</a>
                </Link>
            </section>
        </Layout>
    );
}
