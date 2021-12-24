const toSort = {
    
}

function sort() {
    const a = [];
    const b = {};
    for (const [key, value] of Object.entries(toSort)) {
        if (!a.includes(key.split(".")[3])) {
            console.log(key.split(".")[3] + ": " + removeFirst(value))
            b[key.split(".")[3]] = removeFirst(value);
            a.push(key.split(".")[3]);
        }
    }
    console.log(a)
    console.log(b)
}

function removeFirst(val) {
    let a = val.split(" ");
    var b = ""
    for (let i = 0; i < a.length; i++) {
        const e = a[i];
        if (i == 0) continue;
        b = b + e;
        if (i < a.length-1) b = b + " "
    }
    return b;
}
sort();