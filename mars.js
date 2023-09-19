alert('HELLLLOOOOOOOO')
const username = prompt("Hi there. What's your username")
alert(` Hi ${username} welcome to the rocket ship`)
alert('you have been called to go to mars good luck')

const no = 'N'
const yes = 'Y'
let excited = prompt('are you excited?  Type Y or N')
excited = excited.toUpperCase();

if (excited === yes) {
    alert ('I knew you woukd say that')
} if (excited === no) {
    alert('To late your alredy going.')
}
let numsuitcases = prompt('How many suitcases do you have')
numsuitcases = Number(numsuitcases)
if (numsuitcases > 2) {
    alert("That's way to many. You'll have to pack more lightlhy")
} if (numsuitcases <= 2){
    alert('Perfect! you certainly fit in the spaceship')
}  alert("You're allowed to bring one compainon animal with you.")
const companionType = prompt('What kind of animal would you like to bring?')
let companionName = prompt("What is your compainons name?")
let firstLetter = companionName[0]
firstLetter = firstLetter.toUpperCase()

let otherletters = companionName.slice(1)
otherletters = otherletters.toLowerCase()
companionName = firstLetter + otherletters
alert(`Cool, so you're bringing ${companionName} the ${companionType}`)
 
alert('NASA has a interior design team offering to outfit your space ship.');
alert(`You have a couple of options for the interior decor of your ship. Your options are:
A  Sleek, modern minimalism
B  Retro/vintage space age
C  Victorian-era steampunk
`);
let decorChoice = prompt('Which decor would you like? Choose A, B, or C.');
// Clean up user input
decorChoice = decorChoice.toUpperCase();


let decor
if (decorChoice === 'A') {
    decor = 'modern minimalist'
}
 if(decorChoice === 'B'){
    decor = 'Retro vintage'
 }
 if(decorChoice === 'C') {
    decor = 'Victorian-era'
 }

  alert(`${username} and ${companionName}, surfing the celeastial abyss in a ${decor} spaceship.`)

 let timer = 5
 while (timer >  0) {
    alert(`${timer}...`)
    timer -= 1
 }
 alert('*** LIFTOFFF OMG AHHHHHHH!!!!!!!!! ***')

 


