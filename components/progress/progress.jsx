import styles from './progress.module.css';

export default function Progress({
    current = 0,
    onChange = () => {},
    totalSteps = 1
}) {
    const steps = new Array(totalSteps).fill('');

    return (
        <nav className={styles.progress}>
            <button
                className={styles.pagerBack}
                disabled={current === 0}
                onClick={onChange}
                value="back"
            >
                <span className={styles.pagerLabel}>Back</span>
            </button>

            {steps.map((step, i) => (
                <button
                    className={current === i ? styles.stepActive : styles.step}
                    key={`step_${i}`}
                    onClick={onChange}
                    value={i}
                >
                    <span className="visuallyhidden">Question {i + 1}</span>
                </button>
            ))}

            <button
                className={styles.pageNext}
                disabled={current === totalSteps - 1}
                onClick={onChange}
                value="next"
            >
                <span className={styles.pagerLabel}>Next</span>
            </button>
        </nav>
    );
}
