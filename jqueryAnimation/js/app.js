var x=0,y=0;
//left to right
function ltor(){
	$('.container').css('left', x+'px');
	$('.container').css('top', '0px');
	$('.container').css('background-color', 'rgb('+x+','+y+',125)');
	x++;
	if(x > 400){
		clearInterval(slx);
		mlx = setInterval('uptodown()', 10); //second
	}
	console.log('x = '+x+'y = '+y);
	
}
//up to down
function uptodown(){
	$('.container').css('left', x+'px');
	$('.container').css('top', y+'px');
	$('.container').css('background-color', 'rgb('+x+','+y+',125)');

	y++;
	if(y > 400){
		clearInterval(mlx);
		nlx = setInterval('rtol()', 10); //second
	}
	console.log('x = '+x+'y = '+y);	
}
//right to left
function rtol(){
	$('.container').css('left', x+'px');
	$('.container').css('top', y+'px');
	$('.container').css('background-color', 'rgb('+x+','+y+',125)');

	x--;
	if(x < 0){
		clearInterval(nlx);
		olx = setInterval('downtoup()', 10); //second
	}
	console.log('x = '+x+'y = '+y);
}

//down to up
function downtoup(){
	$('.container').css('left', x+'px');
	$('.container').css('top', y+'px');
	$('.container').css('background-color', 'rgb('+x+','+y+',125)');

	y--;
	if(y < 0){
		clearInterval(olx);
	}
	console.log('x = '+x+'y = '+y);	
}
//Code start from Here
//call function at particular inteval of time
slx = setInterval('ltor()', 10); //first
