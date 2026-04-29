import StepTemplate from "components/templates/StepTemplate";
import TEXTS from "constants/TEXTS";
import USER_PERMISSIONS from "constants/USER_PERMISSIONS";
import useLocaleContext from "hooks/useLocaleContext";
import useGetOrganizationUsersService from "services/users/useGetOrganizationUsersService";
import useService from "hooks/useService";
import LoadingBox from "components/dataDisplay/LoadingBox";
import {
    Box,
    Checkbox,
    FormControl,
    InputLabel,
    ListItemText,
    MenuItem,
    OutlinedInput,
    Select,
} from "@mui/material";
import { useCallback, useEffect, useMemo, useState } from "react";

function userHasTeacherRole(user) {
    const perms = user?.permissions || [];
    return perms.some((p) =>
        typeof p === "string" ? p === USER_PERMISSIONS.TEACHER : p?.permission === USER_PERMISSIONS.TEACHER
    );
}

function SetCourseTeachersStep({ state, send }) {
    const { translate } = useLocaleContext();
    const { getOrganizationUsers } = useGetOrganizationUsersService();
    const { value: users, runService, loading } = useService({
        service: getOrganizationUsers,
        defaultValue: [],
    });
    const [selectedIds, setSelectedIds] = useState(() => state.context.teacherIds || []);

    useEffect(() => {
        runService();
    }, [runService]);

    const teacherOptions = useMemo(() => (users || []).filter(userHasTeacherRole), [users]);

    const handleFinish = useCallback(() => {
        send("NEXT", { teacherIds: selectedIds });
    }, [send, selectedIds]);

    const handleBack = useCallback(() => {
        send("PREV");
    }, [send]);

    return (
        <StepTemplate
            title={translate(TEXTS.SET_COURSE_TEACHERS_TITLE)}
            onClickBack={handleBack}
            onClickFinish={handleFinish}
        >
            <Box sx={{ py: 1 }}>
                {loading ? (
                    <LoadingBox />
                ) : (
                    <FormControl fullWidth>
                        <InputLabel id="course-teachers-label">
                            {translate(TEXTS.SET_COURSE_TEACHERS_LABEL)}
                        </InputLabel>
                        <Select
                            labelId="course-teachers-label"
                            multiple
                            value={selectedIds}
                            onChange={(e) => setSelectedIds(e.target.value)}
                            input={<OutlinedInput label={translate(TEXTS.SET_COURSE_TEACHERS_LABEL)} />}
                            renderValue={(ids) =>
                                teacherOptions
                                    .filter((u) => ids.includes(u.id))
                                    .map((u) => `${u.firstName} ${u.lastName}`)
                                    .join(", ")
                            }
                        >
                            {teacherOptions.map((u) => (
                                <MenuItem key={u.id} value={u.id}>
                                    <Checkbox checked={selectedIds.indexOf(u.id) > -1} />
                                    <ListItemText primary={`${u.firstName} ${u.lastName}`} secondary={u.email} />
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                )}
            </Box>
        </StepTemplate>
    );
}

export default SetCourseTeachersStep;
