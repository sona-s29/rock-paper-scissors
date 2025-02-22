// initial score will be 0--------------
let user_score = 0;
let comp_score = 0;

let choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");
let userscore = document.querySelector(".user_score");
let compscore = document.querySelector(".comp_score");

// when game will be draw---------
let gamedraw = () =>{
    msg.innerText = `game was a draw`;
    msg.style.backgroundColor = "#231942";
}

// computer will generate randomly-----------
let comp_gen = () =>{
    let options = ["rock","paper","scissors"];
    let indx = Math.floor(Math.random()*3);
    return options[indx];
}

// 
const showinner = (userwin,userchoice,compchoice) => {
    if(userwin){
        user_score++;
        userscore.innerText = user_score;
        msg.innerText = `You Win! your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor ="green";
    } else{
        comp_score++;
        compscore.innerText = comp_score;
        msg.innerText = `You lost! ${compchoice}  beats your ${userchoice} `;
        msg.style.backgroundColor ="red";
    }

}

const playgame = (userchoice) =>{
    
    //console.log(userchoice)
    const compchoice = comp_gen();
    //console.log(compchoice)

    if(userchoice === compchoice){
        gamedraw();

    } else{
        let userwin = true;

        if(userchoice === "rock"){

            userwin = compchoice === "paper" ? false : true;
            // rock and scissors

        } else if(userchoice === "paper"){

            userwin = compchoice === "rock" ? false : true;
            // paper and scissors

        } else {
            userwin = compchoice === "scissors" ? false : true;
            // rock and paper
        }

        showinner(userwin,userchoice,compchoice);
    }
};

// adding event listener-------------
choices.forEach((choice)=>{
    choice.addEventListener("click", ()=>{
       const userchoice = choice.getAttribute("id");
       playgame(userchoice);
    })
})