"use client"

import ProtectedPage from "components/managers/ProtectedPage";
import CourseClassSessionsPage from "components/pageContents/CourseClassSessionsPage";

export default function CourseClassSessionsRoute() {
  return (
    <ProtectedPage needCourseSession={true}>
      <CourseClassSessionsPage />
    </ProtectedPage>
  );
}
