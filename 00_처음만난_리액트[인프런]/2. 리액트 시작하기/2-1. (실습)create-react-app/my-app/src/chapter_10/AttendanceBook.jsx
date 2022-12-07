import React from "react";

const students = [
  {
    name: "ddimo",
    id: 1,
  },
  {
    name: "pepe",
    id: 2,
  },
  {
    name: "pair",
    id: 3,
  },
  {
    name: "youngshin",
    id: 4,
  },

]

function AttendanceBook(props) {
  return (
    <ul>
      {students.map((student) => {
        return <li key={student.id}>{student.name}</li>
      })}
    </ul>
  )
}

export default AttendanceBook;