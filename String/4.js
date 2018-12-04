function repeat_string(str,times){
    if(typeof str == 'undefined' || typeof times == 'undefined'){
        return "Error in string or count";
    }
    else{
        var str1=str;
        let i;
        for(i = 1; i < times; i++)
        str+=str1;
        return str;
    }
}
console.log(repeat_string("a",4));