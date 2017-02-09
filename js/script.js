//------------OrderNow----------------------------------- 
$(document).ready(function(){
  
	
	$("#orderNow").click(function()
	{
		alert("Thank You for Ordering!");
	});
	
	$("#orderNow2").click(function()
	{
		alert("Thank You for Ordering!");
	});

});

//---------Showing time--------------------------------
function updateTime() {
    document.getElementById("time").innerHTML = new Date().toTimeString();
}
setInterval(updateTime, 1000);

//----------#glyphAnimated animation------------------
var square = document.getElementById("glyphAnimated");
var angle = 0;
function rotate() {
    angle = (angle + 2)%360;
    square.style.transform = "rotate(" + angle + "deg)";
    window.requestAnimationFrame(rotate);
}
var id = window.requestAnimationFrame(rotate);
//-------------------------------------------------------
