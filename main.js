var classmates=[];
function submitf()
{
var n1=document.getElementById("s1").value;
var n2=document.getElementById("s2").value;
var n3=document.getElementById("s3").value;

classmates.push(n1);
classmates.push(n2);
classmates.push(n3);
console.log(classmates);
document.getElementById("output_text").innerHTML=classmates;
document.getElementById("Submit").style.display="none";
document.getElementById("Sort").style.display="inline-block";
}
function sortf()
{
    classmates.sort();
    console.log(classmates);
    document.getElementById("output_text").innerHTML=classmates;

}