const ADMIN_FONTS = '@font-face{font-family:Montserrat;font-style:italic;font-weight:400;font-display:swap;src:url(/vendor/media/b5e37d11b304fc7d-s.de3dacd9.woff2)format("woff2");unicode-range:U+460-52F,U+1C80-1C8A,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F}\n@font-face{font-family:Montserrat;font-style:italic;font-weight:400;font-display:swap;src:url(/vendor/media/178d5fd8ddb5ce59-s.83ef81a4.woff2)format("woff2");unicode-range:U+301,U+400-45F,U+490-491,U+4B0-4B1,U+2116}\n@font-face{font-family:Montserrat;font-style:italic;font-weight:400;font-display:swap;src:url(/vendor/media/45b63fe037c60d0d-s.d2ca58db.woff2)format("woff2");unicode-range:U+102-103,U+110-111,U+128-129,U+168-169,U+1A0-1A1,U+1AF-1B0,U+300-301,U+303-304,U+308-309,U+323,U+329,U+1EA0-1EF9,U+20AB}\n@font-face{font-family:Montserrat;font-style:italic;font-weight:400;font-display:swap;src:url(/vendor/media/f12c927eaf7b23c0-s.b6492805.woff2)format("woff2");unicode-range:U+100-2BA,U+2BD-2C5,U+2C7-2CC,U+2CE-2D7,U+2DD-2FF,U+304,U+308,U+329,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}\n@font-face{font-family:Montserrat;font-style:italic;font-weight:400;font-display:swap;src:url(/vendor/media/a3264cb69f626630-s.p.952f628b.woff2)format("woff2");unicode-range:U+0000-00FF,U+131,U+152-153,U+2BB-2BC,U+2C6,U+2DA,U+2DC,U+304,U+308,U+329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}\n@font-face{font-family:Montserrat;font-style:italic;font-weight:500;font-display:swap;src:url(/vendor/media/b5e37d11b304fc7d-s.de3dacd9.woff2)format("woff2");unicode-range:U+460-52F,U+1C80-1C8A,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F}\n@font-face{font-family:Montserrat;font-style:italic;font-weight:500;font-display:swap;src:url(/vendor/media/178d5fd8ddb5ce59-s.83ef81a4.woff2)format("woff2");unicode-range:U+301,U+400-45F,U+490-491,U+4B0-4B1,U+2116}\n@font-face{font-family:Montserrat;font-style:italic;font-weight:500;font-display:swap;src:url(/vendor/media/45b63fe037c60d0d-s.d2ca58db.woff2)format("woff2");unicode-range:U+102-103,U+110-111,U+128-129,U+168-169,U+1A0-1A1,U+1AF-1B0,U+300-301,U+303-304,U+308-309,U+323,U+329,U+1EA0-1EF9,U+20AB}\n@font-face{font-family:Montserrat;font-style:italic;font-weight:500;font-display:swap;src:url(/vendor/media/f12c927eaf7b23c0-s.b6492805.woff2)format("woff2");unicode-range:U+100-2BA,U+2BD-2C5,U+2C7-2CC,U+2CE-2D7,U+2DD-2FF,U+304,U+308,U+329,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}\n@font-face{font-family:Montserrat;font-style:italic;font-weight:500;font-display:swap;src:url(/vendor/media/a3264cb69f626630-s.p.952f628b.woff2)format("woff2");unicode-range:U+0000-00FF,U+131,U+152-153,U+2BB-2BC,U+2C6,U+2DA,U+2DC,U+304,U+308,U+329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}\n@font-face{font-family:Montserrat;font-style:italic;font-weight:600;font-display:swap;src:url(/vendor/media/b5e37d11b304fc7d-s.de3dacd9.woff2)format("woff2");unicode-range:U+460-52F,U+1C80-1C8A,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F}\n@font-face{font-family:Montserrat;font-style:italic;font-weight:600;font-display:swap;src:url(/vendor/media/178d5fd8ddb5ce59-s.83ef81a4.woff2)format("woff2");unicode-range:U+301,U+400-45F,U+490-491,U+4B0-4B1,U+2116}\n@font-face{font-family:Montserrat;font-style:italic;font-weight:600;font-display:swap;src:url(/vendor/media/45b63fe037c60d0d-s.d2ca58db.woff2)format("woff2");unicode-range:U+102-103,U+110-111,U+128-129,U+168-169,U+1A0-1A1,U+1AF-1B0,U+300-301,U+303-304,U+308-309,U+323,U+329,U+1EA0-1EF9,U+20AB}\n@font-face{font-family:Montserrat;font-style:italic;font-weight:600;font-display:swap;src:url(/vendor/media/f12c927eaf7b23c0-s.b6492805.woff2)format("woff2");unicode-range:U+100-2BA,U+2BD-2C5,U+2C7-2CC,U+2CE-2D7,U+2DD-2FF,U+304,U+308,U+329,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}\n@font-face{font-family:Montserrat;font-style:italic;font-weight:600;font-display:swap;src:url(/vendor/media/a3264cb69f626630-s.p.952f628b.woff2)format("woff2");unicode-range:U+0000-00FF,U+131,U+152-153,U+2BB-2BC,U+2C6,U+2DA,U+2DC,U+304,U+308,U+329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}\n@font-face{font-family:Montserrat;font-style:italic;font-weight:700;font-display:swap;src:url(/vendor/media/b5e37d11b304fc7d-s.de3dacd9.woff2)format("woff2");unicode-range:U+460-52F,U+1C80-1C8A,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F}\n@font-face{font-family:Montserrat;font-style:italic;font-weight:700;font-display:swap;src:url(/vendor/media/178d5fd8ddb5ce59-s.83ef81a4.woff2)format("woff2");unicode-range:U+301,U+400-45F,U+490-491,U+4B0-4B1,U+2116}\n@font-face{font-family:Montserrat;font-style:italic;font-weight:700;font-display:swap;src:url(/vendor/media/45b63fe037c60d0d-s.d2ca58db.woff2)format("woff2");unicode-range:U+102-103,U+110-111,U+128-129,U+168-169,U+1A0-1A1,U+1AF-1B0,U+300-301,U+303-304,U+308-309,U+323,U+329,U+1EA0-1EF9,U+20AB}\n@font-face{font-family:Montserrat;font-style:italic;font-weight:700;font-display:swap;src:url(/vendor/media/f12c927eaf7b23c0-s.b6492805.woff2)format("woff2");unicode-range:U+100-2BA,U+2BD-2C5,U+2C7-2CC,U+2CE-2D7,U+2DD-2FF,U+304,U+308,U+329,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}\n@font-face{font-family:Montserrat;font-style:italic;font-weight:700;font-display:swap;src:url(/vendor/media/a3264cb69f626630-s.p.952f628b.woff2)format("woff2");unicode-range:U+0000-00FF,U+131,U+152-153,U+2BB-2BC,U+2C6,U+2DA,U+2DC,U+304,U+308,U+329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}\n@font-face{font-family:Montserrat;font-style:normal;font-weight:400;font-display:swap;src:url(/vendor/media/8298327da6d5bcce-s.fb2d5852.woff2)format("woff2");unicode-range:U+460-52F,U+1C80-1C8A,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F}\n@font-face{font-family:Montserrat;font-style:normal;font-weight:400;font-display:swap;src:url(/vendor/media/44fac91e6f2d2b1b-s.0a39a854.woff2)format("woff2");unicode-range:U+301,U+400-45F,U+490-491,U+4B0-4B1,U+2116}\n@font-face{font-family:Montserrat;font-style:normal;font-weight:400;font-display:swap;src:url(/vendor/media/2b402d8aebffd579-s.ec7e94a5.woff2)format("woff2");unicode-range:U+102-103,U+110-111,U+128-129,U+168-169,U+1A0-1A1,U+1AF-1B0,U+300-301,U+303-304,U+308-309,U+323,U+329,U+1EA0-1EF9,U+20AB}\n@font-face{font-family:Montserrat;font-style:normal;font-weight:400;font-display:swap;src:url(/vendor/media/a88409fdd7dc121c-s.62b55a98.woff2)format("woff2");unicode-range:U+100-2BA,U+2BD-2C5,U+2C7-2CC,U+2CE-2D7,U+2DD-2FF,U+304,U+308,U+329,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}\n@font-face{font-family:Montserrat;font-style:normal;font-weight:400;font-display:swap;src:url(/vendor/media/e8f2fbee2754df70-s.p.9b7a96b4.woff2)format("woff2");unicode-range:U+0000-00FF,U+131,U+152-153,U+2BB-2BC,U+2C6,U+2DA,U+2DC,U+304,U+308,U+329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}\n@font-face{font-family:Montserrat;font-style:normal;font-weight:500;font-display:swap;src:url(/vendor/media/8298327da6d5bcce-s.fb2d5852.woff2)format("woff2");unicode-range:U+460-52F,U+1C80-1C8A,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F}\n@font-face{font-family:Montserrat;font-style:normal;font-weight:500;font-display:swap;src:url(/vendor/media/44fac91e6f2d2b1b-s.0a39a854.woff2)format("woff2");unicode-range:U+301,U+400-45F,U+490-491,U+4B0-4B1,U+2116}\n@font-face{font-family:Montserrat;font-style:normal;font-weight:500;font-display:swap;src:url(/vendor/media/2b402d8aebffd579-s.ec7e94a5.woff2)format("woff2");unicode-range:U+102-103,U+110-111,U+128-129,U+168-169,U+1A0-1A1,U+1AF-1B0,U+300-301,U+303-304,U+308-309,U+323,U+329,U+1EA0-1EF9,U+20AB}\n@font-face{font-family:Montserrat;font-style:normal;font-weight:500;font-display:swap;src:url(/vendor/media/a88409fdd7dc121c-s.62b55a98.woff2)format("woff2");unicode-range:U+100-2BA,U+2BD-2C5,U+2C7-2CC,U+2CE-2D7,U+2DD-2FF,U+304,U+308,U+329,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}\n@font-face{font-family:Montserrat;font-style:normal;font-weight:500;font-display:swap;src:url(/vendor/media/e8f2fbee2754df70-s.p.9b7a96b4.woff2)format("woff2");unicode-range:U+0000-00FF,U+131,U+152-153,U+2BB-2BC,U+2C6,U+2DA,U+2DC,U+304,U+308,U+329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}\n@font-face{font-family:Montserrat;font-style:normal;font-weight:600;font-display:swap;src:url(/vendor/media/8298327da6d5bcce-s.fb2d5852.woff2)format("woff2");unicode-range:U+460-52F,U+1C80-1C8A,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F}\n@font-face{font-family:Montserrat;font-style:normal;font-weight:600;font-display:swap;src:url(/vendor/media/44fac91e6f2d2b1b-s.0a39a854.woff2)format("woff2");unicode-range:U+301,U+400-45F,U+490-491,U+4B0-4B1,U+2116}\n@font-face{font-family:Montserrat;font-style:normal;font-weight:600;font-display:swap;src:url(/vendor/media/2b402d8aebffd579-s.ec7e94a5.woff2)format("woff2");unicode-range:U+102-103,U+110-111,U+128-129,U+168-169,U+1A0-1A1,U+1AF-1B0,U+300-301,U+303-304,U+308-309,U+323,U+329,U+1EA0-1EF9,U+20AB}\n@font-face{font-family:Montserrat;font-style:normal;font-weight:600;font-display:swap;src:url(/vendor/media/a88409fdd7dc121c-s.62b55a98.woff2)format("woff2");unicode-range:U+100-2BA,U+2BD-2C5,U+2C7-2CC,U+2CE-2D7,U+2DD-2FF,U+304,U+308,U+329,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}\n@font-face{font-family:Montserrat;font-style:normal;font-weight:600;font-display:swap;src:url(/vendor/media/e8f2fbee2754df70-s.p.9b7a96b4.woff2)format("woff2");unicode-range:U+0000-00FF,U+131,U+152-153,U+2BB-2BC,U+2C6,U+2DA,U+2DC,U+304,U+308,U+329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}\n@font-face{font-family:Montserrat;font-style:normal;font-weight:700;font-display:swap;src:url(/vendor/media/8298327da6d5bcce-s.fb2d5852.woff2)format("woff2");unicode-range:U+460-52F,U+1C80-1C8A,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F}\n@font-face{font-family:Montserrat;font-style:normal;font-weight:700;font-display:swap;src:url(/vendor/media/44fac91e6f2d2b1b-s.0a39a854.woff2)format("woff2");unicode-range:U+301,U+400-45F,U+490-491,U+4B0-4B1,U+2116}\n@font-face{font-family:Montserrat;font-style:normal;font-weight:700;font-display:swap;src:url(/vendor/media/2b402d8aebffd579-s.ec7e94a5.woff2)format("woff2");unicode-range:U+102-103,U+110-111,U+128-129,U+168-169,U+1A0-1A1,U+1AF-1B0,U+300-301,U+303-304,U+308-309,U+323,U+329,U+1EA0-1EF9,U+20AB}\n@font-face{font-family:Montserrat;font-style:normal;font-weight:700;font-display:swap;src:url(/vendor/media/a88409fdd7dc121c-s.62b55a98.woff2)format("woff2");unicode-range:U+100-2BA,U+2BD-2C5,U+2C7-2CC,U+2CE-2D7,U+2DD-2FF,U+304,U+308,U+329,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}\n@font-face{font-family:Montserrat;font-style:normal;font-weight:700;font-display:swap;src:url(/vendor/media/e8f2fbee2754df70-s.p.9b7a96b4.woff2)format("woff2");unicode-range:U+0000-00FF,U+131,U+152-153,U+2BB-2BC,U+2C6,U+2DA,U+2DC,U+304,U+308,U+329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}\n@font-face{font-family:Roboto Slab;font-style:normal;font-weight:300;font-display:swap;src:url(/vendor/media/8856956fa550053e-s.aa7ab40d.woff2)format("woff2");unicode-range:U+460-52F,U+1C80-1C8A,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F}\n@font-face{font-family:Roboto Slab;font-style:normal;font-weight:300;font-display:swap;src:url(/vendor/media/fe9e8dd4a2ad4385-s.4ceec0fb.woff2)format("woff2");unicode-range:U+301,U+400-45F,U+490-491,U+4B0-4B1,U+2116}\n@font-face{font-family:Roboto Slab;font-style:normal;font-weight:300;font-display:swap;src:url(/vendor/media/c492570a33c2511a-s.f486836d.woff2)format("woff2");unicode-range:U+1F??}\n@font-face{font-family:Roboto Slab;font-style:normal;font-weight:300;font-display:swap;src:url(/vendor/media/2e31362fa3cbeb8b-s.54409f46.woff2)format("woff2");unicode-range:U+370-377,U+37A-37F,U+384-38A,U+38C,U+38E-3A1,U+3A3-3FF}\n@font-face{font-family:Roboto Slab;font-style:normal;font-weight:300;font-display:swap;src:url(/vendor/media/bd177ace3eee3014-s.02644e92.woff2)format("woff2");unicode-range:U+102-103,U+110-111,U+128-129,U+168-169,U+1A0-1A1,U+1AF-1B0,U+300-301,U+303-304,U+308-309,U+323,U+329,U+1EA0-1EF9,U+20AB}\n@font-face{font-family:Roboto Slab;font-style:normal;font-weight:300;font-display:swap;src:url(/vendor/media/da2446ec5f26383f-s.c0fe6b67.woff2)format("woff2");unicode-range:U+100-2BA,U+2BD-2C5,U+2C7-2CC,U+2CE-2D7,U+2DD-2FF,U+304,U+308,U+329,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}\n@font-face{font-family:Roboto Slab;font-style:normal;font-weight:300;font-display:swap;src:url(/vendor/media/5cf8828ea9d4dda3-s.p.e51369d5.woff2)format("woff2");unicode-range:U+0000-00FF,U+131,U+152-153,U+2BB-2BC,U+2C6,U+2DA,U+2DC,U+304,U+308,U+329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}\n@font-face{font-family:Roboto Slab;font-style:normal;font-weight:400;font-display:swap;src:url(/vendor/media/8856956fa550053e-s.aa7ab40d.woff2)format("woff2");unicode-range:U+460-52F,U+1C80-1C8A,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F}\n@font-face{font-family:Roboto Slab;font-style:normal;font-weight:400;font-display:swap;src:url(/vendor/media/fe9e8dd4a2ad4385-s.4ceec0fb.woff2)format("woff2");unicode-range:U+301,U+400-45F,U+490-491,U+4B0-4B1,U+2116}\n@font-face{font-family:Roboto Slab;font-style:normal;font-weight:400;font-display:swap;src:url(/vendor/media/c492570a33c2511a-s.f486836d.woff2)format("woff2");unicode-range:U+1F??}\n@font-face{font-family:Roboto Slab;font-style:normal;font-weight:400;font-display:swap;src:url(/vendor/media/2e31362fa3cbeb8b-s.54409f46.woff2)format("woff2");unicode-range:U+370-377,U+37A-37F,U+384-38A,U+38C,U+38E-3A1,U+3A3-3FF}\n@font-face{font-family:Roboto Slab;font-style:normal;font-weight:400;font-display:swap;src:url(/vendor/media/bd177ace3eee3014-s.02644e92.woff2)format("woff2");unicode-range:U+102-103,U+110-111,U+128-129,U+168-169,U+1A0-1A1,U+1AF-1B0,U+300-301,U+303-304,U+308-309,U+323,U+329,U+1EA0-1EF9,U+20AB}\n@font-face{font-family:Roboto Slab;font-style:normal;font-weight:400;font-display:swap;src:url(/vendor/media/da2446ec5f26383f-s.c0fe6b67.woff2)format("woff2");unicode-range:U+100-2BA,U+2BD-2C5,U+2C7-2CC,U+2CE-2D7,U+2DD-2FF,U+304,U+308,U+329,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}\n@font-face{font-family:Roboto Slab;font-style:normal;font-weight:400;font-display:swap;src:url(/vendor/media/5cf8828ea9d4dda3-s.p.e51369d5.woff2)format("woff2");unicode-range:U+0000-00FF,U+131,U+152-153,U+2BB-2BC,U+2C6,U+2DA,U+2DC,U+304,U+308,U+329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}\n@font-face{font-family:Roboto Slab;font-style:normal;font-weight:500;font-display:swap;src:url(/vendor/media/8856956fa550053e-s.aa7ab40d.woff2)format("woff2");unicode-range:U+460-52F,U+1C80-1C8A,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F}\n@font-face{font-family:Roboto Slab;font-style:normal;font-weight:500;font-display:swap;src:url(/vendor/media/fe9e8dd4a2ad4385-s.4ceec0fb.woff2)format("woff2");unicode-range:U+301,U+400-45F,U+490-491,U+4B0-4B1,U+2116}\n@font-face{font-family:Roboto Slab;font-style:normal;font-weight:500;font-display:swap;src:url(/vendor/media/c492570a33c2511a-s.f486836d.woff2)format("woff2");unicode-range:U+1F??}\n@font-face{font-family:Roboto Slab;font-style:normal;font-weight:500;font-display:swap;src:url(/vendor/media/2e31362fa3cbeb8b-s.54409f46.woff2)format("woff2");unicode-range:U+370-377,U+37A-37F,U+384-38A,U+38C,U+38E-3A1,U+3A3-3FF}\n@font-face{font-family:Roboto Slab;font-style:normal;font-weight:500;font-display:swap;src:url(/vendor/media/bd177ace3eee3014-s.02644e92.woff2)format("woff2");unicode-range:U+102-103,U+110-111,U+128-129,U+168-169,U+1A0-1A1,U+1AF-1B0,U+300-301,U+303-304,U+308-309,U+323,U+329,U+1EA0-1EF9,U+20AB}\n@font-face{font-family:Roboto Slab;font-style:normal;font-weight:500;font-display:swap;src:url(/vendor/media/da2446ec5f26383f-s.c0fe6b67.woff2)format("woff2");unicode-range:U+100-2BA,U+2BD-2C5,U+2C7-2CC,U+2CE-2D7,U+2DD-2FF,U+304,U+308,U+329,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}\n@font-face{font-family:Roboto Slab;font-style:normal;font-weight:500;font-display:swap;src:url(/vendor/media/5cf8828ea9d4dda3-s.p.e51369d5.woff2)format("woff2");unicode-range:U+0000-00FF,U+131,U+152-153,U+2BB-2BC,U+2C6,U+2DA,U+2DC,U+304,U+308,U+329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}\n@font-face{font-family:Roboto Slab;font-style:normal;font-weight:600;font-display:swap;src:url(/vendor/media/8856956fa550053e-s.aa7ab40d.woff2)format("woff2");unicode-range:U+460-52F,U+1C80-1C8A,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F}\n@font-face{font-family:Roboto Slab;font-style:normal;font-weight:600;font-display:swap;src:url(/vendor/media/fe9e8dd4a2ad4385-s.4ceec0fb.woff2)format("woff2");unicode-range:U+301,U+400-45F,U+490-491,U+4B0-4B1,U+2116}\n@font-face{font-family:Roboto Slab;font-style:normal;font-weight:600;font-display:swap;src:url(/vendor/media/c492570a33c2511a-s.f486836d.woff2)format("woff2");unicode-range:U+1F??}\n@font-face{font-family:Roboto Slab;font-style:normal;font-weight:600;font-display:swap;src:url(/vendor/media/2e31362fa3cbeb8b-s.54409f46.woff2)format("woff2");unicode-range:U+370-377,U+37A-37F,U+384-38A,U+38C,U+38E-3A1,U+3A3-3FF}\n@font-face{font-family:Roboto Slab;font-style:normal;font-weight:600;font-display:swap;src:url(/vendor/media/bd177ace3eee3014-s.02644e92.woff2)format("woff2");unicode-range:U+102-103,U+110-111,U+128-129,U+168-169,U+1A0-1A1,U+1AF-1B0,U+300-301,U+303-304,U+308-309,U+323,U+329,U+1EA0-1EF9,U+20AB}\n@font-face{font-family:Roboto Slab;font-style:normal;font-weight:600;font-display:swap;src:url(/vendor/media/da2446ec5f26383f-s.c0fe6b67.woff2)format("woff2");unicode-range:U+100-2BA,U+2BD-2C5,U+2C7-2CC,U+2CE-2D7,U+2DD-2FF,U+304,U+308,U+329,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}\n@font-face{font-family:Roboto Slab;font-style:normal;font-weight:600;font-display:swap;src:url(/vendor/media/5cf8828ea9d4dda3-s.p.e51369d5.woff2)format("woff2");unicode-range:U+0000-00FF,U+131,U+152-153,U+2BB-2BC,U+2C6,U+2DA,U+2DC,U+304,U+308,U+329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}\n@font-face{font-family:Roboto Slab;font-style:normal;font-weight:700;font-display:swap;src:url(/vendor/media/8856956fa550053e-s.aa7ab40d.woff2)format("woff2");unicode-range:U+460-52F,U+1C80-1C8A,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F}\n@font-face{font-family:Roboto Slab;font-style:normal;font-weight:700;font-display:swap;src:url(/vendor/media/fe9e8dd4a2ad4385-s.4ceec0fb.woff2)format("woff2");unicode-range:U+301,U+400-45F,U+490-491,U+4B0-4B1,U+2116}\n@font-face{font-family:Roboto Slab;font-style:normal;font-weight:700;font-display:swap;src:url(/vendor/media/c492570a33c2511a-s.f486836d.woff2)format("woff2");unicode-range:U+1F??}\n@font-face{font-family:Roboto Slab;font-style:normal;font-weight:700;font-display:swap;src:url(/vendor/media/2e31362fa3cbeb8b-s.54409f46.woff2)format("woff2");unicode-range:U+370-377,U+37A-37F,U+384-38A,U+38C,U+38E-3A1,U+3A3-3FF}\n@font-face{font-family:Roboto Slab;font-style:normal;font-weight:700;font-display:swap;src:url(/vendor/media/bd177ace3eee3014-s.02644e92.woff2)format("woff2");unicode-range:U+102-103,U+110-111,U+128-129,U+168-169,U+1A0-1A1,U+1AF-1B0,U+300-301,U+303-304,U+308-309,U+323,U+329,U+1EA0-1EF9,U+20AB}\n@font-face{font-family:Roboto Slab;font-style:normal;font-weight:700;font-display:swap;src:url(/vendor/media/da2446ec5f26383f-s.c0fe6b67.woff2)format("woff2");unicode-range:U+100-2BA,U+2BD-2C5,U+2C7-2CC,U+2CE-2D7,U+2DD-2FF,U+304,U+308,U+329,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}\n@font-face{font-family:Roboto Slab;font-style:normal;font-weight:700;font-display:swap;src:url(/vendor/media/5cf8828ea9d4dda3-s.p.e51369d5.woff2)format("woff2");unicode-range:U+0000-00FF,U+131,U+152-153,U+2BB-2BC,U+2C6,U+2DA,U+2DC,U+304,U+308,U+329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}';

const ADMIN_CSS = ADMIN_FONTS + `
:root, .tina-tailwind {
  --tina-color-primary-light: #ff6b3d;
  --tina-color-primary: #fe4101;
  --tina-color-primary-dark: #c43200;
  --tina-color-error-light: #ff8c5a;
  --tina-color-error: #fe4101;
  --tina-color-error-dark: #c43200;
  --tina-color-indicator: #fe4101;
  --tina-color-grey-0: #120f0e;
  --tina-color-grey-1: #1a1614;
  --tina-color-grey-2: #221c1a;
  --tina-color-grey-3: #2a2422;
  --tina-color-grey-4: #5c5654;
  --tina-color-grey-5: #8b8988;
  --tina-color-grey-6: #a39e9b;
  --tina-color-grey-7: #c4bfbb;
  --tina-color-grey-8: #e4e2df;
  --tina-color-grey-9: #f5e6d3;
  --tina-color-grey-10: #f7f1ea;
  --tina-font-family: Montserrat, sans-serif;
  --dezinin-ease: cubic-bezier(0.16, 1, 0.3, 1);
}
html, body.tina-tailwind {
  background: #120f0e;
  color: #e4e2df;
}
.tina-tailwind {
  background: #120f0e;
  color: #e4e2df;
  font-family: Montserrat, sans-serif;
}
.tina-tailwind h1,
.tina-tailwind h2,
.tina-tailwind h3,
.tina-tailwind h4 {
  font-family: Montserrat, sans-serif;
  letter-spacing: -0.03em;
}
.tina-tailwind h4 {
  letter-spacing: 0.16em;
  font-size: 0.6875rem;
  font-weight: 600;
  color: #8b8988 !important;
}
.tina-tailwind .bg-white,
.tina-tailwind .bg-gray-50,
.tina-tailwind .hover\\:bg-white:hover,
.tina-tailwind .hover\\:bg-gray-50:hover {
  background-color: #1a1614 !important;
}
.tina-tailwind .bg-gray-100,
.tina-tailwind .bg-gray-200,
.tina-tailwind .hover\\:bg-gray-100:hover,
.tina-tailwind .hover\\:bg-gray-200:hover {
  background-color: #2a2422 !important;
}
.tina-tailwind .from-gray-50,
.tina-tailwind .to-gray-50,
.tina-tailwind .from-gray-50\\/50 {
  --tw-gradient-from: #120f0e var(--tw-gradient-from-position);
  --tw-gradient-to: #1a1614 var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}
.tina-tailwind .text-black,
.tina-tailwind .text-gray-900,
.tina-tailwind .text-gray-800,
.tina-tailwind .text-gray-700,
.tina-tailwind .text-gray-800\\/80 {
  color: #e4e2df !important;
}
.tina-tailwind .text-gray-600,
.tina-tailwind .text-gray-500,
.tina-tailwind .text-gray-400 {
  color: #a39e9b !important;
}
.tina-tailwind .border-gray-100,
.tina-tailwind .border-gray-200,
.tina-tailwind .border-gray-300,
.tina-tailwind .divide-gray-200 > :not([hidden]) ~ :not([hidden]) {
  border-color: #2a2422 !important;
}
.tina-tailwind .bg-tina-orange,
.tina-tailwind .bg-tina-orange-dark,
.tina-tailwind .hover\\:bg-tina-orange:hover,
.tina-tailwind .hover\\:bg-tina-orange-dark:hover,
.tina-tailwind .hover\\:bg-tina-orange-dark\\/90:hover {
  background-color: #fe4101 !important;
}
.tina-tailwind .text-tina-orange,
.tina-tailwind .text-tina-orange-dark,
.tina-tailwind .text-blue-400,
.tina-tailwind .text-blue-500,
.tina-tailwind .text-blue-600,
.tina-tailwind .hover\\:text-blue-400:hover,
.tina-tailwind .hover\\:text-blue-500:hover {
  color: #fe4101 !important;
}
.tina-tailwind .fill-tina-orange,
.tina-tailwind .fill-orange-500 {
  fill: #fe4101 !important;
}
.tina-tailwind .ring-tina-orange-dark,
.tina-tailwind .focus\\:ring-tina-orange-dark:focus,
.tina-tailwind .focus\\:ring-blue-500:focus {
  --tw-ring-color: #fe4101 !important;
}
.tina-tailwind input,
.tina-tailwind textarea,
.tina-tailwind select {
  background-color: #120f0e !important;
  color: #e4e2df !important;
  border-color: #3a3330 !important;
  border-radius: 0.75rem !important;
  min-height: 2.75rem;
  box-shadow: none !important;
  transition: border-color 0.3s var(--dezinin-ease), background-color 0.3s var(--dezinin-ease);
}
.tina-tailwind textarea {
  min-height: 7.5rem;
  line-height: 1.55;
}
.tina-tailwind input:focus,
.tina-tailwind textarea:focus,
.tina-tailwind select:focus,
.tina-tailwind .focus\\:shadow-outline:focus,
.tina-tailwind .focus-within\\:shadow-outline:focus-within,
.tina-tailwind .focus-within\\:border-blue-500:focus-within {
  border-color: #fe4101 !important;
  outline: none;
  box-shadow: none !important;
}
.tina-tailwind input::placeholder,
.tina-tailwind textarea::placeholder {
  color: #8b8988 !important;
}
.tina-tailwind label.block,
.tina-tailwind [data-test^="list-"] > span span {
  font-size: 0.6875rem !important;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  font-weight: 600;
  color: #8b8988 !important;
}
.tina-tailwind button.icon-parent {
  border-radius: 999px !important;
  transition: transform 0.3s var(--dezinin-ease), background-color 0.3s var(--dezinin-ease), color 0.3s var(--dezinin-ease);
}
.tina-tailwind button.icon-parent:active:not(:disabled) {
  transform: scale(0.98);
}
.tina-tailwind button.icon-parent:disabled {
  opacity: 0.38;
}
.tina-tailwind button:focus-visible,
.tina-tailwind a:focus-visible,
.tina-tailwind input:focus-visible,
.tina-tailwind textarea:focus-visible,
.tina-tailwind select:focus-visible {
  outline: 2px solid #fe4101;
  outline-offset: 2px;
}
.tina-tailwind [data-test^="form:"] {
  background-color: #120f0e !important;
  color: #e4e2df !important;
}
.tina-tailwind [data-test^="form:"] > div:first-child {
  max-width: 68rem;
  padding: 1.5rem 1.25rem 7rem;
}
.tina-tailwind button[aria-label^="Back to"] {
  font-size: 0.8125rem;
  letter-spacing: 0.02em;
  color: #a39e9b !important;
  transition: color 0.3s var(--dezinin-ease), transform 0.3s var(--dezinin-ease);
}
.tina-tailwind button[aria-label^="Back to"]:hover {
  color: #f7f1ea !important;
}
.tina-tailwind button[aria-label^="Back to"]:active {
  transform: scale(0.98);
}
.tina-tailwind ul.flex.flex-col.gap-4 {
  gap: 0.25rem !important;
}
.tina-tailwind a.text-base.tracking-wide {
  border-radius: 0.75rem;
  padding: 0.7rem 0.75rem;
  color: #a39e9b !important;
  transition: background-color 0.3s var(--dezinin-ease), color 0.3s var(--dezinin-ease);
}
.tina-tailwind a.text-base.tracking-wide:hover {
  background: #221c1a;
  color: #f7f1ea !important;
}
.tina-tailwind a[data-nav-active="true"] {
  background: #221c1a;
  color: #f7f1ea !important;
  box-shadow: inset 2px 0 0 #fe4101;
}
.tina-tailwind svg[viewBox="0 0 32 32"]:has(path[d^="M18.6466"]) {
  background: url("/images/logo_red.png") center / contain no-repeat;
  width: 36px !important;
  min-width: 36px !important;
  height: 36px !important;
}
.tina-tailwind svg[viewBox="0 0 32 32"]:has(path[d^="M18.6466"]) path {
  opacity: 0;
}
.tina-tailwind svg[viewBox="0 0 1020 254"] {
  background: url("/dezinin_vert.svg") left center / contain no-repeat;
  width: 220px !important;
  min-width: 220px !important;
  height: 32px !important;
}
.tina-tailwind svg[viewBox="0 0 1020 254"] path {
  opacity: 0;
}
.tina-tailwind a[href*="tina.io"] {
  display: none !important;
}
.tina-tailwind img[alt*="Llama"] {
  content: url("/dezinin_vert.svg");
  width: 12rem !important;
  height: auto !important;
  object-fit: contain;
}
.tina-tailwind [data-section-locked="true"] {
  display: none !important;
}
.dezinin-section {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  flex: 1 0 100%;
  width: 100%;
  min-width: 0;
  box-sizing: border-box;
  margin: 1.85rem 0 0.15rem;
  padding: 0.35rem 0.15rem 0.75rem;
  border-bottom: 1px solid #2a2422;
  background: transparent;
  white-space: normal;
}
.dezinin-section:first-child {
  margin-top: 0.15rem;
}
.dezinin-section[data-shown="false"] {
  border-bottom-color: #221c1a;
}
.dezinin-section[data-edit-locked="true"] {
  border-bottom-color: #c43200;
}
.dezinin-section-copy {
  min-width: 0;
}
.dezinin-section-label {
  font-family: Montserrat, sans-serif;
  font-size: 0.8125rem;
  font-weight: 600;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: #f7f1ea;
  line-height: 1.2;
}
.dezinin-section[data-shown="false"] .dezinin-section-label {
  color: #6f6a67;
}
.dezinin-section-status {
  margin-top: 0.28rem;
  font-size: 0.75rem;
  line-height: 1.4;
  letter-spacing: 0.01em;
  color: #8b8988;
}
.dezinin-section-actions {
  display: flex;
  align-items: center;
  gap: 2px;
  flex: none;
}
.dezinin-icon-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  padding: 0;
  border: 0;
  border-radius: 0.7rem;
  background: transparent;
  color: #e4e2df;
  cursor: pointer;
  transition: background-color 0.3s var(--dezinin-ease), color 0.3s var(--dezinin-ease), transform 0.3s var(--dezinin-ease);
}
.dezinin-section[data-shown="false"] .dezinin-icon-btn {
  color: #6f6a67;
}
.dezinin-icon-btn:hover {
  background: #2a2422;
  color: #f7f1ea;
}
.dezinin-icon-btn:active {
  transform: scale(0.96);
}
.dezinin-icon-btn[data-hot="true"] {
  color: #fe4101;
}
.dezinin-icon-btn svg {
  display: block;
}
.dezinin-cards {
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.75rem;
  margin: 0.25rem 0 0.35rem;
}
@media (min-width: 760px) {
  .dezinin-cards {
    grid-template-columns: 1fr 1fr;
  }
}
.dezinin-card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1.25rem;
  min-height: 7.25rem;
  padding: 1rem 1.05rem 0.95rem;
  border: 1px solid #2a2422;
  border-radius: 0.95rem;
  background: #1a1614;
  color: #f7f1ea !important;
  text-decoration: none;
  transition: border-color 0.3s var(--dezinin-ease), background-color 0.3s var(--dezinin-ease), transform 0.3s var(--dezinin-ease);
}
.dezinin-card:hover {
  border-color: #5c5654;
  background: #221c1a;
  color: #f7f1ea !important;
}
.dezinin-card:active {
  transform: scale(0.98);
}
.dezinin-card strong {
  display: block;
  font-size: 1.05rem;
  font-weight: 600;
  letter-spacing: -0.03em;
  line-height: 1.2;
}
.dezinin-card span {
  display: block;
  margin-top: 0.35rem;
  font-size: 0.8125rem;
  line-height: 1.45;
  color: #a39e9b;
}
.dezinin-settings-label {
  margin: 1.35rem 0 0.15rem;
  font-size: 0.8125rem;
  font-weight: 600;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: #f7f1ea;
}
.tina-tailwind [data-cms-section] {
  box-sizing: border-box;
  margin-left: 0.2rem;
  padding-left: 0.95rem;
  border-left: 1px solid #3a3330;
}
.tina-tailwind [data-cms-pos="start"],
.tina-tailwind [data-cms-pos="only"] {
  margin-top: 0.85rem;
}
.tina-tailwind [data-cms-pos="end"],
.tina-tailwind [data-cms-pos="only"] {
  margin-bottom: 0.35rem;
  padding-bottom: 0.2rem;
}
.tina-tailwind [data-test^="list-"] > div {
  background: transparent !important;
  box-shadow: none !important;
}
.tina-tailwind [data-test^="list-"]:not([data-test="list-partners"]) [role="button"] {
  background: #1a1614 !important;
  border-color: #2a2422 !important;
  min-height: 3rem;
  transition: background-color 0.3s var(--dezinin-ease), border-color 0.3s var(--dezinin-ease);
}
.tina-tailwind [data-test^="list-"]:not([data-test="list-partners"]) [role="button"]:hover {
  background: #221c1a !important;
}
.tina-tailwind [data-test="list-partners"] > div > div > div {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 0.75rem;
  padding: 0.75rem;
  align-items: start;
}
.tina-tailwind [data-test="list-partners"] > div > div > div > [role="button"] {
  min-width: 0;
  width: auto;
  margin: 0;
  border-radius: 0.85rem;
  border: 1px solid #2a2422 !important;
  background: #161311 !important;
  display: grid !important;
  grid-template-columns: 2rem minmax(0, 1fr) 2rem;
  align-items: center;
  transition: border-color 0.3s var(--dezinin-ease), background-color 0.3s var(--dezinin-ease);
}
.tina-tailwind [data-test="list-partners"] > div > div > div > [role="button"]:hover {
  border-color: #5c5654 !important;
}
.tina-tailwind [data-test="list-partners"] > div > div > div > [role="button"] > :nth-child(2) {
  grid-column: 1 / -1;
  grid-row: 1;
  min-width: 0;
  width: auto;
  padding: 0.35rem 0.35rem 0.15rem;
}
.tina-tailwind [data-test="list-partners"] > div > div > div > [role="button"] > :nth-child(1) {
  grid-column: 1;
  grid-row: 2;
}
.tina-tailwind [data-test="list-partners"] > div > div > div > [role="button"] > :nth-child(3) {
  grid-column: 3;
  grid-row: 2;
}
.tina-tailwind [data-test="list-partners"] > div > div > div > [role="button"] > :nth-child(2) button {
  width: 100%;
  max-width: 100%;
}
.tina-tailwind [data-test="list-partners"] > div > div > div > [role="button"] .mb-5 {
  margin-bottom: 0;
}
.tina-tailwind [data-test="list-partners"] img {
  min-width: 0 !important;
  width: 100% !important;
  max-width: 100% !important;
  max-height: 5.5rem !important;
  height: auto !important;
  object-fit: contain;
}
.tina-tailwind [data-test="list-partners"] > div > div > div > .text-center {
  grid-column: 1 / -1;
}
`;


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

function markSections() {
  document.querySelectorAll<HTMLElement>("[data-cms-section]").forEach((node) => {
    node.removeAttribute("data-cms-section");
    node.removeAttribute("data-cms-pos");
  });
  document.querySelectorAll<HTMLElement>("[data-section-toggle]").forEach((toggle) => {
    const name = toggle.getAttribute("data-section-toggle") || "";
    const fields: HTMLElement[] = [];
    let sibling = fieldRow(toggle).nextElementSibling as HTMLElement | null;
    while (sibling) {
      if (isSectionBoundary(sibling)) break;
      if (sibling.childElementCount > 0 || (sibling.textContent || "").trim()) fields.push(sibling);
      sibling = sibling.nextElementSibling as HTMLElement | null;
    }
    fields.forEach((field, index) => {
      field.setAttribute("data-cms-section", name);
      const position = fields.length === 1 ? "only" : index === 0 ? "start" : index === fields.length - 1 ? "end" : "mid";
      field.setAttribute("data-cms-pos", position);
    });
  });
}

function markNav() {
  const match = window.location.hash.match(/#\/collections\/(?:edit\/)?([^/?#]+)/);
  const active = match?.[1] || "";
  document.querySelectorAll<HTMLAnchorElement>("a[href^='#/collections/']").forEach((link) => {
    const href = link.getAttribute("href") || "";
    const name = href.match(/#\/collections\/([^/?#]+)/)?.[1] || "";
    if (name && name === active) link.setAttribute("data-nav-active", "true");
    else link.removeAttribute("data-nav-active");
  });
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
  element.querySelectorAll("a").forEach((link) => {
    const label = link.textContent || "";
    if (/visual editing docs|latest releases/i.test(label)) (link as HTMLElement).style.display = "none";
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

const DASHBOARD = "#/collections/edit/site/global";
const MAIN_PAGE = "#/collections/edit/home/index";
const DESTINATIONS = [
  {
    href: "#/collections/edit/home/index",
    title: "Main page",
    text: "Hero, partners, projects, gallery, FAQ, and contact.",
  },
  {
    href: "#/collections/page/~",
    title: "Other pages",
    text: "Contact and Design Lab.",
  },
  {
    href: "#/screens/media_manager",
    title: "Media manager",
    text: "Images and video used on the site.",
  },
  {
    href: "#/collections/user/~",
    title: "Users",
    text: "Who can sign in to the editor.",
  },
];

function documentHash() {
  const hash = window.location.hash.split("?")[0];
  return hash.length > 1 ? hash.replace(/\/+$/, "") : hash;
}

function isHash(path: string) {
  const hash = documentHash();
  return hash === path || hash.startsWith(`${path}/`);
}

function activeFieldName(cms: EditorCms) {
  const forms = cms.state?.forms;
  const id = cms.state?.activeFormId;
  if (!forms || !id) return "";
  const match = forms.find((entry) => entry.tinaForm?.id === id);
  return match?.activeFieldName || "";
}

function isNested(cms: EditorCms) {
  if ((cms.state?.breadcrumbs?.length || 0) > 1) return true;
  return Boolean(activeFieldName(cms));
}

function openDashboard() {
  const hash = documentHash();
  const landings = new Set(["", "#", "#/", "#/collections/site", "#/collections/site/~"]);
  if (!landings.has(hash)) return;
  window.location.hash = DASHBOARD;
}

function cardGrid() {
  const block = document.createElement("div");
  block.setAttribute("data-dezinin-cards", "");
  const grid = document.createElement("div");
  grid.className = "dezinin-cards";
  for (const destination of DESTINATIONS) {
    const link = document.createElement("a");
    link.className = "dezinin-card";
    link.href = destination.href;
    const title = document.createElement("strong");
    title.textContent = destination.title;
    const text = document.createElement("span");
    text.textContent = destination.text;
    link.append(title, text);
    grid.append(link);
  }
  const label = document.createElement("div");
  label.className = "dezinin-settings-label";
  label.textContent = "Common settings";
  block.append(grid, label);
  return block;
}

function relabelDashboardLink() {
  document.querySelectorAll('a[href="#/collections/site/~"], a[href="/collections/site/~"]').forEach((link) => {
    const walker = document.createTreeWalker(link, NodeFilter.SHOW_TEXT);
    let node = walker.nextNode();
    while (node) {
      if (node.textContent?.trim() === "Common settings") node.textContent = "Dashboard";
      node = walker.nextNode();
    }
  });
}

function mountDashboard(cms: EditorCms) {
  relabelDashboardLink();
  const onDashboard = isHash(DASHBOARD);
  const nested = isNested(cms);
  document.querySelectorAll('nav[aria-label="breadcrumb"]').forEach((nav) => {
    const bar = nav.closest(".border-b");
    if (onDashboard && !nested) {
      nav.setAttribute("hidden", "");
      bar?.setAttribute("hidden", "");
    } else {
      nav.removeAttribute("hidden");
      bar?.removeAttribute("hidden");
    }
  });
  if (!onDashboard || nested) {
    document.querySelector("[data-dezinin-cards]")?.remove();
    return;
  }
  const host = document.querySelector('[data-test="form:content/site/global.json"] > div');
  if (!host || host.querySelector("[data-dezinin-cards]")) return;
  host.prepend(cardGrid());
}

type EditorCms = {
  dispatch?: (action: {
    type: "forms:set-active-field-name";
    value: { formId: string; fieldName: string };
  }) => void;
  state?: {
    activeFormId?: string | null;
    breadcrumbs?: Array<{ formId: string; formName: string }>;
    forms?: Array<{ tinaForm?: { id?: string }; activeFieldName?: string }>;
  };
};

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
  if (!button || !documentHash().startsWith("#/collections/")) return;
  // A page document returns to the pages list through Tina's own handler.
  if (documentHash().startsWith("#/collections/edit/page")) return;
  // Nested items such as an FAQ question keep the document hash and live in form state.
  event.preventDefault();
  event.stopPropagation();
  if (isHash(DASHBOARD) || isHash(MAIN_PAGE)) {
    if (isNested(cms)) {
      showMainPageFields(button, cms);
      return;
    }
    if (isHash(MAIN_PAGE)) window.location.hash = DASHBOARD;
    return;
  }
  window.location.hash = DASHBOARD;
}

export function installDezininBrand<T>(cms: T): T {
  if (typeof document === "undefined") return cms;
  const branded = window as Window & { __dezininBrand?: boolean };
  document.title = "DEZININ";
  const icon = document.querySelector<HTMLLinkElement>("link[rel='icon']") || document.createElement("link");
  icon.rel = "icon";
  icon.href = "/favicon.ico";
  if (!icon.parentElement) document.head.appendChild(icon);
  let style = document.getElementById("dezinin-admin");
  if (!style) {
    style = document.createElement("style");
    style.id = "dezinin-admin";
    document.head.appendChild(style);
  }
  style.textContent = ADMIN_CSS;
  if (branded.__dezininBrand) return cms;
  branded.__dezininBrand = true;
  const editor = cms as EditorCms;
  const paint = () => {
    openDashboard();
    rewriteTree(document.body);
    lockSections();
    markSections();
    markNav();
    mountDashboard(editor);
  };
  paint();
  const observer = new MutationObserver((records) => {
    let structural = false;
    for (const record of records) {
      if (record.type === "characterData") rewriteText(record.target as Text);
      if (record.addedNodes.length) {
        structural = true;
        record.addedNodes.forEach((node) => rewriteTree(node as ParentNode));
      }
    }
    lockSections();
    if (structural) {
      markSections();
      markNav();
      mountDashboard(editor);
    }
  });
  observer.observe(document.body, { subtree: true, childList: true, characterData: true });
  document.addEventListener("click", () => window.setTimeout(() => {
    lockSections();
    mountDashboard(editor);
  }, 0));
  document.addEventListener("click", (event) => keepSingletonBackInEditor(event, editor), true);
  repairPreviewHash();
  window.addEventListener("hashchange", () => {
    repairPreviewHash();
    openDashboard();
    markNav();
    mountDashboard(editor);
  });
  return cms;
}
