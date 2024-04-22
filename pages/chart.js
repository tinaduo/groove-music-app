
import styles from "@/styles/Home.module.css";
import PieChart from "@/components/PieChart";


export default function Chart() {
  return (
    <>
      <main className={styles.main} >
        <PieChart/>
      </main>
    </>
  );
}