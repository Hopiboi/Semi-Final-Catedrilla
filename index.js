let b1 = document.getElementById('b1')
let b2 = document.getElementById('b2')
let b3 = document.getElementById('b3')
let b4 = document.getElementById('b4')
let b5 = document.getElementById('b5')
let b6 = document.getElementById('b6')
let b7 = document.getElementById('b7')
let b8 = document.getElementById('b8')
let b9 = document.getElementById('b9')
let turn_indicator = document.getElementById('turn-indicator')
let reset = document.getElementById('reset')
let undo = document.getElementById('undo')
let conButton = document.getElementById('confirm')
let textbox = document.getElementById('textbox')
let round_number = document.getElementById('round-number-indicator')

let grids = document.getElementsByClassName('grid')
let turn = 'Player 1'
let move_history = []

let round = 0 

square_grids()
set_click_listeners()

function square_grids() {

    for(let i=0 ; i < grids.length; i++) {
    
        let width = window.getComputedStyle(grids[i]).width
        
        grids[i].style.height = width
    }

}


function set_click_listeners() {

    for(let i= 0; i < grids.length; i++) {
        grids[i].addEventListener('click', function(){

            let current_turn = turn

            if (turn == "Player 1") {
                grids[i].value = 'X'
                turn = "Player 2"
                turn_indicator.style.color = 'red'
            }

            else {
                grids[i].value = 'O'
                turn = "Player 1"
                turn_indicator.style.color = 'dodgerblue'
            }

            grids[i].disabled = true

            if (is_over()) {

                turn_indicator.style.color = 'black'
                turn_indicator.innerHTML = "This game is a tie!"
            }

            
            let has_winner = validate_board(grids[i].id)
            
            if (has_winner) {
                turn_indicator.style.color = 'black'
                turn_indicator.innerHTML = current_turn + ' wins!!'
                disable_grids()
            }

            else {
                turn_indicator.innerHTML = turn + "'s Turn"
            }

            move_history.push(grids[i])

            roundNumberPlus()
    
        })

    }

    reset.addEventListener('click' , function(){ 

        location.reload()

    })

    undo.addEventListener('click' , function(){

        roundNumberMinus()


        if (move_history.length > 0) {
            let last_element = move_history[move_history.length - 1]
            last_element.disabled = false
            last_element.value = ""
            move_history.pop()

            if (turn == "Player 1") {
                turn = "Player 2"
                turn_indicator.style.color = 'red'
                turn_indicator.innerHTML = turn + "'s Turn"
            }

            else {
                turn = "Player 1"
                turn_indicator.style.color = 'dodgerblue'
                turn_indicator.innerHTML = turn + "'s Turn"
            }
            
        }

    })

    returnNumberRound()
} 

function returnNumberRound() {

    conButton.addEventListener('click' , function(){

        let textbox = document.getElementById('textbox').value
        
        // textbox = move_history

        alert("sir di ko na po alam " + textbox)

    })
}

function validate_board(grid_id) {
    let patterns = {
        'b1' : [
            [b1, b2, b3],
            [b1, b4, b7],
            [b1, b5, b9]
        ],
    
        'b2' : [
            [b1, b2, b3],
            [b2, b5, b8]
        ],
    
        'b3' : [
            [b1, b2, b3],
            [b3, b5, b7],
            [b3, b6, b9]
        ],
    
        'b4' : [
            [b1, b4, b7],
            [b4, b5, b6]
        ],
    
        'b5' : [
            [b1, b5, b9],
            [b2, b5, b8],
            [b3, b5, b7],
            [b4, b5, b6]
        ],
    
        'b6' : [
            [b3, b6, b9],
            [b4, b5, b6]
        ],
    
        'b7' : [
            [b1, b4, b7],
            [b7, b5, b3],
            [b7, b8, b9]
        ],
    
        'b8' : [
            [b2, b5, b8],
            [b7, b8, b9]
        ],
    
        'b9' : [
            [b3, b6, b9],
            [b9, b5, b1],
            [b7, b8, b9]
        ]
    }
    
    let pattern = patterns[grid_id]
    for (let i = 0; i < pattern.length; i++) {
        console.log(pattern[i])

        if (pattern[i][0].value == pattern[i][1].value && pattern[i][0].value == pattern[i][2].value) {
            return true
        }
    }

    return false
}

//for loop prototype && need to test it addition
function roundNumberPlus() {

    for(let i = 0 ; i < 1; i++) {

        round = round + 1
        round_number.innerHTML = "Round " + round

    }

        // if ( round == 0)
    // {
    //     round = 1
    //     round_number.innerHTML = "Round " + round
    // }

}

 // for loop prototype && need to test it undo minus
function roundNumberMinus() {


    if (round == 0) {
        location.reload()
    }

    else if (round == 1){
        
        round = 1 - 1
        round_number.innerHTML = "Round " + round

    }

    else if (round == 2){
        
        round = 2 - 1
        round_number.innerHTML = "Round " + round

    }

    else if (round == 3){
        
        round = 3 - 1
        round_number.innerHTML = "Round " + round

    }

    else if (round == 4){
        
        round = 4 - 1
        round_number.innerHTML = "Round " + round

    }

    else if (round == 5){
        
        round = 5 - 1
        round_number.innerHTML = "Round " + round

    }

    else if (round == 6){
        
        round = 6 - 1
        round_number.innerHTML = "Round " + round

    }

    else if (round == 7){
        
        round = 7 - 1
        round_number.innerHTML = "Round " + round

    }

    else if (round == 8){
        
        round = 8 - 1
        round_number.innerHTML = "Round " + round

    }

    else if (round == 9){
        
        round = 9 - 1
        round_number.innerHTML = "Round " + round

    }


    //shorcut method
    // if (round > 0) {
    //     for(let round = -1 ; round > 9 ; i--) {

    //         round = round - 1
    //         round_number.innerHTML = "Round " + round 
    //     }
    // }
        // location.reload()
}


function is_over() {
    for (let i = 0; i < grids.length; i++) {

        if (!grids[i].disabled) {
            return false
            
        }

    }

    return true

}

function disable_grids() {
    for (let i = 0; i < grids.length; i++) {
        grids[i].disabled = true
    }
}
