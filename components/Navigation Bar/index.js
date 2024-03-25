import styles from './NavBar.module.css';
import Image from 'next/image';

export default function NavBar() {
    return(
        <header className={styles.header}>
            <ul className={styles.list}>
                <li>
                    <Image src="/images/homeButton.svg" width={30} height={30}/>
                    <p>Home</p>
                </li>
                <li>
                    <Image src="/images/quiz.svg" width={30} height={30}/>
                    <p>Quiz</p>
                </li>
                <li>
                    <Image src="/images/newPost.svg" width={30} height={30}/>
                    <p>New Post</p>
                </li>
                <li>
                    <Image src="/images/activity.svg" width={30} height={30}/>
                    <p>Activity</p>
                </li>
                <li>
                    <Image src="/images/profile.svg" width={30} height={30}/>
                    <p>Profile</p>
                </li>
            </ul>
        </header>
    )
}