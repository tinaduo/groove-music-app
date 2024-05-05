import styles from "@/styles/onboarding.module.css";
import dynamic from 'next/dynamic';
import { useState } from "react";
import Link from "next/link";


const Lottie = dynamic(() => import('react-lottie'), { ssr: false });

const defaultOptions = {
  autoplay: true,
  animationData: require('/public/characters/lofi.json'),
};

export default function Onboarding() {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <main className={styles.container}>
        <div className={styles.secondContainer}>
            <div className={styles.logo}>
                <img src="/images/onboardingLogo.png"/>
            </div>
            <div className={styles.logo2}>
                <img src="/images/onboardingLogo.png"/>
            </div>
            <div className={styles.screenshot}>
                <img src="/images/onboarding1.png"/>
            </div>
            <div className={styles.character}>
                <Lottie options={defaultOptions} height={280} width={280}/>
            </div>
            <div className={styles.blackBG}>
                <h2>What is Groove?</h2>
                <p className={styles.text}>
                    Welcome to Groove, where your music reviews create the beat! Dive into a world where each song, album, and playlist sparks a conversation. Share your unique take, discover new tunes, and groove to the rhythm of our music-loving community.
                </p>
                <div className={styles.circle}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <Link href="/onboarding2" className={styles.link}>
                    <div className={styles.next}>
                        <span>next</span>
                        <div 
                        className={styles.arrow}
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}>
                            <img src= {isHovered ? '/images/nextArrowHover.svg' : '/images/nextArrow.svg'}/>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    </main>
    );
}