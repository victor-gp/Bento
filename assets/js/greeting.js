// ┌─┐┬─┐┌─┐┌─┐┌┬┐┬┌┐┌┌─┐┌─┐
// │ ┬├┬┘├┤ ├┤  │ │││││ ┬└─┐
// └─┘┴└─└─┘└─┘ ┴ ┴┘└┘└─┘└─┘
// Function to set Greetings

const today = new Date();
const name = CONFIG.name;

function partOfTheDay(date) {
	const hour = date.getHours();
	if (hour >= 23 || hour < 6) {
		return 'night';
	} else if (hour >= 6 && hour < 12) {
		return 'morning';
	} else if (hour >= 12 && hour < 17) {
		return 'afternoon';
	} else {
		return 'evening';
	}
}

const gree1 = `${CONFIG.greetingNight}\xa0`;
const gree2 = `${CONFIG.greetingMorning}\xa0`;
const gree3 = `${CONFIG.greetingAfternoon}\xa0`;
const gree4 = `${CONFIG.greetingEvening}\xa0`;

switch(partOfTheDay(today)) {
	case 'night':
		document.getElementById('greetings').innerText = gree1 + name;
		break;
	case 'morning':
		document.getElementById('greetings').innerText = gree2 + name;
		break;
	case 'afternoon':
		document.getElementById('greetings').innerText = gree3 + name;
		break;
	case 'evening':
		document.getElementById('greetings').innerText = gree4 + name;
}
