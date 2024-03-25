import styles from './NavBar.module.css';

export default function NavBar() {
    return(
        <header className={styles.header}>
            <ul className={styles.list}>
                <li>
                    <Link></Link>
                    <Image src="/images/homeButton.svg" wdith={30} height={30}></Image>
                </li>
                <li>
                    <Link></Link>
                    <Image src="/images/quiz.svg" wdith={30} height={30}></Image>
                </li>
                <li>
                    <Link></Link>
                    <Image src="/images/newPost.svg" wdith={30} height={30}></Image>
                </li>
            </ul>
        </header>
    )
}