
let buttonColors = ["red", "blue", "green", "yellow"]
let gamePattern = []
let userClickedPattern=[]
let count=0

function next_sequence() {
    let randomNumber = Math.floor((Math.random() * 4))  //generate random no from 0 to 3
    let randomChosenColour = buttonColors[randomNumber] //choose color acc to randNo
    
    gamePattern.push(randomChosenColour)
    $('#' + randomChosenColour).delay(20).fadeOut().fadeIn('fast') //flash-effect
    playSound(randomChosenColour)

    let title="level"+count
    $('h1').html(title)
}

function playSound(name){
    let audio = new Audio("sounds/"+name+".mp3");
    audio.play();
}

function animatePress(currentColour){
    $('#'+currentColour).addClass("pressed")
    setTimeout(()=>{
        $('#'+currentColour).removeClass("pressed")  
    },100)
}

$('.btn').click((event)=>{
   let userChosenColour= event.currentTarget.id //seen frm inspect tool
   userClickedPattern.push(userChosenColour)
   console.log(userClickedPattern)
   playSound(userChosenColour)
   animatePress(userChosenColour)

   let check=false;
       check=checkSequence()
    
    if(check==true ){
    console.log('right sequence')
    }
    else{                                     //if wrong sequence encountered
    var audio=new Audio("./sounds/wrong.mp3")
    audio.play()
    $('body').addClass("game-over")
    setTimeout(()=>{
      $('body').removeClass("game-over")
    },200)

    $('h1').html("Game Over, Press Any Key to Restart")
    console.log('wrong sequence')
    startOver()
    }
  
    if(gamePattern.length==userClickedPattern.length && check==true){
    count++;
    setTimeout(next_sequence(),500)
    userClickedPattern=[]
    }
   
})

function checkSequence(){
  for(var i=0;i<userClickedPattern.length;i++){
    if(userClickedPattern[i]!=gamePattern[i])
     return false
  }
  return true
}

function startOver(){
  count=0
  gamePattern=[]
  userClickedPattern=[]
}

$(document).keypress(()=>{
  if(count==0){
    next_sequence()
  }

})
