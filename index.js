const fs= require("fs");
const inquirer = require('inquirer');
const color=require("color");
const {Triangle,Square,Circle}=require("./lib/shape");

const validated=(input)=>{
    try{
        color(input.toLowerCase().trim()); 
        return true;
    }
    catch(error){
        return "Please enter a valid color keyword or hexadecimal number."

    }
}

const question=[
    {
        type:"input",
        message:"Enter text for logo",
        name:"logo",
        validate:(input)=>{
        const trimmedInput = input.trim();
        return trimmedInput.length <= 3 || "Please enter up to three characters."; }
 },
    {
        type:"input",
        message:"Enter a text color (Enter color keyword OR a hexadecimal number):",
        name:"textColor",
        validate:validated,
    },
    {
        type:"list",
         message:"Select a shape for a logo",
         choices:["Circle","square","Triangle"],
         name:"shape",
    },
      {
            type: "input",
            name: "shapeColor",
            message: "Enter shape color (Enter color keyword OR a hexadecimal number): ",
            validate:validated,
        },
       
]

inquirer.prompt(question).then((response) => {
    generatorSvg(response);       
}).catch((error)=>{
console.log(error);
        })



function generatorSvg(response){
    const svg=setShape(response);
    fs.writeFile("./examples/logo.svg",svg,(err)=>{
           err ?console.log(err):console.log("success");
        }
)       
}

function setShape(response){
     console.log(response);
    if(response.shape==="square"){
       console.log("square")
       const sqr=new Square(response.textColor,response.shapeColor,response.logo);
       return sqr.render();
      
   
      
    }
       else if(response.shape==="Circle"){
        console.log("Circle")
        const circle=new Circle(response.textColor,response.shapeColor,response.logo);
        
        return circle.render();
      
    }
       else if(response.shape=="Triangle"){
       console.log("Triangle")
       const triangle=new Triangle(response.textColor,response.shapeColor,response.logo);
        return triangle.render()

          }

}