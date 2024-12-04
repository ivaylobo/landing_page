import styles from './Button.module.css';

export default function Button({ children, variation, addClasses = [] }) {
    const baseClass = styles.button;
    const variationClass = variation === 'blue' ? styles.blue : styles.gray;

    // Обединяваме всички класове в един масив
    const allClasses = [baseClass, variationClass, ...addClasses];

    // Превръщаме масива в string с класове
    const classes = allClasses.join(' ');

    return (
        <button className={classes}>
            {children}
        </button>
    );
}