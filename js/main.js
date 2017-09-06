// CO2 calculation
// https://collectiveio.slack.com/archives/C6RTAV2BB/p1503489416000202

/*
$.getJSON("test.json", function(json) {
    console.log(json); // this will show the info it in firebug console
});
*/

console.log("Results: " + json.data.length);

// Map columns to their positions in the data array
// "columns":["index","distance","enddatetime","endlat","endlon","speed","startdatetime","startlat","startlon","startcity","endcity","co2"]
var columns = new Object();
columns.distance = json.columns.indexOf("distance");
columns.enddatetime = json.columns.indexOf("enddatetime");
columns.endlat = json.columns.indexOf("endlat");
columns.endlon = json.columns.indexOf("endlon");
columns.speed = json.columns.indexOf("speed");
columns.startdatetime = json.columns.indexOf("startdatetime");
columns.startlat = json.columns.indexOf("startlat");
columns.startlon = json.columns.indexOf("startlon");
columns.startcity = json.columns.indexOf("startcity");
columns.endcity = json.columns.indexOf("endcity");
columns.startairport = json.columns.indexOf("startairport");
columns.endairport = json.columns.indexOf("endairport");
columns.co2 = json.columns.indexOf("co2");

// Takes an array [city, country] where city might be blank
// If city is present, returns "City, Country" 
// Otherwise, returns "Country"
function getLocationString(arr) {
	if (arr[0])
		return arr[0] + ", " + arr[1];
	else
		return arr[1];
}

// Takes an array [city, country] where city might be blank
// If city is present, returns "City" 
// Otherwise, returns "Country"
function getLocationStringShort(arr) {
	if (arr[0])
		return arr[0];
	else
		return arr[1];
}

// Iterate through results, creating a result object for each one, ready for outputting
var results = new Array();

var earliestDate;
var latestDate;

for (var i = 0; i < json.data.length; i++) {
	var resultArray = json.data[i];
	var result = new Object();

	result.startdatetime = new Date(resultArray[columns.startdatetime]);
	result.startlat = resultArray[columns.startlat];
	result.startlon = resultArray[columns.startlon];

	result.enddatetime = new Date(resultArray[columns.enddatetime]);
	result.endlat = resultArray[columns.endlat];
	result.endlon = resultArray[columns.endlon];

	result.startcity = getLocationString(resultArray[columns.startcity]);
	result.endcity = getLocationString(resultArray[columns.endcity]);
	result.startloc = resultArray[columns.startairport] || getLocationStringShort(resultArray[columns.startcity]);
	result.endloc = resultArray[columns.endairport] || getLocationStringShort(resultArray[columns.endcity]);

	result.distance = Math.round(resultArray[columns.distance]);
	result.speed = resultArray[columns.speed];

	result.co2 = Math.round(resultArray[columns.co2]*100)/100;

	result.trees = Math.round(resultArray[columns.co2] * 4);

	results.push(result);

	if (i == 0) latestDate = result.startdatetime;
	if (i == json.data.length-1) earliestDate = result.startdatetime;
}

for (var i = 0; i < results.length; i++) {
	var result = results[i];
	console.log("Flight on " + result.startdatetime + " from " + result.startloc + " to " + result.endloc + " (" + result.distance + " km, " + result.co2 + " kg CO2 emissions)");
}

// Header
var numFlights;
if (results.length == 0) {
	numFlights = "It looks like you didn't take any flights";
} else if (results.length == 1) {
	numFlights = "It looks like you took <strong>1 flight</strong> between " + earliestDate.toDateString() + " and " + latestDate.toDateString() + ".";
} else {
	numFlights = "It looks like you took <strong>" + results.length + " flights</strong> between " + earliestDate.toDateString() + " and " + latestDate.toDateString() + ".";
}
$('#numFlights').html(numFlights);

// Clear our table
table = $('#flights tbody')
table.empty();

// Iterate through each flight building table rows
for (var i = 0; i < results.length; i++) {
	var result = results[i];

	var startLink = "https://www.google.com/maps/place/" + result.startlat + "+" + result.startlon + "/@" + result.startlat + "," + result.startlon + ",12z/";
	var endLink = "https://www.google.com/maps/place/" + result.endlat + "+" + result.endlon + "/@" + result.endlat + "," + result.endlon + ",12z/";

	var n = results.length - i;

	table.append("<tr>" +
            	"<td>" + n + "</td>" +
            	"<td><nobr>" + result.startdatetime.toDateString() + "</nobr></td>" +
            	"<td><b>" +
            	result.startloc + "</b> to <b>" + result.endloc + "</b>" +
            	"<br/><small>" + result.distance + " km from <a href=\"" + startLink + "\" target=\"_blank\">" + result.startcity + "</a> to <a href=\"" + endLink + "\" target=\"_blank\">" + result.endcity + "</a></small>" +
            	"</td>" +
            	"<td>" + result.distance + "</td>" +
            	"<td>" + result.co2 + "</td>" +
            	"<td>" + result.trees + "</td>" +
            	"</tr>");
}



