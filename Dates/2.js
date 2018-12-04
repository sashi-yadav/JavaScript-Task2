function month_name(date)
{
    var month=date.getMonth();
    var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    return months[month];
}
console.log(month_name(new Date("10/11/2009")));