 function nextDay(year,mounth,day){
    let today = new Date(year,mounth-1,day)
    let tomorrow = new Date(today.getFullYear(),today.getMonth(),today.getDate()+1)
    console.log(tomorrow.getFullYear() + "-" + (tomorrow.getMonth() + 1) + "-" + tomorrow.getDate())
 }

 function reverse(string){
    let reversed = string.split("").reverse().join("");
    console.log(reversed)
 }

 function points(...coordinats){
    let result = Math.pow(Math.abs(coordinats[0]-coordinats[2]),2) + Math.pow(Math.abs(coordinats[1]-coordinats[3]),2)
    console.log(Math.sqrt(result))
 }