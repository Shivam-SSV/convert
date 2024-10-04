//Lagacy Text Buttons Functions

function reset1() {
	var retVal = confirm("à¤Ÿà¥‡à¤•à¥à¤¸à¥à¤Ÿ à¤¡à¤¿à¤²à¥€à¤Ÿ à¤¹à¥‹ à¤œà¤¾à¤à¤—à¤¾ ?");
	if( retVal == true ){
		document.getElementById("legacy_text").value = "";
		return true;
    }
	else{
		return false;
	}
}

function copyNonUnicode() {
  // Get the text field
  var copyText = document.getElementById("legacy_text");
  // Select the text field
  copyText.select();
  copyText.setSelectionRange(0, 99999); // For mobile devices

  // Copy the text inside the text field
  navigator.clipboard.writeText(copyText.value);
  
  // Alert the copied text
  alert("Text Copied, Paste (Ctrl+V) in your file !");
}

function saveTextAsNonUnicode()
{
    var textToSave = document.getElementById("legacy_text").value;
    var textToSaveAsBlob = new Blob([textToSave], {type:"text/Doc"});
    var textToSaveAsURL = window.URL.createObjectURL(textToSaveAsBlob);
	//var fileNameToSaveAs = document.getElementById("inputFileNameToSaveAs").value;
    var fileNameToSaveAs = "Non-Unicode.doc";
    var downloadLink = document.createElement("a");
    downloadLink.download = fileNameToSaveAs;
    downloadLink.innerHTML = "Download File";
    downloadLink.href = textToSaveAsURL;
    downloadLink.onclick = destroyClickedElement;
    downloadLink.style.display = "none";
    document.body.appendChild(downloadLink);
    downloadLink.click();
}

//Unicode Text Buttons Functions

function reset2() {
	var retVal = confirm("Unicode (à¤®à¤‚à¤—à¤² à¤«à¥‰à¤¨à¥à¤Ÿ) à¤Ÿà¥‡à¤•à¥à¤¸à¥à¤Ÿ à¤¡à¤¿à¤²à¥€à¤Ÿ à¤¹à¥‹ à¤œà¤¾à¤à¤—à¤¾ ?");
	if( retVal == true ){
		document.getElementById("unicode_text").value = "";
		return true;
    }
	else{
		return false;
	}
}

 function copyUnicode() {
  // Get the text field
  var copyText = document.getElementById("unicode_text");
  // Select the text field
  copyText.select();
  copyText.setSelectionRange(0, 99999); // For mobile devices

  // Copy the text inside the text field
  navigator.clipboard.writeText(copyText.value);
  
  // Alert the copied text
  alert("Unicode (Mongal Font) Text Copied, Paste (Ctrl+V) in your file !");
}
 
function saveTextAsUnicode()
{
    var textToSave = document.getElementById("unicode_text").value;
    var textToSaveAsBlob = new Blob([textToSave], {type:"text/Doc"});
	//var textToSaveAsBlob = new Blob([textToSave], {type:"text/plain"});
    var textToSaveAsURL = window.URL.createObjectURL(textToSaveAsBlob);
	//var fileNameToSaveAs = document.getElementById("inputFileNameToSaveAs").value;
    var fileNameToSaveAs = "Text in Unicode.doc";
    var downloadLink = document.createElement("a");
    downloadLink.download = fileNameToSaveAs;
    downloadLink.innerHTML = "Download File";
    downloadLink.href = textToSaveAsURL;
    downloadLink.onclick = destroyClickedElement;
    downloadLink.style.display = "none";
    document.body.appendChild(downloadLink);
    downloadLink.click();
}

//Other button Function

function destroyClickedElement(event) {
    document.body.removeChild(event.target);
}