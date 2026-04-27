"use client"

import ProtectedPage from "components/managers/ProtectedPage";
import CourseEditClassSessionPage from "components/pageContents/CourseEditClassSessionPage";

export default function CourseEditClassSessionRoute() {
  return (
    <ProtectedPage needCourseSession={true}>
      <CourseEditClassSessionPage />
    </ProtectedPage>
  );
}
