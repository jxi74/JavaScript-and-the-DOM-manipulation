let color1, color2 = "white";

function handleColorChange() {
    if (color1 === "red" && color2 === "red") {
        document.getElementById("box3").style.backgroundColor = "red"
        document.getElementById("color").innerHTML = "Red";
    }
    if (color1 === "yellow" && color2 === "yellow") {
        document.getElementById("box3").style.backgroundColor = "yellow"
        document.getElementById("color").innerHTML = "Yellow";
    }
    if (color1 === "blue" && color2 === "blue") {
        document.getElementById("box3").style.backgroundColor = "blue"
        document.getElementById("color").innerHTML = "Blue";
    }
    if (color1 === "white" && color2 === "white") {
        document.getElementById("box3").style.backgroundColor = "white"
        document.getElementById("color").innerHTML = "White";
    }


    if (color1 === "white" && color2 === "red") {
        document.getElementById("box3").style.backgroundColor = "white"
        document.getElementById("color").innerHTML = "White";
    }
    if (color1 === "red" && color2 === "white") {
        document.getElementById("box3").style.backgroundColor = "white"
        document.getElementById("color").innerHTML = "White";
    }
    if (color1 === "white" && color2 === "yellow") {
        document.getElementById("box3").style.backgroundColor = "white"
        document.getElementById("color").innerHTML = "White";
    }
    if (color1 === "yellow" && color2 === "white") {
        document.getElementById("box3").style.backgroundColor = "white"
        document.getElementById("color").innerHTML = "White";
    }
    if (color1 === "white" && color2 === "blue") {
        document.getElementById("box3").style.backgroundColor = "white"
        document.getElementById("color").innerHTML = "White";
    }
    if (color1 === "blue" && color2 === "white") {
        document.getElementById("box3").style.backgroundColor = "white"
        document.getElementById("color").innerHTML = "White";
    }


    if (color1 === "red" && color2 === "yellow") {
        document.getElementById("box3").style.backgroundColor = "orange"
        document.getElementById("color").innerHTML = "Orange";
    }
    if (color1 === "yellow" && color2 === "red") {
        document.getElementById("box3").style.backgroundColor = "orange"
        document.getElementById("color").innerHTML = "Orange";
    }


    if (color1 === "red" && color2 === "blue") {
        document.getElementById("box3").style.backgroundColor = "purple"
        document.getElementById("color").innerHTML = "Purple";
    }
    if (color1 === "blue" && color2 === "red") {
        document.getElementById("box3").style.backgroundColor = "purple"
        document.getElementById("color").innerHTML = "Purple";
    }


    if (color1 === "yellow" && color2 === "blue") {
        document.getElementById("box3").style.backgroundColor = "green"
        document.getElementById("color").innerHTML = "Green";
    }
    if (color1 === "blue" && color2 === "yellow") {
        document.getElementById("box3").style.backgroundColor = "green"
        document.getElementById("color").innerHTML = "Green";
    }
}


// The functions below are called EVERY TIME one of the two boxes are changed (a color is selected)
document.getElementById("choices").addEventListener("change",
    function(event){
    //console.log(document.getElementById("choices").value); //returns value of color you set
    document.getElementById("box1").style.backgroundColor = event.target.value;
    color1 = event.target.value; // sets the current dropdown color to a variable
    handleColorChange(); // calls the function to change the color of the third box depending on the colors of the two boxes

});

document.getElementById("choices2").addEventListener("change",
    function(event){
        //console.log(document.getElementById("choices").value); //returns value of color you set
        document.getElementById("box2").style.backgroundColor = event.target.value;
        color2 = event.target.value; // sets the current dropdown color to a variable
        handleColorChange(); // calls the function to change the color of the third box depending on the colors of the two boxes
    });


/*
Function above explanation:
1. searches through html file to find an id called "choices" and adds an event listener
of type "change" so when anything changes in the dropdown box,
2. event is then passed into the function: function(event) (is then called)
3. Then the DOM searches for an id of "box1" and sets the background color of the box to whatever you selected in
the dropdown. Specifically, where the event happened, give me target of the event, and the targets value
 */


//document.getElementByID - gets element by the name of id we set in html document Ex) id = "box1"

//document (DOM) - searches through