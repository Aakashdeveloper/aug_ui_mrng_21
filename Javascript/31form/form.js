const getId = () => {
    var id = Math.floor(Math.random()*100000);
    document.getElementById('uid').value=id
}

const validateFname = () => {
    var name = document.getElementById('fname').value;
    if(name.trim().length==0){
        document.getElementById('fout').innerText="Please Enter First Name"
    }else{
        document.getElementById('fout').innerText=""
    }
}

function validateEmail(){
    var email = document.getElementById('email').value;
    if(email.trim().length==0){
        document.getElementById('eout').innerText="Please Enter Email"
    }else{
        if(email.match("^([a-zA-Z0-9]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,5})$")==null){
            document.getElementById('eout').innerText="Please Enter Valid Email"
        }else{
            document.getElementById('eout').innerText=""
        }
    }
}

function validatePassword(){
    var pwd = document.getElementById('password').value;
    if(pwd.length<15){
        if(pwd.length<8){
            document.getElementById('pout').innerText="Min length of password is 8";
            document.getElementById('ppout').style.display="block";
            document.getElementById('ppout').style.backgroundColor="red"
        }else if(pwd.length<11){
            document.getElementById('pout').innerText="";
            document.getElementById('ppout').style.backgroundColor="orange"
        }
    }else{
        document.getElementById('ppout').style.backgroundColor="green"
    }
}

function showPassowrd(){
    var pwd = document.getElementById('password');
    if(pwd.type == 'password'){
        pwd.type = "text"
    }else{
        pwd.type = "password"
    }
}

function cpassword(){
    var pwd = document.getElementById('password').value;
    var cpwd = document.getElementById('cpwd').value; 
    if(pwd !== cpwd){
        document.getElementById('cpout').innerText="Please Enter Correct Password"
    }else{
        document.getElementById('cpout').innerText=""
    }
}

const getCity = () => {
    var city = document.getElementById('city').value;
    var mycity = city? city:'No City'
    document.getElementById('cityOut').innerText=`Your City is ${mycity}`
}