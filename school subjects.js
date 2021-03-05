function Week() {
    
    var data = new Date();
    switch(data) {
        case 1:
            Monday();
            break;
        case 2:
            Tuesday();
            break;
        case 3:
            Wednesday();
            break;
        case 4:
            Thursday();
            break;
        case 5:
            Friday();
            break;
        default:
            console.log("weekend");
    }
    
}

function Monday() {
    alert("orario di oggi\n" +
    "Matematica\n" +
    "Sistemi\n" +
    "Telecomunicazioni Lab\n" +
    "Telecomunicazioni Lab\n" +
    "Italiano\n" +
    "Motoria\n" +
    "Storia");
}

function Tuesday() {
    alert("orario di oggi\n" +
    "Motoria\n" +
    "Complementi\n" +
    "Italiano\n" +
    "Informatica\n" +
    "Sistemi\n" +
    "TeP");
}


function Wednesday() {
    alert("orario di oggi\n" +
    "Informatica Lab\n" +
    "Informatica Lab\n" +
    "Informatica Lab\n" +
    "Informatica\n" +
    "TeP\n" +
    "Religione");
}


function Thursday() {
    alert("orario di oggi\n" +
    "Matematica\n" +
    "Matematica\n" +
    "Sistemi Lab\n" +
    "Sistemi Lab\n" +
    "TeP Lab\n" +
    "Telecomunicazioni\n" +
    "Inglese");
}

function Friday() {
    alert("orario di oggi\n" +
    "Italiano\n" +
    "Italiano\n" +
    "Storia\n" +
    "Informatica\n" +
    "Inglese\n" +
    "Inglese");
}