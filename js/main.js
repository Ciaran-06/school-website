function webchange(pTarg, depth) {
    //location.href = "pages/" + pTarg + "/" + pTarg + +"/" + pTarg + "/" + ".html";
    //console.log("pages/" + pTarg + "/" + pTarg + "/" + pTarg + "/" + ".html");
    console.log(pTarg);

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