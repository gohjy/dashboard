//alert("Saved")

reg_events = [
	{
		"label": "SSS Day",
		"days": [3, 6]
	}
]

onetime_events = [//date format dd-mm-yyyy
	{
		"label": "MA PP 1 (Paper 1)",
		"date": "10-06-2024"
	},
	{
		"label": "MA PP 1 Revision",
		"date": "10-06-2024"
	},
	{
		"label": "SC PP 1 (Booklet A)",
		"date": "11-06-2024"
	},
	{
		"label": "SC PP 1 Revision",
		"date": "11-06-2024"
	}
]

countdowns = [//date format mm/dd/yyyy, arrange in order earliest to latest
	{
		"label": "Prelim Oral",
		"date": "07/30/2024"
	},
	{
		"label": "PSLE Oral Day 1",
		"date": "08/13/2024"
	},
	{
		"label": "PSLE Oral Day 2",
		"date": "08/14/2024"
	}
]
//alert("L23")


function pad(n, width, z) {
  z = z || '0';
  n = n + '';
  return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
}


openingDate = new Date();
currentDay = openingDate.getDay();
noRegEvents = reg_events.length;
todayRegEvents = []
for (i=0; i<noRegEvents; i++) {
	cRELabel = reg_events[i].label;
	cREDays = reg_events[i].days;
	if (cREDays.includes(currentDay)) {
		todayRegEvents.push(cRELabel);
	}
}//alert("L34")
currentDate = pad(openingDate.getDate(), 2, "0")+ "-" + pad((openingDate.getMonth() + 1), 2, "0") + "-" + openingDate.getFullYear();
//alert(currentDate)
no1timeEvents = onetime_events.length;
//alert(no1timeEvents)
today1timeEvents = []
for (i=0; i<no1timeEvents; i++) {
	c1ELabel = onetime_events[i].label;
	c1EDate = onetime_events[i].date;
	if (c1EDate == currentDate) {
		today1timeEvents.push(c1ELabel);
	}
}//alert("L44")
todayH2E = document.getElementById("today-h2");
todayH2E.innerText = "";
for (i=0; i<todayRegEvents.length	; i++) {
	todayH2E.innerText += todayRegEvents[i] + "\n";
}
for (i=0; i<today1timeEvents.length	; i++) {
	todayH2E.innerText += today1timeEvents[i] + "\n";
}
//alert("L53")
if (todayH2E.innerText == "") {
	todayH2E.innerText = "Nothing today!"
}

//
//Code for COUNTDOWNS (CD)

no = countdowns.length;
todayCD = []
for (i=0; todayCD.length < 2 && i < no; i++) {
	let message_cd;
	x = countdowns[i].date;
	cCDDate = new Date(x);
//	alert(cCDDate)
	//alert(new Date(x).getTime())
	cDate2 = new Date();
	//alert(cDate2)
	cCDLabel = countdowns[i].label;
	//d1 = new Date("08/14/2020");   
	//d2 = new Date("09/14/2020");   
  
	diff = cCDDate.getTime() - cDate2.getTime();
	//alert(diff)
	
	daydiff0 = diff / (1000 * 60 * 60 * 24)
//	alert(daydiff0)
	daydiff = Math.ceil(daydiff0);
//	alert(daydiff)
	if (daydiff>0){
		message_cd = daydiff + " days to " + cCDLabel;
	} else if (daydiff == 0) {
		if (todayH2E.innerText.indexOf("Nothing today!") !== -1) todayH2E.innerText = countdowns[i].label;
		else todayH2E.append("\n"+countdowns[i].label)
		message_cd = "";
	} else if (daydiff < 0) {
		message_cd = "No countdowns!"
	}
	if (message_cd != "") {
		todayCD.push(message_cd);
	}
}
CDH2E = document.getElementById("countdown-h2");
CDH2E.innerText = "";
for (i=0; i<todayCD.length; i++) {
	CDH2E.innerText += todayCD[i] + "\n";
	if (todayCD[i] == "No countdowns!") {
		break;
	}
}
/*
if (CDH2E.innerText == "") {
	CDH2E.innerText = "No countdowns!"
}*/
