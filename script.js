function playGame(playerMove){
    const Computermove=pickComputerMove();
    let result='';

    if (playerMove=='Rock'){
        if(Computermove==='rock')
        {
            result='Tie.';
        }
        else if (Computermove=='paper'){
            result='You lose.';
        }
        else if(Computermove=='scissors'){
            result='you win.';
        }
        }

    else if (playerMove=='Paper'){
        if(Computermove==='paper')
        {
            result='Tie.';
        }
        else if (Computermove=='rock'){
            result='You win.';
        }
        else if(Computermove=='scissors'){
            result='you lose.';
        }
    }

    else if(playerMove=='Scissors'){
        if(Computermove==='scissors')
        {
            result='Tie.';
        }
        else if (Computermove=='rock'){
            result='You lose.';
        }
        else if(Computermove=='paper'){
            result='you win.';
        }
        alert('You picked scissors!. Computer picked '+Computermove+'. '+result);
    }
    
    alert('You picked '+playerMove+'. Computer picked '+Computermove+'. '+result);
}

function pickComputerMove(){
    const randomNumber=Math.random();
    let Computermove=' ';
    if(randomNumber>=0 && randomNumber<1/3){
        Computermove='rock';
    }
    else if (randomNumber>=1/3 && randomNumber<2/3)
    {
        Computermove='paper';
    }
    else if (randomNumber>2/3 && randomNumber<1){
        Computermove='scissors';
    }
    return Computermove;
}