function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.marks = [];
}

Student.prototype.setSubject = function(subjectName) {
  this.subject = subjectName;
};

Student.prototype.addMarks = function(...marksToAdd) {
  if (this.marks) {
    this.marks.push(...marksToAdd);
  }
};

Student.prototype.getAverage = function() {
  if (!this.marks || this.marks.length === 0) {
    return 0;
  }
  
  let sum = this.marks.reduce((acc, curr) => acc + curr, 0);
  return sum / this.marks.length;
};

Student.prototype.exclude = function(reason) {
  delete this.subject;
  delete this.marks;
  this.excluded = reason;
};

let student1 = new Student('Васелиса', 'женский', 19);
student1.setSubject('Algebra');
student1.addMarks(4, 5, 4, 5);
console.log(student1.getAverage());

let student2 = new Student('Артем', 'мужской', 25);
student2.setSubject('Geometry');
student2.addMarks(3, 2, 4);
student2.exclude('плохая учеба');
console.log(student2.excluded);
