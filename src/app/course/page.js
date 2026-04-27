"use client"

import ProtectedPage from "components/managers/ProtectedPage";
import CoursePage from "components/pageContents/CoursePage";

export default function CourseRoute() {
  return (
    <ProtectedPage needCourseSession={true}>
      <CoursePage />
    </ProtectedPage>
  );
}
