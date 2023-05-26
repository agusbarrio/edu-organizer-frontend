import { Grid, } from "@mui/material"

import StudentsListCard from "./components/StudentsListCard"
import AvaibleStudentsListCard from "./components/AvaibleStudentsListCard"
import useService from "hooks/useService"
import useGetAllStudentsService from "services/students/useGetAllStudentsService"
import { useCallback, useEffect, useMemo, useState } from "react"
import { v4 as uuidv4 } from 'uuid';
import _ from "lodash"
import NewStudentCard from "./components/NewStudentCard"
import FullSkeleton from "components/generic/FullSkeleton"

function CourseStudentsSelection({ onChange, initialStudents = [] }) {
    const { getAllStudents } = useGetAllStudentsService()
    const { loading, runService } = useService({ defaultValue: [], service: getAllStudents })

    const [studentsToSelect, setStudentsToSelect] = useState([])
    const [students, setStudents] = useState(initialStudents)

    useEffect(() => {
        if (onChange) onChange(students.map((student) => {
            if (student.id) {
                student.isNew = false
            } else {
                student.isNew = true
            }
            return student
        }))
    }, [students, onChange])

    useEffect(() => {
        runService({ params: { withCourse: false } }).then((result) => {
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
        <Grid container spacing={2} sx={{ overflowY: 'auto', height: '100%' }}>
            <Grid item xs={12} md={4} maxHeight={'100%'} >
                {loading ? <FullSkeleton></FullSkeleton> : <NewStudentCard onSubmit={handleSubmitStudent}></NewStudentCard>}
            </Grid>
            <Grid item xs={12} md={4} height={'100%'}>
                {loading ? <FullSkeleton></FullSkeleton> : <AvaibleStudentsListCard students={studentsToSelect} onClickAdd={handleAddStudent}></AvaibleStudentsListCard>}
            </Grid>
            <Grid item xs={12} md={4} height={'100%'}>
                {loading ? <FullSkeleton></FullSkeleton> : <StudentsListCard students={students} onClickDrop={handleDropStudent}></StudentsListCard>}
            </Grid>
        </Grid>
    )
}



export default CourseStudentsSelection