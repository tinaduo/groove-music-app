import Image from 'next/image';
import styles from './NavBar.module.css';
import Link from 'next/link';
import { useRouter } from 'next/router'; 
export default function NavBar() {
  const router = useRouter();  

  return (
    <header className={styles.header}>
      <ul className={styles.list}>
        <li>
          <Link href="/Explore">
            <div className={router.pathname === "/Explore" ? `${styles.link} ${styles.active}` : styles.link}>
              <Image src="/images/homeButton.svg" alt="Home" width={30} height={30} />
              <span>Home</span>
            </div>
          </Link>
        </li>
        <li>
          <Link href="/Quiz">
            <div className={router.pathname === "/Quiz" ? `${styles.link} ${styles.active}` : styles.link}>
              <Image src="/images/quiz.svg" alt="Quiz" width={30} height={30} />
              <span>Tunebox</span>
            </div>
          </Link>
        </li>
        <li>
          <Link href="/newreview">
            <div className={router.pathname === "/newreview" ? `${styles.link} ${styles.active}` : styles.link}>
              <Image src="/images/newPost.svg" alt="New Post" width={30} height={30} />
              <span>New Post</span>
            </div>
          </Link>
        </li>
        <li>
          <Link href="/Activity">
            <div className={router.pathname === "/Activity" ? `${styles.link} ${styles.active}` : styles.link}>
              <Image src="/images/activity.svg" alt="Activity" width={30} height={30} />
              <span>Activity</span>
            </div>
          </Link>
        </li>
        <li>
          <Link href="/profile">
            <div className={router.pathname === "/profile" ? `${styles.link} ${styles.active}` : styles.link}>
              <Image src="/images/profile.svg" alt="Profile" width={30} height={30} />
              <span>Profile</span>
            </div>
          </Link>
        </li>
      </ul>
    </header>
  );
}
