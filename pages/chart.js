
import styles from "@/styles/Home.module.css";
import VerticalBar from "@/components/VerticalBar";
import HorizontalChart from "@/components/HorizontalChart";
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