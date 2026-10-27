const ADMIN_CSS = '@font-face{font-family:Montserrat;font-style:italic;font-weight:400;font-display:swap;src:url(/vendor/media/b5e37d11b304fc7d-s.de3dacd9.woff2)format("woff2");unicode-range:U+460-52F,U+1C80-1C8A,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F}\n@font-face{font-family:Montserrat;font-style:italic;font-weight:400;font-display:swap;src:url(/vendor/media/178d5fd8ddb5ce59-s.83ef81a4.woff2)format("woff2");unicode-range:U+301,U+400-45F,U+490-491,U+4B0-4B1,U+2116}\n@font-face{font-family:Montserrat;font-style:italic;font-weight:400;font-display:swap;src:url(/vendor/media/45b63fe037c60d0d-s.d2ca58db.woff2)format("woff2");unicode-range:U+102-103,U+110-111,U+128-129,U+168-169,U+1A0-1A1,U+1AF-1B0,U+300-301,U+303-304,U+308-309,U+323,U+329,U+1EA0-1EF9,U+20AB}\n@font-face{font-family:Montserrat;font-style:italic;font-weight:400;font-display:swap;src:url(/vendor/media/f12c927eaf7b23c0-s.b6492805.woff2)format("woff2");unicode-range:U+100-2BA,U+2BD-2C5,U+2C7-2CC,U+2CE-2D7,U+2DD-2FF,U+304,U+308,U+329,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}\n@font-face{font-family:Montserrat;font-style:italic;font-weight:400;font-display:swap;src:url(/vendor/media/a3264cb69f626630-s.p.952f628b.woff2)format("woff2");unicode-range:U+0000-00FF,U+131,U+152-153,U+2BB-2BC,U+2C6,U+2DA,U+2DC,U+304,U+308,U+329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}\n@font-face{font-family:Montserrat;font-style:italic;font-weight:500;font-display:swap;src:url(/vendor/media/b5e37d11b304fc7d-s.de3dacd9.woff2)format("woff2");unicode-range:U+460-52F,U+1C80-1C8A,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F}\n@font-face{font-family:Montserrat;font-style:italic;font-weight:500;font-display:swap;src:url(/vendor/media/178d5fd8ddb5ce59-s.83ef81a4.woff2)format("woff2");unicode-range:U+301,U+400-45F,U+490-491,U+4B0-4B1,U+2116}\n@font-face{font-family:Montserrat;font-style:italic;font-weight:500;font-display:swap;src:url(/vendor/media/45b63fe037c60d0d-s.d2ca58db.woff2)format("woff2");unicode-range:U+102-103,U+110-111,U+128-129,U+168-169,U+1A0-1A1,U+1AF-1B0,U+300-301,U+303-304,U+308-309,U+323,U+329,U+1EA0-1EF9,U+20AB}\n@font-face{font-family:Montserrat;font-style:italic;font-weight:500;font-display:swap;src:url(/vendor/media/f12c927eaf7b23c0-s.b6492805.woff2)format("woff2");unicode-range:U+100-2BA,U+2BD-2C5,U+2C7-2CC,U+2CE-2D7,U+2DD-2FF,U+304,U+308,U+329,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}\n@font-face{font-family:Montserrat;font-style:italic;font-weight:500;font-display:swap;src:url(/vendor/media/a3264cb69f626630-s.p.952f628b.woff2)format("woff2");unicode-range:U+0000-00FF,U+131,U+152-153,U+2BB-2BC,U+2C6,U+2DA,U+2DC,U+304,U+308,U+329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}\n@font-face{font-family:Montserrat;font-style:italic;font-weight:600;font-display:swap;src:url(/vendor/media/b5e37d11b304fc7d-s.de3dacd9.woff2)format("woff2");unicode-range:U+460-52F,U+1C80-1C8A,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F}\n@font-face{font-family:Montserrat;font-style:italic;font-weight:600;font-display:swap;src:url(/vendor/media/178d5fd8ddb5ce59-s.83ef81a4.woff2)format("woff2");unicode-range:U+301,U+400-45F,U+490-491,U+4B0-4B1,U+2116}\n@font-face{font-family:Montserrat;font-style:italic;font-weight:600;font-display:swap;src:url(/vendor/media/45b63fe037c60d0d-s.d2ca58db.woff2)format("woff2");unicode-range:U+102-103,U+110-111,U+128-129,U+168-169,U+1A0-1A1,U+1AF-1B0,U+300-301,U+303-304,U+308-309,U+323,U+329,U+1EA0-1EF9,U+20AB}\n@font-face{font-family:Montserrat;font-style:italic;font-weight:600;font-display:swap;src:url(/vendor/media/f12c927eaf7b23c0-s.b6492805.woff2)format("woff2");unicode-range:U+100-2BA,U+2BD-2C5,U+2C7-2CC,U+2CE-2D7,U+2DD-2FF,U+304,U+308,U+329,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}\n@font-face{font-family:Montserrat;font-style:italic;font-weight:600;font-display:swap;src:url(/vendor/media/a3264cb69f626630-s.p.952f628b.woff2)format("woff2");unicode-range:U+0000-00FF,U+131,U+152-153,U+2BB-2BC,U+2C6,U+2DA,U+2DC,U+304,U+308,U+329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}\n@font-face{font-family:Montserrat;font-style:italic;font-weight:700;font-display:swap;src:url(/vendor/media/b5e37d11b304fc7d-s.de3dacd9.woff2)format("woff2");unicode-range:U+460-52F,U+1C80-1C8A,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F}\n@font-face{font-family:Montserrat;font-style:italic;font-weight:700;font-display:swap;src:url(/vendor/media/178d5fd8ddb5ce59-s.83ef81a4.woff2)format("woff2");unicode-range:U+301,U+400-45F,U+490-491,U+4B0-4B1,U+2116}\n@font-face{font-family:Montserrat;font-style:italic;font-weight:700;font-display:swap;src:url(/vendor/media/45b63fe037c60d0d-s.d2ca58db.woff2)format("woff2");unicode-range:U+102-103,U+110-111,U+128-129,U+168-169,U+1A0-1A1,U+1AF-1B0,U+300-301,U+303-304,U+308-309,U+323,U+329,U+1EA0-1EF9,U+20AB}\n@font-face{font-family:Montserrat;font-style:italic;font-weight:700;font-display:swap;src:url(/vendor/media/f12c927eaf7b23c0-s.b6492805.woff2)format("woff2");unicode-range:U+100-2BA,U+2BD-2C5,U+2C7-2CC,U+2CE-2D7,U+2DD-2FF,U+304,U+308,U+329,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}\n@font-face{font-family:Montserrat;font-style:italic;font-weight:700;font-display:swap;src:url(/vendor/media/a3264cb69f626630-s.p.952f628b.woff2)format("woff2");unicode-range:U+0000-00FF,U+131,U+152-153,U+2BB-2BC,U+2C6,U+2DA,U+2DC,U+304,U+308,U+329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}\n@font-face{font-family:Montserrat;font-style:normal;font-weight:400;font-display:swap;src:url(/vendor/media/8298327da6d5bcce-s.fb2d5852.woff2)format("woff2");unicode-range:U+460-52F,U+1C80-1C8A,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F}\n@font-face{font-family:Montserrat;font-style:normal;font-weight:400;font-display:swap;src:url(/vendor/media/44fac91e6f2d2b1b-s.0a39a854.woff2)format("woff2");unicode-range:U+301,U+400-45F,U+490-491,U+4B0-4B1,U+2116}\n@font-face{font-family:Montserrat;font-style:normal;font-weight:400;font-display:swap;src:url(/vendor/media/2b402d8aebffd579-s.ec7e94a5.woff2)format("woff2");unicode-range:U+102-103,U+110-111,U+128-129,U+168-169,U+1A0-1A1,U+1AF-1B0,U+300-301,U+303-304,U+308-309,U+323,U+329,U+1EA0-1EF9,U+20AB}\n@font-face{font-family:Montserrat;font-style:normal;font-weight:400;font-display:swap;src:url(/vendor/media/a88409fdd7dc121c-s.62b55a98.woff2)format("woff2");unicode-range:U+100-2BA,U+2BD-2C5,U+2C7-2CC,U+2CE-2D7,U+2DD-2FF,U+304,U+308,U+329,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}\n@font-face{font-family:Montserrat;font-style:normal;font-weight:400;font-display:swap;src:url(/vendor/media/e8f2fbee2754df70-s.p.9b7a96b4.woff2)format("woff2");unicode-range:U+0000-00FF,U+131,U+152-153,U+2BB-2BC,U+2C6,U+2DA,U+2DC,U+304,U+308,U+329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}\n@font-face{font-family:Montserrat;font-style:normal;font-weight:500;font-display:swap;src:url(/vendor/media/8298327da6d5bcce-s.fb2d5852.woff2)format("woff2");unicode-range:U+460-52F,U+1C80-1C8A,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F}\n@font-face{font-family:Montserrat;font-style:normal;font-weight:500;font-display:swap;src:url(/vendor/media/44fac91e6f2d2b1b-s.0a39a854.woff2)format("woff2");unicode-range:U+301,U+400-45F,U+490-491,U+4B0-4B1,U+2116}\n@font-face{font-family:Montserrat;font-style:normal;font-weight:500;font-display:swap;src:url(/vendor/media/2b402d8aebffd579-s.ec7e94a5.woff2)format("woff2");unicode-range:U+102-103,U+110-111,U+128-129,U+168-169,U+1A0-1A1,U+1AF-1B0,U+300-301,U+303-304,U+308-309,U+323,U+329,U+1EA0-1EF9,U+20AB}\n@font-face{font-family:Montserrat;font-style:normal;font-weight:500;font-display:swap;src:url(/vendor/media/a88409fdd7dc121c-s.62b55a98.woff2)format("woff2");unicode-range:U+100-2BA,U+2BD-2C5,U+2C7-2CC,U+2CE-2D7,U+2DD-2FF,U+304,U+308,U+329,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}\n@font-face{font-family:Montserrat;font-style:normal;font-weight:500;font-display:swap;src:url(/vendor/media/e8f2fbee2754df70-s.p.9b7a96b4.woff2)format("woff2");unicode-range:U+0000-00FF,U+131,U+152-153,U+2BB-2BC,U+2C6,U+2DA,U+2DC,U+304,U+308,U+329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}\n@font-face{font-family:Montserrat;font-style:normal;font-weight:600;font-display:swap;src:url(/vendor/media/8298327da6d5bcce-s.fb2d5852.woff2)format("woff2");unicode-range:U+460-52F,U+1C80-1C8A,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F}\n@font-face{font-family:Montserrat;font-style:normal;font-weight:600;font-display:swap;src:url(/vendor/media/44fac91e6f2d2b1b-s.0a39a854.woff2)format("woff2");unicode-range:U+301,U+400-45F,U+490-491,U+4B0-4B1,U+2116}\n@font-face{font-family:Montserrat;font-style:normal;font-weight:600;font-display:swap;src:url(/vendor/media/2b402d8aebffd579-s.ec7e94a5.woff2)format("woff2");unicode-range:U+102-103,U+110-111,U+128-129,U+168-169,U+1A0-1A1,U+1AF-1B0,U+300-301,U+303-304,U+308-309,U+323,U+329,U+1EA0-1EF9,U+20AB}\n@font-face{font-family:Montserrat;font-style:normal;font-weight:600;font-display:swap;src:url(/vendor/media/a88409fdd7dc121c-s.62b55a98.woff2)format("woff2");unicode-range:U+100-2BA,U+2BD-2C5,U+2C7-2CC,U+2CE-2D7,U+2DD-2FF,U+304,U+308,U+329,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}\n@font-face{font-family:Montserrat;font-style:normal;font-weight:600;font-display:swap;src:url(/vendor/media/e8f2fbee2754df70-s.p.9b7a96b4.woff2)format("woff2");unicode-range:U+0000-00FF,U+131,U+152-153,U+2BB-2BC,U+2C6,U+2DA,U+2DC,U+304,U+308,U+329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}\n@font-face{font-family:Montserrat;font-style:normal;font-weight:700;font-display:swap;src:url(/vendor/media/8298327da6d5bcce-s.fb2d5852.woff2)format("woff2");unicode-range:U+460-52F,U+1C80-1C8A,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F}\n@font-face{font-family:Montserrat;font-style:normal;font-weight:700;font-display:swap;src:url(/vendor/media/44fac91e6f2d2b1b-s.0a39a854.woff2)format("woff2");unicode-range:U+301,U+400-45F,U+490-491,U+4B0-4B1,U+2116}\n@font-face{font-family:Montserrat;font-style:normal;font-weight:700;font-display:swap;src:url(/vendor/media/2b402d8aebffd579-s.ec7e94a5.woff2)format("woff2");unicode-range:U+102-103,U+110-111,U+128-129,U+168-169,U+1A0-1A1,U+1AF-1B0,U+300-301,U+303-304,U+308-309,U+323,U+329,U+1EA0-1EF9,U+20AB}\n@font-face{font-family:Montserrat;font-style:normal;font-weight:700;font-display:swap;src:url(/vendor/media/a88409fdd7dc121c-s.62b55a98.woff2)format("woff2");unicode-range:U+100-2BA,U+2BD-2C5,U+2C7-2CC,U+2CE-2D7,U+2DD-2FF,U+304,U+308,U+329,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}\n@font-face{font-family:Montserrat;font-style:normal;font-weight:700;font-display:swap;src:url(/vendor/media/e8f2fbee2754df70-s.p.9b7a96b4.woff2)format("woff2");unicode-range:U+0000-00FF,U+131,U+152-153,U+2BB-2BC,U+2C6,U+2DA,U+2DC,U+304,U+308,U+329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}\n@font-face{font-family:Roboto Slab;font-style:normal;font-weight:300;font-display:swap;src:url(/vendor/media/8856956fa550053e-s.aa7ab40d.woff2)format("woff2");unicode-range:U+460-52F,U+1C80-1C8A,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F}\n@font-face{font-family:Roboto Slab;font-style:normal;font-weight:300;font-display:swap;src:url(/vendor/media/fe9e8dd4a2ad4385-s.4ceec0fb.woff2)format("woff2");unicode-range:U+301,U+400-45F,U+490-491,U+4B0-4B1,U+2116}\n@font-face{font-family:Roboto Slab;font-style:normal;font-weight:300;font-display:swap;src:url(/vendor/media/c492570a33c2511a-s.f486836d.woff2)format("woff2");unicode-range:U+1F??}\n@font-face{font-family:Roboto Slab;font-style:normal;font-weight:300;font-display:swap;src:url(/vendor/media/2e31362fa3cbeb8b-s.54409f46.woff2)format("woff2");unicode-range:U+370-377,U+37A-37F,U+384-38A,U+38C,U+38E-3A1,U+3A3-3FF}\n@font-face{font-family:Roboto Slab;font-style:normal;font-weight:300;font-display:swap;src:url(/vendor/media/bd177ace3eee3014-s.02644e92.woff2)format("woff2");unicode-range:U+102-103,U+110-111,U+128-129,U+168-169,U+1A0-1A1,U+1AF-1B0,U+300-301,U+303-304,U+308-309,U+323,U+329,U+1EA0-1EF9,U+20AB}\n@font-face{font-family:Roboto Slab;font-style:normal;font-weight:300;font-display:swap;src:url(/vendor/media/da2446ec5f26383f-s.c0fe6b67.woff2)format("woff2");unicode-range:U+100-2BA,U+2BD-2C5,U+2C7-2CC,U+2CE-2D7,U+2DD-2FF,U+304,U+308,U+329,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}\n@font-face{font-family:Roboto Slab;font-style:normal;font-weight:300;font-display:swap;src:url(/vendor/media/5cf8828ea9d4dda3-s.p.e51369d5.woff2)format("woff2");unicode-range:U+0000-00FF,U+131,U+152-153,U+2BB-2BC,U+2C6,U+2DA,U+2DC,U+304,U+308,U+329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}\n@font-face{font-family:Roboto Slab;font-style:normal;font-weight:400;font-display:swap;src:url(/vendor/media/8856956fa550053e-s.aa7ab40d.woff2)format("woff2");unicode-range:U+460-52F,U+1C80-1C8A,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F}\n@font-face{font-family:Roboto Slab;font-style:normal;font-weight:400;font-display:swap;src:url(/vendor/media/fe9e8dd4a2ad4385-s.4ceec0fb.woff2)format("woff2");unicode-range:U+301,U+400-45F,U+490-491,U+4B0-4B1,U+2116}\n@font-face{font-family:Roboto Slab;font-style:normal;font-weight:400;font-display:swap;src:url(/vendor/media/c492570a33c2511a-s.f486836d.woff2)format("woff2");unicode-range:U+1F??}\n@font-face{font-family:Roboto Slab;font-style:normal;font-weight:400;font-display:swap;src:url(/vendor/media/2e31362fa3cbeb8b-s.54409f46.woff2)format("woff2");unicode-range:U+370-377,U+37A-37F,U+384-38A,U+38C,U+38E-3A1,U+3A3-3FF}\n@font-face{font-family:Roboto Slab;font-style:normal;font-weight:400;font-display:swap;src:url(/vendor/media/bd177ace3eee3014-s.02644e92.woff2)format("woff2");unicode-range:U+102-103,U+110-111,U+128-129,U+168-169,U+1A0-1A1,U+1AF-1B0,U+300-301,U+303-304,U+308-309,U+323,U+329,U+1EA0-1EF9,U+20AB}\n@font-face{font-family:Roboto Slab;font-style:normal;font-weight:400;font-display:swap;src:url(/vendor/media/da2446ec5f26383f-s.c0fe6b67.woff2)format("woff2");unicode-range:U+100-2BA,U+2BD-2C5,U+2C7-2CC,U+2CE-2D7,U+2DD-2FF,U+304,U+308,U+329,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}\n@font-face{font-family:Roboto Slab;font-style:normal;font-weight:400;font-display:swap;src:url(/vendor/media/5cf8828ea9d4dda3-s.p.e51369d5.woff2)format("woff2");unicode-range:U+0000-00FF,U+131,U+152-153,U+2BB-2BC,U+2C6,U+2DA,U+2DC,U+304,U+308,U+329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}\n@font-face{font-family:Roboto Slab;font-style:normal;font-weight:500;font-display:swap;src:url(/vendor/media/8856956fa550053e-s.aa7ab40d.woff2)format("woff2");unicode-range:U+460-52F,U+1C80-1C8A,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F}\n@font-face{font-family:Roboto Slab;font-style:normal;font-weight:500;font-display:swap;src:url(/vendor/media/fe9e8dd4a2ad4385-s.4ceec0fb.woff2)format("woff2");unicode-range:U+301,U+400-45F,U+490-491,U+4B0-4B1,U+2116}\n@font-face{font-family:Roboto Slab;font-style:normal;font-weight:500;font-display:swap;src:url(/vendor/media/c492570a33c2511a-s.f486836d.woff2)format("woff2");unicode-range:U+1F??}\n@font-face{font-family:Roboto Slab;font-style:normal;font-weight:500;font-display:swap;src:url(/vendor/media/2e31362fa3cbeb8b-s.54409f46.woff2)format("woff2");unicode-range:U+370-377,U+37A-37F,U+384-38A,U+38C,U+38E-3A1,U+3A3-3FF}\n@font-face{font-family:Roboto Slab;font-style:normal;font-weight:500;font-display:swap;src:url(/vendor/media/bd177ace3eee3014-s.02644e92.woff2)format("woff2");unicode-range:U+102-103,U+110-111,U+128-129,U+168-169,U+1A0-1A1,U+1AF-1B0,U+300-301,U+303-304,U+308-309,U+323,U+329,U+1EA0-1EF9,U+20AB}\n@font-face{font-family:Roboto Slab;font-style:normal;font-weight:500;font-display:swap;src:url(/vendor/media/da2446ec5f26383f-s.c0fe6b67.woff2)format("woff2");unicode-range:U+100-2BA,U+2BD-2C5,U+2C7-2CC,U+2CE-2D7,U+2DD-2FF,U+304,U+308,U+329,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}\n@font-face{font-family:Roboto Slab;font-style:normal;font-weight:500;font-display:swap;src:url(/vendor/media/5cf8828ea9d4dda3-s.p.e51369d5.woff2)format("woff2");unicode-range:U+0000-00FF,U+131,U+152-153,U+2BB-2BC,U+2C6,U+2DA,U+2DC,U+304,U+308,U+329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}\n@font-face{font-family:Roboto Slab;font-style:normal;font-weight:600;font-display:swap;src:url(/vendor/media/8856956fa550053e-s.aa7ab40d.woff2)format("woff2");unicode-range:U+460-52F,U+1C80-1C8A,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F}\n@font-face{font-family:Roboto Slab;font-style:normal;font-weight:600;font-display:swap;src:url(/vendor/media/fe9e8dd4a2ad4385-s.4ceec0fb.woff2)format("woff2");unicode-range:U+301,U+400-45F,U+490-491,U+4B0-4B1,U+2116}\n@font-face{font-family:Roboto Slab;font-style:normal;font-weight:600;font-display:swap;src:url(/vendor/media/c492570a33c2511a-s.f486836d.woff2)format("woff2");unicode-range:U+1F??}\n@font-face{font-family:Roboto Slab;font-style:normal;font-weight:600;font-display:swap;src:url(/vendor/media/2e31362fa3cbeb8b-s.54409f46.woff2)format("woff2");unicode-range:U+370-377,U+37A-37F,U+384-38A,U+38C,U+38E-3A1,U+3A3-3FF}\n@font-face{font-family:Roboto Slab;font-style:normal;font-weight:600;font-display:swap;src:url(/vendor/media/bd177ace3eee3014-s.02644e92.woff2)format("woff2");unicode-range:U+102-103,U+110-111,U+128-129,U+168-169,U+1A0-1A1,U+1AF-1B0,U+300-301,U+303-304,U+308-309,U+323,U+329,U+1EA0-1EF9,U+20AB}\n@font-face{font-family:Roboto Slab;font-style:normal;font-weight:600;font-display:swap;src:url(/vendor/media/da2446ec5f26383f-s.c0fe6b67.woff2)format("woff2");unicode-range:U+100-2BA,U+2BD-2C5,U+2C7-2CC,U+2CE-2D7,U+2DD-2FF,U+304,U+308,U+329,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}\n@font-face{font-family:Roboto Slab;font-style:normal;font-weight:600;font-display:swap;src:url(/vendor/media/5cf8828ea9d4dda3-s.p.e51369d5.woff2)format("woff2");unicode-range:U+0000-00FF,U+131,U+152-153,U+2BB-2BC,U+2C6,U+2DA,U+2DC,U+304,U+308,U+329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}\n@font-face{font-family:Roboto Slab;font-style:normal;font-weight:700;font-display:swap;src:url(/vendor/media/8856956fa550053e-s.aa7ab40d.woff2)format("woff2");unicode-range:U+460-52F,U+1C80-1C8A,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F}\n@font-face{font-family:Roboto Slab;font-style:normal;font-weight:700;font-display:swap;src:url(/vendor/media/fe9e8dd4a2ad4385-s.4ceec0fb.woff2)format("woff2");unicode-range:U+301,U+400-45F,U+490-491,U+4B0-4B1,U+2116}\n@font-face{font-family:Roboto Slab;font-style:normal;font-weight:700;font-display:swap;src:url(/vendor/media/c492570a33c2511a-s.f486836d.woff2)format("woff2");unicode-range:U+1F??}\n@font-face{font-family:Roboto Slab;font-style:normal;font-weight:700;font-display:swap;src:url(/vendor/media/2e31362fa3cbeb8b-s.54409f46.woff2)format("woff2");unicode-range:U+370-377,U+37A-37F,U+384-38A,U+38C,U+38E-3A1,U+3A3-3FF}\n@font-face{font-family:Roboto Slab;font-style:normal;font-weight:700;font-display:swap;src:url(/vendor/media/bd177ace3eee3014-s.02644e92.woff2)format("woff2");unicode-range:U+102-103,U+110-111,U+128-129,U+168-169,U+1A0-1A1,U+1AF-1B0,U+300-301,U+303-304,U+308-309,U+323,U+329,U+1EA0-1EF9,U+20AB}\n@font-face{font-family:Roboto Slab;font-style:normal;font-weight:700;font-display:swap;src:url(/vendor/media/da2446ec5f26383f-s.c0fe6b67.woff2)format("woff2");unicode-range:U+100-2BA,U+2BD-2C5,U+2C7-2CC,U+2CE-2D7,U+2DD-2FF,U+304,U+308,U+329,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}\n@font-face{font-family:Roboto Slab;font-style:normal;font-weight:700;font-display:swap;src:url(/vendor/media/5cf8828ea9d4dda3-s.p.e51369d5.woff2)format("woff2");unicode-range:U+0000-00FF,U+131,U+152-153,U+2BB-2BC,U+2C6,U+2DA,U+2DC,U+304,U+308,U+329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}\n\n:root, .tina-tailwind {\n  --tina-color-primary-light: #ff6b3d;\n  --tina-color-primary: #fe4101;\n  --tina-color-primary-dark: #c43200;\n  --tina-color-error-light: #ff8c5a;\n  --tina-color-error: #fe4101;\n  --tina-color-error-dark: #c43200;\n  --tina-color-indicator: #fe4101;\n  --tina-color-grey-0: #120f0e;\n  --tina-color-grey-1: #1a1614;\n  --tina-color-grey-2: #221c1a;\n  --tina-color-grey-3: #2a2422;\n  --tina-color-grey-4: #5c5654;\n  --tina-color-grey-5: #8b8988;\n  --tina-color-grey-6: #a39e9b;\n  --tina-color-grey-7: #c4bfbb;\n  --tina-color-grey-8: #e4e2df;\n  --tina-color-grey-9: #f5e6d3;\n  --tina-color-grey-10: #f7f1ea;\n  --tina-font-family: Montserrat, sans-serif;\n}\nhtml, body.tina-tailwind {\n  background: #120f0e;\n  color: #e4e2df;\n}\n.tina-tailwind {\n  background: #120f0e;\n  color: #e4e2df;\n  font-family: Montserrat, sans-serif;\n}\n.tina-tailwind h1,\n.tina-tailwind h2,\n.tina-tailwind h3 {\n  font-family: "Roboto Slab", serif;\n}\n.tina-tailwind .bg-white,\n.tina-tailwind .bg-gray-50,\n.tina-tailwind .hover\\:bg-white:hover,\n.tina-tailwind .hover\\:bg-gray-50:hover {\n  background-color: #1a1614 !important;\n}\n.tina-tailwind .bg-gray-100,\n.tina-tailwind .bg-gray-200,\n.tina-tailwind .hover\\:bg-gray-100:hover,\n.tina-tailwind .hover\\:bg-gray-200:hover {\n  background-color: #2a2422 !important;\n}\n.tina-tailwind .from-gray-50,\n.tina-tailwind .to-gray-50,\n.tina-tailwind .from-gray-50\\/50 {\n  --tw-gradient-from: #120f0e var(--tw-gradient-from-position);\n  --tw-gradient-to: #1a1614 var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);\n}\n.tina-tailwind .text-black,\n.tina-tailwind .text-gray-900,\n.tina-tailwind .text-gray-800,\n.tina-tailwind .text-gray-700,\n.tina-tailwind .text-gray-800\\/80 {\n  color: #e4e2df !important;\n}\n.tina-tailwind .text-gray-600,\n.tina-tailwind .text-gray-500,\n.tina-tailwind .text-gray-400 {\n  color: #a39e9b !important;\n}\n.tina-tailwind .border-gray-100,\n.tina-tailwind .border-gray-200,\n.tina-tailwind .border-gray-300,\n.tina-tailwind .divide-gray-200 > :not([hidden]) ~ :not([hidden]) {\n  border-color: #2a2422 !important;\n}\n.tina-tailwind .bg-tina-orange,\n.tina-tailwind .bg-tina-orange-dark,\n.tina-tailwind .hover\\:bg-tina-orange:hover,\n.tina-tailwind .hover\\:bg-tina-orange-dark:hover,\n.tina-tailwind .hover\\:bg-tina-orange-dark\\/90:hover {\n  background-color: #fe4101 !important;\n}\n.tina-tailwind .text-tina-orange,\n.tina-tailwind .text-tina-orange-dark,\n.tina-tailwind .text-blue-400,\n.tina-tailwind .text-blue-500,\n.tina-tailwind .text-blue-600,\n.tina-tailwind .hover\\:text-blue-400:hover,\n.tina-tailwind .hover\\:text-blue-500:hover {\n  color: #fe4101 !important;\n}\n.tina-tailwind .fill-tina-orange,\n.tina-tailwind .fill-orange-500 {\n  fill: #fe4101 !important;\n}\n.tina-tailwind .ring-tina-orange-dark,\n.tina-tailwind .focus\\:ring-tina-orange-dark:focus,\n.tina-tailwind .focus\\:ring-blue-500:focus {\n  --tw-ring-color: #fe4101 !important;\n}\n.tina-tailwind input,\n.tina-tailwind textarea,\n.tina-tailwind select {\n  background-color: #120f0e !important;\n  color: #e4e2df !important;\n  border-color: #3a3330 !important;\n}\n.tina-tailwind input::placeholder,\n.tina-tailwind textarea::placeholder {\n  color: #8b8988 !important;\n}\n.tina-tailwind svg[viewBox="0 0 32 32"]:has(path[d^="M18.6466"]) {\n  background: url("/images/logo_red.png") center / contain no-repeat;\n  width: 36px !important;\n  min-width: 36px !important;\n  height: 36px !important;\n}\n.tina-tailwind svg[viewBox="0 0 32 32"]:has(path[d^="M18.6466"]) path {\n  opacity: 0;\n}\n.tina-tailwind svg[viewBox="0 0 1020 254"] {\n  background: url("/dezinin_vert.svg") left center / contain no-repeat;\n  width: 220px !important;\n  min-width: 220px !important;\n  height: 32px !important;\n}\n.tina-tailwind svg[viewBox="0 0 1020 254"] path {\n  opacity: 0;\n}\n.tina-tailwind a[href*="tina.io"] {\n  display: none !important;\n}\n.tina-tailwind img[alt*="Llama"] {\n  content: url("/dezinin_vert.svg");\n  width: 12rem !important;\n  height: auto !important;\n  object-fit: contain;\n}\n.tina-tailwind [data-section-locked=\"true\"] {\n  display: none !important;\n}\n\n.tina-tailwind [data-test="list-partners"] > div > div > div {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 0.75rem;\n  padding: 0.75rem;\n  align-items: start;\n}\n.tina-tailwind [data-test="list-partners"] > div > div > div > [role="button"] {\n  min-width: 0;\n  width: auto;\n  margin: 0;\n  border-radius: 0.5rem;\n  display: grid !important;\n  grid-template-columns: 2rem minmax(0, 1fr) 2rem;\n  align-items: center;\n}\n.tina-tailwind [data-test="list-partners"] > div > div > div > [role="button"] > :nth-child(2) {\n  grid-column: 1 / -1;\n  grid-row: 1;\n  min-width: 0;\n  width: auto;\n  padding: 0.35rem 0.35rem 0.15rem;\n}\n.tina-tailwind [data-test="list-partners"] > div > div > div > [role="button"] > :nth-child(1) {\n  grid-column: 1;\n  grid-row: 2;\n}\n.tina-tailwind [data-test="list-partners"] > div > div > div > [role="button"] > :nth-child(3) {\n  grid-column: 3;\n  grid-row: 2;\n}\n.tina-tailwind [data-test="list-partners"] > div > div > div > [role="button"] > :nth-child(2) button {\n  width: 100%;\n  max-width: 100%;\n}\n.tina-tailwind [data-test="list-partners"] > div > div > div > [role="button"] .mb-5 {\n  margin-bottom: 0;\n}\n.tina-tailwind [data-test="list-partners"] img {\n  min-width: 0 !important;\n  width: 100% !important;\n  max-width: 100% !important;\n  max-height: 5.5rem !important;\n  height: auto !important;\n  object-fit: contain;\n}\n.tina-tailwind [data-test="list-partners"] > div > div > div > .text-center {\n  grid-column: 1 / -1;\n}\n';


const PHRASES = [
  ["Let’s get you editing with TinaCMS!", "Sign in to DEZININ"],
  ["Let's get you editing with TinaCMS!", "Sign in to DEZININ"],
  ["TinaCMS form fields will appear here.", "Choose a section to start editing."],
  ["TinaCMS form fields ", "Choose a section to start editing."],
  ["will appear here.", ""],
  ["Read the TinaCloud troubleshooting guide", ""],
  ["Learn more about moving to production with TinaCloud.", ""],
  ["TinaCloud", "DEZININ"],
  ["TinaCMS", "DEZININ"],
];
function rewriteText(node: Node | null) {
  if (!node || node.nodeType !== Node.TEXT_NODE) return;
  const text = node as Text;
  const parent = text.parentElement;
  if (!parent || parent.closest("input, textarea, [contenteditable='true']")) return;
  let next = text.nodeValue || "";
  if (/llama|🦙/i.test(next)) next = "Opening DEZININ";
  for (const [from, to] of PHRASES) next = next.split(from).join(to);
  if (next !== text.nodeValue) text.nodeValue = next;
}
function fieldRow(toggle: Element) {
  let node = toggle as HTMLElement;
  while (node.parentElement) {
    const parent = node.parentElement;
    if (parent.querySelectorAll("[data-section-toggle]").length > 1) return node;
    if (parent.getAttribute("data-test")?.startsWith("form:")) return node;
    node = parent;
  }
  return node;
}

function isSectionBoundary(node: HTMLElement) {
  return node.matches("[data-section-toggle]") || Boolean(node.querySelector("[data-section-toggle]"));
}

function lockSections() {
  document.querySelectorAll<HTMLElement>("[data-section-toggle][data-section-locked]").forEach((toggle) => {
    toggle.removeAttribute("data-section-locked");
    toggle.removeAttribute("inert");
  });
  document.querySelectorAll<HTMLElement>("[data-section-toggle]").forEach((toggle) => {
    const hidden = toggle.getAttribute("aria-checked") === "false" || toggle.getAttribute("data-edit-locked") === "true";
    let sibling = fieldRow(toggle).nextElementSibling as HTMLElement | null;
    while (sibling) {
      if (isSectionBoundary(sibling)) break;
      if (hidden) {
        if (sibling.getAttribute("data-section-locked") !== "true") {
          sibling.setAttribute("data-section-locked", "true");
          sibling.setAttribute("inert", "");
        }
      } else if (sibling.hasAttribute("data-section-locked")) {
        sibling.removeAttribute("data-section-locked");
        sibling.removeAttribute("inert");
      }
      sibling = sibling.nextElementSibling as HTMLElement | null;
    }
  });
}

function rewriteTree(root: Node | null) {
  if (!root) return;
  if (root.nodeType === Node.TEXT_NODE) {
    rewriteText(root);
    return;
  }
  if (root.nodeType !== Node.ELEMENT_NODE) return;
  const element = root as HTMLElement;
  if (element.closest("input, textarea")) return;
  const walker = document.createTreeWalker(element, NodeFilter.SHOW_TEXT);
  const nodes: Node[] = [];
  while (walker.nextNode()) nodes.push(walker.currentNode);
  nodes.forEach(rewriteText);
  element.querySelectorAll("span").forEach((span) => {
    if (/^DEZININ v\d/.test(span.textContent || "")) (span as HTMLElement).style.display = "none";
  });
  element.querySelectorAll("img").forEach((img) => {
    if (!/llama/i.test(img.alt)) return;
    img.src = "/dezinin_vert.svg";
    img.alt = "DEZININ";
    img.style.width = "12rem";
    img.style.height = "auto";
    img.style.display = "block";
  });
}
function repairPreviewHash() {
  const { hash, pathname, search } = window.location;
  if (!hash.startsWith("#/~/")) return;
  const rest = hash.slice("#/~".length);
  let next = "";
  if (rest === "" || rest === "/") next = "#/~";
  else if (rest.startsWith("//")) next = `#/~${rest.replace(/^\/+/, "/")}`;
  if (!next || next === hash) return;
  history.replaceState(history.state, "", `${pathname}${search}${next}`);
  window.dispatchEvent(new HashChangeEvent("hashchange"));
}

const MAIN_PAGE = "#/collections/edit/home/index";

type EditorCms = {
  dispatch?: (action: {
    type: "forms:set-active-field-name";
    value: { formId: string; fieldName: string };
  }) => void;
  state?: {
    activeFormId?: string | null;
    breadcrumbs?: Array<{ formId: string; formName: string }>;
  };
};

function onMainPageDocument() {
  const hash = window.location.hash.split("?")[0].replace(/\/+$/, "");
  return hash === MAIN_PAGE || hash.startsWith(`${MAIN_PAGE}/`);
}

function showMainPageFields(button: Element, cms: EditorCms) {
  const root = cms.state?.breadcrumbs?.[0];
  const formId = root?.formId || cms.state?.activeFormId;
  if (cms.dispatch && formId) {
    cms.dispatch({
      type: "forms:set-active-field-name",
      value: { formId, fieldName: "" },
    });
    return;
  }
  button.closest("nav")?.querySelector<HTMLButtonElement>("button:not([aria-label^='Back to'])")?.click();
}

function keepSingletonBackInEditor(event: Event, cms: EditorCms) {
  const target = event.target;
  if (!(target instanceof Element)) return;
  const button = target.closest("button[aria-label^='Back to']");
  if (!button || !window.location.hash.startsWith("#/collections/edit/")) return;
  // Tina's own handler sets location to the collection list. Nested items such as
  // an FAQ question keep this hash and live in form state, so clear that instead.
  event.preventDefault();
  event.stopPropagation();
  if (onMainPageDocument()) {
    showMainPageFields(button, cms);
    return;
  }
  window.location.hash = MAIN_PAGE;
}

export function installDezininBrand<T>(cms: T): T {
  if (typeof document === "undefined") return cms;
  const branded = window as Window & { __dezininBrand?: boolean };
  if (branded.__dezininBrand) return cms;
  branded.__dezininBrand = true;
  document.title = "DEZININ";
  const icon = document.querySelector<HTMLLinkElement>("link[rel='icon']") || document.createElement("link");
  icon.rel = "icon";
  icon.href = "/favicon.ico";
  if (!icon.parentElement) document.head.appendChild(icon);
  if (!document.getElementById("dezinin-admin")) {
    const style = document.createElement("style");
    style.id = "dezinin-admin";
    style.textContent = ADMIN_CSS;
    document.head.appendChild(style);
  }
  const paint = () => {
    rewriteTree(document.body);
    lockSections();
  };
  paint();
  const observer = new MutationObserver((records) => {
    for (const record of records) {
      if (record.type === "characterData") rewriteText(record.target as Text);
      record.addedNodes.forEach((node) => rewriteTree(node as ParentNode));
    }
    lockSections();
  });
  observer.observe(document.body, { subtree: true, childList: true, characterData: true });
  document.addEventListener("click", () => window.setTimeout(lockSections, 0));
  document.addEventListener("click", (event) => keepSingletonBackInEditor(event, cms as EditorCms), true);
  repairPreviewHash();
  window.addEventListener("hashchange", repairPreviewHash);
  return cms;
}
