import CourseCard from "components/cards/CourseCard"
import CardsGrid from "components/dataDisplay/CardsGrid"
import CoomingSoon from "components/dataDisplay/CoomingSoon"
import ABMTemplate from "components/templates/ABMTemplate"
import DashboardTemplate from "components/templates/DashboardTemplate"
import LoadingBackdrop from "components/generic/LoadingBackdrop"
import useService from "hooks/useService"
import { useEffect } from "react"
import useGetAllCoursesService from "services/courses/useGetAllCoursesService"

function CoursesPage() {
    const { getAllCourses } = useGetAllCoursesService()
    const { value: courses, loading, runService } = useService({ service: getAllCourses, defeaultValue: [] })
    useEffect(() => {
        runService()
    }, [runService])
    return (
        <DashboardTemplate>
            <LoadingBackdrop loading={loading}></LoadingBackdrop>
            <ABMTemplate onClickAdd={() => { }} onClickDeleteAll={() => { }} onClickEdit={() => { }}>
                <CardsGrid>
                    {courses?.map((course) => (<CourseCard key={course.id} {...course}></CourseCard>))}
                </CardsGrid>
            </ABMTemplate>
        </DashboardTemplate>
    )
}

export default CoursesPage