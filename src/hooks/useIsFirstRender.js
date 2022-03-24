import { useRef } from 'react'


/**
 * Simple React hook that return a boolean, true at the mount time, then always false
 * @return {boolean}
 */
export default function useIsFirstRender() {
    const isFirst = useRef(true)
    if (isFirst.current) {
        isFirst.current = false
        return true
    }
    return isFirst.current
}
