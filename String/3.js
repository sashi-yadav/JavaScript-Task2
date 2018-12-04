function insert(string,text,pos){
    if(typeof text == 'undefined'){
        text = "";
    }
     if(typeof pos == 'undefined'){
        pos=0;
    }
    return string.slice(0,pos)+text+string.slice(pos);
}
console.log(insert('We are doing some exercises.','JavaScript ',18));