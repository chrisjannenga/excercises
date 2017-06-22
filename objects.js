var classrooms = [{
  teacher: {
    name: "John Keating",
    subject: "Literature",
    age: 57
  },
  students: [{
      name: "John",
      age: 32
    },
    {
      name: "Suzy",
      age: 29
    },
    {
      name: "Jill",
      age: 44
    },
    {
      name: "Joe",
      age: 20
    }]
  }, {
  teacher: {
    name: "Lillian Beauregard",
    subject: "Math",
    age: 74
  },
  students: [{
      name: "Johnny",
      age: 14
    },
    {
      name: "Suzie",
      age: 18
    },
    {
      name: "Jo",
      age: 22
    }]
  }, {
  teacher: {
    name: "Mr. Schmidt",
    subject: "Literature",
    age: 50
  },
  students: [{
      name: "Bob",
      age: 32
    },
    {
      name: "George",
      age: 46
    }]
  }]

// Question 1 - Find the Avg age of all the students //


function classOneTotal() {
  return classrooms[0].students[0].age + classrooms[0].students[1].age + classrooms[0].students[2].age + classrooms[0].students[3].age

}

function classTwoTotal() {
  return classrooms[1].students[0].age + classrooms[1].students[1].age + classrooms[1].students[2].age
}

function classThreeTotal() {
  return classrooms[2].students[0].age + classrooms[2].students[1].age
}

function studentAvg() {
  return (classOneTotal() + classTwoTotal() + classThreeTotal()) / 9;
}

// Question 2 - Find the average of the teachers //

function teacherAvgAge() {
  return (classrooms[0].teacher.age + classrooms[1].teacher.age + classrooms[2].teacher.age) / 3;
}

// Question 3 - How many students are in literature //

function litStudents() {
  return classrooms[0].students.length + classrooms[2].students.length + " Literature Students";
}
