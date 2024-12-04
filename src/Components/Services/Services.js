import styles from './Services.module.css';
import checkIcon from '../../assets/checkhighlights_v1.svg'
import plus from '../../assets/chromeye_assignment_plus_v1.svg'
import minus from '../../assets/chromeye_assignment_minus_v1.svg'
import Button from '../atoms/Button/Button';

export default function Services({pagesInfo}) {
    return (
        <section className="services">
            <div className="container">
                <div className={styles.wrapper}>
                    <div className="topText">
                        <h2>{pagesInfo.title}</h2>
                        <p>{pagesInfo.description}</p>
                    </div>
                    <ul className={styles.items}>
                        {pagesInfo.items.map((item, index) => (
                            <li key={index}>
                                <img className={styles.check} src={checkIcon} alt="check"/>
                                <h4>{item.title}</h4>
                                <img className={styles.sign} src={index >= (pagesInfo.items.length / 2) ? plus : minus} alt=""/>
                                <small>{item.description}</small>
                            </li>
                        ))}
                    </ul>
                    <Button addClasses={[styles.inTouch]} variation='blue'>{pagesInfo.buttonLabel}</Button>
                </div>
            </div>
        </section>
    )
}