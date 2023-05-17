import { Grid, useMediaQuery } from "@mui/material"

import StudentsListCard from "./components/StudentsListCard"
import AvaibleStudentsListCard from "./components/AvaibleStudentsListCard"
import useService from "hooks/useService"
import useGetAllStudentsService from "services/students/useGetAllStudentsService"
import { useCallback, useEffect, useMemo, useState } from "react"
import CustomSkeleton from "./components/CustomSkeleton"
import { v4 as uuidv4 } from 'uuid';
import _ from "lodash"
import NewStudentCard from "./components/NewStudentCard"

function CourseStudentsSelection({ onChange, initialStudents = [] }) {
    const { getAllStudents } = useGetAllStudentsService({ params: { withCourse: false } })
    const { loading, runService } = useService({ defaultValue: [], service: getAllStudents })

    const [studentsToSelect, setStudentsToSelect] = useState([])
    const [students, setStudents] = useState(initialStudents)

    useEffect(() => {
        if (onChange) onChange(students)
    }, [students, onChange])

    useEffect(() => {
        if (_.isEmpty(studentsToSelect)) {
            runService().then((result) => {
                setStudentsToSelect(result)
            }
            )
        }
    }, [runService, studentsToSelect])

    const handleSubmitStudent = useCallback((student) => {
        setStudents((prevStudents) => [...prevStudents, { key: uuidv4(), ...student }]
        )
    }, [])

    const handleAddStudent = useCallback((student) => {
        setStudents((prevStudents) => [...prevStudents, student])
        setStudentsToSelect((prevStudents) => [...prevStudents].filter(prevStudent => prevStudent.id !== student.id))
    }, [])

    const handleDropStudent = useCallback((student) => {
        if (student.id) {
            setStudentsToSelect((prevStudents) => [...prevStudents, student])
            setStudents((prevStudents) => [...prevStudents].filter(prevStudent => prevStudent.id !== student.id))
        } else {
            setStudents((prevStudents) => [...prevStudents].filter(prevStudent => prevStudent.key !== student.key))
        }
    }, [])

    const isMd = useMediaQuery((theme) => theme.breakpoints.up('md'));

    const height = useMemo(() => {
        return isMd ? '100%' : '50%'
    }, [isMd])

    return (
        <Grid container height={'100%'} spacing={2}>
            <Grid item xs={6} md={4} height={height}>
                {loading ? <CustomSkeleton></CustomSkeleton> : <NewStudentCard onSubmit={handleSubmitStudent}></NewStudentCard>}
            </Grid>
            <Grid item xs={6} md={4} height={height}>
                {loading ? <CustomSkeleton></CustomSkeleton> : <AvaibleStudentsListCard students={studentsToSelect} onClickAdd={handleAddStudent}></AvaibleStudentsListCard>}
            </Grid>
            <Grid item xs={12} md={4} height={height}>
                {loading ? <CustomSkeleton></CustomSkeleton> : <StudentsListCard students={students} onClickDrop={handleDropStudent}></StudentsListCard>}
            </Grid>
        </Grid>
    )
}



export default CourseStudentsSelection