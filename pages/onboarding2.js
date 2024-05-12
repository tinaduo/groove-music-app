import styles from "@/styles/onboarding2.module.css";
import dynamic from 'next/dynamic';
import { useState } from "react";
import Link from "next/link";
import useToken from "./useToken";

const Lottie = dynamic(() => import('react-lottie'), { ssr: false });

const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: require('/public/characters/throwback.json'),
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
                <div className={styles.screenshot1}>
                    <img src="/images/onboarding2a.png" />
                </div>
                <div className={styles.screenshot2}>
                    <img src="/images/onboarding2b.png" />
                </div>
                <div className={styles.borderTest}>
                    <div className={styles.blackBG}>
                        <h2>Find your Groove with Tunebox</h2>
                        <p className={styles.text}>
                            Tunebox is your musical compass, guiding you to the perfect playlist that resonates with your current mood. Personalized playlists that hit all the right notes.
                        </p>
                        <div className={styles.circle}>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                        <div className={styles.navigation}>
                            <Link href="/onboarding3" className={styles.link}>
                                <div className={styles.next}>
                                    <span>next</span>
                                    <div
                                        onMouseEnter={() => setIsHovered(true)}
                                        onMouseLeave={() => setIsHovered(false)}>
                                        <img src={isHovered ? '/images/nextArrowHover.svg' : '/images/nextArrow.svg'} />
                                    </div>
                                </div>
                            </Link>
                            <Link href="/onboarding" className={styles.link}>
                                <div className={styles.back}>
                                    <div
                                        onMouseEnter={() => setIsHovered2(true)}
                                        onMouseLeave={() => setIsHovered2(false)}>
                                        <img src={isHovered2 ? '/images/backArrowHover.svg' : '/images/backArrow.svg'} />
                                    </div>
                                    <span>back</span>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className={styles.character}>
                            <Lottie options={defaultOptions} height={280} width={280} />
                    </div>
                </div>
            </div>
        </main>
    );
}