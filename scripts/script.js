const myImage = document.querySelector("img");

myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if(mySrc === "images/my0.jpg"){
        myImage.setAttribute("src", "images/my1.png");
    } else {
        myImage.setAttribute("src", "images/my0.jpg");
    }
};


let mybutton = document.querySelector("button");
let myheading = document.querySelector("h1");


function setUserName(){
    const myName = prompt("Please ur name <3");
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem("name", myName);
        myheading.textContent = `Mozilla is cool, ${myName}`;
    };
}

mybutton.onclick = () => {
    setUserName();
};

if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    const storedName = localStorage.getItem("name");
    myheading.textContent = `Mozilla is cool, ${storedName}`;
}

person = {
    name: "Bob",
    bio: function deez(){
        console.log(`Bobs Burgers, ${(this.name)}`);
    },
    age: 22
};

function Person(name){
    this.name = name;
}

const lol = new Person("James B. Salivan");