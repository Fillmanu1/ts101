// 1. ประกาศ Employee เป็น Interface
interface Employee {
  id: number;
  name: string;
  position: string;
  salary: number;
}

// 2. สร้างอาร์เรย์ employees ที่มีอย่างน้อย 3 คน
const employees: Employee[] = [
  { id: 1, name: 'Somchai', position: 'Developer', salary: 30000 },
  { id: 2, name: 'Suda', position: 'Designer', salary: 28000 },
  { id: 3, name: 'Anan', position: 'Manager', salary: 50000 },
];

// 3. เขียนฟังก์ชัน findEmployeeByName
function findEmployeeByName(name: string): Employee | undefined {
  return employees.find(emp => emp.name === name);
  // ใช้ find แทน filter เพื่อคืนค่าเป็น object หรือ undefined :contentReference[oaicite:0]{index=0}
}

// 4. แสดงผลข้อมูลพนักงานทั้งหมด
function printAllEmployees(): void {
  console.log('พนักงานทั้งหมด:');
  employees.forEach(emp => {
    console.log(`ID: ${emp.id}, Name: ${emp.name}, Position: ${emp.position}, Salary: ${emp.salary}`);
  });
}

// 5. แสดงผลการค้นหาพนักงาน
function printSearchResult(name: string): void {
  const result = findEmployeeByName(name);
  if (result) {
    console.log('พบพนักงาน:');
    console.log(`ID: ${result.id}, Name: ${result.name}, Position: ${result.position}, Salary: ${result.salary}`);
  } else {
    console.log(`ไม่พบพนักงานที่ชื่อ "${name}"`);
  }
}

// เรียกใช้งาน
printAllEmployees();
console.log('---');
printSearchResult('Suda');
printSearchResult('John');
