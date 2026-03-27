import { produce } from "immer";
import { useCallback, useMemo, useState } from "react";
import { useFile } from "./useFile";

const encoder = new TextEncoder();
const decoder = new TextDecoder();

export function useJson<Type>(path: string) {
  const [file, writeFile] = useFile(path);
  const text = useMemo(() => decoder.decode(file), [file]);
  const [state, setState] = useState<Type>(JSON.parse(text));

  const draft = useCallback(
    (mutator: (state: Type) => void) => {
      // TODO: track diff and only return newState if there are changes
      const newState = produce(state, mutator);

      setState(newState);

      return newState;
    },
    [state],
  );

  const write = useCallback(
    (_state = state) => {
      const string = JSON.stringify(_state, null, 2);
      const encoded = encoder.encode(string);

      // TODO: write only if newState is different by reference
      writeFile(encoded);
    },
    [state],
  );

  return [state, draft, write] as const;
}
