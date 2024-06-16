/* 1. Student Data: The provided code defines an interface named Student that describes
student information like name, senior status (true/false), and whether they've completed
their assignments (true/false).
o Imagine this as a template for organizing student details.
2. Student List:
o An array named students stores information about several students using the
Student template. Think of this array as your class list!
3. Find Senior Students with Assignments (Optional):
o The code (not shown here) has a function that might find students who are seniors
and have completed their assignments.
o Can you guess why this information might be helpful?
4. Class List Update:
o Imagine you need to update your class list! The code (not shown here) might have
a function that removes students who haven't completed their assignments
(assuming only seniors are responsible).
o Can you think of any reasons why this might be useful (consider limitations)? */
;
const classList = [
    { name: 'Shah', isSenior: false, completedAssignment: true },
    { name: 'Murtaza', isSenior: false, completedAssignment: false },
    { name: 'Mariah', isSenior: true, completedAssignment: true },
    { name: 'Arif', isSenior: true, completedAssignment: true },
    { name: 'Hania', isSenior: true, completedAssignment: false },
    { name: 'Firaque', isSenior: false, completedAssignment: false },
];
let seniorHadassignment = (student) => {
    let list = student.filter(stu => stu.isSenior === true && stu.completedAssignment === true);
    if (list)
        return list;
};
console.log('List of senior students completed assignemnts.\n', seniorHadassignment(classList));
let incompleteAssignment = (student) => {
    let list = [];
    for (const student of classList) {
        if (student.completedAssignment) {
            list.push(student);
        }
    }
    return list;
};
console.log('List of all students had not completed assingment.\n', incompleteAssignment(classList));
export {};
//Created by : M. Zubair Shah
