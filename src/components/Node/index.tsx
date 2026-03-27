import styles from "./index.module.css";

interface Props {
  node: string;
}

export function Node({ node: id }: Props) {
  return <div className={styles.node}>{id}</div>;
}
