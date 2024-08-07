let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset");
let newGamebtn = document.querySelector("#new-btn");
let msgcontainer = document.querySelector(".message-container");
let para = document.querySelector("#msg");
// THE ABOVE CODE IS USED TO ACCESS THE ELEMENTS REQUIRED TO MAKE THE GAME 
let turnO = true;
// THIS STORES THE TRUE VALUE IN A VARIABLE IT IS USED TO CHECK WHOES TURN IN THE GAME
const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
]
// THE ABOVE ARRAY IS USED TO CHECK THE WINNING PATTERS 

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("the box was clicked");
       if(turnO){
        box.innerText = "O";
        turnO = false;
       }
       else{
        box.innerText = "X";
        turnO = true; 
       }
       box.disabled = true;
       checkwinner();


       
    })
})

// THE ABOVE LOOP CALCULATES THE TURN OF THE PLAYER IF O HAS ITS TURN IT CANNOT TAKE O AGAIN IMMIDIATELY NEXT TURN WILL BE FOR X THAN O 
const resetgame = () =>{
    turnO = true;
    enablebtn();
    msgcontainer.classList.add("hide")

}
// THE ABOVE FUNCTION IS A RESET GAME FUNCTION WHICH RESETS THE GAME WHEN U CALL IT IT CALLS ANOTHER FUNCTION IN IT BY THE NAME OF ENABLEBTN AND IT ADDS ANOTHER CLASS TO THE MSGCONTAINER BY THE NAME OF HIDE
const diabledbtn = ()=>{
    for(let box of boxes){
        box.disabled = true; 
    }
}
// THE ABOVE FUNCTION IS DIABLEBTN FUNCTION WHICH DISABLES THE BOXES ONES ACTIVATED 
const enablebtn =() =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText="";
    }
}
// THE ABOVE FUNCTION OPENS THE BOX AGAIN OR MAKE IT CLICABLE AGAIN 


const showWinner =(Winner)=>{
    para.innerText = "Congratulations, Winner is "+ Winner;
    msgcontainer.classList.remove("hide")
    diabledbtn();
}
// THE FUNCTION SHOWS THE WINNER AND IT REMOVES THE HIDE CLASS SO THE PLAYER CAN START A NEW GAME AND THE DISABLE FUNCTION IS CALLED IN THIS FUNCTION SO IT DISABLES EVERY BOX ONCE THE WINNER IS DECLARED 

const checkwinner =  ()=>{
    for(let patterns of winPatterns){
    let pos1val = boxes[patterns[0]].innerText;
    let pos2val = boxes[patterns[1]].innerText;
    let pos3val = boxes[patterns[2]].innerText;

    if( pos1val != ""&& pos2val !=""&& pos3val !=""){
        if( pos1val === pos2val && pos2val === pos3val){
            showWinner(pos1val);
        };
        };
    };
    };
// THE ABOVE LOGIC IS USED TO CHECK THE WINNER IN WHICH THE LOOP ITRATES EACH BOX AND CHECKS WEATHER THE PATTERS IN FORMED BY THE SAME ELEMENT AND IT CALLS THE SHOWEWINNER FUNCITON ASWELL


newGamebtn.addEventListener("click", resetgame);
resetbtn.addEventListener("click", resetgame);
// THE ABOVE CODE IS USED TO ADD THE EVENT TO THE CLICK SO WHEN THE RESET OR NEW GAME IS PRSSED THE RESET GAME IS EXECUTED. 