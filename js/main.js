var level; //academic sqa level
var lPrefix; //prefix for loading content : used for file path concatinaiton

function levelSet(input) {
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

    //console.log(lPrefix); debug line
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