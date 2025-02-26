const TEXTS = {
    EMAIL_LABEL: { es: 'Correo electrónico', en: 'Email' },
    EMAIL_PLACEHOLDER: { es: 'Ingresá tu correo electrónico', en: 'Enter your email' },
    PASSWORD_LABEL: { es: 'Contraseña', en: 'Password' },
    PASSWORD_PLACEHOLDER: { es: 'Ingresá tu contraseña', en: 'Enter your password' },
    LOGIN_BUTTON: { es: 'Iniciar sesión', en: 'Login' },
    LOGIN_PAGE_TITLE: { es: 'Iniciar sesión', en: 'Login' },
    HOME_HEAD_TITLE: { es: 'Edu Organizer', en: 'Edu Organizer' },
    ORGANIZATION_NAME_LABEL: { es: 'Nombre de la organización', en: 'Organization name' },
    ORGANIZATION_NAME_PLACEHOLDER: { es: 'Ingresá el nombre de tu organización', en: 'Enter your organization name' },
    FIRST_NAME_LABEL: { es: 'Nombre', en: 'First name' },
    FIRST_NAME_PLACEHOLDER: { es: 'Ingresá tu nombre', en: 'Enter your first name' },
    LAST_NAME_LABEL: { es: 'Apellido', en: 'Last name' },
    LAST_NAME_PLACEHOLDER: { es: 'Ingresá tu apellido', en: 'Enter your last name' },
    REPEAT_PASSWORD_LABEL: { es: 'Repetí tu contraseña', en: 'Repeat your password' },
    REPEAT_PASSWORD_PLACEHOLDER: { es: 'Ingresá tu contraseña nuevamente', en: 'Enter your password again' },
    REGISTER_HEAD_TITLE: { es: 'Registrarse', en: 'Register' },
    REGISTER_HEAD_DESCRIPTION: { es: 'Registrá tu organización y empezá a organizar tus clases', en: 'Register your organization and start organizing your classes' },
    REGISTER_PAGE_TITLE: { es: 'Registrarse', en: 'Register' },
    REGISTER_BUTTON: { es: 'Registrarse', en: 'Register' },
    LOGIN_PAGE_RECOVER_PASSWORD_LINK: { es: '¿Olvidaste tu contraseña?', en: 'Forgot your password?' },
    LOGIN_PAGE_REGISTER_LINK: { es: '¿No tenés una cuenta? Registrate', en: 'Don\'t have an account? Register' },
    REGISTER_PAGE_LOGIN_LINK: { es: 'Ir al inicio de sesión', en: 'Go to login' },
    MY_ACCOUNT_PAGE_TITLE: { es: 'Mi cuenta', en: 'My account' },
    LOGOUT_BUTTON: { es: 'Cerrar sesión', en: 'Logout' },
    ACCOUNT_BUTTON_TOOLTIP: { es: 'Mi cuenta', en: 'My account' },
    ADMIN_MENU_BUTTON_COURSES: { es: 'Cursos', en: 'Courses' },
    ADMIN_MENU_BUTTON_STUDENTS: { es: 'Estudiantes', en: 'Students' },
    ADMIN_MENU_BUTTON_TEACHERS: { es: 'Profesores', en: 'Teachers' },
    ADMIN_MENU_BUTTON_CLASS_SESSIONS: { es: 'Clases', en: 'Class sessions' },
    COURSE_NAME_LABEL: { es: 'Nombre del curso', en: 'Course name' },
    COURSE_NAME_PLACEHOLDER: { es: 'Ingresá el nombre del curso', en: 'Enter the course name' },
    GO_COURSE: { es: 'Ver detalles del curso', en: 'Go course details' },
    GO_EDIT_COURSE: { es: 'Editar curso', en: 'Go edit course' },
    DELETE_COURSE_TOOLTIP: { es: 'Eliminar curso', en: 'Delete course' },
    GO_BACK_COURSES: { es: 'Volver a cursos', en: 'Go back courses' },
    COURSE_PAGE_SUBTITLE: { es: 'Acá podés ver la información del curso', en: 'Here you can see the course information' },
    TEACHERS_PAGE_TITLE: { es: 'Profesores', en: 'Teachers' },
    COURSE_PAGE_TITLE: { es: 'Detalles del curso', en: 'Course details' },
    COURSE_ID_LABEL: { es: 'ID del curso', en: 'Course ID' },
    COURSE_SHORT_ID_LABEL: { es: 'Identificador del curso', en: 'Course short ID' },
    STUDENT_AVATAR_LABEL: { es: 'Foto', en: 'Photo' },
    STUDENT_FIRST_NAME_LABEL: { es: 'Nombre', en: 'First name' },
    STUDENT_LAST_NAME_LABEL: { es: 'Apellido', en: 'Last name' },
    STUDENT_FILES_LABEL: { es: 'Archivos', en: 'Files' },
    GO_STUDENT: { es: 'Ver estudiante', en: 'Go student' },
    CREATE_COURSE_PAGE_TITLE: { es: 'Crear curso', en: 'Create course' },
    CREATE_COURSE_PAGE_SUBTITLE: { es: 'Acá podés crear un nuevo curso', en: 'Here you can create a new course' },
    CREATE_STUDENT_PAGE_TITLE: { es: 'Crear estudiante', en: 'Create student' },
    GO_BACK_STUDENTS: { es: 'Volver a estudiantes', en: 'Go back students' },
    STUDENT_ID_LABEL: { es: 'ID del estudiante', en: 'Student ID' },
    STUDENT_PAGE_TITLE: { es: 'Detalles del estudiante', en: 'Student details' },
    STUDENT_PAGE_SUBTITLE: { es: 'Acá podés ver la información del estudiante', en: 'Here you can see the student information' },
    STUDENT_FIRST_NAME_PLACEHOLDER: { es: 'Ingresá el nombre del estudiante', en: 'Enter the student first name' },
    STUDENT_LAST_NAME_PLACEHOLDER: { es: 'Ingresá el apellido del estudiante', en: 'Enter the student last name' },
    CLASS_SESSIONS_PAGE_TITLE: { es: 'Clases', en: 'Class sessions' },
    CLASS_SESSIONS_PAGE_SUBTITLE: { es: 'Acá podés ver los registros de asistencia', en: 'Here you can see the attendance records' },
    COURSES_PAGE_TITLE: { es: 'Cursos', en: 'Courses' },
    COURSES_PAGE_SUBTITLE: { es: 'Acá podés ver todos los cursos', en: 'Here you can see all the courses' },
    STUDENTS_PAGE_TITLE: { es: 'Estudiantes', en: 'Students' },
    STUDENTS_PAGE_SUBTITLE: { es: 'Acá podés ver todos los estudiantes', en: 'Here you can see all the students' },
    TEACHERS_PAGE_SUBTITLE: { es: 'Acá podés ver todos los profesores', en: 'Here you can see all the teachers' },
    COURSE_LABEL: { es: 'Curso', en: 'Course' },
    AVAIBLE_STUDENTS_LIST_CARD_TITLE: { es: 'Estudiantes disponibles', en: 'Avaible students' },
    COURSE_STUDENTS_LIST_CARD_TITLE: { es: 'Estudiantes del curso', en: 'Course students' },
    COURSE_CREATE_STUDENT_CARD_TITLE: { es: 'Nuevo estudiante', en: 'New student' },
    COURSE_CREATE_STUDENT_CARD_HELP: { es: 'Los estudiantes que agregues por este medio se crearán al completar la creación del curso y serán asignados a este', en: 'The students you add this way will be created when you complete the course creation and will be assigned to it' },
    AVAIBLE_STUDENTS_LIST_CARD_HELP: { es: 'Estos son los estudiantes que actualmente no estan asignados a ningun curso y estan disponibles para ser agregados. Hacé click en uno para agregarlo al curso', en: 'These are the students who are currently not assigned to any course and are available to be added. Clickk on one to add it to the course' },
    COURSE_STUDENTS_LIST_CARD_HELP: { es: 'Estos son los estudiantes que serán asignados al curso. Si querés quitar un estudiante puedes hacerlo haciendo click sobre el', en: 'These are the students who will be assigned to the course. If you want to remove a student you can do it by clickking on it' },
    DELETE_COURSE_MODAL_TITLE: { es: 'Eliminar curso', en: 'Delete course' },
    DELETE_COURSE_MODAL_CONTENT: { es: '¿Estás seguro que querés eliminar este curso?', en: 'Are you sure you want to delete this course?' },
    COURSE_ACCESS_PIN_LABEL: { es: 'PIN de acceso', en: 'Access PIN' },
    COURSE_ACCESS_PIN_PLACEHOLDER: { es: 'Ingresá el PIN de acceso', en: 'Enter the access PIN' },
    SET_COURSE_DATA_TITLE: { es: 'Datos del curso', en: 'Course data' },
    SET_COURSE_STUDENTS_TITLE: { es: 'Selección de estudiantes', en: 'Students selection' },
    SET_COURSE_CLASS_SESSIONS_CONFIG_TITLE: { es: 'Configuración de clases', en: 'Class sessions config' },
    RECOVER_PAGE_TITLE: { es: 'Recuperar contraseña', en: 'Recover password' },
    RECOVER_PAGE_GO_BACK_LOGIN_LINK: { es: 'Volver', en: 'Go back' },
    NAME_FIELD_LABEL: { es: 'Nombre del campo', en: 'Name field' },
    NAME_FIELD_PLACEHOLDER: { es: 'Ingresá el nombre del campo', en: 'Enter the name field' },
    SUBMIT_INPUT_FORM: { es: 'Guardar campo', en: 'Save field' },
    PLACEHOLDER_FIELD_LABEL: { es: 'Placeholder del campo', en: 'Placeholder field' },
    PLACEHOLDER_FIELD_PLACEHOLDER: { es: 'Ingresá el placeholder del campo', en: 'Enter the placeholder field' },
    LABEL_FIELD_LABEL: { es: 'Etiqueta del campo', en: 'Label field' },
    LABEL_FIELD_PLACEHOLDER: { es: 'Ingresá la etiqueta del campo', en: 'Enter the label field' },
    TYPE_FIELD_LABEL: { es: 'Tipo de campo', en: 'Type field' },
    TYPE_FIELD_PLACEHOLDER: { es: 'Ingresá el tipo de campo', en: 'Enter the type field' },
    INPUT_TYPE_TEXT: { es: 'Texto', en: 'Text' },
    INPUT_TYPE_NUMBER: { es: 'Número', en: 'Number' },
    INPUT_TYPE_CHECKBOX: { es: 'Checkbox', en: 'Checkbox' },
    NEW_INPUT_CARD_TITLE: { es: 'Nuevo campo', en: 'New field' },
    INPUTS_LIST_CARD_TITLE: { es: 'Campos', en: 'Fields' },
    INPUTS_LIST_CARD_HELP: { es: 'Estos son los campos que se van a mostrar en el formulario de asistencia de cada estudiante.', en: 'These are the fields that will be shown in the attendance form of each student.' },
    DELETE_COURSES_SELECTION_MODAL_TITLE: { es: 'Eliminar cursos', en: 'Delete courses' },
    DELETE_COURSES_SELECTION_MODAL_CONTENT: { es: '¿Estás seguro que querés eliminar los cursos seleccionados?', en: 'Are you sure you want to delete the selected courses?' },
    COPY_CONFIG_COURSES_LIST_CARD_TITLE: { es: 'Cursos', en: 'Courses' },
    COPY_CONFIG_LIST_CARD_HELP: { es: 'Estos son los formularios de tus otros cursos. Podés elegir uno para copiarlo y usarlo como base para el formulario de este curso.', en: 'These are the forms of your other courses. You can choose one to copy it and use it as a base for the form of this course.' },
    EDIT_COURSES_SELECTION_MODAL_TITLE: { es: 'Editar cursos', en: 'Edit courses' },
    OWNER_MENU: { es: 'Menu del propietario', en: 'Owner menu' },
    TEACHER_MENU: { es: 'Menu del profesor', en: 'Teacher menu' },
    EDIT_COURSE_PAGE_TITLE: { es: 'Editar curso', en: 'Edit course' },
    COURSE_LOGIN_PAGE_TITLE: { es: 'Acceder al curso', en: 'Access the course' },
    ACCESS_PIN_LABEL: { es: 'PIN de acceso', en: 'Access PIN' },
    ACCESS_PIN_PLACEHOLDER: { es: 'Ingresá el PIN de acceso', en: 'Enter the access PIN' },
    COURSE_LOGIN_BUTTON: { es: 'Acceder', en: 'Access' },
    NEW_CLASS_BUTTON: { es: 'Nueva clase', en: 'New class' },
    NEW_STUDENT_BUTTON: { es: 'Agregar un estudiante', en: 'Add a student' },
    COURSE_NEW_CLASS_PAGE_TITLE: { es: 'Nueva clase', en: 'New class' },
    COURSE_NEW_STUDENT_PAGE_TITLE: { es: 'Agregar un estudiante', en: 'Add a student' },
    FORBIDDEN_PAGE_TITLE: { es: 'Prohibido', en: 'Forbidden' },
    FORBIDDEN_PAGE_DESCRIPTION: { es: 'No tiene permiso para acceder a este recurso', en: 'You do not have permission to access this resource' },
    NOT_FOUND_PAGE_TITLE: { es: 'No encontrado', en: 'Not found' },
    NOT_FOUND_PAGE_DESCRIPTION: { es: 'Esta página no existe', en: 'This page does not exist' },
    SELECT_PRESENT_STUDENTS_TITLE: { es: 'Asistencia', en: 'Attendance' },
    GO_BACK_COURSE: { es: 'Volver al curso', en: 'Go back course' },
    STUDENT_AVATAR_LABEL: { es: 'Foto', en: 'Photo' },
    COURSE_DATA_CARD_TITLE: { es: 'Datos del curso', en: 'Course data' },
    COURSE_URL_LABEL: { es: 'URL del curso', en: 'Course URL' },
    STUDENT_ATTENDANCE_FORM_LABEL: { es: 'Formulario de asistencia', en: 'Attendance form' },
    NO_PRESENT_STUDENTS_CONFIRM_TITLE: { es: 'Sin estudiantes presentes', en: 'No present students' },
    NO_PRESENT_STUDENTS_CONFIRM_DESCRIPTION: { es: 'No seleccionaste ningún estudiante como presente. ¿Seguro que querés continuar?', en: 'You did not select any student as present. Are you sure you want to continue?' },
    STUDENT_ATTENDANCE_CARD_TITLE: { es: 'Asistencia', en: 'Attendance' },
    CLASS_SESSION_DATE_LABEL: { es: 'Fecha', en: 'Date' },
    CLASS_SESSION_STUDENT_IS_PRESENT_LABEL: { es: '¿Asistió?', en: 'Did he attend?' },
    CLASS_SESSION_STUDENT_STUDENT_LABEL: { es: 'Estudiante', en: 'Student' },
    CLASS_SESSION_STUDENT_POINTS_ACUMULATED_LABEL: { es: 'Puntos', en: 'Points' },
    CLASS_SESSION_STUDENT_TOTAL_POINTS_ACUMULATED_LABEL: { es: 'Puntos totales', en: 'Total points' },
    STUDENT_DATA_CARD_TITLE: { es: 'Datos del estudiante', en: 'Student data' },
    SUPERADMIN_MENU_BUTTON_USERS: { es: 'Usuarios', en: 'Users' },
    USERS_PAGE_TITLE: { es: 'Usuarios', en: 'Users' },
    USERS_PAGE_SUBTITLE: { es: 'Acá podés administrar los usuarios de la plataforma', en: 'Here you can manage the platform users' },
    ALLOW_REGISTRATION: { es: 'Permitir registro', en: 'Allow registration' },
    DENY_REGISTRATION: { es: 'Denegar registro', en: 'Deny registration' },
    USER_FIRST_NAME_LABEL: { es: 'Nombre', en: 'First name' },
    USER_LAST_NAME_LABEL: { es: 'Apellido', en: 'Last name' },
    USER_EMAIL_LABEL: { es: 'Correo electrónico', en: 'Email' },
    USER_STATUS_LABEL: { es: 'Estado', en: 'Status' },
    USER_STATUS_ACTIVE: { es: 'Activo', en: 'Active' },
    USER_STATUS_PENDING: { es: 'Pendiente', en: 'Pending' },
    USER_ORGANIZATION_LABEL: { es: 'Organización', en: 'Organization' },
    SUPERADMIN_MENU_BUTTON_ORGANIZATIONS: { es: 'Organizaciones', en: 'Organizations' },
    ORGANIZATIONS_PAGE_TITLE: { es: 'Organizaciones', en: 'Organizations' },
    ORGANIZATIONS_PAGE_SUBTITLE: { es: 'Acá podés administrar las organizaciones de la plataforma', en: 'Here you can manage the platform organizations' },
    DELETE_ORGANIZATION_MODAL_TITLE: { es: 'Eliminar organización', en: 'Delete organization' },
    DELETE_ORGANIZATION_MODAL_CONTENT: { es: '¿Estás seguro que querés eliminar esta organización?', en: 'Are you sure you want to delete this organization?' },
    ADMIN_MENU_BUTTON_MY_ORGANIZATION: { es: 'Mi organización', en: 'My organization' },
    ORGANIZATION_DATA_CARD_TITLE: { es: 'Datos de la organización', en: 'Organization data' },
    MY_ORGANIZATION_PAGE_TITLE: { es: 'Mi organización', en: 'My organization' },
    MY_ORGANIZATION_PAGE_SUBTITLE: { es: 'Acá podés ver la información de tu organización', en: 'Here you can see your organization information' },
    EDIT_MY_ORGANIZATION_PAGE_TITLE: { es: 'Editar organización', en: 'Edit organization' },
    STUDENT_COURSE_NAME_LABEL: { es: 'Curso actual', 'en': 'Current course' },
    DELETE_STUDENT_MODAL_TITLE: { es: 'Eliminar estudiante', en: 'Delete student' },
    DELETE_STUDENT_MODAL_CONTENT: { es: '¿Estás seguro que querés eliminar este estudiante?', en: 'Are you sure you want to delete this student?' },
    EDIT_STUDENT_PAGE_TITLE: { es: 'Editar estudiante', en: 'Edit student' },
    VERIFY_ACCOUNT_PAGE_TITLE: { es: 'Verificar cuenta', en: 'Verify account' },
    VERIFY_ACCOUNT_BUTTON: { es: 'Verificar', en: 'Verify' },
    REGITER_PAGE_SUCCESS_MESSAGE: { es: 'Gracias por registrarte. Te enviamos un correo electrónico para que verifiques tu cuenta.', en: 'Thanks for registering. We sent you an email to verify your account.' },
    RECOVER_PAGE_SUCCESS: { es: 'Te hemos enviado un correo electrónico para que puedas reiniciar tu contraseña.', en: 'We sent you an email to reset your password.' },
    USER_DATA_CARD_TITLE: { es: 'Datos del usuario', en: 'User data' },
    MY_ACCOUNT_PAGE_SUBTITLE: { es: 'Acá podés ver la información de tu cuenta', en: 'Here you can see your account information' },
    EDIT_MY_ACCOUNT_PAGE_TITLE: { es: 'Editar cuenta', en: 'Edit account' },
    EDIT_MY_ACCOUNT_PAGE_SUBTITLE: { es: 'Acá podés editar la información de tu cuenta', en: 'Here you can edit your account information' },
    CHANGE_PASSWORD_MODAL_TITLE: { es: 'Cambiar contraseña', en: 'Change password' },
    CHANGE_PASSWORD_BUTTON: { es: 'Cambiar contraseña', en: 'Change password' },
    CLASS_SESSION_STUDENT_VIEW_METADATA: { es: 'Ver datos de asistencia', en: 'View attendance data' },
    CLASS_SESSION_PAGE_TITLE: { es: 'Detalles de la clase', en: 'Class details' },
    CLASS_SESSION_PAGE_SUBTITLE: { es: 'Acá podes ver los detalles de la clase', en: 'Here you can see the class details' },
    CLASS_SESSION_STUDENTS_CARD_TITLE: { es: 'Asistencia', en: 'Attendance' },
    CLASS_SESSION_DATA_CARD_TITLE: { es: 'Datos de la clase', en: 'Class data' },
    DELETE_CLASS_SESSION_MODAL_TITLE: { es: "Eliminar clase", en: "Delete class" },
    DELETE_CLASS_SESSION_MODAL_CONTENT: { es: '¿Estás seguro que querés eliminar esta clase?', en: 'Are you sure you want to delete this class?' },
    STUDENT_ATTENDANCE_DATA_MODAL_TITLE: { es: 'Datos de asistencia', en: 'Attendance data' },
    STUDENT_ATTENDANCE_DATA_MODAL_EMPTY_CONTENT: { es: 'Sin datos de asistencia', en: 'Without attendance data' },
    CLASS_SESSION_DATE_PLACEHOLDER: { es: 'Ingresá la fecha de la clase', en: 'Enter the class date' },
    EDIT_CLASS_SESSION_PAGE_TITLE: { es: 'Editar clase', en: 'Edit class' },
    CLASS_SESSION_MONTH_LABEL: { es: 'Mes', en: 'Month' },
    SUPERADMIN_MENU_BUTTON_CONTROLS: { es: 'Controles', en: 'Controls' },
    CONTROLS_PAGE_TITLE: { es: 'Controles', en: 'Controls' },
    CONTROLS_PAGE_SUBTITLE: { es: 'Acá podés ver los controles de la plataforma', en: 'Here you can see the platform controls' },
    CONTROLS_CLEAR_UNUSED_FILES: { es: 'Eliminar archivos no utilizados', en: 'Clear unused files' },
    SET_STUDENT_ADDITIONAL_INFORMATION_TITLE: { es: 'Información adicional del estudiante', en: 'Student additional information' },
    STUDENT_ADDITIONAL_INFORMATION_INPUTS_LIST_CARD_HELP: { es: 'Estos son los campos que se van a mostrar en el formulario de información adicional de cada estudiante.', en: 'These are the fields that will be shown in the additional information form of each student.' },
    STUDENT_BIRTH_DATE_LABEL: { es: 'Fecha de nacimiento', en: 'Birth date' },
    STUDENT_ADDITIONAL_INFO_LABEL: { es: 'Información adicional', en: 'Additional information' },
    CHECKBOX_FIELD_POINTS_TO_ADD_LABEL: { es: 'Puntos a agregar', en: 'Points to add' },
    CHECKBOX_FIELD_POINTS_TO_ADD_PLACEHOLDER: { es: 'Ingresá los puntos a agregar', en: 'Enter the points to add' },
    CHECKBOX_FIELD_DEFAULT_VALUE_LABEL: { es: 'Valor por defecto', en: 'Default value' },
    COURSE_POINTS_PER_ATTENDANCE_LABEL: { es: 'Puntos por asistencia', en: 'Points per attendance' },
    COURSE_POINTS_PER_ATTENDANCE_PLACEHOLDER: { es: 'Ingresá los puntos por asistencia', en: 'Enter the points per attendance' },
    DECIMAL_SCALE_FIELD_LABEL: { es: 'Escala decimal', en: 'Decimal scale' },
    ALLOW_NEGATIVE_FIELD_LABEL: { es: 'Permitir negativos', en: 'Allow negatives' },
    SHOULD_AFFECT_POINTS_FIELD_LABEL: { es: '¿Se suma a los puntos del estudiante?', en: 'Is it added to the student\'s points?' },
    PRESENT_STUDENTS_NUMBER_LABEL: { es: 'Estudiantes presentes', en: 'Present students' },
    LANDING_PAGE_TITLE: { es: 'Organiza la información de tus clases de forma fácil y eficiente', en: 'Organize your class information in an easy and efficient way' },
    LANDING_PAGE_BENEFITS_BUTTON: { es: 'Beneficios', en: 'Benefits' },
    LANDING_PAGE_ABOUT_US_BUTTON: { es: 'Sobre nosotros', en: 'About us' },
    LANDING_PAGE_PLATFORM_BUTTON: { es: 'Plataforma', en: 'Platform' },
    LANDING_PAGE_DESCRIPTION: { es: 'Crea tus cursos, agrega estudiantes, registra asistencia y gestiona tus clases de forma fácil y eficiente', en: 'Create your courses, add students, register attendance and manage your classes easily and efficiently' },
    LANDING_PAGE_BENEFITS_TITLE: { es: 'Beneficios clave', en: 'Key benefits' },
    LANDING_PAGE_BENEFITS_TITLE_1: { es: 'Gestión de información', en: 'Information management' },
    LANDING_PAGE_BENEFITS_DESCRIPTION_1: { es: 'Crea tus cursos, agrega estudiantes, registra asistencia y gestiona tus clases de forma fácil y eficiente', en: 'Create your courses, add students, register attendance and manage your classes easily and efficiently' },
    LANDING_PAGE_BENEFITS_TITLE_2: { es: 'Generación de informes', en: 'Report generation' },
    LANDING_PAGE_BENEFITS_DESCRIPTION_2: { es: 'Genera informes de tus clases, estudiantes y asistencia', en: 'Generate reports of your classes, students and attendance' },
    LANDING_PAGE_BENEFITS_TITLE_3: { es: 'Colaboración en Grupo', en: 'Group collaboration' },
    LANDING_PAGE_BENEFITS_DESCRIPTION_3: { es: 'Trabaja con tu equipo de profesores para desarrollar tus clases de forma colaborativa', en: 'Work with your teacher team to develop your classes in a collaborative way' },
    LANDING_PAGE_ABOUT_US_TITLE: { es: 'Sobre nosotros', en: 'About us' },
    LANDING_PAGE_ABOUT_US_DESCRIPTION: { es: 'Nuestra aplicación está diseñada para organizaciones educativas que buscan una forma efectiva de administrar la información de sus estudiantes y profesores y llevar un control de la asistencia de sus estudiantes', en: 'Our application is designed for educational organizations that seek an effective way to manage the information of their students and teachers and keep track of their attendance' },
    LANDING_PAGE_FOOTER_DEVELOPER: { es: 'Desarrollo de', en: 'Development of' },

}
export default TEXTS