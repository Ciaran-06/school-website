//let level; //academic sqa level
//var lPrefix; //prefix for loading content : used for file path concatinaiton

function levelSet(input) {

    //document.cookie = "level=" + input + ";";
    //console.log("level set to " + input);

    if (input == 1) {
        lPrefix = "n4";
    } else if (input == 2) {
        lPrefix = "n5";
    } else if (input == 3) {
        lPrefix = "hi";
    } else if (input == 4) {
        lPrefix = "ah";
    }

    document.cookie = "level=" + lPrefix + ";";
    location.href = "./subChoice.html";

    console.log(lPrefix);

    //return level;
}

function webchange(pTarg, level) {
    var loc = window.location.pathname;
    var dir = loc.substring(0, loc.lastIndexOf('/'));
    console.log(dir.substring(0, 15 = ""));

    /* if (level == 1) {
         console.log(dir);
         if (dir == "") {
             location.href = dir + "/pages/" + pTarg + "/" + getCookie("level") + "/main.html";
         } else {
             location.href = dir + "/" + pTarg + "/" + getCookie("level") + "/main.html";
             console.log(dir + "/" + pTarg + "/" + getCookie("level") + "/main.html");
         }
     } else {
         location.href = dir + "/pages/" + pTarg + "/" + pTarg + ".html";
         console.log(dir + "/pages/" + pTarg + "/" + pTarg + ".html");
     }*/

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

function test() {
    var loc = window.location.pathname;
    var dir = loc.substring(0, loc.lastIndexOf('/'));

    console.log(dir);
}

function change() {
    location.href = "../pages/math/math.html";
}