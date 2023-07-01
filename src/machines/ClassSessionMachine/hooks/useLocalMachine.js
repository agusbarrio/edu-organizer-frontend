import _ from "lodash";
import moment from "moment";
import { useMemo } from "react"
import { assign, createMachine } from 'xstate';

function useLocalMachine(edit) {
    const machine = useMemo(() => {
        return createMachine({
            /** @xstate-layout N4IgpgJg5mDOIC5QDkwHcDCB7ArgJ1jAwBsBDWWAWVIGMALASwDswA6MAN1OJ1IBcwAZTB4ODGmADEAbQAMAXUSgADllgM+DLEyUgAHogBMANgAcrQwGYALJYDsAVgA0IAJ6IHh0wF9vL1Ji4BERkFNT0zGyc3LwCwqLiUtIAjIpIIKrqmtq6Bggm5la2ji7uCNamsr7+6Nj4hCTkVLSMLKwwfIJ8OBBgTHywkhDabMwcWADWbAF1wY1hLZHtYJ3dvf2wCGNYNPxaTHLyh7qZGvu5iJayxqzWZiVuiLaG1SAzQQ2hzRFtHV09fQGkhEeCweFYyjIfAAZmCALasd71EJNcKtNh-NaAzbbXbZA4KY7pU74i4IK43O6mB5lBymYyvJFzL5opaYgEbABiYIAghA4cwhiNWNspojah8UQsfhiVv91gNuXg+QKmFsmOM8ftDkSVGozjl0nlLMZLKxTABOUzFZyPBDGawOVgORkS5Hzb7o5arDmK3n8wUgsEQqGwvAIpmfVGLX5yrFc-2q9WavbaHUKE760lGy6m81Wm2lRCOZKsWR2UzJQwuvxvN3M6My1iEYhgGh8AAKeDggPl2MkyAAogANAAquoyWfOOfJyTsrAtxlkFvstrKldkzorVZrNUC7pZMaiXB4-DAg7hyj4rhkGeJU8NoDyJk3JrsyWpa8QFuSFtYyQcYxq1dfcG2lL1olPAQLyvG8UjSPUsmnJ8jCXVg3w-GlvzsecAKA3c61AqNwKWQhO27Qh+j7DYABF+FIAcR3HO9EINHQZ0sK5-0-IsEGSWRLCdPDgNrSMpU9UiVi7HsqPjAY6L4BiOwAJUHAA1CcSWQ-RLi4zCvz45JbFYOwbFXEDZmIiS2hobszzEj0hTaUVpnrKzWRsuyBAcr5kx2VMCSOFjJyQx8dPJUzbkMRceLtHdDHQncLMlD0PLYWywHstzxOBPBQXBSF+DDCNstSo9WAyrKiPEvytTTQlgq0sLjUi6xovuAzkksZJS0rES90s8S0vYCANA9YQKH2JzRg1SZXOqsqm0gMavgm9RtFqgL0wQkK2LJTinXa2Kyi699Ev6wjBsWiDRr4ca4HWphcvykMivhcUFsPJbbvuyaNtxLaGp2pr2JQ8lBIsGKsL42xNz6mtayYLBengdIfMbdFM1C0HwoAWgqXibGsW4LVJ0nqTayxqzsZKDwxpZINiIQRDECQsb2mdZF4zwfFE0qvq9dkFVR1jszBrm7WMIDnVpsDrNlH1haVFVmHZsXwol9drGsWX3PKls23ImTFexNXtLyTXEH46sZb5z76baRmzxg68zeaxBLcMpddaG-WpIo3s5NgBTSDdnGLd4qsLWJgj0ZIzzMu8-mmjDslPaM6KfeuhmftWh7tJBtPI+MfjbYGlKBaWaFmAYWA6FTznI7sC0Xl8bwgA */
            id: 'ClassSessionMachine',
            initial: 'evaluateService',
            states: {
                evaluateService: {
                    always: [
                        {
                            target: 'getStudents',
                            cond: () => !edit,
                        },
                        {
                            target: 'getStudentsForAdmin',
                        },
                    ],
                },
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
                getStudentsForAdmin: {
                    invoke: {
                        src: 'getStudentsForAdmin',
                        onDone: {
                            target: 'selectPresentStudents',
                            actions: [assign({
                                students: (context, event) => event.data
                            })],
                        },
                        onError: {
                            target: 'finish',
                        }
                    }
                },
                selectPresentStudents: {
                    on: {
                        NEXT:
                        {
                            target: 'evaluateEmpty',
                            actions: [assign({
                                presentStudentsIds: (context, event) => event.presentStudentsIds,
                                presentStudentsData: (context, event) => context.presentStudentsData.filter(studentData => event.presentStudentsIds.includes(studentData.id)),
                                date: (context, event) => moment(event.date)
                            })]
                        },
                    }
                },
                evaluateEmpty: {
                    always: [
                        {
                            target: 'createNewCourseClass',
                            cond: (context) => (_.isEmpty(context.presentStudentsIds) && !edit),
                        },
                        {
                            target: 'editClassSession',
                            cond: (context) => (_.isEmpty(context.presentStudentsIds) && edit),
                        },
                        {
                            target: 'setPresentStudentsData',
                        },
                    ],
                },
                setPresentStudentsData: {
                    on: {
                        NEXT: {
                            target: edit ? 'editClassSession' : 'createNewCourseClass',
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
                            target: 'finish',
                        },
                    },
                },
                editClassSession: {
                    invoke: {
                        src: 'editClassSession',
                        onDone: {
                            target: 'finish',
                        },
                        onError: {
                            target: 'finish',
                        },
                    },
                },
                finish: {
                    type: 'final',
                    entry: ['finish'],
                },
            },
        })
    }, [edit])


    return machine
}

export default useLocalMachine