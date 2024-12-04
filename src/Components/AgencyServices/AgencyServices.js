import styles from './AgencyServices.module.css';
import { useState } from 'react';
import arrowDown from '../../assets/chromeye_assignment_arrowdown_v1.svg';

export default function AgencyServices({ pageInfo }) {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleClick = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
    };

    const displayedImage =
        activeIndex === null
            ? pageInfo.items[0]?.image
            : pageInfo.items[activeIndex]?.image;

    return (
        <section className={styles.agencyServices}>
            <div className="container">
                <div className={styles.wrapper}>
                    <h2>{pageInfo.title}</h2>
                    <div className={styles.contentWrapper}>
                        <ul className={styles.itemsMenu}>
                            {pageInfo.items.map((item, index) => (
                                <li
                                    key={index}
                                    className={`${styles.menuItem} ${
                                        activeIndex === index ? styles.active : ''
                                    }`}
                                    onClick={() => handleClick(index)}
                                >
                                    <div
                                        className={styles.summary}
                                    >
                                        {item.title}
                                        <img
                                            src={arrowDown}
                                            alt="Arrow icon"
                                            className={`${styles.arrowIcon} ${
                                                activeIndex === index ? styles.rotated : ''
                                            }`}
                                        />
                                    </div>
                                    <div
                                        className={`${styles.description} ${
                                            activeIndex === index
                                                ? styles.fadeIn
                                                : styles.fadeOut
                                        }`}
                                    >
                                        <p>{item.description}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                        <div className={styles.imgContainer}>
                            <img src={displayedImage} alt="Service" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
