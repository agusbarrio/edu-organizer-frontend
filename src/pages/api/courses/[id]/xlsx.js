import _ from 'lodash';
import * as xlsx from 'xlsx-js-style';
import moment from 'moment';
export default async function handler(req, res) {
    const { id } = req.query;
    await fetch(`${process.env.NEXT_PUBLIC_API_URL}/courses/${id}?variant=REPORT`, {
        headers: req.headers
    })
        .then(async response => {
            const data = await response.json()
            return {
                response: response,
                data
            }
        })
        .then(({ response, data }) => {
            if (response.ok) {
                const students = data.students;
                const classSessions = data.classSessions;
                const getRowStyles = (customStyles) => {
                    const defaultStyles = {
                        font: {
                            bold: true,
                            sz: 14,
                            color: { rgb: 'FF000000' }
                        },
                        fill: {
                            fgColor: { rgb: 'FFA0A0A0' }
                        },

                        alignment: {
                            wrapText: true,
                            vertical: 'center',
                            horizontal: 'center'
                        },
                    }
                    return _.merge(defaultStyles, customStyles);
                }
                // name and dates of class sessions
                const firstRow = [{
                    v: 'NOMBRE',
                    s: getRowStyles(),
                }, ...classSessions.map(cs => ({
                    v: `${moment(cs.date).format('D-MMM')}`,
                    s: getRowStyles()
                }))];

                // attendance data
                const nextRows = students.map(student => {
                    const result = [`${student.firstName} ${student.lastName}`.toUpperCase()];
                    const classSessionsStudent = student.classSessionsStudent;
                    classSessions.forEach(cs => {
                        const csStudent = classSessionsStudent.find(css => css.classSessionId === cs.id);
                        if (csStudent?.isPresent) {
                            result.push('X');
                        } else {
                            result.push('');
                        }
                    });
                    return result
                });
                // totals
                const lastRow = [{
                    v: 'TOTAL',
                    s: getRowStyles(),
                }, ...classSessions.map(cs => {
                    //return an excel formula for calculating the total of the column
                    const columnNumber = classSessions.indexOf(cs) + 1;
                    const letterColumn = xlsx.utils.encode_col(columnNumber);
                    const result = {
                        t: 'n',
                        f: `COUNTIF(${letterColumn}2:${letterColumn}${students.length + 1}, "X")`,
                        s: getRowStyles({ font: { bold: false } })
                    }
                    return result
                })];

                const ws = xlsx.utils.aoa_to_sheet([firstRow, ...nextRows, lastRow]);
                const wb = xlsx.utils.book_new();

                const fileName = data.name
                xlsx.utils.book_append_sheet(wb, ws, fileName);
                const buffer = xlsx.write(wb, { type: 'buffer', bookType: 'xlsx' });
                res.setHeader('Content-Disposition', `attachment; filename=${data.name}.xlsx`);
                res.status(200)
                res.end(buffer);
            } else {
                res.status(response.status ?? 500).json(data)
            }
        })

}
