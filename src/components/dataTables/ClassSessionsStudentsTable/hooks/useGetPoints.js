import INPUT_TYPES from "constants/INPUT_TYPES"
import _ from "lodash"
import { useCallback } from "react"

function useGetPoints(course) {

    const getPoints = useCallback((classSessionStudent) => {
        if (_.isEmpty(course)) return 0
        let count = 0
        if (classSessionStudent?.isPresent) {
            const pointsPerAttendance = course?.metadata?.pointsPerAttendance || 0
            count += (Number(pointsPerAttendance) || 0)
        }
        if (!_.isEmpty(classSessionStudent?.metadata)) {
            _.forEach(classSessionStudent?.metadata, (value, key) => {
                //si es un checkbox
                const studentAttendanceFormData = course?.studentAttendanceFormData
                const fieldConfig = studentAttendanceFormData?.find((field) => field.name === key)
                if (fieldConfig.type === INPUT_TYPES.CHECKBOX) {
                    if (value === true) {
                        const pointsToAdd = fieldConfig?.metadata?.pointsToAdd || 0
                        count += (Number(pointsToAdd) || 0)
                    }
                }
                if (fieldConfig.type === INPUT_TYPES.NUMBER) {
                    const shouldAffectPoints = fieldConfig?.metadata?.shouldAffectPoints || false
                    if (shouldAffectPoints) {
                        count += (Number(value) || 0)
                    }
                }
            }
            )
        }
        return count
    }, [course])

    return { getPoints }
}

export default useGetPoints