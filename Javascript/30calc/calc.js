function calc(opt){
    var a = document.getElementById('first').value;
    var b = document.getElementById('second').value;
    var out;
    if(a.trim().length>0 || a.trim().length>0){
        if(isNaN(a) || isNaN(b)){
            out = "Please Enter Valid Value" 
        }else{
            if(opt == 'Add'){
                out = Number(a)+Number(b);
            }else{
                out = Number(a)-Number(b);
            }
        }
    }else{
        out = "Please Enter Value" 
    }
 
    document.getElementsByClassName('output')[0].innerText=out
}


/*function add(){
    var a = document.getElementById('first').value;
    var b = document.getElementById('second').value;
    var out = Number(a)+Number(b);
    document.getElementsByClassName('output')[0].innerText=out
}
function sub(){
    var a = document.getElementById('first').value;
    var b = document.getElementById('second').value;
    var out = Number(a)-Number(b);
    document.getElementsByClassName('output')[0].innerText=out
}
var a = 10
undefined
var b = "hi"
undefined
isNaN(a)
false
isNaN(b)
true*/