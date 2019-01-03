


$(document).ready(function(){
	
document.body.onmousedown = function() { return false; } //so page is unselectable

	//Canvas stuff
	var canvas = $("#canvas")[0];
	var ctx = canvas.getContext("2d");
	var w = $("#canvas").width();
	var h = $("#canvas").height();
	var mx, my;

	var boxSize =10;
	var col=Math.round(w/boxSize);
	var rows=Math.round(h/boxSize);
	
	var cells=[];
	var tally=[];
	var offCells=[];
	
	var playerx;
	var playery;
	
	


	
	
	
	/////////////////////////////////
	////////////////////////////////
	////////	GAME INIT
	///////	Runs this code right away, as soon as the page loads.
	//////	Use this code to get everything in order before your game starts 
	//////////////////////////////
	/////////////////////////////
	function init()
	{
	
	for(var i=0;i<col;i++)
	{
	  cells[i]=[];
	  tally[i]=[];
	  offCells[i]=[]
	  for( var j=0;j<rows;j++)
	  {
	    cells[i][j]= Math.round(Math.random());
	    offCells[i][j]=cells[i][j];
	
	  }
	
	
	}
	
	
	//////////
	///STATE VARIABLES
	
	//////////////////////
	///GAME ENGINE START
	//	This starts your game/program
	//	"paint is the piece of code that runs over and over again, so put all the stuff you want to draw in here
	//	"60" sets how fast things should go
	//	Once you choose a good speed for your program, you will never need to update this file ever again.

	/*if(typeof game_loop != "undefined") clearInterval(game_loop);
	game_loop = setInterval(paint, 10);*/
	}

	init();	
	
	function rand(n){
	return Math.floor(Math.random()*n);
	}
	
	///////////////////////////////////////////////////////
	//////////////////////////////////////////////////////
	////////	Main Game Engine
	////////////////////////////////////////////////////
	///////////////////////////////////////////////////
	function paint()
	{
	
	ctx.fillStyle = 'grey';
	ctx.fillRect(0,0, w, h);	
	
	
	
	for(var i=0;i<col;i++)
	{
	  for( var j=0;j<rows;j++)
	  {	
	
	     ctx.strokeRect(i*boxSize,j*boxSize,boxSize,boxSize);
	
	
	
	
	     if(cells[i][j]==1)
	    {
	     ctx.fillStyle="white";
	     //ctx.fillStyle='rgb(' + rand(255) +  ',' + rand(255) + ',' + rand(255) + ')';
	     ctx.fillRect(i*boxSize,j*boxSize,boxSize,boxSize);
	
	    }else ctx.fillStyle="black";
	
	    ctx.fillRect(i*boxSize,j*boxSize,boxSize,boxSize);
	    ctx.fillStyle = 'red';
	
	
	  }
	
	}
	life();
	refresh();
	
	
	
	
	requestAnimationFrame(paint);
	}////////////////////////////////////////////////////////////////////////////////END PAINT/ GAME ENGINE
	paint();
	function refresh()
	{
	  for(var i=0;i<col;i++)
	  {
	    for( var j=0;j<rows;j++)
	    {	
	      cells[i][j]=offCells[i][j];
	
	    }
	
	  }
	
	}
	
	function count(x,y)
	{
		var count = 0;
	
		for(var i=0;i<3;i++)
		{
			for( var j=0;j<3;j++)
			{	
				if(x-1+i>=0&&y-1+j>=0&&x-1+i<=col-1&&y-1+j<=rows-1)
				{
					if(cells[(x-1)+i][(y-1)+j]==1)
					{
						count++;
					}
	
				}
	
			}
	
		}
	
		if(cells[x][y] == 1) count--;
		return count;
	
	}
	
	function life()
	{
		for(var i=0;i<col;i++)
		{
			for( var j=0;j<rows;j++)
			{	
	
				if(cells[i][j]==1&&(count(i,j)>3||count(i,j)<2))
				{
					offCells[i][j]=0;
	
				}
	
				if(cells[i][j]==0&&(count(i,j)==3))
				{
					offCells[i][j]=1;
	
				}
	
				if(cells[i][j]==1&&(count(i,j)==2))
				{
					offCells[i][j]=1;
	
				}
			}
		}
	
	}
	
	function Tallylife()
	{
		for(var i=0;i<col;i++)
		{
			for( var j=0;j<rows;j++)
			{	
	
				if(cells[i][j]==1&&(tally[i][j]>3||tally[i][j]<2))
				{
					offCells[i][j]=0;
	
				}
	
				if(cells[i][j]==0&&(tally[i][j]==3))
				{
					offCells[i][j]=1;
	
				}
	
				if(cells[i][j]==1&&(tally[i][j]==2))
				{
					offCells[i][j]=1;
	
				}
			}
		}
	
	}

	
	
	////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////
	/////	MOUSE LISTENER 
	//////////////////////////////////////////////////////
	/////////////////////////////////////////////////////
	





	/////////////////
	// Mouse Click
	///////////////
	canvas.addEventListener('click', function (evt){
	
	
	for(var i=0;i<col;i++)
	{
	for( var j=0;j<rows;j++)
	{	
	if(Math.sqrt(Math.pow((i+j)*boxSize-(mx+my),2))<50&&Math.sqrt(Math.pow((j)*boxSize-(my),2))<30&&Math.sqrt(Math.pow((i)*boxSize-(mx),2))<30)
	{
	cells[i][j]=1;
	
	}
	
	
	}
	
	}
	      
	}, false);

	
	

	canvas.addEventListener ('mouseout', function(){pause = true;}, false);
	canvas.addEventListener ('mouseover', function(){pause = false;}, false);

      	canvas.addEventListener('mousemove', function(evt) {
        	var mousePos = getMousePos(canvas, evt);

	mx = mousePos.x;
	my = mousePos.y;

      	}, false);


	function getMousePos(canvas, evt) 
	{
	        var rect = canvas.getBoundingClientRect();
        	return {
          	x: evt.clientX - rect.left,
          	y: evt.clientY - rect.top
        	};
      	}
      

	///////////////////////////////////
	//////////////////////////////////
	////////	KEY BOARD INPUT
	////////////////////////////////


	

	window.addEventListener('keydown', function(evt){
	var key = evt.keyCode;
	
	//p 80
	//r 82
	//1 49
	//2 50
	//3 51
	
	}, false);




})