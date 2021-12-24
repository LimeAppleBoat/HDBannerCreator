var base64dict = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/",
  _color = "black",
  _patterns = ["base", "bl", "bo", "br", "bri", "bs", "bt", "bts", "cbo", "cr", "cre", "cs", "dls", "drs", "flo", "gra", "hh", "ld", "ls", "mc", "moj", "mr", "ms", "rd", "rs", "sc", "sku", "ss", "tl", "tr", "ts", "tt", "tts", "vh", "lud", "rud", "gru", "hhb", "vhr"],
  _colors = {
    black: 0,
    red: 1,
    green: 2,
    brown: 3,
    blue: 4,
    purple: 5,
    cyan: 6,
    gray: 7,
    dark_gray: 8,
    pink: 9,
    lime: 10,
    yellow: 11,
    light_blue: 12,
    magenta: 13,
    orange: 14,
    white: 15
  },
  _colorsInv = ["black", "red", "green", "brown", "blue", "purple", "cyan", "gray", "dark_gray", "pink", "lime", "yellow", "light_blue", "magenta", "orange", "white"],
  _crafting = {
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
base = "base",
  bl = "bl",
  bo = "bo",
  br = "br",
  bri = "bri",
  bs = "bs",
  bt = "bt",
  bts = "bts",
  cbo = "cbo",
  cr = "cr",
  cre = "cre",
  cs = "cs",
  dls = "dls",
  drs = "drs",
  flo = "flo",
  gra = "gra",
  hh = "hh",
  ld = "ld",
  ls = "ls",
  mc = "mc",
  moj = "moj",
  mr = "mr",
  ms = "ms",
  rd = "rd",
  rs = "rs",
  sc = "sc",
  sku = "sku",
  ss = "ss",
  tl = "tl",
  tr = "tr",
  ts = "ts",
  tt = "tt",
  tts = "tts",
  vh = "vh",
  lud = "lud",
  rud = "rud",
  gru = "gru",
  hhb = "hhb",
  vhr = "vhr"

var patternIds = {
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
var colors = {
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

function encPair(a, b) {
  b = _patterns.indexOf(b);
  var c = b >> 6 << 4 | 15 & a,
    d = 63 & b;
  return base64dict[c] + base64dict[d]
}

function decPair(a) {
  var b = base64dict.indexOf(a.charAt(0)),
    c = base64dict.indexOf(a.charAt(1)),
    d = 15 & b,
    e = _patterns[b >> 4 << 6 | c];
  return [d, e]
}


function decPairs(va) {
  const a = [];
  const q = va
  const b = q.match(/.{2}/g)
  for (let i = 0; i < b.length; i++) {
    a[i] = decPair(b[i]);
  }
  return a;
}

function translate(array) {
  const z = []
  for (let i = 0; i < array.length; i++) {
    const e = array[i];
    //console.log(e);
    //console.log(decodeColor(e[0]) + ", " + decodePattern(e[1]));
    z[i] = []
    z[i][0] = decodeColor(e[0])
    z[i][1] = decodePattern(e[1]);
  }
  return z;
}

function decodeColor(color) {
  return getCol(color);
}

function decodePattern(pattern) {
  return patternIds[pattern];
}

function getCol(color) {
  for (const [key, value] of Object.entries(_colors)) {
    if (value == color) return key;
  }
  return "black"
}

function getColor(col) {
  return colors[col] != null ? colors[col] : "#000000"
}

function createConvertableStrings(v) {
  return translate(decPairs(v))
}

function convertAndEncode(convertableStrings) {
  let encodedPattern = "";
  for (let e = 0; e < convertableStrings.length; e++) {
    var temp = "";
    temp = temp + getThreeDigitNumber(getRawId(convertableStrings[e][1]));
    temp = temp + getColor(convertableStrings[e][0]);
    encodedPattern = encodedPattern + temp;
  }
  return encodedPattern;
}