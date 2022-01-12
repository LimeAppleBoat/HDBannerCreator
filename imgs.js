const svg_map = {};

svg_map["empty"] = `<svg width="100" height="200">

</svg>`;
svg_map["base"] = `<svg width="100" height="200">
<polygon points="0, 0 0, 200 100, 200 100, 0" fill="?" />
</svg>`;

svg_map["diagonal_up_left"] = `<svg width="100" height="200">
<polygon points="0, 0 0, 200 100, 200" fill="?" />
</svg>`;

svg_map["diagonal_right"] = `<svg width="100" height="200">
<polygon points="100, 0 0, 0 0, 200" fill="?" />
</svg>`;

svg_map["triangle_top"] = `<svg width="100" height="200">
<polygon points="0 0, 50 100, 100 0" fill="?" />
</svg>`;

svg_map["triangle_bottom"] = `<svg width="100" height="200">
<polygon points="0 200, 50 100, 100 200" fill="?" />
</svg>`;

svg_map["rhombus"] = `<svg width="100" height="200">
<polygon points="50, 40 85, 100 50, 160 15, 100" fill="?" />
</svg>`;

svg_map["stripe_left"] = `<svg width="100" height="200">
<polygon points="0, 0 0, 200 33, 200 33, 0" fill="?" />
</svg>`;

svg_map["stripe_center"] = `<svg width="100" height="200">
<polygon points="33, 0 33, 200 67, 200 67, 0" fill="?" />
</svg>`;

svg_map["stripe_right"] = `<svg width="100" height="200">
<polygon points="67, 0 67, 200 100, 200 100, 0" fill="?" />
</svg>`;

svg_map["triangles_bottom"] = `<svg width="100" height="200">
<polygon points="0, 200 16.5, 165 33, 200 50, 165 67, 200 83.5, 165 100, 200" fill="?" />
</svg>`;

svg_map["triangles_top"] = `<svg width="100" height="200">
<polygon points="0, 0 16.5, 35 33, 0 50, 35 67, 0 83.5, 35 100, 0" fill="?" />
</svg>`;

svg_map["creeper"] = `<svg width="100" height="200">
<polygon points="5,70 35,70 35,100 5,100" fill="?" />
<polygon points="95,70 65,70 65,100 95,100" fill="?" />
<polygon points="35,100 35,115 20,115 20,160 35,160 35,145 65,145 65,160 80,160 80,115 65,115 65,100" fill="?"></polygon>
</svg>`;

svg_map["half_vertical"] = `<svg width="100" height="200">
<polygon points="0,0 50,0 50,200 0,200" fill="?" />
</svg>`;

svg_map["half_vertical_right"] = `<svg width="100" height="200">
<polygon points="50,0 100,0 100,200 50,200" fill="?" />
</svg>`;

svg_map["small_stripes"] = `<svg width="100" height="200">
<polygon points="5,0 20,0 20,200 5,200" fill="?" />
<polygon points="30,0 45,0 45,200 30,200" fill="?" />
<polygon points="55,0 70,0 70,200 55,200" fill="?" />
<polygon points="80,0 95,0 95,200 80,200" fill="?" />
</svg>`;

svg_map["stripe_downright"] = `<svg width="100" height="200">
<polygon points="20,0 0,0 0,40 80,200 100,200 100,160" fill="?" />
</svg>`;

svg_map["stripe_downleft"] = `<svg width="100" height="200">
<polygon points="80,0 100,0 100,40 20,200 0,200 0,160" fill="?" />
</svg>`;

svg_map["stripe_middle"] = `<svg width="100" height="200">
<polygon points="0,85 100,85 200,115 0,115" fill="?" />
</svg>`;

svg_map["straight_cross"] = `<svg width="100" height="200">
<polygon points="40,0 60,0 60,200 40,200" fill="?" />
<polygon points="0,90 100,90 100,110 0,110" fill="?" />
</svg>`;

svg_map["mojang"] = `<svg height="200" width="100" viewBox="0 0 1000 1000" preserveAspectRatio>
<g transform="matrix(17.435272,0,0,17.435272,0,-5.5095524)">
   <g>
      <path style="fill:?"
         d="m 13.772,48.104 c -4.892,0 -4.892,-4.892 -4.892,-4.892 0,0 0,-19.571 0,-24.466 0,-4.893 4.892,-4.893 4.892,-4.893 0,0 4.893,0 9.786,0 4.894,0 9.786,4.893 9.786,4.893 0,0 4.894,0 0,0 0,-14.251 4.501,5.285 9.786,0 3.46,-3.459 4.893,17.125 4.893,17.125 L 43.13,33.427 c 0,0 0,-4.894 -7.339,-9.786 -9.104,-6.071 -19.572,-2.071 -19.572,7.338 0,19.196 31.804,12.233 31.804,12.233 0,0 0,4.892 -4.893,4.892 -4.892,0 -29.358,0 -29.358,0 z" />
      <path style="fill:?"
         d="m 38.238,13.854 c 0,-1.35 1.095,-7.34 2.445,-7.34 1.352,0 2.446,5.99 2.446,7.34 0,1.353 -1.095,2.447 -2.446,2.447 -1.35,0 -2.445,-1.094 -2.445,-2.447 z" />
   </g>
</g>
</svg>`

svg_map["gradient"] = `<svg height="200" width="100">
<defs>
    <linearGradient id="gradient?" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" style="stop-color:?;stop-opacity:1" />
      <stop offset="100%" style="stop-color:rgb(255,255,255);stop-opacity:0" />
    </linearGradient>
  </defs>
  <polygon points="0,0 100,0 100,200 0,200" fill=url(#gradient?) />
  </svg>`

svg_map["gradient_up"] = `<svg height="200" width="100">
<defs>
   <linearGradient id="gradient-up?" x1="0%" y1="0%" x2="0%" y2="100%">
     <stop offset="0%" style="stop-color:rgb(255,255,255);stop-opacity:0" />
    <stop offset="100%" style="stop-color:?;stop-opacity:1" />
 </linearGradient>
</defs>
<polygon points="0,0 100,0 100,200 0,200" fill=url(#gradient-up?) />
</svg>`

svg_map["circle"] = `<svg width="100" height="200">
<circle cx="50" cy="100" r="30" fill="?" />
</svg>`;

svg_map['half_horizontal'] = `<svg width="100" height="200">
<polygon points="0, 0 0, 100 100, 100 100, 0" fill="?" />
</svg>`;

svg_map['half_horizontal_bottom'] = `<svg width="100" height="200">
<polygon points="0, 200 0, 100 100, 100 100, 200" fill="?" />
</svg>`;

svg_map['stripe_top'] = `<svg width="100" height="200">
<polygon points="0, 0 0, 70 100, 70 100, 0" fill="?" />
</svg>`;

svg_map['stripe_bottom'] = `<svg width="100" height="200">
<polygon points="0,200 0,130 100,130 100,200" fill="?" />
</svg>`;

svg_map['border'] = `<svg width="100" height="200">
<polygon points="0,0 15,0 15,200 0,200" fill="?" />
<polygon points="100,0 85,0 85,200 100,200" fill="?" />
<polygon points="0,0 0,15 100,15 100,0" fill="?" />
<polygon points="0,200 0,185 100,185 100,200" fill="?" />
</svg>`;

svg_map["diagonal_left"] = `<svg width="100" height="200">
<polygon points="0, 0 0, 200 100, 0" fill="?" />
</svg>`;

svg_map["diagonal_up_right"] = `<svg width="100" height="200">
<polygon points="0, 200 100, 200 100, 0" fill="?" />
</svg>`;

svg_map["curly_border"] = `<svg width="100" height="200">
<polygon points="50,0 0,0 0, 50" fill="?"></polygon>
<polygon points="50,0 100,0 100,50" fill="?"></polygon>
<polygon points="0,50 25, 75 0,100" fill="?"></polygon>
<polygon points="0,100 25,125, 0,150" fill="?"></polygon>
<polygon points="50,200 0,200 0,150" fill="?"></polygon>
<polygon points="100,200 50,200 100,150" fill="?"></polygon>
<polygon points="100,50 75, 75 100,100" fill="?"></polygon>
<polygon points="100,100 75,125, 100,150" fill="?"></polygon>
</svg>`;

svg_map["cross"] = `<svg width="100" height="200">
<polygon points="15,0 0,0 0,30 85,200 100,200 100,170" fill="?"></polygon>
<polygon points="85,0 100,0 100,30 15,200 0,200 0,170" fill="?"></polygon>
</svg>`;

svg_map["piglin"] = `<svg width="100" height="200">
<polygon points="10,80 90,80 90,85 10,85" fill="?"></polygon>
<polygon points="10,120 90,120 90,125 10,125" fill="?"></polygon>
<polygon points="10,85 15,85 15,120 10,120" fill="?"></polygon>
<polygon points="90,85 85,85 85,120 90,120" fill="?"></polygon>
<polygon points="30,90 30,115 40,115 40,90" fill="?"></polygon>
<polygon points="70,90 70,115 60,115 60,90" fill="?"></polygon>
</svg>`

svg_map["square_top_left"] = `<svg width="100" height="200">
<polygon points="0,0 50,0 50,70 0,70" fill="?"></polygon>
</svg>`;

svg_map["square_top_right"] = `<svg width="100" height="200">
<polygon points="100,0 50,0 50,70 100,70" fill="?"></polygon>
</svg>`;

svg_map["square_bottom_left"] = `<svg width="100" height="200">
<polygon points="0,200 50,200 50,130 0,130" fill="?"></polygon>
</svg>`;

svg_map["square_bottom_right"] = `<svg width="100" height="200">
<polygon points="100,200 50,200 50,130 100,130" fill="?"></polygon>
</svg>`;

svg_map["bricks"] = `<svg width="100" height="200">
<rect x="0" y="0" width="25" height="15" fill="?"></rect>
<rect x="0" y="40" width="25" height="15" fill="?"></rect>
<rect x="0" y="80" width="25" height="15" fill="?"></rect>
<rect x="0" y="120" width="25" height="15" fill="?"></rect>
<rect x="0" y="160" width="25" height="15" fill="?"></rect>
<rect x="30" y="0" width="25" height="15" fill="?"></rect>
<rect x="30" y="40" width="25" height="15" fill="?"></rect>
<rect x="30" y="80" width="25" height="15" fill="?"></rect>
<rect x="30" y="120" width="25" height="15" fill="?"></rect>
<rect x="30" y="160" width="25" height="15" fill="?"></rect>
<rect x="-10" y="20" width="25" height="15" fill="?"></rect>
<rect x="-10" y="60" width="25" height="15" fill="?"></rect>
<rect x="-10" y="100" width="25" height="15" fill="?"></rect>
<rect x="-10" y="140" width="25" height="15" fill="?"></rect>
<rect x="-10" y="180" width="25" height="15" fill="?"></rect>
<rect x="60" y="0" width="25" height="15" fill="?"></rect>
<rect x="60" y="40" width="25" height="15" fill="?"></rect>
<rect x="60" y="80" width="25" height="15" fill="?"></rect>
<rect x="60" y="120" width="25" height="15" fill="?"></rect>
<rect x="60" y="160" width="25" height="15" fill="?"></rect>
<rect x="90" y="0" width="25" height="15" fill="?"></rect>
<rect x="90" y="40" width="25" height="15" fill="?"></rect>
<rect x="90" y="80" width="25" height="15" fill="?"></rect>
<rect x="90" y="120" width="25" height="15" fill="?"></rect>
<rect x="90" y="160" width="25" height="15" fill="?"></rect>
<rect x="20" y="20" width="25" height="15" fill="?"></rect>
<rect x="20" y="60" width="25" height="15" fill="?"></rect>
<rect x="20" y="100" width="25" height="15" fill="?"></rect>
<rect x="20" y="140" width="25" height="15" fill="?"></rect>
<rect x="20" y="180" width="25" height="15" fill="?"></rect>
<rect x="50" y="20" width="25" height="15" fill="?"></rect>
<rect x="50" y="60" width="25" height="15" fill="?"></rect>
<rect x="50" y="100" width="25" height="15" fill="?"></rect>
<rect x="50" y="140" width="25" height="15" fill="?"></rect>
<rect x="50" y="180" width="25" height="15" fill="?"></rect>
<rect x="80" y="20" width="25" height="15" fill="?"></rect>
<rect x="80" y="60" width="25" height="15" fill="?"></rect>
<rect x="80" y="100" width="25" height="15" fill="?"></rect>
<rect x="80" y="140" width="25" height="15" fill="?"></rect>
<rect x="80" y="180" width="25" height="15" fill="?"></rect>
</svg>`;