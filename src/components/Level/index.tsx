import { useJson } from "../../hooks/useJson";
import type { Level } from "../../types/Lavel";

interface Props {
  level: string;
}

export function Level({ level: id }: Props) {
  const level = useJson<Level>(`levels/${id}.json`);

  return (
    <div>
      <div>{level.label}</div>
    </div>
  );
}
