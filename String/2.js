function repeat(str,times){
    var str1=str;
    if(typeof times != 'undefined' && times!= 1){
        let i;
        for(i = 1 ; i < times ; i++)
        {
            str=str.concat(str1);
        }
        return str;
    }
    else
    return str;
}
console.log(repeat("ha!",5));