function triggerTranslationPrompt() {
    doTranslationPrompt(prompt("Enter a banner format", "needcoolshoes"))
}


function doTranslationPrompt(val) {
    let ryukvgdmf = null;
    if (val == "needcoolshoes") {
        const z = new NeedCoolShoesTranslator();
        let a = prompt("Convert from Need Cool Shoes");
        if (a == null) return;
        a = a.split("?=").length > 1 ? a.split("?=")[1] : a;
        a = a.split("#")[0];
        if (a != null) {
            let url = new URL(document.URL);
            let params = new URLSearchParams(url.search);
            //Add a third parameter.
            params.set('patterns', z.convertAndEncode(z.createConvertableStrings(a)));
            console.log(z.createConvertableStrings(a));
            url.search = params.toString();
            //console.log(url, params, createConvertableStrings(a))
            ryukvgdmf = url;
        }
    } else if (val == "minecrafttools") {
        const z = new MinecraftToolsTranslator();
        let a = prompt("Convert from Minecraft Tools");
        if (a == null) return;
        a = a.split("?").length > 1 ? "?" + a.split("?")[1] : "?" + a;
        a = a.split("#")[0];
        let url = new URL(document.URL);
            let params = new URLSearchParams(url.search);
            //Add a third parameter.
            params.set('patterns', z.convert(a));
            console.log(z.convert(a))
            url.search = params.toString();
            //console.log(url, params, createConvertableStrings(a))
            ryukvgdmf = url;
    } else if (val == "planetminecraft") {
        alert("This translator is still a WIP!");
    } else {
        alert("NO TRANSLATOR FOR \"" + val + "\".");
    }
    if (ryukvgdmf != null) {
        location.href = ryukvgdmf;
    }
}