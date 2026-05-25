
// Part 3 Question 3
window.addEventListener("load",function(){
     console.log("Zora")
 })

// Part 3 Question 4
document.querySelector("h1").addEventListener("click",function(){
     this.style.display = "none"
 })


// Part 3 Question 5
document.querySelector("a:nth-of-type(3) img").addEventListener("mouseover",function(){
     this.style.border = "15px solid green"
 })


// Part 3 Question 6
document.querySelector('.style').addEventListener("focus",function(){
     this.style.backgroundColor = "white";
 })

document.querySelector('.style').addEventListener("blur",function(){
     this.style.backgroundColor = "bisque";
 })

 
// Part 3 Question 7
document.querySelector(".style2").addEventListener("click", function(){
  document.querySelector("#maincontent").style.backgroundImage = "url(../images/beach.jpg)";
})


// Part 3 Question 8