import INPUT_TYPES from "constants/INPUT_TYPES"

import { useCallback, } from "react"

function useGetDefaultValuesByInputType(allowPoints) {
    const getDefaultValuesByType = useCallback((type) => {
        switch (type) {
            case INPUT_TYPES.TEXT:
                return {
                    inputConfig: {
                        defaultValue: ''
                    },
                    metadata: null
                }
            case INPUT_TYPES.CHECKBOX:
                return {
                    inputConfig: {
                        defaultValue: false
                    },
                    metadata: allowPoints ? {
                        pointsToAdd: 0
                    } : null
                }
            case INPUT_TYPES.NUMBER:
                return {
                    inputConfig: {
                        defaultValue: 0,
                        min: 0,
                        max: 100,
                        decimalScale: 0,
                        allowNegative: true
                    },
                    metadata: allowPoints ? {
                        shouldAffectPoints: false
                    } : null
                }
            default:
                return {
                    inputConfig: null,
                    metadata: null
                }
        }
    }, [allowPoints])

    return getDefaultValuesByType
}

export default useGetDefaultValuesByInputType