/* write a code which can gives grades to students according to their grades
90_100,A
70-89 ,B
60-69 ,C
50-59 ,D
0-49  ,F*/

let scores = 98;
let grade;

if (scores >=90 && scores <=100 ) {
    grade = "A";
} else if (scores >= 70 && scores <= 89) {
        grade = "B";
    } else if (scores >= 60 && scores <= 69){
        grade = "C";
    } else if (scores >= 50 && scores <= 59) {
        grade = "D";
    } else if (scores >= 0 && scores <= 49) {
        grade = "F";
    }
 
    console.log(grade);