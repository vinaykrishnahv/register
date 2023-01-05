function fn(){
    var firstname=document.getElementById("fname").value;
    var regx1=/[a-z A-Z]+/;
    if(firstname==""){
        alert("firstname is required");
    }
    else{
        if(regx1.test(firstname)){
            alert("valid");
        }
        else{
            alert("invalid");
        }
    }
    var lastname=document.getElementById("lname").value;
    var regx2=/[a-z A-Z]+/;
    if(lastname==""){
        alert("lastname is required");
    }
    else{
        if(regx2.test(lastname)){
            alert("valid");
        }
        else{
            alert("invalid");
        }
    }
    var phone=document.getElementById("pno").value;
    var regx3=/^[6-9][0-9]{9}$/;
    if(phone==""){
        alert("phone is required");
    }
    else{
        if(regx3.test(phone)){
            alert("valid");
        }
        else{
            alert("invalid");
        }
    }
    var email=document.getElementById("email").value;
    var regx4=/^([A-Z a-z 0-9 $ # . * _]{5,20})@([a-z]{2,10}).([a-z .]{2,5})$/;
    if(email==""){
        alert("email is required");
    }
    else{
        if(regx4.test(email)){
            alert("valid");
        }
        else{
            alert("invalid");
        }
    }
    var password=document.getElementById("pass").value;
    var regx5=/[a-z A-Z 0-9 @ $ # _]{8,20}/;
    if(password==""){
        alert("password is required");
    }
    else{
        if(regx5.test(password)){
            alert("valid");
        }
        else{
            alert("invalid");
        }
    }
    var confirm=document.getElementById("cpass").value;
    if(confirm==password){
        alert("password is matching");
    }
    else{
        alert("password is not matching");
    }
}

// function fn(){
//     var a=document.getElementById("uname").value;
//     var regx=/^([A-Z a-z 0-9 $ # . * _]{5,20})@([a-z]{2,10}).([a-z .]{2,5})$/;
//     if(regx.test(a)){
//         alert("valid");
//     }
//     else{
//         alert("invalid");
//     }
// }

// var regx=/xyz/;
// var regx=/xyz/i;
// var regx=/[xyz]abc/;
// var regx=/[a-i]abc/;
// var regx=/[a-z]{10}/;
// var regx=/[a-z]{2,10}/;
// var regx=/^[6-9][0-9]{9}$/; mobile validation
// var regx=/^([A-Z a-z 0-9 $ # . * _]{5,20})@([a-z]{2,10}).([a-z .]{2,5})$/; email validation