/* exported getStudentNames */
interface Student {
  name: string;
}

function getStudentNames(students: Student[]): string[] {
  const studentNames: string[] = [];
  for (const student of students) {
    studentNames.push(student.name);
  }
  return studentNames;
}
