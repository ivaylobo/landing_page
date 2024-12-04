import styles from './Hero.module.css';
import heroImage from '../../assets/chromeye_assignment_heroimg_v1.png';
import Button from '../atoms/Button/Button';

export default function Hero ({pagesInfo}) {
    return (
        <section className={styles.bgContainer}>
            <div className='container'>
                <div className={styles.wrapper}>
                    <div className={styles.textContainer}>
                        <h2>{pagesInfo.title}</h2>
                        <p>{pagesInfo.description}</p>
                        <Button variation='blue'>{pagesInfo.buttonLabel}</Button>
                    </div>
                    <div className={styles.imageContainer}>
                        <img src={heroImage} alt="your website"/>
                    </div>
                </div>
            </div>
        </section>
    )
}