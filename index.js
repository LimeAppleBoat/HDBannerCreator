//shadow
//var mappings = {}
const canvas = document.getElementById('canvas');
const banner = document.getElementById("banner");
const data = document.getElementById("data");
const urlSearchParams = new URLSearchParams(window.location.search);
var i = 0;

function getFileLoc(img) {
    return "assets/" + mappings[img] + ".png";
}

function getLang(id, lang) {
    if (lang == null) return id;
    if (lang[id] == null) return id;
    return lang[id];
}

function createImg(color, img) {
    document.title = "HD Banner Creator";
    const a = svg_map[mappings[img]].replaceAll("?", color);
    const b = document.createElement("span");
    b.style.position = "absolute";
    b.innerHTML = a;
    b.id = i;
    b.setAttribute("color", color);
    b.setAttribute("img", img)
    banner.append(b);
    i++;
    let url = new URL(document.URL);
    let params = new URLSearchParams(url.search);
    //Add a third parameter.
    params.set('patterns', encodePatterns());
    url.search = params.toString();
    console.log(url, params, encodePatterns())
    data.value = url.toString();
}
function initConfig() {
    genOptions(getLangFromLocalStorage());
    decodePatterns(urlSearchParams.get("patterns"))
}

function getLangFromLocalStorage() {
    return localStorage.getItem("lang") == null ? getLanguage("en_us") : getLanguage(localStorage.getItem("lang"));
}

function getLanguage(str) {
    switch(str) {
        case "en_us":
            return en_us;
        case "en_au":
            return en_au;
    }
}

function genOptions(lang) {
    for (const [key, value] of Object.entries(mappings)) {
        const op = document.createElement("option");
        op.id = "key-" + key;
        op.innerHTML = getLang(value, lang);
        if (key == 999) return;
        document.getElementById("banner-type").append(op);
    }
}

function addPattern() {
    createImg(
        document.getElementById("banner-color").value,
        getKey(document.getElementById("banner-type").selectedOptions[0].id)
    );
}
function getKey(key) {
    return key.replaceAll('key-', '');
}

function regenerateOptions() {
    const op = document.getElementById("banner-type");
    op.innerHTML = "";
    genOptions(getLangFromLocalStorage());
}

function loadTranslatableText() {
    for (var a = 0; a < document.getElementsByClassName("translatable").length; a++) {
        const _a = document.getElementsByClassName("translatable")[a];
        _a.innerText = getLang(_a.innerText, getLangFromLocalStorage());
    }
}

function mergeSvg() {
    html2canvas(banner).then(function(canvas2) {
            theCanvas = canvas2;
            document.body.appendChild(canvas2);
            var base64image = canvas2.toDataURL("image/png");
            console.log(base64image);
            // Convert and download as image 
            document.body.append(canvas2);
            console.log(canvas2.toDataURL());
            var n = document.createElement('a')
            n.href=base64image;
            n.download = "banner";
            n.click();
            document.body.appendChild(n);
            // Clean up 
            document.body.removeChild(canvas2);
        }
    );
}
function encodePatterns() {
    let encodedPattern = "";
    for (let e = 0; e < i; e++) {
        var temp = "";
        temp = temp + getThreeDigitNumber(getId(e).getAttribute("img"));
        temp = temp + getId(e).getAttribute("color");
        encodedPattern = encodedPattern + temp;
    }
    return encodedPattern;
}
function decodePatterns(encoded) {
    if (encoded == null) return;
    let array = encoded.match(/.{10}/g) || [];
    array.forEach(l => {
        console.log(l);
        console.log(Number(l.substring(0, 3)), l.substring(3));
        createImg(l.substring(3), Number(l.substring(0, 3)));
    });
}
function getId(id) {
    return document.getElementById(id);
}
function init() {
    initConfig();
    regenerateOptions();
    loadTranslatableText();
}
function getThreeDigitNumber(num) {
    const temp = num + "";
    if (temp.length == 1) return "00" + temp;
    if (temp.length == 2) return "0" + temp;
    if (temp.length > 3) return "000";
    return temp;
}