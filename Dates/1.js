function getDaysInMonth(month,year){
    var date=new Date(year,month,0);
    return date.getDate();
}
console.log(getDaysInMonth(3,2012));