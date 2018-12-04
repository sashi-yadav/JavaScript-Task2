function is_weekend(date){
var d=new Date(date);
var week=d.getDay();
if(1 <= week && week <= 5)
{
    return "not weekend";
}
else
return "weekend";
}
console.log(is_weekend('Nov 17, 2014'));