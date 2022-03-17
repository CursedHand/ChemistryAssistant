const rows = 12;
const colums = 20;

const grid = [];


const width = document.documentElement.clientWidth
const height = document.documentElement.clientHeight

//var element = document.createElement("div");
//document.getElementsByClassName("periodic-table").appendChild(element);


const buttons = [];
for (let y = 0; y < rows; y++) {
    buttons[y] = [];
    for (let x = 0; x < colums; x++) {
        buttons[y][x] = document.createElement("button");
        buttons[y][x].id = x+","+y
        buttons[y][x].className = "periodicTableButton";

        buttons[y][x].style.width = ((width-300)/colums)+"px";
        buttons[y][x].style.height = (height/rows)+"px";
        buttons[y][x].style.top = (0 + y*(height/rows))+"px";
        buttons[y][x].style.left = (300 + x*((width-300)/colums))+"px";

        document.getElementById("periodicTable").appendChild(buttons[y][x]);
        //document.getElementById(x+","+y).className = "periodic-table-button";
        document.getElementById(x+","+y).setAttribute("type","button");
    }

}




//For the element details display

displayWindow = document.createElement("div");
displayWindow.id = "displayWindow";
displayWindow.style.width = (((width-300)/colums)*6)+"px";
displayWindow.style.height = ((height/rows)*2)+"px";
displayWindow.style.top = (0 + 1*(height/rows))+"px";
displayWindow.style.left = (300 + 5.5*((width-300)/colums))+"px";
document.getElementById("periodicTable").appendChild(displayWindow);


const windowInfo = [];
for (let c = 0; c < 5; c++) {
    windowInfo[c] = document.createElement("p");
    windowInfo[c].className = "windowInfo";
    windowInfo[c].id = "windowInfo"+c;
    displayWindow.appendChild(windowInfo[c]);
}






elementBox = document.createElement("p");
elementBox.id = "displayElement";

elementBox.style.width = ((width-300)/colums)+"px";
elementBox.style.height = (height/rows)+"px";
elementBox.style.top = (0 + 1*(height/rows))+"px";
elementBox.style.left = (300 + 4*((width-300)/colums))+"px";
document.getElementById("periodicTable").appendChild(elementBox);





elementNumber = document.createElement("p");
elementId = document.createElement("p");
elementMass = document.createElement("p");

elementId.classList.add("elementName", "tableText");
elementMass.classList.add("massNumber", "tableText");
elementNumber.classList.add("atomicNumber", "tableText");

elementId.id = "elementId";
elementMass.id = "elementMass";
elementNumber.id = "elementNumber";

document.getElementById("displayElement").appendChild(elementNumber);
document.getElementById("displayElement").appendChild(elementId);
document.getElementById("displayElement").appendChild(elementMass);











console.log(width + " " + height)
