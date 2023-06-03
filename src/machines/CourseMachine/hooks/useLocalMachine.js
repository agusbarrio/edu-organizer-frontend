import { useMemo } from "react"
import { assign, createMachine } from 'xstate';

//type create or edit
function useLocalMachine(edit = false) {
    const machine = useMemo(() => {
        return createMachine({
            /** @xstate-layout N4IgpgJg5mDOIC5QGMD2BXATrMBZAhsgBYCWAdmAHQ4AuAwhtmACL434DEAcgKIAaAFQDaABgC6iUAAdUsEjRKoykkAA9EAJgCMAVkpaRATgDMAdhG6jxkToAsAGhABPRFsMjKO4wDZbADg1fO0NvHW8AX3DHNCwcAmJyKloGWJY2TjoAQS46HgAZUQkkEBk5BSUVdQRvY09dbw0bDR0RU0NDU0cXBD8tSlt29vNAv1tW00joxjjCUgpqMHppsABlGnQIMDIaWG5+YXEVUvlFZWKqnS0-SlMdUz8bbz9TY1tjQy7NC303AJFjFpaax+SYgGJMeJzJKLFJMNYbLY7DgABQASjwAGqFI6yE4Vc6aLTeSiNYxaRqXcwdGqfBBaMaUf6+PzU2yA+mg8EzBLzZLLeGbba7LI5fLY4rHcpnUBVAF9IHeUzk-5K3oiBzORCGDSMvzGfW2F70242TnLSGJBZLVIMMgAMxIUD2gnF0lxUsqiDahko7gaOlJoz8LNppMo3l+pMBwLNqQtvJhy1tDqdaMxrpK7tOnoQlx9fkuOjCNjlWlplnDkdMtm8hiBdljENmlr5NqUKY4ItyBUOEqz+JliF8xP+hY0hgeIREGnL0-D3gXpg0bwjRg0E1BZFQm3gxS5eGbFBxZWzBIQAFoy5qLxEomDzYfodamKx2Me8dK1IhDeWAr6vOSASKmySo6I23JQlasI4AKiK7m6J4Dl+CBktcOgmNW1bPPcwbliYng+DW6FLkY9LGOBB48k+0FgMmjrvh6Z4NDqy7aHq062I0GgztejS2D8E5MqYirNIqFHxlQDpkCQsBEAxp6Dgg7i1O8IgNBhXiGle3RcZQfi1nqVy2OS46BJEkRAA */
            id: 'CourseMachine',
            initial: 'setCourseData',
            states: {
                setCourseData: {
                    on: {
                        NEXT: {
                            target: 'setCourseStudents',
                            actions: [assign({
                                name: (context, event) => event.name,
                                accessPin: (context, event) => event.accessPin,
                            })],
                        },
                    },
                },
                setCourseStudents: {
                    on: {
                        NEXT: {
                            target: 'setCourseStudentAttendanceFormData',
                            actions: [assign({ students: (context, event) => event.students })],
                        },
                        PREV: {
                            target: 'setCourseData',
                            actions: [assign({ students: (context, event) => event.students })],
                        },
                    },
                },
                setCourseStudentAttendanceFormData: {
                    on: {
                        NEXT: {
                            target: edit ? 'editCourse' : 'createCourse',
                            actions: [assign({ studentAttendanceFormData: (context, event) => event.studentAttendanceFormData })],
                        },
                        PREV: {
                            target: 'setCourseStudents',
                            actions: [assign({ studentAttendanceFormData: (context, event) => event.studentAttendanceFormData })],
                        },
                    },
                },
                createCourse: {
                    invoke: {
                        src: 'createCourse',
                        onDone: {
                            target: 'finish',
                        },
                        onError: {
                            target: 'setCourseStudentAttendanceFormData',
                        },
                    },
                },
                editCourse: {
                    invoke: {
                        src: 'editCourse',
                        onDone: {
                            target: 'finish',
                        },
                        onError: {
                            target: 'setCourseStudentAttendanceFormData',
                        },
                    },
                },
                finish: {
                    type: 'final',
                    entry: ['finish'],
                },
            },
        });
    }, [edit])
    return machine
}

export default useLocalMachine