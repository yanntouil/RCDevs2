import { useEffect } from "react";
import useIsFirstRender from "../../hooks/useIsFirstRender";

export default function useSkipMountEffect(f, deps) {
    const isFirst = useIsFirstRender()
    useEffect(() => {
        if (!isFirst) return f()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, deps)
}

