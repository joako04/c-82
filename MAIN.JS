can = document.getElementById("can");
ctx = can.getContext("2d");

mouseEvent = "";

color ="red";
radium =2;
w_line = 1;

can.addEventListener("mousedown",mi_mouse_down);
function mi_mouse_down(e){

    color =document.getElementById("c").value;
    radium =document.getElementById("r").value;
    w_line = document.getElementById("al").value;

    console.log(color);
    console.log(radium);
    console.log(w_line);
mouseEvent = "mousedown";

}



can.addEventListener("mouseup",mi_mose_up);



function mi_mose_up(e)
{
    mouseEvent = "mouseup";
}
can.addEventListener("mouseleave",mi_mose_leave);
function mi_mose_leave(e)
{
mouseEvent = "mouseleave"
}
can.addEventListener("mousemove",mi_mose_move);
function mi_mose_move(e)
{
current_position_of_mouse_x = e.clientX - can.offsetLeft;
current_position_of_mouse_y = e.clientY - can.offsetTop;
if (mouseEvent == "mousedown"){
    console.log("current position of mouse x, y");
console.log("x=" + current_position_of_mouse_x);
console.log("y=" + current_position_of_mouse_y);
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = w_line;
ctx.arc(current_position_of_mouse_x, current_position_of_mouse_y, radium, 0, 2 * Math.PI);
ctx.stroke();
}
}