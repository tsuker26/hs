import React from 'react';
import styles from "./HotelsBlock.module.scss";

const Carousel = () => {
    return (
        <div className={styles.carousel}>
            <div className={styles.carousel_inner}>
                <div className={styles.carousel_item}>
                    <img src="/carousel/1.png" alt=""/>
                </div>
                <div className={styles.carousel_item}>
                    <img src="/carousel/2.png" alt=""/>
                </div>
                <div className={styles.carousel_item}>
                    <img src="/carousel/3.png" alt=""/>
                </div>
                <div className={styles.carousel_item}>
                    <img src="/carousel/3.png" alt=""/>
                </div>
                <div className={styles.carousel_item}>
                    <img src="/carousel/3.png" alt=""/>
                </div>
            </div>
        </div>
    );
};

export default Carousel;