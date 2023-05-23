import { Grid, } from "@mui/material"

import StudentsListCard from "./components/StudentsListCard"
import AvaibleStudentsListCard from "./components/AvaibleStudentsListCard"
import useService from "hooks/useService"
import useGetAllStudentsService from "services/students/useGetAllStudentsService"
import { useCallback, useEffect, useMemo, useState } from "react"
import CustomSkeleton from "./components/CustomSkeleton"
import { v4 as uuidv4 } from 'uuid';
import _ from "lodash"
import NewStudentCard from "./components/NewStudentCard"
import useDevice from "hooks/useDevice"

function CourseStudentsSelection({ onChange, initialStudents = [] }) {
    const reqConfig = useMemo(() => ({
        params: { withCourse: false }
    }), [])
    const { getAllStudents } = useGetAllStudentsService(reqConfig)
    const { loading, runService } = useService({ defaultValue: [], service: getAllStudents })

    const [studentsToSelect, setStudentsToSelect] = useState([])
    const [students, setStudents] = useState(initialStudents)

    useEffect(() => {
        if (onChange) onChange(students)
    }, [students, onChange])

    useEffect(() => {
        runService().then((result) => {
            setStudentsToSelect(result)
        })
    }, [runService])

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


    return (
        <Grid container spacing={2} sx={{ overflow: 'scroll', height: '100%' }}>
            <Grid item xs={12} md={4} maxHeight={'100%'} >
                {loading ? <CustomSkeleton></CustomSkeleton> : <NewStudentCard onSubmit={handleSubmitStudent}></NewStudentCard>}
            </Grid>
            <Grid item xs={12} md={4} height={'100%'}>
                {loading ? <CustomSkeleton></CustomSkeleton> : <AvaibleStudentsListCard students={studentsToSelect} onClickAdd={handleAddStudent}></AvaibleStudentsListCard>}
            </Grid>
            <Grid item xs={12} md={4} height={'100%'}>
                {loading ? <CustomSkeleton></CustomSkeleton> : <StudentsListCard students={students} onClickDrop={handleDropStudent}></StudentsListCard>}
            </Grid>
        </Grid>
    )
}



export default CourseStudentsSelection