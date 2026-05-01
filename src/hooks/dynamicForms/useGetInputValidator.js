import INPUT_TYPES from "constants/INPUT_TYPES"
import useValidator from "hooks/useValidator"
import { useCallback } from "react"

function useGetInputValidator() {
    const { checkbox, text, number } = useValidator()
    const getInputValidator = useCallback((inputData) => {
        const cfg = inputData?.inputConfig ?? inputData?.config
        const type = inputData?.type

        if (type === INPUT_TYPES.CHECKBOX) {
            return checkbox(cfg ?? {})
        }
        if (type === INPUT_TYPES.TEXT) {
            return text({ required: { value: false } })
        }
        if (type === INPUT_TYPES.NUMBER) {
            const decimalScale = cfg?.decimalScale ?? 0
            const numConfig = {
                required: { value: false },
                integer: { value: decimalScale === 0 },
            }
            const rawMin = cfg?.min
            if (rawMin !== undefined && rawMin !== null && rawMin !== "") {
                const n = Number(rawMin)
                if (!Number.isNaN(n)) {
                    numConfig.min = { value: n }
                }
            }
            const rawMax = cfg?.max
            if (rawMax !== undefined && rawMax !== null && rawMax !== "") {
                const n = Number(rawMax)
                if (!Number.isNaN(n)) {
                    numConfig.max = { value: n }
                }
            }
            if (cfg?.allowNegative === false) {
                const prev = numConfig.min?.value
                numConfig.min = {
                    value: prev !== undefined ? Math.max(0, prev) : 0,
                }
            }
            return number(numConfig)
        }
        return text({ required: { value: false } })
    }, [checkbox, text, number])

    return getInputValidator
}

export default useGetInputValidator