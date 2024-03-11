/** @format */

function createClassRoom(numbersOfStudents) {
  function studentSeat(seat) {
    return function () {
      return seat;
    };
  }

  var students = [];

  for (let i = 0; i < numbersOfStudents; i++) {
    let seatNumber = i + 1;
    students.push(studentSeat(seatNumber));
  }

  return students;
}

var classRoom = createClassRoom(10);

console.log(classRoom[0]());
console.log(classRoom[3]());
console.log(classRoom[9]());
