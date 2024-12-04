import styles from './GetStarted.module.css'
import Button from '../atoms/Button/Button'

export default function GetStarted() {
    const headerText = 'Ready to Get started';
    const parText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique sed scelerisque arcu scelerisque ultricies habitant ac semper lorem.';
    const buttonText = 'Request a call'
    return (
        <section className={styles.getStarted}>
            <div className="container">
                <div className={styles.contentWrapper}>
                    <div className={styles.wrapper}>
                        <h2>{headerText}</h2>
                        <p>{parText}</p>
                        <Button variation="gray">{buttonText}</Button>
                    </div>
                </div>
            </div>
        </section>
    )
}