import styles from './NavBar.module.css';
import Image from 'next/image';
import {Link} from 'react-router-dom';

export default function NavBar() {
    return(
        <header className={styles.header}>
            <ul className={styles.list}>
                <li>
                    <Link to='@/pages/Home.js'>
                    <Image src="/images/homeButton.svg" width={30} height={30}/>
                    <p>Home</p>
                    </Link>
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