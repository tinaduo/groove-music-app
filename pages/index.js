import styles from "@/styles/Home.module.css";
import NavBar from "@/components/NavigationBar";
import HeaderArea from "@/components/HeaderArea";

export default function Home() {
  return (
    <>
       <HeaderArea title="Home"/>
      <main className={`${styles.main}`}>
        <div className={styles.stuff}>
          <h1>Groove</h1>

        </div>
      </main>
      <div className={styles.navBar}><NavBar/></div>
    </>
  );
}
