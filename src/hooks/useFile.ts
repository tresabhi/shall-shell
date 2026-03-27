import { readFile, writeFile } from "@tauri-apps/plugin-fs";
import { useAwait } from "./useAwait";
import { useRoot } from "./useRoot";

export function useFile(path: string) {
  const root = useRoot();
  const fullPath = `${root}/${path}`;
  const file = useAwait(() => readFile(fullPath), path);

  async function write(data: Uint8Array) {
    await writeFile(fullPath, data);
  }

  return [file, write] as const;
}
