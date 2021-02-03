var back = document.getElementsByClassName("backButton")[0];
var title = document.getElementsByClassName("questionTitle")[0];
var text = document.getElementsByClassName("questionText")[0];

var buttons = document.getElementsByClassName("buttons")[0];
var button1 = document.getElementsByClassName("button1")[0];
var button2 = document.getElementsByClassName("button2")[0];
var button3 = document.getElementsByClassName("button3")[0];

var section = document.getElementsByClassName("sec2")[0];

var skip = document.getElementsByClassName("skip")[0];

var question = 0;//this number is tied to the answers array. The number starts at 0 and the array on position 0.

console.log(subjects.length);

var answers = [];//Answers can only be: "PRO", "GEEN VAN BEIDE" or "CONTRA".

var result = [];//All the parties and the number of correct answers are saved here for calculation of the best party.

const size = 10;

var checkboxArray = [];

for(let i = 0; i < parties.length; i++){
  result[i] = {
    name: parties[i]['name'],
    secular: parties[i]['secular'],
    size: parties[i]['size'],
    amount: 0
  }
}

button1.setAttribute("onclick", "agree();");
button2.setAttribute("onclick", "none();");
button3.setAttribute("onclick", "disagree();");


function showQuestion(){//This function shows a specific question based on the number in the variable: "question".
    if(question == 0){
        back.disabled = true;
        console.log(question);
    }
    else{
        back.disabled = false;
        console.log(question);
    }

    //console.log(question);
    
    skip.setAttribute("onclick", "skipQuestion();");
    back.setAttribute("onclick", "backButton();");

    if(question == subjects.length){
        checkBoxes();
    }//If the number in the var "question" is equal to the length of the array "subjects". The function "checkBoxes();" will run.
    else{
        console.log(subjects[question]);
        title.innerHTML = question + 1 + '. ' + subjects[question].title;
        text.innerHTML = subjects[question].statement;
    }
}
showQuestion();

function agree(){
    answers.push('pro');
    question++;
    nextQuestion();
    console.log(answers);
}

function none(){
    answers.push('geen van beide');
    question++;
    nextQuestion();
    console.log(answers);
}

function disagree(){
    answers.push('contra');
    question++;
    nextQuestion();
    console.log(answers);
}

function skipQuestion(){
    question++;
    backQuestion();
    console.log(answers);
}

function backButton(){
    question--;
    backQuestion();   
}

function backQuestion(){//This function cycles back through the answered questions, so you can change your answers.
    if(question == 0){
        back.disabled = true;
        console.log(question);
    }
    else{
        back.disabled = false;
        console.log(question);
    }

    var backOff = answers[question];
    console.log(backOff);
    //console.log(answers);
    if(backOff == 'eens'){
        button1.classList.remove('w3-black');
        button1.classList.add('w3-blue');
        button2.classList.remove('w3-blue');
        button2.classList.add('w3-black');
        button3.classList.remove('w3-blue');
        button3.classList.add('w3-black');
    }
    else if(backOff == 'geen van beide'){
        button2.classList.remove('w3-black');
        button2.classList.add('w3-blue');
        button1.classList.remove('w3-blue');
        button1.classList.add('w3-black');
        button3.classList.remove('w3-blue');
        button3.classList.add('w3-black');
    }
    else if(backOff == 'oneens'){
        button3.classList.remove('w3-black');
        button3.classList.add('w3-blue');
        button1.classList.remove('w3-blue');
        button1.classList.add('w3-black');
        button2.classList.remove('w3-blue');
        button2.classList.add('w3-black');
    }
    else{
        nextQuestion();
    }
     
    title.innerHTML = question + 1 + '. ' + subjects[question].title;
    text.innerHTML = subjects[question].statement;

    button1.setAttribute("onclick", "backAgree();");
    button2.setAttribute("onclick", "backNone();");
    button3.setAttribute("onclick", "backDisagree();");

    
}

function nextQuestion(){
    button1.classList.add('w3-black');
    button1.classList.remove('w3-blue');
    button2.classList.add('w3-black');
    button2.classList.remove('w3-blue');
    button3.classList.add('w3-black');
    button3.classList.remove('w3-blue');
    
    showQuestion();
}

function backAgree(){
    answers.splice(question, 1, 'pro');
    question++;
    console.log(answers);
    backQuestion();
}

function backNone(){
    answers.splice(question, 1, 'geen van beide');
    question++;
    console.log(answers);
    backQuestion();
}

function backDisagree(){
    answers.splice(question, 1, 'contra');
    question++;
    console.log(answers);
    backQuestion();
}
//The splice method can delete and/or add to an array on a specific position, and will return the deleted items.

function checkBoxes(){//This function generates the checkboxes to check which questions weigh more in the calculation.
  title.innerHTML = 'Welke vragen vindt u belangrijk?';
  
  back.disabled = true;

  button1.innerHTML = 'Verder';
  button1.setAttribute('onclick', 'validate()');

  button2.style.display = 'none';
  button3.style.display = 'none';

  skip.style.display = 'none';
  text.style.display = 'none';

  checkDiv = document.createElement('DIV');
  checkDiv.setAttribute('id', 'checkBoxDiv');
  section.appendChild(checkDiv);

  for(let i = 0; i < subjects.length; i++){
    var allChecks = document.createElement('INPUT');
    allChecks.type = 'checkbox';
    allChecks.id = 'checkbox_' + i;
    allChecks.name = 'subjects';
    allChecks.value = subjects[i].title;

    var label = document.createElement('label')
    label.htmlFor = subjects[i].title;
    label.appendChild(document.createTextNode(' ' + subjects[i].title));

    var br = document.createElement('br');

    checkDiv.appendChild(allChecks);
    checkDiv.appendChild(label);
    checkDiv.appendChild(br);
  }
  //console.log(allChecks);
}

function validate(){
  for(i = 0; i < subjects.length; i++){
    if(document.getElementById('checkbox_' + i).checked){
      checkboxArray[i] = { condition: true, position: answers[i] }
    }
    else{
      checkboxArray[i] = { condition: false, position: answers[i] }
    }
  }
  console.log(checkboxArray);
  console.log(result);
  end();
}

function end(){//This function ends the question cycle, so you can see your result.
    checkDiv.style.display = 'none';

    button2.style.display = 'inline-block';
    button3.style.display = 'inline-block';

    buttons.style.paddingRight = '20px';
    button1.innerHTML = 'Alle partijen';
    button2.innerHTML = 'Alleen seculier';
    button3.innerHTML = 'Alleen grote';
    title.innerHTML = 'Welke partijen wilt u weergeven?';
    
    console.log(result);

    button1.setAttribute('onclick', 'allParties()');
    button2.setAttribute('onclick', 'onlySecular()');
    button3.setAttribute('onclick', 'onlyBig()');
}

var sparseSelection = [];

function makeClean(){//this function is meant for the 'sparseSelection' array. It cleans the array, and the correct values are saved in a new array called 'cleanSelection'.
  cleanSelection = sparseSelection.filter(function(){return true});
}

function allParties(){
  for(let i = 0; i < result.length; i++){
    sparseSelection[i] = { name: result[i]['name'], amount: result[i]['amount'] }
    makeClean();
    console.log(cleanSelection);
  }
  afterEnd();
}

function onlySecular(){//This function only filters out the secular parties (according to the boolean secular in the subjects array). And makes the original 'sparseSelection' array clean, so that there are no empty spaces.
  for(let i = 0; i < result.length; i++){
    if(result[i].secular == true){
      sparseSelection[i] = { name: result[i]['name'], amount: result[i]['amount'] }
      makeClean();
      console.log(cleanSelection);
    }
  }
  afterEnd();
}

function onlyBig(){//This function only filters out the biggest parties (according to the size in the subjects array). And makes the original 'sparseSelection' array clean, so that there are no empty spaces.
  for(let i = 0; i < result.length; i++){
    if(result[i].size > size){
      sparseSelection[i] = { name: result[i]['name'], amount: result[i]['amount'] }
      makeClean();
      console.log(cleanSelection);
    }
  }
  afterEnd();
}

function afterEnd(){//This function calculates the right party, based on your choices. And doubles the score depending on which checkboxes you checked.
    for(let i = 0; i < subjects.length; i++){
      for(let q = 0; q < subjects[i]['parties'].length; q++){
        if(subjects[i]['parties'][q]['position'] == answers[i]){
          for(let r = 0; r < cleanSelection.length; r++){
            if(cleanSelection[r]['name'] == subjects[i]['parties'][q]['name']){
              cleanSelection[r]['amount']++
            }
          }
        }
      }
    }

    for(let i = 0; i < subjects.length; i++){
      for(let u = 0; u < subjects[i]['parties'].length; u++){
        if(subjects[i]['parties'][u]['position'] == checkboxArray[i]['position']){
          if(checkboxArray[i].condition == true){
            for(let r = 0; r < cleanSelection.length; r++){
              if(cleanSelection[r]['name'] == subjects[i]['parties'][u]['name']){
                cleanSelection[r]['amount'] *= 2;
              }
            }
          }
        }
      }
    }
    console.log(result);
    text.style.display = 'block';
    title.innerHTML = 'De partij die het beste bij u past is:';

    cleanSelection.sort(function(a, b){return b.amount - a.amount}); //the cleanSelection array is sorted (descending) from highest amount to lowest amount, the function above is a compare function. 
    console.log(cleanSelection[0].name);
    //text.innerHTML = result[0].name;

    for(let i = 0; i < parties.length; i++){
      if(cleanSelection[0].name == parties[i].name){
        console.log(parties[i].name);
        text.innerHTML = parties[i].name;
      }
    }
    button1.style.display = 'none';
    button2.style.display = 'none';
    button3.style.display = 'none';
    
    console.log(cleanSelection);
}