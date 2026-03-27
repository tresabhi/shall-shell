import { useJson } from "../../hooks/useJson";
import type { Level } from "../../types/Lavel";
import { Node } from "../Node";
import styles from "./index.module.css";

interface Props {
  level: string;
}

export function Level({ level: id }: Props) {
  const [level, draftLevel, writeLevel] = useJson<Level>(`levels/${id}.json`);

  return (
    <div className={styles.level}>
      <div className={styles.label}>
        <input
          className={styles.input}
          type="text"
          defaultValue={level.label}
          onBlur={(event) => {
            draftLevel((draft) => {
              draft.label = event.target.value;
            });

            writeLevel();
          }}
        />
      </div>

      {level.nodes.map((node) => (
        <Node key={node} node={node} />
      ))}
    </div>
  );
}
