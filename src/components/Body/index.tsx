import { Levels } from "../Levels";
import { Properties } from "../Properties";
import styles from "./index.module.css";

export function Body() {
  return (
    <div className={styles.body}>
      <Properties />
      <Levels />
    </div>
  );
}
