import Layout from '../components/layout/layout';
import Progress from '../components/progress/progress';

import styles from '../styles/Quiz.module.css';

export default function Quiz() {
    return (
        <Layout title="Quiz Time">
            <Progress
                current={3}
                totalSteps={10}
            />

            <p>Quiz Page.</p>
        </Layout>
    );
}
