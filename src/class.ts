// ประกาศคลาส Course
class Course {
  name: string;
  grade: number;

  constructor(name: string, grade: number) {
    this.name = name;
    this.grade = grade;
  }
}

// ประกาศคลาส Student
class Student {
  studentID: number;
  name: string;
  courses: Course[];

  constructor(studentID: number, name: string, courses: Course[] = []) {
    this.studentID = studentID;
    this.name = name;
    this.courses = courses;
  }

  // เพิ่มรายวิชาใหม่เข้าไปใน Array
  addCourse(course: Course): void {
    this.courses.push(course);
  }

  // คำนวณเกรดเฉลี่ยรวม
  getAverage(): number {
    if (this.courses.length === 0) return 0;
    const total = this.courses.reduce((sum, c) => sum + c.grade, 0);
    return total / this.courses.length;
  }
}

// การทำงานหลัก
const students: Student[] = [
  new Student(1, 'Alice', [
    new Course('Math', 85),
    new Course('Physics', 90),
    new Course('Chemistry', 78),
    new Course('Biology', 82),
  ]),
  new Student(2, 'Bob', [
    new Course('Math', 75),
    new Course('Physics', 80),
    new Course('Chemistry', 72),
    new Course('Biology', 68),
  ]),
  new Student(3, 'Charlie', [
    new Course('Math', 92),
    new Course('Physics', 88),
    new Course('Chemistry', 95),
    new Course('Biology', 90),
  ]),
];

// แสดงผลข้อมูลนักศึกษาทุกคน พร้อมเกรดเฉลี่ย
console.log('=== ข้อมูลนักศึกษาก่อนเพิ่มรายวิชา ===');
students.forEach((s) => {
  console.log(`ID: ${s.studentID}, Name: ${s.name}`);
  s.courses.forEach((c) => {
    console.log(`  วิชา: ${c.name}, เกรด: ${c.grade}`);
  });
  console.log(`  เกรดเฉลี่ย: ${s.getAverage().toFixed(2)}`);
});

// เพิ่มรายวิชาและเกรด คนละ 1 รายวิชา
students[0]?.addCourse(new Course('History', 88));
students[1]?.addCourse(new Course('Geography', 76));
students[2]?.addCourse(new Course('Computer', 93));

// แสดงผลข้อมูลอีกครั้ง
console.log('\n=== ข้อมูลนักศึกษาหลังเพิ่มรายวิชา ===');
students.forEach((s) => {
  console.log(`ID: ${s.studentID}, Name: ${s.name}`);
  s.courses.forEach((c) => {
    console.log(`  วิชา: ${c.name}, เกรด: ${c.grade}`);
  });
  console.log(`  เกรดเฉลี่ย: ${s.getAverage().toFixed(2)}`);
});
