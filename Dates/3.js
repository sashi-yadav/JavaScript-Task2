function compare_dates(date1,date2){
    var date_1=new Date(date1);
    var date_2=new Date(date2);
    if(date_1>date_2)
    return "Date1 > Date2";
    else if(date_1 < date_2)
    return "Date2 > Date1";
    else
    return "Date1 = Date2";
}
console.log(compare_dates(new Date('11/14/2013 00:00'), new Date('11/14/2013 00:01')));