import { Body } from "../Body";
import { NavigationBar } from "../NavigationBar";
import styles from "./index.module.css";

export function App() {
  return (
    <div className={styles.app}>
      <NavigationBar />
      <Body />
    </div>
  );
}
