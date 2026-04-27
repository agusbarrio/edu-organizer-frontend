"use client"

import ProtectedPage from "components/managers/ProtectedPage";
import CourseNewClassPage from "components/pageContents/CourseNewClassPage";

export default function CourseNewClassRoute() {
  return (
    <ProtectedPage needCourseSession={true}>
      <CourseNewClassPage />
    </ProtectedPage>
  );
}
