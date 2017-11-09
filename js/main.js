var imgContainer = document.getElementById("imgContainer");
var images = ["background1", "background2", "background3", "background4",];
var imgNumber = 0;
var body = document.getElementsByTagName("*");

/* Navbar*/

function navbarChange() { /* Loops through all the nav items */
	var navContainer = document.getElementById("nav-container");
	var all = navContainer.getElementsByTagName('div');
	if (navContainer.style.width == "200px") { /* checks if the nav bar is expanded or not */
		for (var i = all.length - 1; i >= 1; i--) { /* Hides all the large links */
			navContainer.style.width = "50px";
			all[i].style.display = "none";
		}
		for (var i = all.length - 1; i >= 6; i--) { /* Shows all the icons */
			all[i].style.display = "block";
		}
	}
	else {
		for (var i = all.length - 1; i >= 1; i--) { /* Shows all the text links*/
			navContainer.style.width = "200px";
			all[i].style.display = "block";
		}
		for (var i = all.length - 1; i >= 6; i--) { /* Hides all the icons */
			all[i].style.display = "none";
		}
	}
}

/* Contact Page */
function emailMsg() {
	document.getElementById("emailMsg").style.display = "block";
}

/* slideshow page */

function popBack() {
	for (var i = 0;  i < body.length; i++) { /* Loops through all the elements inside body */
		if (body[i].id == "nav-container" || body[i].className == "title-container") { /* Looks for specific containers */
			body[i].style.opacity = 1; 
		}
	}
}
function changeImage() {
	imgContainer.style.background = "url(imgs/" + images[imgNumber] + ".jpg)";
	imgContainer.style.display = "block";
	imgContainer.style.margin = "auto";
	imgContainer.style.width = "100%";
	imgContainer.style.height = "100%";
	imgContainer.style.position = "top left";
	imgContainer.style.backgroundSize = "cover";
	imgNumber++;
	imgNumber %= images.length;
}
function popOut() {
	for (var i = 0;  i < body.length; i++) {
		if (body[i].id == "nav-container" || body[i].className == "title-container") {
			body[i].style.opacity = 0.1;
		}
	}
}
setInterval(changeImage, 3000);

/* comments page */
function postComment() {
	var nameinput = document.getElementById("commentName").value;
    var textinput = document.getElementById("commentText").value;
	var container = document.getElementById("commentPost");
	var div = document.createElement("div");
	var div2 = document.createElement("div");
	var name = [];
	var message = [];
	
	name.push(nameinput);
	message.push(textinput);
	
	div.innerHTML = name;
	div2.innerHTML = message;
	div.style.marginBottom = "20px";
	div.style.marginTop = "20px";
	container.appendChild(div);
	container.appendChild(div2);
};
