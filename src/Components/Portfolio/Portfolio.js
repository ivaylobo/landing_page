import styles from './Portfolio.module.css'
import Button from '../atoms/Button/Button'

export default function Portfolio({pageInfo}) {
    return (
        <section className="portfolio">
            <div className="container">
                <div className={styles.wrapper}>
                    <div className="topText">
                        <h3>{pageInfo.title}</h3>
                        <p>{pageInfo.description}</p>
                    </div>
                    <ul className={styles.items}>
                        {pageInfo.items.map((item, index) => (
                            <li key={index} className={styles.itemWrapper}>
                                <div className={styles.details}>
                                    <h3>{item.title}</h3>
                                    <p>{item.description}</p>
                                    <Button variation='blue'>{item.buttonLabel}</Button>
                                </div>
                                <div className={styles.imgContainer}>
                                    <img src={item.image} alt=""/>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    )
}