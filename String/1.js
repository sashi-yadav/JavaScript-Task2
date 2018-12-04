function string_parameterized(a){
    var b=a.toLowerCase();
    b=b.replace(/\s/g,"-");
    return b;
}
console.log(string_parameterized("Robin Singh from USA"));