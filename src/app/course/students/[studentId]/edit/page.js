"use client"

import ProtectedPage from "components/managers/ProtectedPage";
import CourseEditStudentPage from "components/pageContents/CourseEditStudentPage";

export default function CourseEditStudentRoute() {
  return (
    <ProtectedPage needCourseSession={true}>
      <CourseEditStudentPage />
    </ProtectedPage>
  );
}
