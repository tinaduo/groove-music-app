import styles from "@/styles/onboarding4.module.css";
import dynamic from 'next/dynamic';
import { useState } from "react";
import Link from "next/link";

const Lottie = dynamic(() => import('react-lottie'), { ssr: false });

const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: require('/public/characters/happy.json'),
};

export default function Onboarding() {
    const [isHovered, setIsHovered] = useState(false);
    const [isHovered2, setIsHovered2] = useState(false);

    return (
        <main className={styles.container}>
            <div className={styles.secondContainer}>
                <div className={styles.logo}>
                    <img src="/images/onboardingLogo.png" />
                </div>
                <div className={styles.logo2}>
                    <img src="/images/onboardingLogo.png" />
                </div>
                <div className={styles.title}>
                    <h1>LET'S GROOVE!</h1>
                </div>
                <div className={styles.blackBG}>
                    <h2>Get Started!</h2>
                    <p className={styles.text}>
                        You're all set to embark on an epic GROOVE journey! Unleash your inner music critic, curate playlists that tell your story, and add your voice to Groove’s grand symphony of shared sounds and reviews. Ready to take the stage?
                    </p>
                    <div className={styles.circle}>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <div className={styles.navigation}>
                        <Link href="/Explore" className={styles.link}>
                            <div className={styles.next}>
                                <span>Let's Go!</span>
                                <div
                                    onMouseEnter={() => setIsHovered(true)}
                                    onMouseLeave={() => setIsHovered(false)}>
                                    <img src={isHovered ? '/images/nextArrowHover.svg' : '/images/nextArrow.svg'} />
                                </div>
                            </div>
                        </Link>
                        <Link href="/onboarding2" className={styles.link}>
                            <div className={styles.back}>
                                <div
                                    onMouseEnter={() => setIsHovered2(true)}
                                    onMouseLeave={() => setIsHovered2(false)}
                                >
                                    <img src={isHovered2 ? '/images/backArrowHover.svg' : '/images/backArrow.svg'} />
                                </div>
                                <span>back</span>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    );
}