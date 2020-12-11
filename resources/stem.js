var back = document.getElementsByClassName("backButton")[0];
var title = document.getElementsByClassName("questionTitle")[0];
var text = document.getElementsByClassName("questionText")[0];

var buttons = document.getElementsByClassName("buttons")[0];
var button1 = document.getElementsByClassName("button1")[0];
var button2 = document.getElementsByClassName("button2")[0];
var button3 = document.getElementsByClassName("button3")[0];

var skip = document.getElementsByClassName("skip")[0];

var question = 0;//this number is tied to the answers array. The number starts at 0 and the array on position 0. This variable is also tied to "questTitles" and "questDesc".

const questTitles = ['1. Bindend referendum', '2. Maatschappelijke dienstplicht', '3. Anoniem solliciteren', '4. Groepsbelediging', '5. Teelt en verkoop wiet', '6. Vervroegde vrijlating', '7. Vennootschapsbelasting', '8. Belasting hoogste inkomens', '9. Tijdelijke arbeidscontracten', '10. AOW-leeftijd 65', '11. Verzekering zzp`ers', '12. Leenstelsel studenten', '13. Geld cultuur', '14. Islamitische immigranten', '15. Kinderpardon', '16. Onderdak illegalen', '17. Hypotheekrente', '18. Verhuurdersheffing', '19. Schiphol', '20. Kilometerheffing', '21. Nieuwe wegen', '22. Kolencentrales', '23. BTW-tarief vlees', '24. Voltooit leven', '25. Afschaffing eigen risico', '26. Landelijk zorgfonds', '27. Defensie uitgaven', '28. Europees leger', '29. Ontwikkelingshulp', '30. EU-lidmaatschap'];//The title of each question is saved in this array.

console.log(questTitles.length);

const questDesc = ['Er moet een bindend referendum komen, waarmee burgers door het parlement aangenomen wetten kunnen tegenhouden.', 'Er moet een maatschappelijke dienstplicht voor jongeren komen. Zij kunnen dan dienen in het leger, bij de politie of in de zorg.', 'Om discriminatie op basis van de naam te voorkomen, moet anoniem solliciteren bij de overheid en bij openbare instellingen de regel worden.', 'Belediging van groepen op grond van ras, godsdienst of geaardheid moet niet langer strafbaar zijn.', 'De teelt en verkoop van wiet moet legaal worden.', 'De vervroegde vrijlating onder voorwaarden van gevangenen moet stoppen. Zij moeten hun straf helemaal uitzitten.', 'De belasting over de winst van ondernemingen (vennootschapsbelasting) moet omlaag.', 'De hoogste inkomensgroepen moeten meer belasting gaan betalen.', 'De periode waarbinnen je meerdere tijdelijke arbeidscontracten na elkaar kunt afsluiten, moet langer worden dan twee jaar.', 'De AOW-leeftijd moet weer 65 jaar worden.', 'Er moet een verplichte verzekering tegen arbeidsongeschiktheid en ziekte komen voor alle zelfstandigen zonder personeel (zzp`ers).', 'Het leenstelsel voor studenten moet worden afgeschaft. De basisbeurs moet weer terugkomen.', 'Er moet meer geld naar kunst en cultuur.', 'Nederland moet de grenzen sluiten voor islamitische immigranten.', 'In Nederland opgegroeide kinderen van asielzoekers moeten hier kunnen blijven (kinderpardon).', 'De regering moet gemeenten verbieden illegale vreemdelingen onderdak te geven.', 'De regeling voor de aftrek van de hypotheekrente moet niet verder worden aangetast.', 'Woningcorporaties moeten meer goedkope huurwoningen bouwen. Daarom moet de belasting die zij betalen over huurwoningen (verhuurdersheffing) worden afgeschaft.', 'Luchthaven Schiphol moet kunnen uitbreiden.', 'De regering moet niet het bezit van de auto, maar het aantal gereden kilometers belasten.', 'Er moet meer geld naar de aanleg van nieuwe wegen.', 'Alle kolencentrales mogen voorlopig open blijven.', 'Voor vlees moet het hoge btw-tarief van 21 procent gaan gelden.', 'Ouderen die vinden dat hun leven voltooid is moeten hulp kunnen krijgen om een einde aan hun leven te maken.', 'Het eigen risico in de zorg moet worden afgeschaft, ook als dat betekent dat de premies omhoog gaan.', 'Er moet een landelijk zorgfonds komen, zodat het stelsel van particuliere zorgverzekeraars kan verdwijnen.', 'De uitgaven voor defensie moeten de komende jaren fors omhoog naar 2 procent van het nationale inkomen (de NAVO-norm).', 'Er moet een Europees leger komen.', 'Nederland moet meer geld uitgeven voor de ontwikkeling van arme landen.', 'Nederland moet uit de Europese Unie (EU) stappen.'];//The descriptions of the questions are all saved in this array called: 'questDesc'.

console.log(questDesc.length);

var answers = [];//Answers can only be: "EENS", "GEEN VAN BEIDE" or "ONEENS".

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

    console.log(questTitles[question]);
    console.log(questDesc[question]);
    title.innerHTML = questTitles[question];
    text.innerHTML = questDesc[question];
    
    skip.setAttribute("onclick", "skipQuestion();");
    back.setAttribute("onclick", "backButton();");

    if(question == questTitles.length){
        end();
    }//If the number in the var "question" is equal to the length of the array "questTitles". The function "end();" will run.
}
showQuestion();

function agree(){
    answers.push('eens');
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
    answers.push('oneens');
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
     
    title.innerHTML = questTitles[question];
    text.innerHTML = questDesc[question];

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
    answers.splice(question, 1, 'eens');
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
    answers.splice(question, 1, 'oneens');
    question++;
    console.log(answers);
    backQuestion();
}
//The splice method can delete and/or add to an array on a specific position, and will return the deleted items.

function end(){//This function ends the question cycle, so you can see your result.
    button1.style.display = 'none';
    button2.style.display = 'none';
    buttons.style.float = 'right';
    buttons.style.paddingRight = '20px';
    skip.style.display = 'none';
    button3.innerHTML = 'Verder';
    title.innerHTML = 'Uw mening komt het best overeen met:'

    var agreeCount = 0;
    var noneCount = 0;
    var disagreeCount = 0;

    for (let i = 0; i < answers.length; i++) {
        //console.log(answers[i]);
        if(answers[i] === 'eens'){
            agreeCount++;
            console.log('eens = ' + agreeCount);
        }
        else if(answers[i] === 'geen van beide'){
            noneCount++;
            console.log('geen van beide = ' + noneCount);
        }
        else if(answers[i] === 'oneens'){
            disagreeCount++;
            console.log('oneens = ' + disagreeCount);
        }
    }
    console.log(agreeCount);
    console.log(noneCount);
    console.log(disagreeCount);
}