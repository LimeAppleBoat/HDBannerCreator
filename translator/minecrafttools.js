class MinecraftToolsTranslator {
            constructor() {
                this.patterns = {
                    0: "empty",
                    1: "circle",
                    2: "square_bottom_left",
                    3: "square_bottom_right",
                    4: "square_top_left",
                    5: "square_top_right",
                    6: "half_horizontal",
                    37: "half_horizontal_right",
                    7: "stripe_bottom",
                    8: "stripe_top",
                    9: "half_vertical",
                    38: "half_vertical_right",
                    10: "stripe_left",
                    11: "stripe_center",
                    12: "stripe_right",
                    13: "stripe_middle",
                    14: "straight_cross",
                    15: "stripe_downleft",
                    16: "stripe_downright",
                    17: "cross",
                    18: "diagonal_left",
                    19: "diagonal_right",
                    34: "diagonal_up_left",
                    35: "diagonal_up_right",
                    20: "triangle_top",
                    21: "triangle_bottom",
                    22: "rhombus",
                    23: "triangles_top",
                    24: "triangles_bottom",
                    25: "curly_border",
                    26: "border",
                    27: "small_stripes",
                    28: "bricks",
                    29: "gradient",
                    36: "gradient_up",
                    30: "creeper",
                    31: "skull",
                    32: "flower",
                    33: "mojang",
                    39: "globe",
                    40: "piglin"
                }
        
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
        
            convert(a) {
                const b = new URLSearchParams(a);
                var a = "";
                a = a + this.getPattern(0, b);
                a = a + this.getPattern(1, b);
                a = a + this.getPattern(2, b);
                a = a + this.getPattern(3, b);
                a = a + this.getPattern(4, b);
                a = a + this.getPattern(5, b);
                a = a + this.getPattern(6, b);
                return a;
            }
        
            getShape(a, b) {
                console.log(this.decodeShape(b.get("shape_id_" + a)))
                return getRawId(this.decodeShape(b.get("shape_id_" + a)));
            }
        
            getColor(a, b) {
                console.log(this._getCol(b.get("color_id_" + a)))
                return this.colors[this._getCol(b.get("color_id_" + a))];
            }
        
            getPattern(a, b) {
                if (b.get("color_id_" + a) == null) return "";
                const q = this.getShape(a, b);
                const w = this.getColor(a, b);
                if (a == 0) {
                    return "000" + w;
                } else {
                    var _ = getThreeDigitNumber(q);
                    _ = _ == "000" ? "999" : _;
                    return _ + w;
                }
            }
        
        
            decodeShape(p) {
                console.log(p + ": " + this.patterns[p])
                return this.patterns[p];
            }
        
            _getCol(color) {
                for (const [key, value] of Object.entries(this._colors)) {
                    if (value == color) return key;
                }
                console.log("FAILED")
                return "black"
            }
        }