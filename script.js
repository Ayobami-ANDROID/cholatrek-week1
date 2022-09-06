var Students = [
    {
        Name:'Mike',   
        biology:84,
        physics:70,
        chemistry:64,
        mathematics:86,
        class: 'sss1'
    },
    {
        Name:'Precious',
        biology:66,
        physics:80,
        chemistry:67,
        mathematics:75,
        Class: 'sss3'
    },
    {

        Name:'Samuel',    
        biology:59,
        physics:81,
        chemistry:97,
        mathematics:56,   
        Class: 'sss1'
    },
    {
        Name:'Moses',
        biology:60,
        physics:89,
        chemistry:97,
        mathematics:68,
        Class: 'sss2'
    }
]

function getStudentResult (name, course) {
    var nameFound = false;
    var courseFound = false;
    var student = null;
    var studentScore = null;
    var studentGrade = null;
    // check to make sure that the student's name exists in the Student object
    for (var i=0; i<=Students.length-1; i++) {
        // we found the student
        if (Students[i].Name.toLowerCase() === name.toLowerCase()) {
            student = i;
            nameFound = true;
            break;
        }
    }
    // we did not find the student
    if (!nameFound) {
        console.log(`No student named ${name} was found!`);
        return;
    }
    // check to make sure that the course exists for the student
    for (var key in Students[student]) {
        if (key === course.toLowerCase()) {
            // we found the course
            courseFound = true;
            break;
        }
    }
    // we did not find the course
    if (!courseFound) {
        console.log(`No course named ${course} was found for student named ${name}!`);
        return;
    }
    // grade the student
    studentScore = Students[student][course];
    if (studentScore >= 70 && studentScore <= 100) {
        studentGrade = 'A';
    } else if (studentScore >= 50 && studentScore <= 69) {
        studentGrade = 'B';
    } else if (studentScore >= 45 && studentScore <= 49) {
        studentGrade = 'C';
    } else {
        studentGrade = 'D';
    }
    console.log(`Student with name ${name} has grade ${studentGrade} in ${course}`);
    // return `Student with name ${name} has grade ${studentGrade} in ${course}`;
}


getStudentResult('samuel','biology')



