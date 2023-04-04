function checkAddress(fieldId) {
  if (document.getElementById(fieldId).value === "") {
    alert("Email address required.");
  } else {
    alert(document.getElementById(fieldId).value);
  }
}

function inputChangeFunction(fieldID, type) {
  if (type == "onfocus") {
    document.getElementById(fieldID).style.backgroundColor = "yellow";
  } else if (type == "onblur") {
    document.getElementById(fieldID).style.backgroundColor = "red";
  }
}

// function onFocusChangeColor(fieldID) {
//   document.getElementById(fieldID).style.backgroundColor = "yellow";
// }

// function onBlurChangeColor(fieldID) {
//   document.getElementById(fieldID).style.backgroundColor = "red";
// }
function greetTheUser() {
  alert("Eid Mubarak.....");
}

function expandLoris() {
  var expandedParagraph =
    "Slow lorises are a group of several species of trepsirrhine primates which make up the genus Nycticebus. They have a round head, narrow snout, large eyes, and a variety of distinctive coloration patterns that are species-dependent. The hands and feet of slow lorises have several adaptations that give them a pincer-like grip and enable them to grasp branches for long periods of time. Slow lorises have a toxic bite, a rare trait among mammals.";
  document.getElementById("slowLoris").innerHTML = expandedParagraph;
}
