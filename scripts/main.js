var head = document.querySelector("h1")
head.textContent = "Hello, world!"

var list = document.getElementById("list");

for (let i = 1; i <= 5; i++) {
    let item = document.createElement('li');
    item.appendChild(document.createTextNode('Item ' + i));

    item.onclick = function(ev) {
        console.log('Item ' + i + ' is clicked.');
    };
    list.appendChild(item);
}

var myImage = document.querySelector("img");

myImage.onclick = function() {
    var src = myImage.getAttribute("src");

    if (src === "images/eagle.jpg") {
        myImage.setAttribute("src", "images/eagle.png")
    } else {
        myImage.setAttribute("src", "images/eagle.jpg")
    }
}

var myButton = document.querySelector('button')
var myHeading = document.querySelector('h1')

function setUserName() {
    var myName = prompt("Please enter your name.");
    localStorage.setItem("name", myName);
    myHeading.textContent = "Hello, " + myName;
}

if (!localStorage.getItem("name")) {
    setUserName();
} else {
    var storedName = localStorage.getItem("name");
    myHeading.textContent = "Hello, " + storedName;
}

myButton.onclick = function() {
    setUserName();
}