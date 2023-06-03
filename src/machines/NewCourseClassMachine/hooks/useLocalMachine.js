import { useMemo } from "react"
import { assign, createMachine } from 'xstate';

function useLocalMachine() {
    const machine = useMemo(() => {
        return createMachine({
            /** @xstate-layout N4IgpgJg5mDOIC5QGMD2BXATrMBZAhsgBYCWAdmAHQ4AuAwhtmACL434DEAcgKIAaAFQDaABgC6iUAAdUsEjRKoykkAA9EAJgCMAVkpaRATgDMAdhG6jxkToAsAGhABPRFsMjKO4wDZbADg1fO0NvHW8AX3DHNCwcAmJyKloGWJY2TjoAQS46HgAZUQkkEBk5BSUVdQRvY09dbw0bDR0RU0NDU0cXBD8tSlt29vNAv1tW00joxjjCUgpqMHppsABlGnQIMDIaWG5+YXEVUvlFZWKqnS0-SlMdUz8bbz9TY1tjQy7NC303AJFjFpaax+SYgGJMeJzJKLFJMNYbLY7DgABQASjwAGqFI6yE4Vc6aLTeSiNYxaRqXcwdGqfBBaMaUf6+PzU2yA+mg8EzBLzZLLeGbba7LI5fLY4rHcpnUBVAF9IHeUzk-5K3oiBzORCGDSMvzGfW2F70242TnLSGJBZLVIMMgAMxIUD2gnF0lxUsqiDahko7gaOlJoz8LNppMo3l+pMBwLNqQtvJhy1tDqdaMxrpK7tOnoQlx9fkuOjCNjlWlplnDkdMtm8hiBdljENmlr5NqUKY4ItyBUOEqz+JliF8xP+hY0hgeIREGnL0-D3gXpg0bwjRg0E1BZFQm3gxS5eGbFBxZWzBIQAFoy5qLxEomDzYfodamKx2Me8dK1IhDeWAr6vOSASKmySo6I23JQlasI4AKiK7m6J4Dl+CBktcOgmNW1bPPcwbliYng+DW6FLkY9LGOBB48k+0FgMmjrvh6Z4NDqy7aHq062I0GgztejS2D8E5MqYirNIqFHxlQDpkCQsBEAxp6Dgg7i1O8IgNBhXiGle3RcZQfi1nqVy2OS46BJEkRAA */
            id: 'NewCourseClassMachine',
            initial: 'getStudents',
            states: {
                getStudents: {
                    invoke: {
                        src: 'getStudents',
                        onDone: {
                            target: 'selectPresentStudents',
                            actions: [assign({
                                students: (context, event) => event.data,
                            })],
                        },
                        onError: {
                            target: 'finish',
                        }
                    }
                },
                selectPresentStudents: {
                    on: {
                        NEXT: {
                            target: 'setPresentStudentsData',
                            actions: [assign({
                                presentStudentsIds: (context, event) => event.presentStudentsIds,
                            })],
                        }
                    }
                },
                setPresentStudentsData: {
                    on: {
                        NEXT: {
                            target: 'createNewCourseClass',
                            actions: [assign({
                                presentStudentsData: (context, event) => event.presentStudentsData,
                            })],
                        },
                        PREV: {
                            target: 'selectPresentStudents',
                            actions: [assign({
                                presentStudentsData: (context, event) => event.presentStudentsData,
                            })],
                        }
                    },
                },
                createNewCourseClass: {
                    invoke: {
                        src: 'createNewCourseClass',
                        onDone: {
                            target: 'finish',
                        },
                        onError: {
                            target: 'setPresentStudentsData',
                        },
                    },
                },
                finish: {
                    type: 'final',
                    entry: ['finish'],
                },
            },
        })
    }, [])


    return machine
}

export default useLocalMachine