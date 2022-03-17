const path = require('path')
const fs = require("fs");
const readline = require('readline');


async function processLineByLine() {
    const fileStream = fs.createReadStream('./resources/periodictable/data.txt');
    const lineArray = [];
    const rl = readline.createInterface({
      input: fileStream,
      crlfDelay: Infinity
    });
    // Note: we use the crlfDelay option to recognize all instances of CR LF
    // ('\r\n') in input.txt as a single line break.
  
    let x = 0;
    for await (const line of rl) {
      // Each line in input.txt will be successively available here as `line`.
      //console.log(`Line from file: ${line}`);
      lineArray[x] = line.split(":") 
      //console.log(lineArray[x]);
      x += 1;
    }
    return lineArray;

}

function eventhappened(evt) {
  var but = evt.currentTarget;
  
  for (var i = 0; i < but.childNodes.length; i++) {
    if (but.childNodes[i].className == "hiddenData") {
      var hiddenData = (but.childNodes[i].innerText).split(":");
      break;
    }
  }



  document.getElementById("displayElement").className = hiddenData[1];


  document.getElementById("elementNumber").innerText = hiddenData[5];
  document.getElementById("elementId").innerText = hiddenData[4];
  document.getElementById("elementMass").innerText = hiddenData[6];  

  document.getElementById("windowInfo0").innerText = hiddenData[0];
  document.getElementById("windowInfo1").innerText = "Atomic Number: "+hiddenData[5];
  document.getElementById("windowInfo2").innerText = "Atomic Mass: "+hiddenData[6];
  document.getElementById("windowInfo3").innerText = "Classification: "+hiddenData[1].split("_").join(" "); //used instead of .replace() because all occurenced of "_" need to be replaced




}





const result = processLineByLine();

const names = [];
const atomNum = [];
const massNum = [];
const eleData = [];

result.then(function(lineArray) {

  for (let index = 0; index < lineArray.length; index++) {
    let id = String(+lineArray[index][2] + 1) + "," + String(+lineArray[index][3] + 1); //+1 is x and y offset of table. + in front of line array converts it to int

    names[index] = document.createElement("p");
    names[index].innerText = lineArray[index][4]; //Element Abreviation e.g Cl, Fe
    names[index].classList.add("elementName", "tableText");

    atomNum[index] = document.createElement("p");
    atomNum[index].innerText = lineArray[index][5];
    atomNum[index].classList.add("atomicNumber", "tableText");

    massNum[index] = document.createElement("p");
    massNum[index].innerText = lineArray[index][6];
    massNum[index].classList.add("massNumber", "tableText");

    eleData[index] = document.createElement("p");
    eleData[index].innerText = lineArray[index].join(":");
    eleData[index].classList.add("hiddenData");


    document.getElementById(id).appendChild(atomNum[index]); //ads atomic number
    document.getElementById(id).appendChild(names[index]); //adds name
    document.getElementById(id).appendChild(massNum[index]); //ads mass number
    document.getElementById(id).appendChild(eleData[index]);
    document.getElementById(id).classList.add("tableElement");
    document.getElementById(id).classList.add(lineArray[index][1]);

    document.getElementById(id).addEventListener("click", eventhappened);



  }



})