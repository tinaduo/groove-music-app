import React, { useState } from 'react';
import styles from './PostForm.module.css';
import StarRating from '@/components/StarRating';
import Snackbar from "@/components/Snackbar";

export function PostForm() {
    const [title, setTitle] = useState('');
    const [review, setReview] = useState('');
    const [date, setDate] = useState('');
    const [showSnackbar, setShowSnackbar] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleReviewChange = (event) => {
        setReview(event.target.value);
    };

    const handleDateChange = (event) => {
        setDate(event.target.value);
    };

    const displaySnackbar = (message) => { 
        setSnackbarMessage(message);
        setShowSnackbar(true);
        setTimeout(() => {
            setShowSnackbar(false);
            setSnackbarMessage('');
        }, 3000);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Title:', title);
        console.log('Review:', review);
        console.log('Date:', date);
        setTitle('');
        setReview('');
        setDate('');
        displaySnackbar('Review posted successfully!');
    };

    return (
        <div>
            <form className={styles.postForm} onSubmit={handleSubmit}>
                <div className={styles.container}>
                    <label
                        className={styles.headers}
                        htmlFor="rating">Rating</label>
                    <br />
                    <StarRating/>
                    <label
                        className={styles.headers}
                        htmlFor="title">Title</label>
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
                            htmlFor="date">
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
                                htmlFor="relisten"
                            >
                                Mark as Re-listen
                            </label>
                        </div>
                    </div>
                </div>
                <button
                    className={styles.submitButton}
                    type="submit">
                    Post Review
                </button>
            </form>
            {showSnackbar && <Snackbar message={snackbarMessage} onClose={() => setShowSnackbar(false)} />}
        </div>
    );
}
