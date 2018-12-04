function yesterday(date){
    var d=new Date(date);
    var d1=new Date(d.setDate(d.getDate()-1));
    return d1;
}
console.log(yesterday('Nov 15, 2014')); 