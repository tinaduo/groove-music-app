import React from "react";
import styles from "./Cards.module.css";

export function albumSearch() {
    return (
        <div className="albumContainer">
            <div className="albumImage">
            <div className="textContainer">
                <h4>albumName</h4>
                <h5>artistName</h5>
            </div>
        </div>
    </div>
    );
};

export function AlbumContainerPost() {
    return (
        <div className={`${styles.albumContainer}`}>
            <div className={`${styles.albumImage}`}>
                <img 
                    className={`${styles.Image}`}
                        alt="imageContainer"
                        src=""
                    />
            </div>
            <div className={`${styles.textContainer}`}>
                    <h2 className={`${styles.h2}`}>Album Title</h2>
                <div className={`${styles.subtextContainer}`}>
                    <h5 className={`${styles.h5}`}>Music Type</h5>
                    <img 
                        className={`${styles.separtorSVG}`}
                        alt="separators"
                        src="/image/separator.svg"
                    />
                    <h5 className={`${styles.h5}`}>Music Year</h5>
            </div>
            <h5 className={`${styles.h5}`}>Artist Name</h5>
        </div>
        </div>
    );
};
