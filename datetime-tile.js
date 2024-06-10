h2_element = document.getElementById("datetime-h2");
function pad(n, width, z) {
	z = z || '0';
	n = n + '';
  return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
}

function updateTime() {
	currentDate = new Date();
	currentHour = currentDate.getHours();
	currentHour = pad(currentHour, 2, "0");
	currentMinute = currentDate.getMinutes();
	currentMinute = pad(currentMinute, 2, "0");
	currentSecond = currentDate.getSeconds();
	currentSecond = pad(currentSecond, 2, "0");
	currentDay = currentDate.getDay();
	currentDateNo = currentDate.getDate();
	currentMonth = currentDate.getMonth();
	currentYear = currentDate.getFullYear();

	dayList = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
	newCurrentDay = dayList[currentDay];
	monthList = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	newCurrentMonth = monthList[currentMonth];

	finalTime = currentHour + ":" + currentMinute + ":" + currentSecond;
	finalDate = newCurrentDay + ", " + currentDateNo + " " + newCurrentMonth + " " + currentYear;

	finalText = finalTime + "\n" + finalDate;
	h2_element.innerText = finalText;
}

updateTime();
setInterval(updateTime, 1000);
		
	//use setInterval