function buildTeams() {
    let players = ["Anastasia", "Alessio", "George", "Nicolas", "Davide", "Desire", "Manuel", "Alessia", "Mirco", "Karolina", "Lorenzo", "Pasto"];
    let teamsNumber = new Array(12);
    let end = false;
    let x = 0, index = 0;

    for(let i = 0; i < 12; i++) {
        teamsNumber[i] = 0;
    }

    while(end == false) {
        x = getRandomIntInclusive(1, 12);
        if(!isPresent(x, teamsNumber)) {
            teamsNumber[index] = x;
            index++;
        }
        if(index == 12) {
            end = true;
        }
    }

    document.getElementById("p1").innerHTML = players[teamsNumber[0]-1];
    document.getElementById("p2").innerHTML = players[teamsNumber[1]-1];
    document.getElementById("p3").innerHTML = players[teamsNumber[2]-1];
    document.getElementById("p4").innerHTML = players[teamsNumber[3]-1];
    document.getElementById("p5").innerHTML = players[teamsNumber[4]-1];
    document.getElementById("p6").innerHTML = players[teamsNumber[5]-1];
    document.getElementById("p7").innerHTML = players[teamsNumber[6]-1];
    document.getElementById("p8").innerHTML = players[teamsNumber[7]-1];
    document.getElementById("p9").innerHTML = players[teamsNumber[8]-1];
    document.getElementById("p10").innerHTML = players[teamsNumber[9]-1];
    document.getElementById("p11").innerHTML = players[teamsNumber[10]-1];
    document.getElementById("p12").innerHTML = players[teamsNumber[11]-1];

    document.getElementById("container").style.display = "block";
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}

function isPresent(x, array) {
    let result = false;
    for(let i = 0; i < 12; i++) {
        if(x == array[i]) {
            result = true;
        }
    }
    return result;
}