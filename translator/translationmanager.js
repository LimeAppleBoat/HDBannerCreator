function doTranslationPrompt(val) {
    const z = new NeedCoolShoesTranslator();
    const a = prompt("TO CONVERT");
    if (a != null) {
        let url = new URL(document.URL);
        let params = new URLSearchParams(url.search);
        //Add a third parameter.
        params.set('patterns', z.convertAndEncode(z.createConvertableStrings(a)));
        url.search = params.toString();
        //console.log(url, params, createConvertableStrings(a))
        document.getElementById("converted").value = url.toString();
    }
}