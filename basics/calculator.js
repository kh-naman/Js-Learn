
function calculateGrade(score){
    if(score >= 90)
    {
        return "A"
    }
    else if(score >= 80 && score < 90)
    {
        return "B"
    }
    else if(score >=70 && score < 80)
    {
        return "C"
    }
    else
    {
        return "D";
    }
}

let grade = calculateGrade(88);
console.log(grade);