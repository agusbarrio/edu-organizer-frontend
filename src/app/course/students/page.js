"use client"

import ProtectedPage from "components/managers/ProtectedPage";
import CourseStudentsPage from "components/pageContents/CourseStudentsPage";

export default function CourseStudentsRoute() {
  return (
    <ProtectedPage needCourseSession={true}>
      <CourseStudentsPage />
    </ProtectedPage>
  );
}
