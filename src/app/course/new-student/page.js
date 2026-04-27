"use client"

import ProtectedPage from "components/managers/ProtectedPage";
import CourseNewStudentPage from "components/pageContents/CourseNewStudentPage";

export default function CourseNewStudentRoute() {
  return (
    <ProtectedPage needCourseSession={true}>
      <CourseNewStudentPage />
    </ProtectedPage>
  );
}
