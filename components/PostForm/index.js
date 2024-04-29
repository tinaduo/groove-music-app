import React, { useState } from 'react';
import styles from "./PostForm.module.css";
import ReactStars from 'react-stars'

export function PostForm() {
    const [title, setTitle] = useState('');
    const [review, setReview] = useState('');
    const [date, setDate] = useState('');

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleReviewChange = (event) => {
        setReview(event.target.value);
    };

    const handleDateChange = (event) => {
        setDate(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Title:', title);
        console.log('Review:', review);
        console.log('Date:', date);
        setTitle('');
        setReview('');
        setDate('');
    };

    return (
        <form className={styles.postForm} onSubmit={handleSubmit}>
            <div className={styles.container}>
                <label
                    className={styles.headers}
                    for="rating">Rating</label>
                <br />
                <ReactStars
                    className={styles.stars} 
                    count={5}
                    size={35}
                    color2={'#f6c65c'}
                    char={'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>'}/>
                <label
                    className={styles.headers}
                    for="title">Title</label>
                <br />
                <input
                    className={styles.titleTextbox}
                    type="text"
                    id="title"
                    value={title}
                    placeholder='review title'
                    onChange={handleTitleChange}
                    required />
                <br />
            </div>
            <div className={styles.textboxContainer}>
                <br />
                <textarea
                    className={styles.textarea}
                    id="review"
                    value={review}
                    onChange={handleReviewChange}
                    placeholder='write a review...'
                    rows="10"
                    cols="50"
                    maxLength="2500"
                    required />
                <br />
                <span
                    className={styles.subtitle}>
                    Maximum: {2500 - review.length}/2500
                </span>
            </div>
            <div className={styles.inputscontainer}>
                <div className={styles.dateContainer}>
                    <label
                        className={styles.headers}
                        for="date">
                        Listened on
                    </label>
                    <br />
                    <input
                        className={styles.datePicker}
                        type="date"
                        id="date"
                        value={date}
                        onChange={handleDateChange}
                        required />
                    <br />
                </div>
                <div className={styles.checkboxContainer}>
                    <h3 className={styles.headers}>Listen Again?</h3>
                    <div className={styles.inputcheckboxContainer}>
                        <input
                            className={styles.checkbox}
                            type="checkbox"
                            id="relisten"
                            name="relisten"
                        />
                        <label
                            className={styles.subtitleCheckbox}
                            for="relisten"
                        >
                            Mark as Re-listen
                        </label>
                    </div>
                </div>
            </div>
            <button
                className={styles.submitButton}
                type="submit">
                Submit Review
            </button>
        </form>
    );
}