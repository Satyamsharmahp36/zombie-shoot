// Iteration 1: Declare variables required for this game

// Iteration 1.2: Add shotgun sound

// Iteration 1.3: Add background sound

// Iteration 1.4: Add lives

// Iteration 2: Write a function to make a zombie

// Iteration 3: Write a function to check if the player missed a zombie

// Iteration 4: Write a function to destroy a zombie when it is shot or missed

// Iteration 5: Creating timer

// Iteration 6: Write a code to start the game by calling the first zombie

// Iteration 7: Write the helper function to get random integer



let gameBody=document.getElementById('game-body')
let lives = document.getElementById('lives')
let seconds=document.getElementById('timer').textContent
console.log(seconds)
var zombieId=0

let maxlives=4;

const backgroundSound= new Audio('./assets/bgm.mp3')
backgroundSound.play()
backgroundSound.loop=true

const shotgunSound =new Audio('./assets/shotgun.wav')
shotgunSound.volume=0.1

gameBody.onclick=()=>{
    shotgunSound.pause()
    shotgunSound.currentTime=0
    shotgunSound.play()
}

const img = [
    "zombie-1.png",
    "zombie-2.png",
    "zombie-3.png",
    "zombie-4.png",
    "zombie-5.png",
    "zombie-6.png",
]

function getRandomInt(min,max){
    min =Math.ceil(min);
    max=Math.ceil(max);
    return Math.floor(Math.random()*(max-min)) + min

}

getRandomInt()

console.log(img[getRandomInt(0,5)])

function makeZombie(){
    randomImg=img[getRandomInt(0,img.length)]
    gameBody.innerHTML += `<img src="./assets/${randomImg}"
    class="zombie-image" id="zombies${zombieId}">`

    let zombie=document.getElementById(`zombies${zombieId}`)
    zombie.style.transform=`translateX(${getRandomInt(15,75)}vw)`
    zombie.onclick=()=>{
        zombiedistruction(zombie)

}


}


makeZombie()
function zombiedistruction(xyz){
    xyz.style.display='none';
    zombieId++
    makeZombie()
}

function checkcollision(abc){
    if(abc.getBoundingClientRect().top<=0){
        maxlives--
        return true
    }
    return false

}

var timer=setInterval(()=>{
    document.getElementById('timer').textContent=seconds
    seconds--

    let zombie=document.getElementById(`zombies${zombieId}`)

    if(checkcollision(zombie)==true){
        zombiedistruction(zombie)
        if(maxlives==0){
            clearInterval(timer)
            location.href='./game-over.html'
        }
    }

    if(seconds==0){
        clearInterval(timer)
        location.href="./win.html"
    }
},1000)





