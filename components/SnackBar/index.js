import React, { useEffect } from 'react';
import styles from './Snackbar.module.css';

const Snackbar = ({ message, onClose }) => {
    useEffect(() => {
        const timeout = setTimeout(() => {
        onClose();
        }, 3000);
        
        return () => clearTimeout(timeout);
    }, [onClose]);

    return (
        <div className={styles.snackbar}>
        {message}
        </div>
    );
    };

export default Snackbar;
