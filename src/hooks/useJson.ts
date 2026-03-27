import { useFile } from "./useFile";

export function useJson<Type>(path: string) {
  const file = useFile(path);
  const decoder = new TextDecoder();
  const text = decoder.decode(file);
  const json = JSON.parse(text);

  return json as Type;
}
