let userscore = 0;
let computerscore = 0;

const Choices = document.querySelectorAll(".Choice")
const msg = document.querySelector("#msg")
const user_score = document.querySelector("#user_score")
const computer_score = document.querySelector("#comp_score")


const genComputerChoice = ()=>{
    const options = ["rock","paper","scissors"];
    const randomid = Math.floor(Math.random() * 3);
    return options[randomid];

}

const showwinner=(userwin,userchoice,compchoice)=>{

    if(userwin){
        userscore++;
        user_score.innerText = userscore;
        console.log("You win "+ userchoice+" beats "+compchoice)
        msg.innerText = "You win " + userchoice + " beats "+ compchoice;
        msg.style.backgroundColor = "green";

       
    }
    else{
        computerscore++;
        computer_score.innerText = computerscore;
        console.log("You lose")
        msg.innerText = "You Lose "+ compchoice + " beats "+userchoice;
        msg.style.backgroundColor = "red";
    }
}
const drawgame = ()=>{
    console.log("Game was draw")
    msg.innerText = "The match is draw";
    msg.style.backgroundColor = "yellow";
}
const playgame =(userchoice) =>{
    console.log("user choice = "+ userchoice)
    const compchoice = genComputerChoice();
    console.log("Computer choice = "+ compchoice)

    if(userchoice === compchoice){
        drawgame();

    }
    else{
        let userwin = true;
        if(userchoice==="rock"){
            userwin = compchoice ==="paper"?false:true;
        }
        else if(userchoice === "paper"){
            userwin = compchoice === "scissors"? false:true;
        }
        else{
            userwin = compchoice === "rock"?false:true;
        }
        showwinner(userwin,userchoice,compchoice);
    }


}

Choices.forEach((choice) =>{
    choice.addEventListener("click",()=>{
        const userchoice = choice.getAttribute("id")
        playgame(userchoice);
    })

})