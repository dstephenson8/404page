const grid = document.querySelector('.grid')
let startBtn = document.getElementById('start_button')  
let stop = document.getElementById('stop_button')

startBtn.addEventListener('click', startGame)
stop.addEventListener('click', stopGame)
document.addEventListener('keyup', control)

const width = 20
const height = 40

let gameBoard = []
let intervalTime = 100
let piece;


const hero = [
    [0, 1,2,3],
    [0, width+2, width*2+2, width*3+2]
    [0, 1,2,3],
    [0, width+2, width*2+2, width*3+2]
]

const blueRicky = [ 
    [0, width, width+1, width+2],
    [1, width+1, width*2 +1, width*2],
    [0,1,2,width+2],
    [0, 1, width, width*2]
    
]
const orangeRicky = [ 
    [0, width, width*2, width*2+1],
    [width, width+1, width+2, width + 3],
    [0, 1, width+1, width *2+2],
    [0,1,2,width+1]
]


const smashBoy = [
    [0,1,width,width+1],
    [0,1,width,width+1],
    [0,1,width,width+1],
    [0,1,width,width+1]

]
const rhodeIsland = [
    [1,2,width,width+1],
    [1,width, width+1, width*2+1],
    [1,2,width,width+1],
    [1,width, width+1, width*2+1]
]
const cleveland = [
    [0,1,width+1,width+2],
    [1,width+1,width,width*2],
    [0,1,width+1,width+2],
    [1,width+1,width,width*2]
]

const teeWee = [
    [1, width,width+1,width*2],
    [1,width,width+2, width*3+1]
    [0,1,2,width+1],
    [0,width,width*2,width*3]
]


const pieces = [hero, blueRicky, orangeRicky, smashBoy, rhodeIsland, cleveland, teeWee]


function startGame(){
    createBoard()
    document.querySelector('.start_screen').classList.add('hidden')
    timerId = setInterval(movePiece, intervalTime)

}

function stopGame(){
    clearInterval(timerId)
}


let currentPosition = 4;
let rotation = 0;

let random = Math.floor(Math.random() * pieces.length)  
console.log(random)
let current = pieces[random][rotation]


function createBoard(){
    for(let i = 0; i < width * height ; i++){
        let block = document.createElement('div')
        block.classList.add('block')
        if(i >= 780){
            block.classList.add('bottom')
        }
        if(i % 20 === 0 || (i + 1) % 20 ===0) {
            block.classList.add('wall')
        }
        grid.appendChild(block)
        gameBoard.push(block)
    }

}

function draw(){
    console.log(random)
    console.log(current)
    // console.log(random)
    // console.log(rotation) 
    // console.log("rotation")
    // console.log(current)
    
    if(random === 0){
        current.forEach(index=>
            gameBoard[currentPosition +  index].classList.add('pink'))  
    }else if(random === 1){
        current.forEach(index=>
            gameBoard[currentPosition +  index].classList.add('blue'))  
    }else if(random === 2){
        current.forEach(index=>
            gameBoard[currentPosition +  index].classList.add('orange'))  
    }else if(random === 3){
        current.forEach(index=>
            gameBoard[currentPosition +  index].classList.add('red'))  
    }else if(random === 4){
        current.forEach(index=>
            gameBoard[currentPosition +  index].classList.add('purple'))  
    }else if(random === 5){
        current.forEach(index=>
            gameBoard[currentPosition +  index].classList.add('green'))  
    }else if(random === 6){
        current.forEach(index=>
            gameBoard[currentPosition +  index].classList.add('black'))  
    }
}

function removePiece(){
    if(random === 0){
        current.forEach(index=>
            gameBoard[currentPosition +  index].classList.remove('pink'))  
    }else if(random === 1){
        current.forEach(index=>
            gameBoard[currentPosition +  index].classList.remove('blue'))  
    }else if(random === 2){
        current.forEach(index=>
            gameBoard[currentPosition +  index].classList.remove('orange'))  
    }else if(random === 3){
        current.forEach(index=>
            gameBoard[currentPosition +  index].classList.remove('red'))  
    }else if(random === 4){
        current.forEach(index=>
            gameBoard[currentPosition +  index].classList.remove('purple'))  
    }else if(random === 5){
        current.forEach(index=>
            gameBoard[currentPosition +  index].classList.remove('green'))  
    }else if(random === 6){
        current.forEach(index=>
            gameBoard[currentPosition +  index].classList.remove('black'))  
    }
}


       
function check(){
    if( current.some(index =>gameBoard[currentPosition + index + width].classList.contains('bottom') ) ){
        current.forEach(index =>gameBoard[currentPosition + index].classList.add('bottom'))
        random = Math.floor(Math.random() * pieces.length)  
        current = pieces[random][rotation]
        currentPosition = 4;
        draw();
    }
    
    
    
}



// Movement Functions *****

function movePiece(){
    removePiece();
    currentPosition += width;
    draw();
    check();
}

function control(e){
    
        if (e.keyCode === 39) {
        moveRight()

        } else if (e.keyCode === 38){
            spin()
        }else if(e.keyCode === 37){
           moveLeft()
    
        }else if(e.keyCode === 40){
           movePiece()
    
            
        }
    }

    function moveLeft(){
        removePiece()
    
        if(!current.some(index => gameBoard[currentPosition + index].classList.contains('wall')))
        {
            currentPosition -= 1;
          
        }
        draw()
       
    }

    function moveRight(){
        removePiece()
    
        if(!current.some(index => gameBoard[currentPosition + index].classList.contains('wall')))
        {
            currentPosition += 1;
          
        }
        draw()
        
    }
 
    function spin(){
        removePiece()
        rotation ++

        if(rotation === current.length){
            rotation = 0
        }
        current = pieces[random][rotation]
        draw()


        // if(!current.some(index => gameBoard[currentPosition + index -1 ].classList.contains('wall')))
        // {
        //     currentPosition -= 1;
        //     draw()
        
        // }
    }

// End of Movement Functions *****
    
    
    
    