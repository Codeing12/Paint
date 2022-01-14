canvas.addEventListener("mousedown",my_mousedown);

function my_mousedown(e)
{
    color=document.getElementById("color").value;
    width_of_line=document.getElementById("width_of_line").value;
    radius=document.getElementById("radius").value;
    mouseEvent="mousedown";
}
canvas.addEventListener("mouseup",my_mouseup);

function my_mouseup(e)
{
    color=document.getElementById("color").value;
    width_of_line=document.getElementById("width_of_line").value;
    radius=document.getElementById("radius").value;
    mouseEvent="mouseup";   
}
canvas.addEventListener("mouseleave",my_mouseleave);

function my_mouseleave(e)
{
    color=document.getElementById("color").value;
    width_of_line=document.getElementById("width_of_line").value;
    radius=document.getElementById("radius").value;
    mouseEvent="mouseleave";   
}
canvas.addEventListener("mousemove",my_mousemove);

function my_mousemove(e)
{
 current_position_of_mouse_x-e.clientX-canvas.offsetLeft;
 current_position_of_mouse_y-e.clienty-canvas.offsetTop; 
 
 if(mouseEvent == "mouseDown"){
     console.log("current position of x and y cordinates =");
     console.log("x ="+ current_position_of_mouse_x + "y ="+ current_position_of_mouse_y);
     ctx.beginPath();
     ctx.strokeStyle();
     ctx.lineWidth();
     ctx.arc(current_position_of_mouse_x, current_position_of_mouse_y, radius, 0, 2*Math.PI);
     ctx.stroke();
 }
}   
