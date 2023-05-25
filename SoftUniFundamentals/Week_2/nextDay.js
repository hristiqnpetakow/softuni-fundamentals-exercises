function nextDay(year,mounth,day){
    let today = new Date(year,mounth-1,day);
    let tomorrow = new Date(today.getFullYear(),today.getMonth(),today.getDate()+1);

    console.log(tomorrow.getFullYear() + "-" + (tomorrow.getMonth() + 1) + "-" + tomorrow.getDate());
 }
 nextDay(2020, 3, 24);