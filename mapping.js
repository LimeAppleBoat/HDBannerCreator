var mappings = 
{
    0: "base",
    1: "diagonal_up_left",
    2: "diagonal_right",
    3: "triangle_top",
    4: "triangle_bottom",
    5: "rhombus",
    6: "stripe_left",
    7: "stripe_center",
    8: "stripe_right",
    9: "triangles_bottom",
    10: "triangles_top",
    11: "creeper",
    12: "half_vertical",
    13: "half_vertical_right",
    14: "small_stripes",
    15: "stripe_downleft",
    16: "stripe_downright",
    17: "stripe_middle",
    18: "straight_cross",
    19: "mojang",
    20: "gradient",
    21: "gradient_up",
    22: "circle",
    23: "half_horizontal",
    24: "half_horizontal_bottom",
    25: "stripe_top",
    26: "stripe_bottom",
    27: "border",
    28: "diagonal_left",
    29: "diagonal_up_right",
    30: "curly_border",
    31: "cross",
    32: "piglin",
    33: "square_top_left",
    34: "square_top_right",
    35: "square_bottom_left",
    36: "square_bottom_right",
    37: "bricks"
};

mappings[999] = "empty";
function getRawId(id) {
    for (const [key, value] of Object.entries(mappings)) {
        if (id == value) return key;
    }
    return 999;
}