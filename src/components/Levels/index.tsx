import { useJson } from "../../hooks/useJson";
import type { Levels } from "../../types/Levels";
import { Level } from "../Level";
import styles from "./index.module.css";

export function Levels() {
  const [levels] = useJson<Levels>("levels.json");

  return (
    <div className={styles.levels}>
      {levels.map((level) => (
        <Level key={level} level={level} />
      ))}
    </div>
  );
}
