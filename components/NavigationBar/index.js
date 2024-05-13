import Image from 'next/image';
import styles from './NavBar.module.css';
import Link from 'next/link';

const CLIENT_ID = "22ed42382ae44ed69f8d3a6da1c6e077"
const REDIRECT_URI = "https://groove-music-app.vercel.app/newreview"
const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
const RESPONSE_TYPE = "token"

export default function NavBar() {

      useEffect(() => {
        const storedToken = sessionStorage.getItem("spotifyToken");
        if (storedToken) {
            setToken(storedToken);
        } else {
            const hashParams = window.location.hash.substr(1).split("&").reduce(function (result, item) {
                const parts = item.split("=");
                result[parts[0]] = parts[1];
                return result;
            }, {});

            if (hashParams.access_token) {
                sessionStorage.setItem("spotifyToken", hashParams.access_token);
                setToken(hashParams.access_token);
            }
        }
    }, []);

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
        {!token ?
          <Link href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`} className={styles.text}>
            <div className={styles.link}>
              <Image src="/images/newPost.svg" alt="New Post" width={30} height={30} />
              <span>New Post</span>
            </div>
          </Link>
        </li>
        <li>
          <Link href="/Activity" className={styles.text}>
            <div className={styles.link}>
              <Image src="/images/activity.svg" alt="Activity" width={30} height={30} />
              <span>Activity</span>
            </div>
          </Link>
        </li>
        <li>
          <Link href="/profile" className={styles.text}>
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
