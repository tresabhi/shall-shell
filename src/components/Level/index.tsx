import { useJson } from "../../hooks/useJson";
import type { Level } from "../../types/Lavel";
import { Node } from "../Node";
import styles from "./index.module.css";

interface Props {
  level: string;
}

export function Level({ level: id }: Props) {
  const level = useJson<Level>(`levels/${id}.json`);

  return (
    <div className={styles.level}>
      <div className={styles.label}>
        <span className={styles.text}>{level.label}</span>
      </div>

      {level.nodes.map((node) => (
        <Node key={node} node={node} />
      ))}
    </div>
  );
}
