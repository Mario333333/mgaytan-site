import styles from "./page.module.css";
import { pageHome } from "./utils/homePagesConstants";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.information}>
        <h1>{pageHome.title}</h1>
        <h2>{pageHome.aim}</h2>
        <p>{pageHome.resume}</p>
      </div>
    </main>
  );
}
