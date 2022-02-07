//let level; //academic sqa level
//var lPrefix; //prefix for loading content : used for file path concatinaiton

function levelSet(input) {

    document.cookie = "level=" + input + ";";
    console.log("level set to " + input);

    if (input == 1) {
        lPrefix = "n4";
    } else if (input == 2) {
        lPrefix = "n5";
    } else if (input == 3) {
        lPrefix = "hi";
    } else if (input == 4) {
        lPrefix = "ah";
    }

    location.href = "./subChoice.html";

    console.log(lPrefix);

    //return level;
}

function webchange(pTarg, depth, level) {
    //TODO:
    //1. Get User Level & store in global variable
    //2. check if user level is required for redirect 
    //3. if user level is required for redirect then  conactanet along with pTarg & call redirect func with depth 



}

function redirect(depth, level) {
    if (depth = 1) {
        location.href = "./pages/" + pTarg + "/" + pTarg + ".html";
        console.log("1");
    } else if (depth = 2) {
        location.href = "./pages/" + pTarg + "/" + pTarg + "/" + pTarg + ".html";
        console.log("2");
    } else if (depth = 3) {
        location.href = "./pages/" + pTarg + "/" + pTarg + "/" + pTarg + "/" + pTarg + ".html";
        console.log("3");
    }
}

function lvl() {
    return getCookie("level");
}

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkCookie() {
    let username = getCookie("username");
    if (username != "") {
        alert("Welcome again " + username);
    } else {
        username = prompt("Please enter your name:", "");
        if (username != "" && username != null) {
            setCookie("username", username, 365);
        }
    }
}