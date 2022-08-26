const courses = [
  { _id: 1, title: "JavaScript I" },
  { _id: 2, title: "HTML y CSS I" },
];

const students = [
  { _id: 1, name: "Pedro Perez" },
  { _id: 2, name: "Maria Gomez" },
];

const enrollments = [
  { course_id: 1, student_id: 1 },
  { course_id: 2, student_id: 1 },
  { course_id: 2, student_id: 2 },
];

//Diego

/* const printCourses = (courses, students, enrollments) => {
  let cursos = [];
  courses.map((item) => {
    cursos.push(item._id);
  });
  
  cursos.forEach((elemento, index) => {
    let arrCurso = enrollments.filter((item) => item.course_id === elemento);
    console.log(courses[index].title);
    arrCurso.forEach((cursoOk) => {
      students.map((estudiante) => {
        if (cursoOk.student_id === estudiante._id) {
          console.log(estudiante.name);
        }
      });
    });
  });
};

printCourses(courses, students, enrollments); */

// Ruben

/* const printCourse = (courses, students, enrollments) => {
  courses.map((course) => {
    let c_id = course._id;
    let c_name = course.title;
    console.log(c_name);
    students.map((student) => {
      let s_id = student._id;
      let s_name = student.name;
      enrollments.map((enrollment) => {
        let course_id = enrollment.course_id;
        let student_id = enrollment.student_id;
        if (course_id === c_id && s_id === student_id) {
          console.log(s_name);
        }
      });
    });
  });
};
printCourse(courses, students, enrollments); */

// Jairo

/* const printCourse = (enrollments, students, courses) => {
  let result = [];
  let final = "";
  enrollments.map((item) => {
    let idCourse = item.course_id;
    let idStudent = item.student_id;
    const course = courses.map((item) => {
      if (item._id === idCourse) {
        result.push(item.title);
      }
    });
    const student = students.map((item) => {
      if (item._id === idCourse) {
        result.push(item.name);
      }
    });
  });
  result.pop();
  result.pop();
  result.forEach((element) => {});
  return `- ${result[0]} \
          * ${result[1]} \
\
- ${result[2]}  /
        * ${result[3]}`;
};
console.log(printCourse(enrollments, students, courses)); */

// Boris

const printStudentPerCourse = (students, courses, enrollments) => {
  courses.map((course) => {
    console.log(course.title);
    enrollments.map((enrollment) => {
      if (course._id === enrollment.course_id) {
        students.filter((student) => {
          if (student._id === enrollment.student_id) {
            console.log(student.name);
          }
        });
        //console.log(enrollment.student_id);
      }
    });
  });
};
printStudentPerCourse(students, courses, enrollments);

/* - JavaScript I
  * Pedro Perez
- HTML y CSS I
  * Pedro Perez
  * Maria Gomez */

/* - Pedro Perez
  * JavaScript I
  * HTML y CSS I
- Maria Gomez
  * HTML y CSS I */
