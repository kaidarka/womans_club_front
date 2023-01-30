import {useEffect} from "react";

// eslint-disable-next-line react-hooks/exhaustive-deps
export const useMountEffect = (func: () => void) => useEffect(func, [])
