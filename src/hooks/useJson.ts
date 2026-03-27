import { produce } from "immer";
import { useCallback, useMemo, useState } from "react";
import { useFile } from "./useFile";

const encoder = new TextEncoder();
const decoder = new TextDecoder();

export function useJson<Type>(path: string) {
  const [file, writeFile] = useFile(path);
  const text = useMemo(() => decoder.decode(file), [file]);
  const [state, setState] = useState<Type>(JSON.parse(text));

  const draft = useCallback((mutator: (state: Type) => void) => {
    setState(produce(state, mutator));
  }, []);

  const write = useCallback(() => {
    const string = JSON.stringify(state, null, 2);
    const encoded = encoder.encode(string);

    writeFile(encoded);
  }, []);

  return [state, draft, write] as const;
}
