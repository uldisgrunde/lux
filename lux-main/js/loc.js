function download(filename, text) {
	let element = document.createElement('a');
	element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
	element.setAttribute('download', filename);
	element.style.display = 'none';
	document.body.appendChild(element);
	element.click();
	document.body.removeChild(element);
}
function info() {
	let x = document.getElementById("info").value;
	document.getElementById("address").value = x;
}
function save() {
	txt=check();
	download("download.txt", `${txt}:${document.getElementById(txt).value}\n`)
}
function copy() {
	txt=check();
	let copyText=document.getElementById(txt);
	copyText.select();
	copyText.setSelectionRange(0, 99999)
	document.execCommand("copy");
	alert("Nokopēts teksts: " + copyText.value);
}
function check() {
	let txt = "";
	let list = document.getElementsByName('radio');
	for(var i=0;i<list.length;i++){
		if(list[i].type=='radio' && list[i].checked){
			txt+=list[i].value;
			break;
		}
	}
	return txt;
}