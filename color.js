var colors=generateRandomColors(6);
var squares=document.querySelectorAll(".square"); 
var pickedColor=pickColor();
var colorDisplay=document.getElementById("colorDisplay");
var messageDisplay=document.querySelector("#message"); 
var h1=document.querySelector("h1"); 
var resetButton=document.querySelector("#reset");
var easyBtn=document.querySelector("#easyBtn");
var hardBtn=document.querySelector("#hardBtn");

easyBtn.addEventListener("click",function(){
	hardBtn.classList.remove("selected");
	easyBtn.classList.add("selected");
	colors=generateRandomColors(3);
	pickedColor=pickColor();
	colorDisplay.textContent=pickedColor;
	for(var i=0;i<squares.length;i++)
	{
		if(colors[i])
		{
			squares[i].style.background=colors[i];
		}
		else
		{
			squares[i].style.display="none";
		}
	}
});
hardBtn.addEventListener("click",function(){
	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");
	colors=generateRandomColors(6);
	pickedColor=pickColor();
	colorDisplay.textContent=pickedColor;
	for(var i=0;i<squares.length;i++)
	{
		squares[i].style.background=colors[i];		
		squares[i].style.display="block";
		
	}
});
resetButton.addEventListener("click",function(){
	//generate all new colors
	colors=generateRandomColors(6);
	//pick a new random color from array
	pickedColor=pickColor();
	//change colorDisplay to match picked color
	colorDisplay.textContent=pickedColor;
	messageDisplay.textContent= "";
	this.textContent="New Colors";
	//change colors of squares
	for(var i=0;i<squares.length;i++)
		squares[i].style.background=colors[i];
	h1.style.background="steelblue";
})
colorDisplay.textContent=pickedColor; 
for(var i=0;i<squares.length;i++)
{
	squares[i].style.background=colors[i];
	squares[i].addEventListener("click",function(){
		var cc=this.style.background;
		if(cc===pickedColor)
			{
				messageDisplay.textContent="Correct";
				resetButton.textContent="Play Again?"
				changeColors(cc);
				h1.style.background=cc;
			}
		else
			{
				this.style.background="#232323";
				messageDisplay.textContent="Try Again";
			}
	});
	
}
function changeColors(color)
{
	for(var i=0;i<squares.length;i++)
	{
		squares[i].style.background=color;
	}
}
function pickColor()
{
	var random=Math.floor(Math.random() * colors.length);
	return colors[random];
}
function generateRandomColors(num)
{
	var arr=[];
	for(var i=0;i<num;i++)
	{
		//get random color and push into array.
		arr.push(randomColor());

	}
	return arr;
}
	function randomColor()
	{
		var r=Math.floor(Math.random()*256);
		var g=Math.floor(Math.random()*256);
		var b=Math.floor(Math.random()*256); 
		return "rgb(" + r + ", " + g + ", " + b + ")";
	}


