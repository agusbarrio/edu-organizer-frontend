"use client"

import ProtectedPage from "components/managers/ProtectedPage";
import CourseLoginPage from "components/pageContents/CourseLoginPage";

export default function AuthCourseLoginPage() {
  return (
    <ProtectedPage needCourseSession={false}>
      <CourseLoginPage />
    </ProtectedPage>
  );
}
