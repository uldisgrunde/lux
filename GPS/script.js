var x = document.getElementById("demo");
var xx = document.getElementById("demos");

function getLocation() {
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(showPosition);
	} else { 
		x.innerHTML = "Geolocation is not supported by this browser.";
	}
}

function showPosition(position) {
	document.getElementById("demo").innerHTML = `Latitude:${position.coords.latitude}<br>Longitude: ${position.coords.longitude}`;
	document.getElementById("demos").value=`${position.coords.latitude}\t${position.coords.longitude}`;
}

function copy() {
	let copyText = document.getElementById("demos");
	copyText.setAttribute("type","text");
	copyText.select();
	copyText.setSelectionRange(0, 99999)
	document.execCommand("copy");
	copyText.setAttribute("type","hidden");
	alert("Nokopētais teksts: " + copyText.value);
}

function save() {
	download("download.txt", document.getElementById("demo").innerHTML)
}
function download(filename, text) {
	let element = document.createElement('a');
	element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
	element.setAttribute('download', filename);
	element.style.display = 'none';
	document.body.appendChild(element);
	element.click();
	document.body.removeChild(element);
}

function saveFile(){
	const name = document.getElementById('demo');
	let data = '\r' + name.innerHTML+'\r\n '
	const textToBLOB = new Blob([data], { type: 'text/plain' });
	const sFileName = 'download.txt';	   // The file to save the data.
	let element = document.createElement("a");
	element.download = sFileName;
	if (window.webkitURL != null) {
		element.href = window.webkitURL.createObjectURL(textToBLOB);
	}
	else {
		element.href = window.URL.createObjectURL(textToBLOB);
		element.style.display = "none";
		document.body.appendChild(element);
	}
	element.click(); 
}