import styles from './Footer.module.css';
import chromeyelogo from '../../assets/chromeye_logo.svg';
import React from 'react';
import facebook from '../../assets/facebook.svg';
import linkedin from '../../assets/linkedin.svg';
import twitter from '../../assets/twitter.svg';
import Button from '../atoms/Button/Button';

export default function Footer({compData, footerData}) {
    const btnText = 'Request a call';

    const midIndex = Math.ceil(footerData.length / 2);
    const firstHalf = footerData.slice(0, midIndex);
    const secondHalf = footerData.slice(midIndex);

    const thirdHalf = Object.entries(compData).filter(([key, value]) => {
        return key !== 'logo' && key !== 'intro' && key !== 'social_media';
    });

    const socialMediaIcons = {
        facebook: facebook,
        linkedin: linkedin,
        twitter: twitter,
    };

    return (
        <footer className={styles.footer}>
            <div className='container'>
                <div className={styles.topRow}>
                    <div className={styles.logoContainer}>
                        <img src={chromeyelogo} alt='logo'/>
                    </div>
                    <Button variation="gray">{btnText}</Button>
                </div>

                <div className={styles.bottomRow}>
                    <div className={styles.column}>
                        {firstHalf.map((item) => (
                            <div key={item.order}>
                                <a href={item.url}>{item.name}</a>
                                {item.name === 'Information' && <small>{compData.intro}</small>}
                            </div>
                        ))}
                    </div>
                    <div className={styles.column}>
                        {secondHalf.map((item) => (
                            <div key={item.order}>
                                <a href={item.url}>{item.name}</a>
                            </div>
                        ))}
                    </div>
                    <div className={styles.rightDetails}>
                        <div>
                            <span>Follow us:</span>
                            <div className={styles.socialMediaIcons}>
                                {Object.entries(compData.social_media).map(([key, href]) => (
                                    socialMediaIcons[key] ? (
                                        <a
                                            key={key}
                                            href={href}
                                            target='_blank'
                                            rel='noopener noreferrer'
                                        >
                                            <img src={socialMediaIcons[key]} alt={`${key} icon`} />
                                        </a>
                                    ) : null
                                ))}
                            </div>
                        </div>
                        <div>
                            <span>Contact:</span>
                            {thirdHalf.map(([key, value]) => (
                                typeof value === 'string' ? (
                                    <div key={key}>{value}</div>
                                ) : null
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
