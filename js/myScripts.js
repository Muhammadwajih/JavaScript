function checkAddress(fieldId) {
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  var fieldval = document.getElementById(fieldId).value;

  if (fieldval.match(mailformat)) {
    alert("Valid email address!");
  } else {
    alert("Email not valid!");
  }
}

function check(fieldId) {
  if (document.getElementById(fieldId).value === "") {
    alert("Enter Email Address");
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
    "Slow lorises are a group of several species of trepsirrhine primates which make up the genus Nycticebus. They have a round head, narrow snout, large eyes, and a variety of distinctive coloration patterns that are species-dependent. The hands and feet of slow lorises have several adaptations that give them a pincer-like grip and enable them to grasp branches for long periods of time. Slow lorises have a toxic bite, a rare trait among mammals. <a href='#' onclick='placeAList()'>ShowMore</a>";
  document.getElementById("slowLoris").innerHTML = expandedParagraph;
}

function fillCity() {
  var cityName;
  var zipEntered = document.getElementById("zip").value;
  switch (zipEntered) {
    case "60608":
      cityName = "Chicago";
      break;
    case "68114":
      cityName = "Omaha";
      break;
    case "53212":
      cityName = "Milwaukee";
    default:
      cityName = "Islamabad";
  }
  document.getElementById("city").value = cityName;
}

function placeAList() {
  var listToPlace =
    "<ol><li>Slow loris</li><li>Fast loris</li><li>Just-right loris</li></ol> <a href='#' onclick='expandLoris()'>showless</a>";
  document.getElementById("slowLoris").innerHTML = listToPlace;
}

function makeInvisible() {
  // document.getElementById("vanish").style.display = "none";
  document.getElementById("vanish").className = "hidden";
}

function swapPic(type) {
  if (type == "mouseover") {
    document.getElementById("img").src = "/images/shark.png";
  } else if (type == "mouseout") {
    document.getElementById("img").src = "/imagesblob.png";
  }
}

function getAddress() {
  var link = document.getElementById("social");
  var address = link.href;
  alert(address);
}

function changeColor() {
  var frm = document.getElementById("social");
  frm.className = "jumbo";
}

function makeBig() {
  // document.getElementById("p1").className += "big";
  // document.getElementById("p1").style.fontSize = "26px";
  // document.getElementById("pic99").style.cssFloat = "left";
  // document.getElementById("div9").style.visibility = "hidden";
  // document.getElementById("pic99").style.margin = "0 10px 0 10px";
  // alert(document.getElementsByTagName("p")[1].innerHTML);
  // var par = document.getElementsByTagName("p");
  // for (var i = 0; i < par.length; i++) {
  //   par[i].style.fontSize = "50px";
  // }

  var e = document.getElementById("div9");

  var par = e.getElementsByTagName("p");

  for (var i = 0; i < par.length; i++) {
    par[i].style.fontSize = "50px";
  }
}
