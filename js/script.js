
function revealMessage() {
    document.getElementById("greetCard").classList.add("fade-out");
    document.getElementById("turnAround").play();

    setTimeout(function () {
        document.getElementById("greetCard").style.display = "none";
        document.getElementById("hiddenCard").classList.replace("d-none","d-block");
        document.getElementById("hiddenCard").classList.add("fade-in");
        document.getElementById("yesORno").classList.replace("d-none","d-block");
    }, 500);
}

function agree(){
    
    document.getElementById("turnAround").pause();
    document.getElementById("blue").play();
    
    document.getElementById("yesORno").classList.add("fade-out");
    document.getElementById("hiddenCard").classList.replace("d-block","d-none");

    setTimeout(function(){ 
    document.getElementById("mainGift").classList.add("fade-in");
    document.getElementById("mainGift").classList.replace("d-none","d-block");
    }, 750);
}

function switchText(){
    setTimeout(function (){
        document.getElementById("delayedLink").classList.replace("d-none","d-block");
        document.getElementById("delayedLink").classList.add("fade-in");
    }, 2000);

    setTimeout(function (){
        document.getElementById("hiddenNote").classList.replace("d-none","d-block");
        document.getElementById("hiddenNote").classList.add("fade-in");
    },500);
    
    document.getElementById("noButton").innerText = "YES";
    document.getElementById("noButton").classList.replace("no-button","yes-button");
    document.getElementById("yesButton").innerText = "NO";
    document.getElementById("yesButton").classList.replace("yes-button","no-button");

}
function returnState(){
    document.getElementById("noButton").innerText = "NO";
    document.getElementById("noButton").classList.replace("yes-button","no-button");
    document.getElementById("yesButton").innerText = "YES";
    document.getElementById("yesButton").classList.replace("no-button","yes-button");
}