import { readFile } from "@tauri-apps/plugin-fs";
import { useAwait } from "./useAwait";
import { useRoot } from "./useRoot";

export function useFile(path: string) {
  const root = useRoot();
  const file = useAwait(() => readFile(`${root}/${path}`), path);

  return file;
}
