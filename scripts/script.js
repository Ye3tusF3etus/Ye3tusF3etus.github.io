function showHint(str) {
	if (str.length == 0) {
	  document.getElementById("txtHint").innerHTML = "";
	  return;
	} else {
	  const xmlhttp = new XMLHttpRequest();
	  xmlhttp.onload = function() {
		console.log(this.statusText);
		document.getElementById("txtHint").innerHTML = this.responseText;
	  }
	xmlhttp.open("GET", "/scripts/hello.php?q=" + str);
	xmlhttp.send();
	}
  }