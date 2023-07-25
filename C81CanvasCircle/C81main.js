canvas=document.getElementById("mycanvas");
ctx=canvas.getContext("2d");
color="red";
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=2;
ctx.arc(200,200,40,0,2*Math.PI);
ctx.stroke();

button=document.getElementById("button");
button.addEventListener('click', my_function);
function my_function(e){
    console.log(I am button)
}