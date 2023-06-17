import _ from "lodash"
import { useCallback, useMemo } from "react"

function useGetPoints() {

    const getPoints = useCallback((classSessionStudent) => {
        let count = 0
        if (!_.isEmpty(classSessionStudent?.metadata)) {
            _.forEach(classSessionStudent?.metadata, (value) => {
                if (value === true) {
                    count++
                }
            }
            )
        }
        return count
    }, [])

    return { getPoints }
}

export default useGetPoints