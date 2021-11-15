//declaring elements
let blinker = document.getElementById('blinker');
let delayInMilliseconds = 1000;

function offBlink(i){
	setTimeout(function(){
		blinker.classList.toggle('blinkOff');
		}, 1000 * i);
} 

function blink(){	
	for(i = 1; i <= 200; i++){
			offBlink(i); 
	}
}


blink()
