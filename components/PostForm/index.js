import React, { useState } from 'react';
import styles from "./PostForm.module.css";
import StarRating from '../StarRating';


export function PostForm() {
    const [title, setTitle] = useState('');
    const [review, setReview] = useState('');
    const [date, setDate] = useState('');
    const [isFormValid, setIsFormValid] = useState(false);

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
        validateForm();
    };

    const handleReviewChange = (event) => {
        setReview(event.target.value);
        validateForm();
    };

    const handleDateChange = (event) => {
        setDate(event.target.value);
        validateForm();
    };

    const validateForm = () => {
        if (title.trim() !== '' && review.trim() !== '' && date !== '') {
            setIsFormValid(true);
        } else {
            setIsFormValid(false);
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Title:', title);
        console.log('Review:', review);
        console.log('Date:', date);
        setTitle('');
        setReview('');
        setDate('');
        goToExplorePage();
    };

    const goToExplorePage = () => {
        if (isFormValid) {
            console.log("Navigating to Explore page...");
            window.location.href = '/Explore';
        } else {
            console.log("Form is not valid. Cannot navigate.");
        }
    };

    return (
        <form className={styles.postForm} onSubmit={handleSubmit}>
            <div className={styles.container}>
                <label
                    className={styles.headers}
                    for="rating">Rating</label>
                <br />
                <StarRating/>
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
                onClick={goToExplorePage}
                disabled={!isFormValid}>
                Post Review
            </button>
        </form>
    );
}