var processBars = document.querySelectorAll('.process-bar');
for (var i = 0; i < processBars.length; i++) {
	generatingProcessBars(processBars[i]);
}

function generatingProcessBars(el) {
	processBarAmount = el.getAttribute('process');
	if (processBarAmount < 15) {
		processClass = 'red';
	} else if (processBarAmount < 30) {
		processClass = 'orange';
	} else if (processBarAmount < 60) {
		processClass = 'yellow';
	} else if (processBarAmount < 85) {
		processClass = 'lightgreen';
	} else {
		processClass = 'green';
	}
	el.className += ' ' + processClass;
	el.style.width = processBarAmount + '%';
	processBarParent = el.parentElement;
	processBarText = processBarParent.getElementsByClassName('process-value-container')[0];
	processBarText.innerHTML = processBarAmount + '%';
	processBarText.className += ' ' + processClass;
};
