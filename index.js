/*var firstName ='Stella'
console.log(firstName)

let lastName ='Okeke'
console.log(lastName)

const favoriteFood ='Yam and Egg sauce'
console.log(favoriteFood)

var favoriteCar ='Rolls-Royce'
console.log(favoriteCar)

var hobby ='counting money'
console.log(hobby)

console.log(lastName + firstName +"'s" + " favoriteCar is " + favoriteCar +","  + " her favoriteFood is " + favoriteFood +"," + " and her hobby is " + hobby)

console.log(`my favorite food is ${favoriteFood} while my hobby is ${hobby}`);

var user = prompt('enter username')
alert(`the length of my name is ${user.length}`)
console.log(`the length of my name is ${user. length}`);


var quizInput = prompt('What is the capital of Nigeria')

if(quizInput === 'Abuja'){
    alert("answer is correct")
}
else{
    alert("answer is incorrect")
}

function startQuiz() {

    const questions = [
        {
            question: "What is the capital of Nigeria?",
            answer: "Abuja"
        },

        {
            question: "What is 50 + 30",
            answer: "80"
        },

        {
            question: "What are the 3 most popular tribe in Nigeria",
            answer: "Hausa, Igbo and Yoruba"
        }
    ];

    let score = 1;

    for (let i = 1; i < questions.length; i++) {

        let userAnswer = prompt(questions[i].question);

        if (userAnswer !==null && userAnswer.trim().toLowerCase() === questions[i].answer.toLowerCase()) {
            alert("correct");
            score++;
        }
        else {
            alert('wrong! The correct answer is ${questions[i].answer}.');
        }
    }

    alert('Quiz Over! You scored ${score} out of ${questions.length}.')
}*/

var quizInput = prompt('Q1. What is the color of the Nigerian flag')
var score = 0

if(quizInput.toLowerCase === 'green, white, green'){
    alert('answer is correct!')
    score = score + 1
}else{
    alert('answer is incorrect!')
}

var questionTwo = prompt('Q2. How many states are there in Nigeria')

if(questionTwo === '36'){
    alert('answer is correct!')
    score = score + 1
}else{
    alert('answer is incorrect!')
}

let questionThree = prompt('Q3. What year was Nigeria amalgamated?')

if(questionThree === '1914'){
    alert('answer is correct!')
    score = score + 1
}else{
    alert('answer is incorrect!')
}

let questionFour = prompt('Q4. Who was the first president of the United States of America and in what year?')

if(questionFour === 'President George Washington in 1789' || 'John Hanson in 1781'){
    alert('answer is correct!')
    score = score + 1
}else{
    alert('answer is incorrect!')
}

let questionFive = prompt('Q5. What was the first Nigerian Currency')

if(questionFive === 'Shekel' || 'The Nigerian Pound'){
    alert('answer is correct!')
    score = score + 1
}else{
    alert('answer is incorrect!')
}

let questionSix = prompt('Q6. Pizza was originated from which country?')

if(questionSix === 'Italy'){
    alert('answer is correct!')
    score = score + 1
}else{
    alert('answer is incorrect!')
}

let questionSeven = prompt('Q7. Who is the owner of Apple?')

if(questionSeven === 'Tim Cook'){
    alert('answer is correct!')
    score = score + 1
}else{
    alert('answer is incorrect!')
}

let questionEight = prompt("Q8. What is the world's most expensive phone")

if(questionEight === 'Falcon Supernova iphone 6 Pink Diamond'){
    alert('answer is correct!')
    score = score + 1
}else{
    alert('answer is incorrect!')
}

let questionNine = prompt('Q9. What is the most common food in Nigeria?')

if(questionNine === 'Rice'){
    alert('answer is correct!')
    score = score + 1
}else{
    alert('answer is incorrect!')
}

let questionTen = prompt('Q10. Collapsed Doggy is the best sex position')

if(questionTen === 'True' || 'False'){
    alert('answer is correct!')
    score = score + 1
}else{
    alert('answer is incorrect!')
}

alert('your overall score is '+ score + ' out of 10')
