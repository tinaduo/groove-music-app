import { useState } from 'react';
import styles from './StarRating.module.css';

const StarRating = () => {
    const [rating, setRating] = useState(0);

    const handleStarClick = (value) => {
        setRating(value);
    };

    return (
        <div className={styles.starRating}>
            {[1, 2, 3, 4, 5].map((value) => (
                <span
                    key={value}
                    className={value <= rating ? styles.selected : styles.star}
                    onClick={() => handleStarClick(value)}
                >
                    ★
                </span>
            ))}
        </div>
    );
};

export default StarRating;
