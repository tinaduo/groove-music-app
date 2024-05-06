import Image from 'next/image';
import styles from './NavBar.module.css';
import Link from 'next/link';

export default function NavBar() {
  return (
    <header className={styles.header}>
      <ul className={styles.list}>
        <li>
          <Link href="/Explore" className={styles.text}>
            <div className={styles.link}>
              <Image src="/images/homeButton.svg" alt="Home" width={30} height={30} />
              <span>Home</span>
            </div>
          </Link>
        </li>
        <li>
          <Link href="/Quiz" className={styles.text}>
            <div className={styles.link}>
              <Image src="/images/quiz.svg" alt="Quiz" width={30} height={30} />
              <span>Tunebox</span>
            </div>
          </Link>
        </li>
        <li>
          <Link href="/newreview" className={styles.text}>
            <div className={styles.link}>
              <Image src="/images/newPost.svg" alt="New Post" width={30} height={30} />
              <span>New Post</span>
            </div>
          </Link>
        </li>
        <li>
          <Link href="" className={styles.text}>
            <div className={styles.link}>
              <Image src="/images/activity.svg" alt="Activity" width={30} height={30} />
              <span>Activity</span>
            </div>
          </Link>
        </li>
        <li>
          <Link href="/stats" className={styles.text}>
            <div className={styles.link}>
              <Image src="/images/profile.svg" alt="Profile" width={30} height={30} />
              <span>Profile</span>
            </div>
          </Link>
        </li>
      </ul>
    </header>
  );
}
