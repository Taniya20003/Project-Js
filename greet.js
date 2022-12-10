//DOM
window.addEventListener('load',takeinput);


function takeinput(){
    let firstname=document.getElementById("first").value;
    let lastname=document.getElementById("last").value;
    output(firstname,lastname);
}
const cases = (str)=>str.charAt(0).toUpperCase()+str.substring(1).toLowerCase();

const output=(f,l)=>document.getElementById("msg").innerText=`Welcome ${cases(f)+" "+cases(l)}`;


function clearall(){
    document.getElementById("msg").innerText="";
    document.getElementById("first").value="";
    document.getElementById("last").value="";
    document.getElementById("first").focus();
}