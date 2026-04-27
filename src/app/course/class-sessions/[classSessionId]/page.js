"use client"

import ProtectedPage from "components/managers/ProtectedPage";
import CourseClassSessionPage from "components/pageContents/CourseClassSessionPage";

export default function CourseClassSessionRoute() {
  return (
    <ProtectedPage needCourseSession={true}>
      <CourseClassSessionPage />
    </ProtectedPage>
  );
}
