import { useEffect } from "react"
import useIsFirstRender from "../../hooks/useIsFirstRender"



export default function useWithFirstMountEffect(fInitialRender, fNotInitialRender, deps) {
    const isFirst = useIsFirstRender()
    useEffect(() => {
        if (isFirst) return fInitialRender()
        else return fNotInitialRender()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, deps)
}
