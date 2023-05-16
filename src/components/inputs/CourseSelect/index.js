import SelectInputWithService from "components/generic/SelectInputWithService";
import useGetAllCoursesService from "services/courses/useGetAllCoursesService";

function CoursesSelect({ ...props }) {
    const { getAllCourses } = useGetAllCoursesService();
    return (
        <SelectInputWithService
            itemValueGetter={(course) => course.id}
            itemLabelGetter={(course) => course.name}
            service={getAllCourses}
            {...props}
        />
    );
}

export default CoursesSelect;
