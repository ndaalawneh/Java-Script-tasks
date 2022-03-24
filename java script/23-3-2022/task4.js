
function fontchange() {
    let x = document.getElementById("font").value;
    if (x === 'Arial') {
        document.getElementById("txt").style.fontFamily = x;
    }
    if (x === 'TimesNewRoman') {
        document.getElementById("txt").style.fontFamily = x;
    }
    if (x === 'fantasy') {
        document.getElementById("txt").style.fontFamily = x;
    }
    if (x === 'cursive') {
        document.getElementById("txt").style.fontFamily = x;
    }
}

function fontSize() {

    let x = document.getElementById("size").value;
    if (x === '12') {
        document.getElementById("txt").style.fontSize = x + "px";
    }
    if (x === '18') {
        document.getElementById("txt").style.fontSize = "18px";
    }
    if (x === '24') {
        document.getElementById("txt").style.fontSize = "24px";
    }
    if (x === '32') {
        document.getElementById("txt").style.fontSize = "32px";
    }
}

function fontItalic() {
    italic = false;    
    let x = document.getElementById("a").value;
    if (document.getElementById("a").checked == true) {
        italic = true;

        document.getElementById("txt").style.fontStyle = x;
    }
    else {
        document.getElementById("txt").style.fontStyle = "normal";
    }
    
}

function fontBold() {

    let x = document.getElementById("b").value;
    if (document.getElementById("b").checked == true) {
        document.getElementById("txt").style.fontWeight = x;
    }
    else {
        document.getElementById("txt").style.fontWeight  = "normal";
    }
}

function fontUderLine() {
    let x = document.getElementById("c").value;
    if (document.getElementById("c").checked == true) {
        document.getElementById("txt").style.textDecoration = x;
    }
    else {
        document.getElementById("txt").style.textDecoration="none";
    }

}