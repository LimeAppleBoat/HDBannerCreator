class NeedCoolShoesTranslator{
  constructor() {
    this.base64dict = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/",
  this._color = "black",
  this._patterns = ["base", "bl", "bo", "br", "bri", "bs", "bt", "bts", "cbo", "cr", "cre", "cs", "dls", "drs", "flo", "gra", "hh", "ld", "ls", "mc", "moj", "mr", "ms", "rd", "rs", "sc", "sku", "ss", "tl", "tr", "ts", "tt", "tts", "vh", "lud", "rud", "gru", "hhb", "vhr"],
  this._colors = {
    black: 0,
    red: 1,
    green: 2,
    brown: 3,
    blue: 4,
    purple: 5,
    cyan: 6,
    light_gray: 7,
    gray: 8,
    pink: 9,
    lime: 10,
    yellow: 11,
    light_blue: 12,
    magenta: 13,
    orange: 14,
    white: 15
  },
  this._colorsInv = ["black", "red", "green", "brown", "blue", "purple", "cyan", "gray", "dark_gray", "pink", "lime", "yellow", "light_blue", "magenta", "orange", "white"],
  this._crafting = {
    base: [1, 1, 1, 1, 1, 1, "", "stick", ""],
    gra: [1, "bn", 1, "", 1, "", "", 1, ""],
    bri: ["", "", "", "", "bn", 1, "", "brick", ""],
    hh: [1, 1, 1, 1, 1, 1, "", "bn", ""],
    vh: [1, 1, "", 1, 1, "bn", 1, 1, ""],
    ts: [1, 1, 1, "", "bn", "", "", "", ""],
    bs: ["", "", "", "", "bn", "", 1, 1, 1],
    ls: [1, "", "", 1, "bn", "", 1, "", ""],
    rs: ["", "", 1, "", "bn", 1, "", "", 1],
    ld: [1, 1, "", 1, "", "", "", "bn", ""],
    rud: ["", 1, 1, "", "", 1, "", "bn", ""],
    dls: ["", "", 1, "", 1, "", 1, "bn", ""],
    drs: [1, "", "", "", 1, "", "", "bn", 1],
    cr: [1, "", 1, "", 1, "", 1, "bn", 1],
    sc: ["", 1, "", 1, 1, 1, "bn", 1, ""],
    cs: ["", 1, "", "", 1, "bn", "", 1, ""],
    ms: ["", "", "", 1, 1, 1, "", "bn", ""],
    tl: [1, "", "", "", "", "", "", "bn", ""],
    bl: ["", "", "", "", "", "", 1, "bn", ""],
    tr: ["", "", 1, "", "", "", "", "bn", ""],
    br: ["", "", "", "", "", "", "", "bn", 1],
    tt: [1, "bn", 1, "", 1, "", "", "", ""],
    bt: ["", "", "", "", 1, "", 1, "bn", 1],
    mr: ["", 1, "", 1, "bn", 1, "", 1, ""],
    mc: ["", "", "", "", 1, "", "", "bn", ""],
    bts: ["", "", "", 1, "bn", 1, "", 1, ""],
    tts: ["", 1, "", 1, "bn", 1, "", "", ""],
    ss: [1, "", 1, 1, "bn", 1, "", "", ""],
    bo: [1, 1, 1, 1, "bn", 1, 1, 1, 1],
    cbo: ["", "", "", "", "vine", 1, "", "bn", ""],
    flo: ["", "", "", "", "bn", 1, "", "flower", ""],
    cre: ["", "", "", "", "bn", 1, "", "creeper", ""],
    sku: ["", "", "", "", "bn", 1, "", "wither", ""],
    moj: ["", "", "", "", "bn", 1, "", "apple", ""],
    lud: ["", "bn", "", 1, "", "", 1, 1, ""],
    rd: ["", "bn", "", "", "", 1, "", 1, 1],
    gru: ["", 1, "", "", 1, "", 1, "bn", 1],
    hhb: ["", "bn", "", 1, 1, 1, 1, 1, 1],
    vhr: ["", 1, 1, "bn", 1, 1, "", 1, 1]
  };
this.base = "base",
  this.bl = "bl",
  this.bo = "bo",
  this.br = "br",
  this.bri = "bri",
  this.bs = "bs",
  this.bt = "bt",
  this.bts = "bts",
  this.cbo = "cbo",
  this.cr = "cr",
  this.cre = "cre",
  this.cs = "cs",
  this.dls = "dls",
  this.drs = "drs",
  this.flo = "flo",
  this.gra = "gra",
  this.hh = "hh",
  this.ld = "ld",
  this.ls = "ls",
  this.mc = "mc",
  this.moj = "moj",
  this.mr = "mr",
  this.ms = "ms",
  this.rd = "rd",
  this.rs = "rs",
  this.sc = "sc",
  this.sku = "sku",
  this.ss = "ss",
  this.tl = "tl",
  this.tr = "tr",
  this.ts = "ts",
  this.tt = "tt",
  this.tts = "tts",
  this.vh = "vh",
  this.lud = "lud",
  this.rud = "rud",
  this.gru = "gru",
  this.hhb = "hhb",
  this.vhr = "vhr"

this.patternIds = {
  "base": "base",
  "b": "base",
  "bl": "square_bottom_left",
  "br": "square_bottom_right",
  "tl": "square_top_left",
  "tr": "square_top_right",
  "bs": "stripe_bottom",
  "ts": "stripe_top",
  "ls": "stripe_left",
  "rs": "stripe_right",
  "cs": "stripe_center",
  "ms": "stripe_middle",
  "drs": "stripe_downright",
  "dls": "stripe_downleft",
  "ss": "small_stripes",
  "cr": "cross",
  "sc": "straight_cross",
  "bt": "triangle_bottom",
  "tt": "triangle_top",
  "bts": "triangles_bottom",
  "tts": "triangles_top",
  "ld": "diagonal_left",
  "rd": "diagonal_up_right",
  "lud": "diagonal_up_left",
  "rud": "diagonal_right",
  "mc": "circle",
  "mr": "rhombus",
  "vh": "half_vertical",
  "hh": "half_horizontal",
  "vhr": "half_vertical_right",
  "hhb": "half_horizontal_bottom",
  "bo": "border",
  "cbo": "curly_border",
  "gra": "gradient",
  "gru": "gradient_up",
  "bri": "bricks",
  "glb": "globe",
  "cre": "creeper",
  "sku": "skull",
  "flo": "flower",
  "moj": "mojang",
  "pig": "piglin",
}
this.colors = {
  "white": "#f9fffe",
  "orange": "#f9801d",
  "magenta": "#c74ebd",
  "light_blue": "#3ab3da",
  "yellow": "#fed83d",
  "lime": "#80c71f",
  "pink": "#f38baa",
  "gray": "#474f52",
  "light_gray": "#9d9d97",
  "cyan": "#169c9c",
  "purple": "#8932b8",
  "blue": "#3c44aa",
  "brown": "#835432",
  "green": "#5e7c16",
  "red": "#b02e26",
  "black": "#1d1d21"
}
  }



encPair(a, b) {
  b = _patterns.indexOf(b);
  var c = b >> 6 << 4 | 15 & a,
    d = 63 & b;
  return base64dict[c] + base64dict[d]
}

decPair(a) {
  var b = this.base64dict.indexOf(a.charAt(0)),
    c = this.base64dict.indexOf(a.charAt(1)),
    d = 15 & b,
    e = this._patterns[b >> 4 << 6 | c];
  return [d, e]
}


decPairs(va) {
  const a = [];
  const q = va
  const b = q.match(/.{2}/g)
  for (let i = 0; i < b.length; i++) {
    a[i] = this.decPair(b[i]);
  }
  return a;
}

translate(array) {
  const z = []
  for (let i = 0; i < array.length; i++) {
    const e = array[i];
    //console.log(e);
    //console.log(decodeColor(e[0]) + ", " + decodePattern(e[1]));
    z[i] = []
    z[i][0] = this.decodeColor(e[0])
    z[i][1] = this.decodePattern(e[1]);
  }
  return z;
}

decodeColor(color) {
  return this.getCol(color);
}

decodePattern(pattern) {
  return this.patternIds[pattern];
}

getCol(color) {
  for (const [key, value] of Object.entries(this._colors)) {
    if (value == color) return key;
  }
  console.log("FAILED")
  return "black"
}

getColor(col) {
  if (this.colors[col] == null)console.log(`${col} failed`)
  return this.colors[col] != null ? this.colors[col] : "#000000"
}

createConvertableStrings(v) {
  return this.translate(this.decPairs(v))
}

convertAndEncode(convertableStrings) {
  let encodedPattern = "";
  for (let e = 0; e < convertableStrings.length; e++) {
    var temp = "";
    temp = temp + getThreeDigitNumber(getRawId(convertableStrings[e][1]));
    temp = temp + this.getColor(convertableStrings[e][0]);
    encodedPattern = encodedPattern + temp;
  }
  return encodedPattern;
}
}