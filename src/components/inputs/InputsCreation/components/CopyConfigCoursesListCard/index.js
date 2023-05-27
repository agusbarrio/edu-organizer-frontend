import { ContentCopyOutlined, } from "@mui/icons-material"
import CoursesList from "components/dataDisplay/CoursesList"
import Card from "components/generic/Card"
import FullSkeleton from "components/generic/FullSkeleton"
import TEXTS from "constants/TEXTS"
import useLocaleContext from "hooks/useLocaleContext"
import useService from "hooks/useService"
import { useEffect } from "react"
import useGetAllCoursesService from "services/courses/useGetAllCoursesService"

function CopyConfigCoursesListCard({ onClickCourse }) {
    const { translate } = useLocaleContext()
    const { getAllCourses } = useGetAllCoursesService()
    const { value: courses, loading, runService } = useService({ service: getAllCourses, defaultValue: [] })
    useEffect(() => {
        runService()
    }, [runService])
    return (
        <>
            {loading ? <FullSkeleton></FullSkeleton> : <CoursesList
                cardTitle={translate(TEXTS.COPY_CONFIG_COURSES_LIST_CARD_TITLE)}
                help={translate(TEXTS.COPY_CONFIG_LIST_CARD_HELP)}
                onClickItem={onClickCourse}
                courses={courses}
                itemIconProps={{ children: <ContentCopyOutlined color="primary" /> }}
            ></CoursesList>}
        </>

    )
}

export default CopyConfigCoursesListCard