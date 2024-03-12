let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msgPara=document.querySelector("#msg-box");
const usb=document.querySelector("#user-score");
const csb=document.querySelector("#comp-score");

const genCompChoice=()=>{
    const arr=["rock","paper","scissor"];
    const randInd=Math.floor(Math.random()*3);
    return arr[randInd];
}

const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++
        usb.innerText=userScore;
        msgPara.innerText=`You win! Your ${userChoice} beats ${compChoice}`;
        msgPara.style.backgroundColor="green";
    }
    else{
        compScore++;
        csb.innerText=compScore;
        msgPara.innerText=`You lose! ${compChoice} beats your ${userChoice}`;
        msgPara.style.backgroundColor="red";
    }
}

const drawGame=()=>{
    msgPara.innerText="Draw Game!, Play again";
    msgPara.style.backgroundColor="rgb(54, 54, 54)";
}

const playGame=(userChoice)=>{
    const compChoice=genCompChoice();
    if(userChoice===compChoice){
        //draw
       drawGame();
    }
    else{
     let userWin=true;
    if(userChoice==="rock"){
        //scissor,paper
        userWin=compChoice==="scissor"?true:false;
    }
    else if(userChoice==="scissor"){
        //rock,paper
        userWin=compChoice==="rock"?false:true;
    }
    else{
        //scissor,rock
        userWin=compChoice==="rock"?true:false;
    }
    showWinner(userWin,userChoice,compChoice);
}
}

choices.forEach((choice)=>{
    choice.addEventListener("click", ()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    })
})