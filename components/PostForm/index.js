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
                    count={5} 
                    size={35} 
                    color2={'#ffd700'} />
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
                    <h3 className={styles.headers}>Re-listen</h3>
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