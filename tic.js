let turn = "X"
let end_game = false

// taking the playe names

let player1Name = prompt("Enter player one's name:");
let player2Name = prompt("Enter player two's name:");

// change the turn

const changeturn = ()=>{
    return turn === "X"? "0":"X"
}



// check win condition 

const checkwin = () => {
    let b_text = document.getElementsByClassName('boxtext');
    let win_conditions = [[0,1,2,5,5,0],[3,4,5,5,15,0],[6,7,8,5,25,0],[0,3,6,-5,15,90],[1,4,7,5,15,90],[2,5,8,15,15,90],[0,4,8,5,15,45],[2,4,6,5,15,135]];


    win_conditions.forEach (e => {
        if ((b_text[e[0]].innerText === b_text[e[1]].innerText) && (b_text[e[2]].innerText === b_text[e[1]].innerText) && (b_text[e[0]].innerText !== '')) {
            let winnerName = b_text[e[0]].innerText === 'X' ? player1Name : player2Name;
            document.querySelector('.info').innerText = winnerName + " won" + "\n thank you for playing :)";
            end_game = true;
            document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`;
            document.querySelector(".line").style.width = "20vw";
        }
    });
};

// main logic

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector(".boxtext");
    element.addEventListener('click',() => {
        if(boxtext.innerText === ''){
            boxtext.innerText = turn;
            turn = changeturn();
            checkwin();
            if(!end_game){
            document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
            }
        }
    })
})

// refresh

Refresh.addEventListener('click',()=>{
    let b_text = document.querySelectorAll('.boxtext');
    Array.from(b_text).forEach(element => {
        element.innerText = ""
    });
    turn = "X";
    end_game = false
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
    document.querySelector(".line").style.width = "0vw";
})