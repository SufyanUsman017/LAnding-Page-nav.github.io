const signupshow=document.getElementById("signupform");
const signinshow=document.getElementById("signin");
function signup(){
    signupshow.style.display="block";
    signinshow.style.display="none";
}
function signin(){
    signinshow.style.display="block";
    signupshow.style.display="none";
}


const stdlist=[];
function submit(){
    const name=document.getElementById("name").value;
    document.getElementById("name").value="";
    
    const username=document.getElementById("username").value;
    document.getElementById("username").value="";
    const email=document.getElementById("email").value;
    document.getElementById("email").value="";
    const number=document.getElementById("number").value;
    document.getElementById("number").value="";
    const password=document.getElementById("password").value;
    document.getElementById("password").value="";
    const lastpassword=document.getElementById("LastPassword").value;
    document.getElementById("LastPassword").value="";
    stdlist.push({name,username,email,number,password,lastpassword})
    console.log(stdlist)
}
function login(){
    const emails=document.getElementById("Email");
    const passwords=document.getElementById("passwords");
    const found=stdlist.find((items)=>{return items.email==emails.value;})
    const founds=stdlist.find((items)=>{return items.password==passwords.value;})
    if(found && founds){
        alert("login sussfully")
        window.location.assign("home.html")
    }
    else{
        alert("register karo bhai")
    }
}