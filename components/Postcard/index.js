import styles from './Postcard.module.css';
import React from 'react';

const Postcard = ({ albumCover, albumName, artistName, reviewTitle, review, user, userProfile, likes, stars, bgColor }) => {

  return(
    <>
      <div className={styles.container} style={{backgroundColor: bgColor }}>
        <div className={styles.albumCoverBG}>
          <img src={albumCover} className={styles.albumCover}/>
          <div className={styles.albumInfo}>
            <h3 className={styles.albumName}>{albumName}</h3>
            <p>{artistName}</p>
          </div>
        </div>
        <div className={styles.stuff}>
          <div className={styles.reviewContainer}>
            <p className={styles.reviewTitle}>{reviewTitle}</p>
            <img src={stars} className={styles.stars}/>
            <p className={styles.review}>{review}</p>
            <p className={styles.read}>Read more...</p>
          </div>
          <div className={styles.actions}> 
            <div className={styles.user}>
              <img src={userProfile} className={styles.userProfile}/>
              <span>{user}</span>
            </div>
            <div className={styles.likesReplies}>
              <span>{likes}</span>
              <img className={styles.heart} src="/images/heart.svg" width={21} height={17}/>
              <img src="/images/comment.svg" width={21} height={18}/> 
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Postcard;