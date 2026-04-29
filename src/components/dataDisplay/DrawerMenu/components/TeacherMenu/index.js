import { Add, ExpandLess, ExpandMore, Face, Group, HistoryEdu } from "@mui/icons-material";
import {
    Collapse,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
} from "@mui/material";
import { alpha } from "@mui/material/styles";
import NavListButton from "components/navigation/NavListButton";
import PATHS from "constants/PATHS";
import TEXTS from "constants/TEXTS";
import useLocaleContext from "hooks/useLocaleContext";
import useService from "hooks/useService";
import { useCallback, useEffect, useState } from "react";
import useTeacherCoursesListService from "services/teacherCourse/useTeacherCoursesListService";
import { renderText } from "utils/text";

function TeacherMenu() {
    const { translate } = useLocaleContext();
    const { listTeacherCourses } = useTeacherCoursesListService();
    const { value: courses, runService, loading } = useService({
        service: listTeacherCourses,
        defaultValue: [],
    });
    const [openById, setOpenById] = useState({});

    useEffect(() => {
        runService();
    }, [runService]);

    const toggle = useCallback((id) => {
        setOpenById((prev) => ({ ...prev, [id]: !prev[id] }));
    }, []);

    useEffect(() => {
        if (!courses?.length) return;
        setOpenById((prev) => {
            const next = { ...prev };
            courses.forEach((c) => {
                if (next[c.id] === undefined) next[c.id] = true;
            });
            return next;
        });
    }, [courses]);

    if (loading && !courses?.length) {
        return null;
    }

    if (!courses?.length) {
        return null;
    }

    return (
        <List disablePadding>
            {courses.map((course) => {
                const courseId = course.id;
                const open = !!openById[courseId];
                return (
                    <ListItem key={courseId} disablePadding sx={{ display: "block" }}>
                        <ListItemButton
                            onClick={() => toggle(courseId)}
                            dense
                            sx={{
                                borderRadius: 1,
                                my: 0.5,
                                px: 1,
                                ...(open
                                    ? {
                                          bgcolor: (theme) =>
                                              alpha(theme.palette.primary.main, 0.12),
                                          borderLeft: (theme) =>
                                              `3px solid ${theme.palette.primary.main}`,
                                          "&:hover": {
                                              bgcolor: (theme) =>
                                                  alpha(theme.palette.primary.main, 0.18),
                                          },
                                      }
                                    : {
                                          bgcolor: "action.hover",
                                          borderLeft: (theme) =>
                                              `1px solid ${theme.palette.divider}`,
                                          "&:hover": {
                                              bgcolor: "action.selected",
                                          },
                                      }),
                            }}
                        >
                            <ListItemText
                                primary={course.name}
                                primaryTypographyProps={{
                                    noWrap: true,
                                    ...(open
                                        ? {
                                              fontWeight: 700,
                                              color: "primary.main",
                                              variant: "subtitle2",
                                              letterSpacing: 0.02,
                                          }
                                        : {
                                              fontWeight: 600,
                                              color: "text.primary",
                                              variant: "body2",
                                          }),
                                }}
                            />
                            {open ? (
                                <ExpandLess color="primary" fontSize="small" />
                            ) : (
                                <ExpandMore
                                    sx={{ color: "text.secondary" }}
                                    fontSize="small"
                                />
                            )}
                        </ListItemButton>
                        <Collapse in={open} timeout="auto" unmountOnExit>
                            <List disablePadding sx={{ pl: 2, py: 0.25 }}>
                                <NavListButton
                                    iconProps={{ children: <Add /> }}
                                    linkProps={{
                                        href: renderText(PATHS.TEACHER_COURSE_NEW_CLASS, {
                                            courseId,
                                        }),
                                    }}
                                    text={translate(TEXTS.NEW_CLASS_BUTTON)}
                                />
                                <NavListButton
                                    iconProps={{ children: <Face /> }}
                                    linkProps={{
                                        href: renderText(PATHS.TEACHER_COURSE_NEW_STUDENT, {
                                            courseId,
                                        }),
                                    }}
                                    text={translate(TEXTS.NEW_STUDENT_BUTTON)}
                                />
                                <NavListButton
                                    iconProps={{ children: <Group /> }}
                                    linkProps={{
                                        href: renderText(PATHS.TEACHER_COURSE_STUDENTS, {
                                            courseId,
                                        }),
                                    }}
                                    text={translate(TEXTS.COURSE_STUDENTS_BUTTON)}
                                />
                                <NavListButton
                                    iconProps={{ children: <HistoryEdu /> }}
                                    linkProps={{
                                        href: renderText(PATHS.TEACHER_COURSE_CLASS_SESSIONS, {
                                            courseId,
                                        }),
                                    }}
                                    text={translate(TEXTS.COURSE_CLASS_SESSIONS_BUTTON)}
                                />
                            </List>
                        </Collapse>
                    </ListItem>
                );
            })}
        </List>
    );
}

export default TeacherMenu;
