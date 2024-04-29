import React from 'react';
import styles from '/styles/Quiz.module.css';;
import NavBar from '@/components/NavigationBar';

export default function Main() {

    return (
        <>
            <main className={styles.parentContainer}>
                <header className={styles.header}>
                    <div className={styles.logo}>
                    </div>
                </header>
            </main>
            <div className={styles.navBar}><NavBar /></div>
        </>
    );
}
