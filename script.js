
function formfunc(){
    const name = document.getElementById("name").value
    const username = document.getElementById("username").value
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value

    // message = "Name : " + name + "\nUsername : " + username + "\nEmail : " + email + "\nPassword : " + "SIKE!!";
    if(name===""){
        alert("'Name' field cannot by empty.")
    }else if(username===""){
        alert("'Username' field cannot be empty.")
    }else if(email===""){
        alert("'Email' field cannot be empty.")
    }else if(password===''){
        alert("'Password' field cannot be empty.")
    }else{
        alert("DAMN, WELCOME HOMIE!")
    }
    // window.alert(message);
    
}

function formfunc1(){
    const name = document.forms["signUpForm"]["name"];
    alert(name);

}
