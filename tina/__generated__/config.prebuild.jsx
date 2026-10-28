// tina/config.ts
import { defineConfig, LocalAuthProvider } from "tinacms";
import { TinaUserCollection, UsernamePasswordAuthJSProvider } from "tinacms-authjs/dist/tinacms";

// tina/admin-brand.ts
var ADMIN_FONTS = '@font-face{font-family:Montserrat;font-style:italic;font-weight:400;font-display:swap;src:url(/vendor/media/b5e37d11b304fc7d-s.de3dacd9.woff2)format("woff2");unicode-range:U+460-52F,U+1C80-1C8A,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F}\n@font-face{font-family:Montserrat;font-style:italic;font-weight:400;font-display:swap;src:url(/vendor/media/178d5fd8ddb5ce59-s.83ef81a4.woff2)format("woff2");unicode-range:U+301,U+400-45F,U+490-491,U+4B0-4B1,U+2116}\n@font-face{font-family:Montserrat;font-style:italic;font-weight:400;font-display:swap;src:url(/vendor/media/45b63fe037c60d0d-s.d2ca58db.woff2)format("woff2");unicode-range:U+102-103,U+110-111,U+128-129,U+168-169,U+1A0-1A1,U+1AF-1B0,U+300-301,U+303-304,U+308-309,U+323,U+329,U+1EA0-1EF9,U+20AB}\n@font-face{font-family:Montserrat;font-style:italic;font-weight:400;font-display:swap;src:url(/vendor/media/f12c927eaf7b23c0-s.b6492805.woff2)format("woff2");unicode-range:U+100-2BA,U+2BD-2C5,U+2C7-2CC,U+2CE-2D7,U+2DD-2FF,U+304,U+308,U+329,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}\n@font-face{font-family:Montserrat;font-style:italic;font-weight:400;font-display:swap;src:url(/vendor/media/a3264cb69f626630-s.p.952f628b.woff2)format("woff2");unicode-range:U+0000-00FF,U+131,U+152-153,U+2BB-2BC,U+2C6,U+2DA,U+2DC,U+304,U+308,U+329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}\n@font-face{font-family:Montserrat;font-style:italic;font-weight:500;font-display:swap;src:url(/vendor/media/b5e37d11b304fc7d-s.de3dacd9.woff2)format("woff2");unicode-range:U+460-52F,U+1C80-1C8A,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F}\n@font-face{font-family:Montserrat;font-style:italic;font-weight:500;font-display:swap;src:url(/vendor/media/178d5fd8ddb5ce59-s.83ef81a4.woff2)format("woff2");unicode-range:U+301,U+400-45F,U+490-491,U+4B0-4B1,U+2116}\n@font-face{font-family:Montserrat;font-style:italic;font-weight:500;font-display:swap;src:url(/vendor/media/45b63fe037c60d0d-s.d2ca58db.woff2)format("woff2");unicode-range:U+102-103,U+110-111,U+128-129,U+168-169,U+1A0-1A1,U+1AF-1B0,U+300-301,U+303-304,U+308-309,U+323,U+329,U+1EA0-1EF9,U+20AB}\n@font-face{font-family:Montserrat;font-style:italic;font-weight:500;font-display:swap;src:url(/vendor/media/f12c927eaf7b23c0-s.b6492805.woff2)format("woff2");unicode-range:U+100-2BA,U+2BD-2C5,U+2C7-2CC,U+2CE-2D7,U+2DD-2FF,U+304,U+308,U+329,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}\n@font-face{font-family:Montserrat;font-style:italic;font-weight:500;font-display:swap;src:url(/vendor/media/a3264cb69f626630-s.p.952f628b.woff2)format("woff2");unicode-range:U+0000-00FF,U+131,U+152-153,U+2BB-2BC,U+2C6,U+2DA,U+2DC,U+304,U+308,U+329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}\n@font-face{font-family:Montserrat;font-style:italic;font-weight:600;font-display:swap;src:url(/vendor/media/b5e37d11b304fc7d-s.de3dacd9.woff2)format("woff2");unicode-range:U+460-52F,U+1C80-1C8A,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F}\n@font-face{font-family:Montserrat;font-style:italic;font-weight:600;font-display:swap;src:url(/vendor/media/178d5fd8ddb5ce59-s.83ef81a4.woff2)format("woff2");unicode-range:U+301,U+400-45F,U+490-491,U+4B0-4B1,U+2116}\n@font-face{font-family:Montserrat;font-style:italic;font-weight:600;font-display:swap;src:url(/vendor/media/45b63fe037c60d0d-s.d2ca58db.woff2)format("woff2");unicode-range:U+102-103,U+110-111,U+128-129,U+168-169,U+1A0-1A1,U+1AF-1B0,U+300-301,U+303-304,U+308-309,U+323,U+329,U+1EA0-1EF9,U+20AB}\n@font-face{font-family:Montserrat;font-style:italic;font-weight:600;font-display:swap;src:url(/vendor/media/f12c927eaf7b23c0-s.b6492805.woff2)format("woff2");unicode-range:U+100-2BA,U+2BD-2C5,U+2C7-2CC,U+2CE-2D7,U+2DD-2FF,U+304,U+308,U+329,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}\n@font-face{font-family:Montserrat;font-style:italic;font-weight:600;font-display:swap;src:url(/vendor/media/a3264cb69f626630-s.p.952f628b.woff2)format("woff2");unicode-range:U+0000-00FF,U+131,U+152-153,U+2BB-2BC,U+2C6,U+2DA,U+2DC,U+304,U+308,U+329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}\n@font-face{font-family:Montserrat;font-style:italic;font-weight:700;font-display:swap;src:url(/vendor/media/b5e37d11b304fc7d-s.de3dacd9.woff2)format("woff2");unicode-range:U+460-52F,U+1C80-1C8A,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F}\n@font-face{font-family:Montserrat;font-style:italic;font-weight:700;font-display:swap;src:url(/vendor/media/178d5fd8ddb5ce59-s.83ef81a4.woff2)format("woff2");unicode-range:U+301,U+400-45F,U+490-491,U+4B0-4B1,U+2116}\n@font-face{font-family:Montserrat;font-style:italic;font-weight:700;font-display:swap;src:url(/vendor/media/45b63fe037c60d0d-s.d2ca58db.woff2)format("woff2");unicode-range:U+102-103,U+110-111,U+128-129,U+168-169,U+1A0-1A1,U+1AF-1B0,U+300-301,U+303-304,U+308-309,U+323,U+329,U+1EA0-1EF9,U+20AB}\n@font-face{font-family:Montserrat;font-style:italic;font-weight:700;font-display:swap;src:url(/vendor/media/f12c927eaf7b23c0-s.b6492805.woff2)format("woff2");unicode-range:U+100-2BA,U+2BD-2C5,U+2C7-2CC,U+2CE-2D7,U+2DD-2FF,U+304,U+308,U+329,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}\n@font-face{font-family:Montserrat;font-style:italic;font-weight:700;font-display:swap;src:url(/vendor/media/a3264cb69f626630-s.p.952f628b.woff2)format("woff2");unicode-range:U+0000-00FF,U+131,U+152-153,U+2BB-2BC,U+2C6,U+2DA,U+2DC,U+304,U+308,U+329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}\n@font-face{font-family:Montserrat;font-style:normal;font-weight:400;font-display:swap;src:url(/vendor/media/8298327da6d5bcce-s.fb2d5852.woff2)format("woff2");unicode-range:U+460-52F,U+1C80-1C8A,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F}\n@font-face{font-family:Montserrat;font-style:normal;font-weight:400;font-display:swap;src:url(/vendor/media/44fac91e6f2d2b1b-s.0a39a854.woff2)format("woff2");unicode-range:U+301,U+400-45F,U+490-491,U+4B0-4B1,U+2116}\n@font-face{font-family:Montserrat;font-style:normal;font-weight:400;font-display:swap;src:url(/vendor/media/2b402d8aebffd579-s.ec7e94a5.woff2)format("woff2");unicode-range:U+102-103,U+110-111,U+128-129,U+168-169,U+1A0-1A1,U+1AF-1B0,U+300-301,U+303-304,U+308-309,U+323,U+329,U+1EA0-1EF9,U+20AB}\n@font-face{font-family:Montserrat;font-style:normal;font-weight:400;font-display:swap;src:url(/vendor/media/a88409fdd7dc121c-s.62b55a98.woff2)format("woff2");unicode-range:U+100-2BA,U+2BD-2C5,U+2C7-2CC,U+2CE-2D7,U+2DD-2FF,U+304,U+308,U+329,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}\n@font-face{font-family:Montserrat;font-style:normal;font-weight:400;font-display:swap;src:url(/vendor/media/e8f2fbee2754df70-s.p.9b7a96b4.woff2)format("woff2");unicode-range:U+0000-00FF,U+131,U+152-153,U+2BB-2BC,U+2C6,U+2DA,U+2DC,U+304,U+308,U+329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}\n@font-face{font-family:Montserrat;font-style:normal;font-weight:500;font-display:swap;src:url(/vendor/media/8298327da6d5bcce-s.fb2d5852.woff2)format("woff2");unicode-range:U+460-52F,U+1C80-1C8A,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F}\n@font-face{font-family:Montserrat;font-style:normal;font-weight:500;font-display:swap;src:url(/vendor/media/44fac91e6f2d2b1b-s.0a39a854.woff2)format("woff2");unicode-range:U+301,U+400-45F,U+490-491,U+4B0-4B1,U+2116}\n@font-face{font-family:Montserrat;font-style:normal;font-weight:500;font-display:swap;src:url(/vendor/media/2b402d8aebffd579-s.ec7e94a5.woff2)format("woff2");unicode-range:U+102-103,U+110-111,U+128-129,U+168-169,U+1A0-1A1,U+1AF-1B0,U+300-301,U+303-304,U+308-309,U+323,U+329,U+1EA0-1EF9,U+20AB}\n@font-face{font-family:Montserrat;font-style:normal;font-weight:500;font-display:swap;src:url(/vendor/media/a88409fdd7dc121c-s.62b55a98.woff2)format("woff2");unicode-range:U+100-2BA,U+2BD-2C5,U+2C7-2CC,U+2CE-2D7,U+2DD-2FF,U+304,U+308,U+329,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}\n@font-face{font-family:Montserrat;font-style:normal;font-weight:500;font-display:swap;src:url(/vendor/media/e8f2fbee2754df70-s.p.9b7a96b4.woff2)format("woff2");unicode-range:U+0000-00FF,U+131,U+152-153,U+2BB-2BC,U+2C6,U+2DA,U+2DC,U+304,U+308,U+329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}\n@font-face{font-family:Montserrat;font-style:normal;font-weight:600;font-display:swap;src:url(/vendor/media/8298327da6d5bcce-s.fb2d5852.woff2)format("woff2");unicode-range:U+460-52F,U+1C80-1C8A,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F}\n@font-face{font-family:Montserrat;font-style:normal;font-weight:600;font-display:swap;src:url(/vendor/media/44fac91e6f2d2b1b-s.0a39a854.woff2)format("woff2");unicode-range:U+301,U+400-45F,U+490-491,U+4B0-4B1,U+2116}\n@font-face{font-family:Montserrat;font-style:normal;font-weight:600;font-display:swap;src:url(/vendor/media/2b402d8aebffd579-s.ec7e94a5.woff2)format("woff2");unicode-range:U+102-103,U+110-111,U+128-129,U+168-169,U+1A0-1A1,U+1AF-1B0,U+300-301,U+303-304,U+308-309,U+323,U+329,U+1EA0-1EF9,U+20AB}\n@font-face{font-family:Montserrat;font-style:normal;font-weight:600;font-display:swap;src:url(/vendor/media/a88409fdd7dc121c-s.62b55a98.woff2)format("woff2");unicode-range:U+100-2BA,U+2BD-2C5,U+2C7-2CC,U+2CE-2D7,U+2DD-2FF,U+304,U+308,U+329,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}\n@font-face{font-family:Montserrat;font-style:normal;font-weight:600;font-display:swap;src:url(/vendor/media/e8f2fbee2754df70-s.p.9b7a96b4.woff2)format("woff2");unicode-range:U+0000-00FF,U+131,U+152-153,U+2BB-2BC,U+2C6,U+2DA,U+2DC,U+304,U+308,U+329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}\n@font-face{font-family:Montserrat;font-style:normal;font-weight:700;font-display:swap;src:url(/vendor/media/8298327da6d5bcce-s.fb2d5852.woff2)format("woff2");unicode-range:U+460-52F,U+1C80-1C8A,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F}\n@font-face{font-family:Montserrat;font-style:normal;font-weight:700;font-display:swap;src:url(/vendor/media/44fac91e6f2d2b1b-s.0a39a854.woff2)format("woff2");unicode-range:U+301,U+400-45F,U+490-491,U+4B0-4B1,U+2116}\n@font-face{font-family:Montserrat;font-style:normal;font-weight:700;font-display:swap;src:url(/vendor/media/2b402d8aebffd579-s.ec7e94a5.woff2)format("woff2");unicode-range:U+102-103,U+110-111,U+128-129,U+168-169,U+1A0-1A1,U+1AF-1B0,U+300-301,U+303-304,U+308-309,U+323,U+329,U+1EA0-1EF9,U+20AB}\n@font-face{font-family:Montserrat;font-style:normal;font-weight:700;font-display:swap;src:url(/vendor/media/a88409fdd7dc121c-s.62b55a98.woff2)format("woff2");unicode-range:U+100-2BA,U+2BD-2C5,U+2C7-2CC,U+2CE-2D7,U+2DD-2FF,U+304,U+308,U+329,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}\n@font-face{font-family:Montserrat;font-style:normal;font-weight:700;font-display:swap;src:url(/vendor/media/e8f2fbee2754df70-s.p.9b7a96b4.woff2)format("woff2");unicode-range:U+0000-00FF,U+131,U+152-153,U+2BB-2BC,U+2C6,U+2DA,U+2DC,U+304,U+308,U+329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}\n@font-face{font-family:Roboto Slab;font-style:normal;font-weight:300;font-display:swap;src:url(/vendor/media/8856956fa550053e-s.aa7ab40d.woff2)format("woff2");unicode-range:U+460-52F,U+1C80-1C8A,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F}\n@font-face{font-family:Roboto Slab;font-style:normal;font-weight:300;font-display:swap;src:url(/vendor/media/fe9e8dd4a2ad4385-s.4ceec0fb.woff2)format("woff2");unicode-range:U+301,U+400-45F,U+490-491,U+4B0-4B1,U+2116}\n@font-face{font-family:Roboto Slab;font-style:normal;font-weight:300;font-display:swap;src:url(/vendor/media/c492570a33c2511a-s.f486836d.woff2)format("woff2");unicode-range:U+1F??}\n@font-face{font-family:Roboto Slab;font-style:normal;font-weight:300;font-display:swap;src:url(/vendor/media/2e31362fa3cbeb8b-s.54409f46.woff2)format("woff2");unicode-range:U+370-377,U+37A-37F,U+384-38A,U+38C,U+38E-3A1,U+3A3-3FF}\n@font-face{font-family:Roboto Slab;font-style:normal;font-weight:300;font-display:swap;src:url(/vendor/media/bd177ace3eee3014-s.02644e92.woff2)format("woff2");unicode-range:U+102-103,U+110-111,U+128-129,U+168-169,U+1A0-1A1,U+1AF-1B0,U+300-301,U+303-304,U+308-309,U+323,U+329,U+1EA0-1EF9,U+20AB}\n@font-face{font-family:Roboto Slab;font-style:normal;font-weight:300;font-display:swap;src:url(/vendor/media/da2446ec5f26383f-s.c0fe6b67.woff2)format("woff2");unicode-range:U+100-2BA,U+2BD-2C5,U+2C7-2CC,U+2CE-2D7,U+2DD-2FF,U+304,U+308,U+329,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}\n@font-face{font-family:Roboto Slab;font-style:normal;font-weight:300;font-display:swap;src:url(/vendor/media/5cf8828ea9d4dda3-s.p.e51369d5.woff2)format("woff2");unicode-range:U+0000-00FF,U+131,U+152-153,U+2BB-2BC,U+2C6,U+2DA,U+2DC,U+304,U+308,U+329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}\n@font-face{font-family:Roboto Slab;font-style:normal;font-weight:400;font-display:swap;src:url(/vendor/media/8856956fa550053e-s.aa7ab40d.woff2)format("woff2");unicode-range:U+460-52F,U+1C80-1C8A,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F}\n@font-face{font-family:Roboto Slab;font-style:normal;font-weight:400;font-display:swap;src:url(/vendor/media/fe9e8dd4a2ad4385-s.4ceec0fb.woff2)format("woff2");unicode-range:U+301,U+400-45F,U+490-491,U+4B0-4B1,U+2116}\n@font-face{font-family:Roboto Slab;font-style:normal;font-weight:400;font-display:swap;src:url(/vendor/media/c492570a33c2511a-s.f486836d.woff2)format("woff2");unicode-range:U+1F??}\n@font-face{font-family:Roboto Slab;font-style:normal;font-weight:400;font-display:swap;src:url(/vendor/media/2e31362fa3cbeb8b-s.54409f46.woff2)format("woff2");unicode-range:U+370-377,U+37A-37F,U+384-38A,U+38C,U+38E-3A1,U+3A3-3FF}\n@font-face{font-family:Roboto Slab;font-style:normal;font-weight:400;font-display:swap;src:url(/vendor/media/bd177ace3eee3014-s.02644e92.woff2)format("woff2");unicode-range:U+102-103,U+110-111,U+128-129,U+168-169,U+1A0-1A1,U+1AF-1B0,U+300-301,U+303-304,U+308-309,U+323,U+329,U+1EA0-1EF9,U+20AB}\n@font-face{font-family:Roboto Slab;font-style:normal;font-weight:400;font-display:swap;src:url(/vendor/media/da2446ec5f26383f-s.c0fe6b67.woff2)format("woff2");unicode-range:U+100-2BA,U+2BD-2C5,U+2C7-2CC,U+2CE-2D7,U+2DD-2FF,U+304,U+308,U+329,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}\n@font-face{font-family:Roboto Slab;font-style:normal;font-weight:400;font-display:swap;src:url(/vendor/media/5cf8828ea9d4dda3-s.p.e51369d5.woff2)format("woff2");unicode-range:U+0000-00FF,U+131,U+152-153,U+2BB-2BC,U+2C6,U+2DA,U+2DC,U+304,U+308,U+329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}\n@font-face{font-family:Roboto Slab;font-style:normal;font-weight:500;font-display:swap;src:url(/vendor/media/8856956fa550053e-s.aa7ab40d.woff2)format("woff2");unicode-range:U+460-52F,U+1C80-1C8A,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F}\n@font-face{font-family:Roboto Slab;font-style:normal;font-weight:500;font-display:swap;src:url(/vendor/media/fe9e8dd4a2ad4385-s.4ceec0fb.woff2)format("woff2");unicode-range:U+301,U+400-45F,U+490-491,U+4B0-4B1,U+2116}\n@font-face{font-family:Roboto Slab;font-style:normal;font-weight:500;font-display:swap;src:url(/vendor/media/c492570a33c2511a-s.f486836d.woff2)format("woff2");unicode-range:U+1F??}\n@font-face{font-family:Roboto Slab;font-style:normal;font-weight:500;font-display:swap;src:url(/vendor/media/2e31362fa3cbeb8b-s.54409f46.woff2)format("woff2");unicode-range:U+370-377,U+37A-37F,U+384-38A,U+38C,U+38E-3A1,U+3A3-3FF}\n@font-face{font-family:Roboto Slab;font-style:normal;font-weight:500;font-display:swap;src:url(/vendor/media/bd177ace3eee3014-s.02644e92.woff2)format("woff2");unicode-range:U+102-103,U+110-111,U+128-129,U+168-169,U+1A0-1A1,U+1AF-1B0,U+300-301,U+303-304,U+308-309,U+323,U+329,U+1EA0-1EF9,U+20AB}\n@font-face{font-family:Roboto Slab;font-style:normal;font-weight:500;font-display:swap;src:url(/vendor/media/da2446ec5f26383f-s.c0fe6b67.woff2)format("woff2");unicode-range:U+100-2BA,U+2BD-2C5,U+2C7-2CC,U+2CE-2D7,U+2DD-2FF,U+304,U+308,U+329,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}\n@font-face{font-family:Roboto Slab;font-style:normal;font-weight:500;font-display:swap;src:url(/vendor/media/5cf8828ea9d4dda3-s.p.e51369d5.woff2)format("woff2");unicode-range:U+0000-00FF,U+131,U+152-153,U+2BB-2BC,U+2C6,U+2DA,U+2DC,U+304,U+308,U+329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}\n@font-face{font-family:Roboto Slab;font-style:normal;font-weight:600;font-display:swap;src:url(/vendor/media/8856956fa550053e-s.aa7ab40d.woff2)format("woff2");unicode-range:U+460-52F,U+1C80-1C8A,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F}\n@font-face{font-family:Roboto Slab;font-style:normal;font-weight:600;font-display:swap;src:url(/vendor/media/fe9e8dd4a2ad4385-s.4ceec0fb.woff2)format("woff2");unicode-range:U+301,U+400-45F,U+490-491,U+4B0-4B1,U+2116}\n@font-face{font-family:Roboto Slab;font-style:normal;font-weight:600;font-display:swap;src:url(/vendor/media/c492570a33c2511a-s.f486836d.woff2)format("woff2");unicode-range:U+1F??}\n@font-face{font-family:Roboto Slab;font-style:normal;font-weight:600;font-display:swap;src:url(/vendor/media/2e31362fa3cbeb8b-s.54409f46.woff2)format("woff2");unicode-range:U+370-377,U+37A-37F,U+384-38A,U+38C,U+38E-3A1,U+3A3-3FF}\n@font-face{font-family:Roboto Slab;font-style:normal;font-weight:600;font-display:swap;src:url(/vendor/media/bd177ace3eee3014-s.02644e92.woff2)format("woff2");unicode-range:U+102-103,U+110-111,U+128-129,U+168-169,U+1A0-1A1,U+1AF-1B0,U+300-301,U+303-304,U+308-309,U+323,U+329,U+1EA0-1EF9,U+20AB}\n@font-face{font-family:Roboto Slab;font-style:normal;font-weight:600;font-display:swap;src:url(/vendor/media/da2446ec5f26383f-s.c0fe6b67.woff2)format("woff2");unicode-range:U+100-2BA,U+2BD-2C5,U+2C7-2CC,U+2CE-2D7,U+2DD-2FF,U+304,U+308,U+329,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}\n@font-face{font-family:Roboto Slab;font-style:normal;font-weight:600;font-display:swap;src:url(/vendor/media/5cf8828ea9d4dda3-s.p.e51369d5.woff2)format("woff2");unicode-range:U+0000-00FF,U+131,U+152-153,U+2BB-2BC,U+2C6,U+2DA,U+2DC,U+304,U+308,U+329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}\n@font-face{font-family:Roboto Slab;font-style:normal;font-weight:700;font-display:swap;src:url(/vendor/media/8856956fa550053e-s.aa7ab40d.woff2)format("woff2");unicode-range:U+460-52F,U+1C80-1C8A,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F}\n@font-face{font-family:Roboto Slab;font-style:normal;font-weight:700;font-display:swap;src:url(/vendor/media/fe9e8dd4a2ad4385-s.4ceec0fb.woff2)format("woff2");unicode-range:U+301,U+400-45F,U+490-491,U+4B0-4B1,U+2116}\n@font-face{font-family:Roboto Slab;font-style:normal;font-weight:700;font-display:swap;src:url(/vendor/media/c492570a33c2511a-s.f486836d.woff2)format("woff2");unicode-range:U+1F??}\n@font-face{font-family:Roboto Slab;font-style:normal;font-weight:700;font-display:swap;src:url(/vendor/media/2e31362fa3cbeb8b-s.54409f46.woff2)format("woff2");unicode-range:U+370-377,U+37A-37F,U+384-38A,U+38C,U+38E-3A1,U+3A3-3FF}\n@font-face{font-family:Roboto Slab;font-style:normal;font-weight:700;font-display:swap;src:url(/vendor/media/bd177ace3eee3014-s.02644e92.woff2)format("woff2");unicode-range:U+102-103,U+110-111,U+128-129,U+168-169,U+1A0-1A1,U+1AF-1B0,U+300-301,U+303-304,U+308-309,U+323,U+329,U+1EA0-1EF9,U+20AB}\n@font-face{font-family:Roboto Slab;font-style:normal;font-weight:700;font-display:swap;src:url(/vendor/media/da2446ec5f26383f-s.c0fe6b67.woff2)format("woff2");unicode-range:U+100-2BA,U+2BD-2C5,U+2C7-2CC,U+2CE-2D7,U+2DD-2FF,U+304,U+308,U+329,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}\n@font-face{font-family:Roboto Slab;font-style:normal;font-weight:700;font-display:swap;src:url(/vendor/media/5cf8828ea9d4dda3-s.p.e51369d5.woff2)format("woff2");unicode-range:U+0000-00FF,U+131,U+152-153,U+2BB-2BC,U+2C6,U+2DA,U+2DC,U+304,U+308,U+329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}';
var ADMIN_CSS = ADMIN_FONTS + `
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
  --dezinin-nav-width: 240px;
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
.tina-tailwind select.dezinin-category-select {
  width: 100%;
  cursor: pointer;
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
}
#dezinin-mail {
  flex: 1 1 auto;
  width: 100%;
  height: 100%;
  min-height: 0;
  border: 0;
  background: #120f0e;
}
.tina-tailwind .flex.items-stretch.h-dvh > .relative.z-30.w-96 {
  display: flex !important;
  width: var(--dezinin-nav-width) !important;
  min-width: var(--dezinin-nav-width) !important;
  max-width: var(--dezinin-nav-width) !important;
  flex: 0 0 var(--dezinin-nav-width) !important;
  height: 100dvh !important;
  background: #1a1513 !important;
  border-right: 1px solid #2a2422 !important;
  color: #f7f1ea !important;
}
.tina-tailwind .flex.items-stretch.h-dvh > .relative.z-30.w-96 h4 {
  color: #8b8988 !important;
}
.tina-tailwind .flex.items-stretch.h-dvh > .w-full {
  flex: 1 1 auto !important;
  width: auto !important;
  min-width: 0 !important;
}
.tina-tailwind .z-overlay,
.tina-tailwind .z-menu,
.tina-tailwind button[aria-label="Open navigation menu"],
.tina-tailwind button[aria-label="Toggle navigation menu"],
.tina-tailwind .relative.z-30.w-96 .justify-between > button {
  display: none !important;
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
.tina-tailwind .relative.z-30.w-96 svg[viewBox="0 0 1020 254"] {
  width: 188px !important;
  min-width: 0 !important;
}
.tina-tailwind .flex.items-stretch.h-dvh > .w-full svg[viewBox="0 0 32 32"]:has(path[d^="M18.6466"]) {
  display: none !important;
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
  position: relative;
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
.dezinin-icon-btn::after {
  content: attr(data-tooltip);
  position: absolute;
  right: 0;
  bottom: calc(100% + 8px);
  padding: 0.32rem 0.5rem;
  border-radius: 0.45rem;
  background: #2a2422;
  color: #f7f1ea;
  font-family: Montserrat, sans-serif;
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: 0.01em;
  line-height: 1.2;
  white-space: nowrap;
  pointer-events: none;
  opacity: 0;
  visibility: hidden;
  z-index: 5;
  transition: opacity 0.15s var(--dezinin-ease), visibility 0.15s var(--dezinin-ease);
}
.dezinin-icon-btn:hover::after,
.dezinin-icon-btn:focus-visible::after {
  opacity: 1;
  visibility: visible;
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
.dezinin-settings-label {
  margin: 0.15rem 0 0.85rem;
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
.tina-tailwind div.relative.w-full.max-w-full.flex.justify-start.items-start.gap-3 > button.flex-shrink.min-w-0:has(img) {
  position: relative;
}
.tina-tailwind div.relative.w-full.max-w-full.flex.justify-start.items-start.gap-3 > button.icon-parent.rounded-full {
  display: none !important;
}
.tina-tailwind .dezinin-image-actions {
  position: absolute;
  inset: 0;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
  border-radius: inherit;
  background: rgba(18, 15, 14, 0.55);
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  transition: opacity 0.2s var(--dezinin-ease), visibility 0.2s var(--dezinin-ease);
}
.tina-tailwind div.relative.w-full.max-w-full.flex.justify-start.items-start.gap-3 > button.flex-shrink.min-w-0:hover .dezinin-image-actions,
.tina-tailwind div.relative.w-full.max-w-full.flex.justify-start.items-start.gap-3 > button.flex-shrink.min-w-0:focus-within .dezinin-image-actions {
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
}
.tina-tailwind .dezinin-image-action {
  width: 2.25rem;
  height: 2.25rem;
  border-radius: 999px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: #1a1614;
  color: #f7f1ea;
  border: 1px solid rgba(247, 241, 234, 0.22);
  box-shadow: 0 8px 20px rgba(18, 15, 14, 0.35);
  cursor: pointer;
  font-family: Montserrat, sans-serif;
  transition: background-color 0.2s var(--dezinin-ease), transform 0.2s var(--dezinin-ease);
}
.tina-tailwind .dezinin-image-action:hover,
.tina-tailwind .dezinin-image-action:focus-visible {
  background: #fe4101;
  color: #fff;
  outline: 2px solid #fe4101;
  outline-offset: 2px;
}
.tina-tailwind .dezinin-image-action:active {
  transform: scale(0.98);
}
`;
var PHRASES = [
  ["Let\u2019s get you editing with TinaCMS!", "Sign in to DEZININ"],
  ["Let's get you editing with TinaCMS!", "Sign in to DEZININ"],
  ["TinaCMS form fields will appear here.", "Choose a section to start editing."],
  ["TinaCMS form fields ", "Choose a section to start editing."],
  ["will appear here.", ""],
  ["Read the TinaCloud troubleshooting guide", ""],
  ["Learn more about moving to production with TinaCloud.", ""],
  ["TinaCloud", "DEZININ"],
  ["TinaCMS", "DEZININ"]
];
function rewriteText(node) {
  if (!node || node.nodeType !== Node.TEXT_NODE) return;
  const text = node;
  const parent = text.parentElement;
  if (!parent || parent.closest("input, textarea, [contenteditable='true']")) return;
  let next = text.nodeValue || "";
  if (/llama|🦙/i.test(next)) next = "Opening DEZININ";
  for (const [from, to] of PHRASES) next = next.split(from).join(to);
  if (next !== text.nodeValue) text.nodeValue = next;
}
function fieldRow(toggle) {
  let node = toggle;
  while (node.parentElement) {
    const parent = node.parentElement;
    if (parent.querySelectorAll("[data-section-toggle]").length > 1) return node;
    if (parent.getAttribute("data-test")?.startsWith("form:")) return node;
    node = parent;
  }
  return node;
}
function isSectionBoundary(node) {
  return node.matches("[data-section-toggle]") || Boolean(node.querySelector("[data-section-toggle]"));
}
function markSections() {
  document.querySelectorAll("[data-cms-section]").forEach((node) => {
    node.removeAttribute("data-cms-section");
    node.removeAttribute("data-cms-pos");
  });
  document.querySelectorAll("[data-section-toggle]").forEach((toggle) => {
    const name = toggle.getAttribute("data-section-toggle") || "";
    const fields = [];
    let sibling = fieldRow(toggle).nextElementSibling;
    while (sibling) {
      if (isSectionBoundary(sibling)) break;
      if (sibling.childElementCount > 0 || (sibling.textContent || "").trim()) fields.push(sibling);
      sibling = sibling.nextElementSibling;
    }
    fields.forEach((field, index) => {
      field.setAttribute("data-cms-section", name);
      const position = fields.length === 1 ? "only" : index === 0 ? "start" : index === fields.length - 1 ? "end" : "mid";
      field.setAttribute("data-cms-pos", position);
    });
  });
}
var MAIL = "#/mail";
var MAIL_KEY = "dezinin-mail";
var retainMail = false;
function mailMode() {
  try {
    return sessionStorage.getItem(MAIL_KEY) === "1";
  } catch {
    return false;
  }
}
function setMailMode(open) {
  try {
    if (open) sessionStorage.setItem(MAIL_KEY, "1");
    else sessionStorage.removeItem(MAIL_KEY);
  } catch {
  }
}
function repairMailRoute() {
  if (documentHash() !== MAIL) return false;
  retainMail = true;
  setMailMode(true);
  window.location.hash = DASHBOARD;
  window.setTimeout(() => {
    retainMail = false;
  }, 0);
  return true;
}
function markNav() {
  const match = window.location.hash.match(/#\/collections\/(?:edit\/)?([^/?#]+)/);
  const active = match?.[1] || "";
  const onMail = mailMode();
  document.querySelectorAll("a[href^='#/collections/']").forEach((link) => {
    const href = link.getAttribute("href") || "";
    const name = href.match(/#\/collections\/([^/?#]+)/)?.[1] || "";
    if (!onMail && name && name === active) link.setAttribute("data-nav-active", "true");
    else link.removeAttribute("data-nav-active");
  });
  document.querySelectorAll('a[href="#/mail"]').forEach((link) => {
    if (onMail) link.setAttribute("data-nav-active", "true");
    else link.removeAttribute("data-nav-active");
  });
}
function envelopeIcon(sample) {
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("viewBox", "0 0 24 24");
  svg.setAttribute("width", sample?.getAttribute("width") || "20");
  svg.setAttribute("height", sample?.getAttribute("height") || "20");
  svg.setAttribute("fill", "none");
  svg.setAttribute("stroke", "currentColor");
  svg.setAttribute("stroke-width", sample?.getAttribute("stroke-width") || "2");
  svg.setAttribute("stroke-linecap", "round");
  svg.setAttribute("stroke-linejoin", "round");
  svg.setAttribute("aria-hidden", "true");
  const sampleClass = sample?.getAttribute("class");
  if (sampleClass) svg.setAttribute("class", sampleClass);
  const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
  rect.setAttribute("width", "20");
  rect.setAttribute("height", "16");
  rect.setAttribute("x", "2");
  rect.setAttribute("y", "4");
  rect.setAttribute("rx", "2");
  const flap = document.createElementNS("http://www.w3.org/2000/svg", "path");
  flap.setAttribute("d", "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7");
  svg.append(rect, flap);
  return svg;
}
function mountMailLink() {
  const list = document.querySelector("ul.flex.flex-col.gap-4");
  if (!list) return;
  const sample = list.querySelector("a");
  if (!sample) return;
  const existing = list.querySelector('a[href="#/mail"]');
  if (existing instanceof HTMLAnchorElement) {
    if (!existing.querySelector("svg")) existing.prepend(envelopeIcon(sample.querySelector("svg")));
    return;
  }
  const link = sample.cloneNode(true);
  link.href = "#/mail";
  link.removeAttribute("data-nav-active");
  const icon = link.querySelector("svg");
  const envelope = envelopeIcon(icon);
  if (icon) icon.replaceWith(envelope);
  else link.prepend(envelope);
  const texts = [];
  const walker = document.createTreeWalker(link, NodeFilter.SHOW_TEXT);
  while (walker.nextNode()) texts.push(walker.currentNode);
  texts.forEach((node, index) => {
    node.textContent = index === texts.length - 1 ? "Mail" : "";
  });
  if (!texts.length) link.append("Mail");
  const item = document.createElement("li");
  item.appendChild(link);
  list.appendChild(item);
}
function mountMail() {
  const main = document.querySelector(".flex.items-stretch.h-dvh > .w-full");
  if (!main) return;
  const onMail = mailMode();
  if (!onMail) {
    document.getElementById("dezinin-mail")?.remove();
    if (main.dataset.dezininMailHost === "true") {
      delete main.dataset.dezininMailHost;
      main.style.display = "";
      main.style.flexDirection = "";
      main.style.minHeight = "";
    }
    main.querySelectorAll("[data-dezinin-mail-hidden]").forEach((node) => {
      node.style.display = "";
      node.removeAttribute("data-dezinin-mail-hidden");
    });
    return;
  }
  main.dataset.dezininMailHost = "true";
  main.style.display = "flex";
  main.style.flexDirection = "column";
  main.style.minHeight = "100%";
  Array.from(main.children).forEach((child) => {
    if (child.id === "dezinin-mail") return;
    const node = child;
    node.setAttribute("data-dezinin-mail-hidden", "true");
    node.style.display = "none";
  });
  if (!document.getElementById("dezinin-mail")) {
    const frame = document.createElement("iframe");
    frame.id = "dezinin-mail";
    frame.title = "Mail";
    frame.src = "/editor/mail";
    main.appendChild(frame);
  }
}
function lockSections() {
  document.querySelectorAll("[data-section-toggle][data-section-locked]").forEach((toggle) => {
    toggle.removeAttribute("data-section-locked");
    toggle.removeAttribute("inert");
  });
  document.querySelectorAll("[data-section-toggle]").forEach((toggle) => {
    const hidden = toggle.getAttribute("aria-checked") === "false" || toggle.getAttribute("data-edit-locked") === "true";
    let sibling = fieldRow(toggle).nextElementSibling;
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
      sibling = sibling.nextElementSibling;
    }
  });
}
function rewriteTree(root) {
  if (!root) return;
  if (root.nodeType === Node.TEXT_NODE) {
    rewriteText(root);
    return;
  }
  if (root.nodeType !== Node.ELEMENT_NODE) return;
  const element = root;
  if (element.closest("input, textarea")) return;
  const walker = document.createTreeWalker(element, NodeFilter.SHOW_TEXT);
  const nodes = [];
  while (walker.nextNode()) nodes.push(walker.currentNode);
  nodes.forEach(rewriteText);
  element.querySelectorAll("span").forEach((span) => {
    if (/^DEZININ v\d/.test(span.textContent || "")) span.style.display = "none";
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
    if (/visual editing docs|latest releases/i.test(label)) link.style.display = "none";
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
var DASHBOARD = "#/collections/edit/site/global";
var MAIN_PAGE = "#/collections/edit/home/index";
var NAV_WIDTH = 240;
function documentHash() {
  const hash = window.location.hash.split("?")[0];
  return hash.length > 1 ? hash.replace(/\/+$/, "") : hash;
}
function isHash(path) {
  const hash = documentHash();
  return hash === path || hash.startsWith(`${path}/`);
}
function activeFieldName(cms) {
  const forms = cms.state?.forms;
  const id = cms.state?.activeFormId;
  if (!forms || !id) return "";
  const match = forms.find((entry) => entry.tinaForm?.id === id);
  return match?.activeFieldName || "";
}
function isNested(cms) {
  if ((cms.state?.breadcrumbs?.length || 0) > 1) return true;
  return Boolean(activeFieldName(cms));
}
function openDashboard() {
  const hash = documentHash();
  const landings = /* @__PURE__ */ new Set(["", "#", "#/", "#/collections/site", "#/collections/site/~"]);
  if (!landings.has(hash)) return;
  window.location.hash = DASHBOARD;
}
function pinNavigation() {
  document.documentElement.style.setProperty("--dezinin-nav-width", `${NAV_WIDTH}px`);
}
function onMailNavigation(event) {
  if (!(event.target instanceof Element)) return;
  const mailLink = event.target.closest('a[href="#/mail"]');
  if (mailLink) {
    event.preventDefault();
    event.stopPropagation();
    setMailMode(true);
    if (!document.querySelector(".flex.items-stretch.h-dvh > .w-full")) {
      retainMail = true;
      window.location.hash = DASHBOARD;
      window.setTimeout(() => {
        retainMail = false;
      }, 0);
      return;
    }
    markNav();
    mountMail();
    return;
  }
  const link = event.target.closest("a[href]");
  if (!(link instanceof HTMLAnchorElement) || !mailMode()) return;
  const href = link.getAttribute("href") || "";
  if (!href.includes("#/")) return;
  setMailMode(false);
  markNav();
  mountMail();
}
function keepNavigationOpen(event) {
  if (!(event.target instanceof Element) || event.isTrusted === false) return;
  const toggle = event.target.closest(
    'button[aria-label="Open navigation menu"], button[aria-label="Toggle navigation menu"]'
  );
  if (toggle) {
    event.preventDefault();
    event.stopPropagation();
    return;
  }
  const nav = event.target.closest(".z-overlay");
  if (!nav) return;
  if (event.target.closest(".justify-between button")) {
    event.preventDefault();
    event.stopPropagation();
    return;
  }
  const anchor = event.target.closest("a[href]");
  if (!(anchor instanceof HTMLAnchorElement)) return;
  const href = anchor.getAttribute("href") || "";
  const hashIndex = href.indexOf("#");
  if (hashIndex < 0) return;
  event.preventDefault();
  event.stopPropagation();
  const next = href.slice(hashIndex);
  if (window.location.hash !== next) window.location.hash = next;
}
function relabelDashboardLink() {
  document.querySelectorAll('a[href$="#/collections/site/~"]').forEach((link) => {
    const walker = document.createTreeWalker(link, NodeFilter.SHOW_TEXT);
    let node = walker.nextNode();
    while (node) {
      const label = node.textContent?.trim();
      if (label === "Common settings" || label === "Dashboard") node.textContent = "Basic settings";
      node = walker.nextNode();
    }
  });
}
function mountDashboard(cms) {
  relabelDashboardLink();
  pinNavigation();
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
    document.querySelector("[data-dezinin-settings]")?.remove();
    return;
  }
  const host = document.querySelector('[data-test="form:content/site/global.json"] > div');
  if (!host || host.querySelector("[data-dezinin-settings]")) return;
  const label = document.createElement("div");
  label.className = "dezinin-settings-label";
  label.setAttribute("data-dezinin-settings", "");
  label.textContent = "Common settings";
  host.prepend(label);
}
function showMainPageFields(button, cms) {
  const root = cms.state?.breadcrumbs?.[0];
  const formId = root?.formId || cms.state?.activeFormId;
  if (cms.dispatch && formId) {
    cms.dispatch({
      type: "forms:set-active-field-name",
      value: { formId, fieldName: "" }
    });
    return;
  }
  button.closest("nav")?.querySelector("button:not([aria-label^='Back to'])")?.click();
}
function keepSingletonBackInEditor(event, cms) {
  const target = event.target;
  if (!(target instanceof Element)) return;
  const button = target.closest("button[aria-label^='Back to']");
  if (!button || !documentHash().startsWith("#/collections/")) return;
  if (documentHash().startsWith("#/collections/edit/page")) return;
  if (documentHash().startsWith("#/collections/edit/newsletter")) return;
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
var IMAGE_PREVIEW_ROW = "div.relative.w-full.max-w-full.flex.justify-start.items-start.gap-3";
function imageActionIcon(kind) {
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("viewBox", "0 0 24 24");
  svg.setAttribute("width", "18");
  svg.setAttribute("height", "18");
  svg.setAttribute("fill", "none");
  svg.setAttribute("aria-hidden", "true");
  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path.setAttribute("stroke", "currentColor");
  path.setAttribute("stroke-width", "1.75");
  path.setAttribute("stroke-linecap", "round");
  path.setAttribute("stroke-linejoin", "round");
  path.setAttribute(
    "d",
    kind === "delete" ? "M5 7h14M9.5 7V5.5A1.5 1.5 0 0 1 11 4h2a1.5 1.5 0 0 1 1.5 1.5V7M7 7l.8 12.2A1.5 1.5 0 0 0 9.3 20.6h5.4a1.5 1.5 0 0 0 1.5-1.4L16.9 7" : "M12 16V5.5M12 5.5 7.5 10M12 5.5 16.5 10M5 16.5V18a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-1.5"
  );
  svg.appendChild(path);
  return svg;
}
function imageAction(kind, label) {
  const control = document.createElement("span");
  control.className = "dezinin-image-action";
  control.dataset.dezininImageAction = kind;
  control.setAttribute("role", "button");
  control.tabIndex = 0;
  control.setAttribute("aria-label", label);
  control.appendChild(imageActionIcon(kind));
  return control;
}
function imageClearButton(preview) {
  const sibling = preview.parentElement?.querySelector(":scope > button.icon-parent.rounded-full");
  if (sibling) return sibling;
  return preview.closest('[aria-roledescription="sortable"]')?.querySelector(":scope > button") ?? null;
}
function mountImageActions() {
  document.querySelectorAll(IMAGE_PREVIEW_ROW).forEach((row) => {
    const preview = row.querySelector(":scope > button.flex-shrink.min-w-0");
    const image = preview?.querySelector("img");
    const existing = preview?.querySelector("[data-dezinin-image-actions]");
    if (!preview || !image?.getAttribute("src") || !imageClearButton(preview)) {
      existing?.remove();
      return;
    }
    if (existing) return;
    const actions = document.createElement("span");
    actions.className = "dezinin-image-actions";
    actions.dataset.dezininImageActions = "";
    actions.append(imageAction("delete", "Remove image"), imageAction("upload", "Upload image"));
    preview.appendChild(actions);
  });
}
function onImageActionClick(event) {
  const target = event.target;
  if (!(target instanceof Element)) return;
  const action = target.closest("[data-dezinin-image-action]");
  if (!action) return;
  const preview = action.closest("button");
  if (!(preview instanceof HTMLButtonElement)) return;
  event.preventDefault();
  event.stopPropagation();
  const kind = action.dataset.dezininImageAction;
  if (kind === "delete") {
    imageClearButton(preview)?.click();
    return;
  }
  if (kind === "upload") preview.click();
}
function onImageActionKeydown(event) {
  if (event.key !== "Enter" && event.key !== " ") return;
  const target = event.target;
  if (!(target instanceof Element)) return;
  const action = target.closest("[data-dezinin-image-action]");
  if (!action) return;
  event.preventDefault();
  event.stopPropagation();
  action.dispatchEvent(new MouseEvent("click", { bubbles: true, cancelable: true }));
}
function installDezininBrand(cms) {
  if (typeof document === "undefined") return cms;
  const branded = window;
  document.title = "DEZININ";
  const icon = document.querySelector("link[rel='icon']") || document.createElement("link");
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
  const editor = cms;
  const paint = () => {
    if (repairMailRoute()) return;
    openDashboard();
    rewriteTree(document.body);
    lockSections();
    markSections();
    markNav();
    mountMailLink();
    mountMail();
    mountDashboard(editor);
    mountImageActions();
  };
  paint();
  const observer = new MutationObserver((records) => {
    let structural = false;
    for (const record of records) {
      if (record.type === "characterData") rewriteText(record.target);
      if (record.addedNodes.length) {
        structural = true;
        record.addedNodes.forEach((node) => rewriteTree(node));
      }
    }
    lockSections();
    if (structural) {
      markSections();
      markNav();
      mountMailLink();
      mountMail();
      mountDashboard(editor);
      mountImageActions();
    }
  });
  observer.observe(document.body, { subtree: true, childList: true, characterData: true });
  document.addEventListener("click", () => window.setTimeout(() => {
    lockSections();
    mountDashboard(editor);
  }, 0));
  document.addEventListener("click", (event) => keepSingletonBackInEditor(event, editor), true);
  document.addEventListener("click", onMailNavigation, true);
  document.addEventListener("click", keepNavigationOpen, true);
  document.addEventListener("click", onImageActionClick, true);
  document.addEventListener("keydown", onImageActionKeydown, true);
  repairPreviewHash();
  window.addEventListener("hashchange", (event) => {
    repairPreviewHash();
    if (repairMailRoute()) return;
    const previous = new URL(event.oldURL).hash.replace(/\?.*$/, "").replace(/\/+$/, "");
    const next = new URL(event.newURL).hash.replace(/\?.*$/, "").replace(/\/+$/, "");
    if (!retainMail && previous !== next) setMailMode(false);
    openDashboard();
    markNav();
    mountMailLink();
    mountMail();
    mountDashboard(editor);
  });
  window.setTimeout(paint, 50);
  return cms;
}

// tina/media-store.ts
import { upload } from "@vercel/blob/client";
function safeName(name) {
  const base = name.split(/[/\\]/).pop() || "file";
  const cleaned = base.replace(/[^A-Za-z0-9._-]+/g, "-").replace(/^[-.]+/, "");
  return cleaned.slice(0, 120) || "file";
}
function mediaItem(filename, src, directory) {
  return {
    type: "file",
    id: src,
    filename,
    directory,
    src,
    thumbnails: {
      "75x75": src,
      "400x400": src,
      "1000x1000": src
    }
  };
}
var DezininMediaStore = class {
  constructor() {
    this.accept = "image/*,video/mp4,video/webm,video/quicktime,application/pdf";
  }
  async persist(files) {
    const saved = [];
    for (const entry of files) {
      const filename = safeName(entry.file.name);
      const blob = await upload(`media/${filename}`, entry.file, {
        access: "public",
        handleUploadUrl: "/api/media",
        multipart: entry.file.size > 8 * 1024 * 1024
      });
      saved.push(mediaItem(filename, blob.url, entry.directory || ""));
    }
    return saved;
  }
  async list(options = {}) {
    const params = new URLSearchParams();
    if (options.directory) params.set("directory", options.directory);
    if (options.offset) params.set("offset", String(options.offset));
    if (options.limit) params.set("limit", String(options.limit));
    if (options.search) params.set("search", options.search);
    if (options.ext?.length) params.set("ext", options.ext.join(","));
    const response = await fetch(`/api/media?${params}`);
    if (response.status === 401) throw new Error("You don't have access to this resource.");
    if (!response.ok) throw new Error("Could not load media.");
    return response.json();
  }
  async delete(media) {
    const response = await fetch("/api/media", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ src: media.src })
    });
    if (!response.ok) {
      const body = await response.json().catch(() => null);
      throw new Error(body?.error || "Could not delete the file.");
    }
  }
};

// tina/category-select.tsx
import React from "react";
function readPath(values, path) {
  let cursor = values;
  for (const key of path) {
    if (cursor == null || typeof cursor !== "object") return void 0;
    cursor = cursor[key];
  }
  return cursor;
}
function filterOptions(values) {
  const filters = values?.filters;
  if (!Array.isArray(filters)) return [];
  const seen = /* @__PURE__ */ new Set();
  const options = [];
  for (const item of filters) {
    if (typeof item !== "string") continue;
    const label = item.trim();
    if (!label || label.toUpperCase() === "ALL" || seen.has(label)) continue;
    seen.add(label);
    options.push(label);
  }
  return options;
}
function chosenElsewhere(values, name, current) {
  const parts = name.split(".");
  const index = Number(parts.pop());
  const list = readPath(values, parts);
  if (!Array.isArray(list) || Number.isNaN(index)) return /* @__PURE__ */ new Set();
  return new Set(
    list.filter((item, itemIndex) => typeof item === "string" && item !== "" && itemIndex !== index && item !== current)
  );
}
function CategorySelect({ input, form }) {
  const [options, setOptions] = React.useState([]);
  const [taken, setTaken] = React.useState(/* @__PURE__ */ new Set());
  const current = typeof input.value === "string" ? input.value : "";
  React.useEffect(() => {
    if (!form) return;
    const read = (values) => {
      setOptions(filterOptions(values));
      setTaken(chosenElsewhere(values, input.name, current));
    };
    read(form.getState().values);
    return form.subscribe((state) => read(state.values), { values: true });
  }, [form, input.name, current]);
  const choices = current && !options.includes(current) ? [current, ...options] : options;
  return React.createElement(
    "select",
    {
      className: "dezinin-category-select",
      value: current,
      "aria-label": "Category",
      onChange: (event) => input.onChange(event.target.value)
    },
    React.createElement("option", { value: "" }, "Choose a category"),
    choices.map((option) => React.createElement("option", { key: option, value: option, disabled: taken.has(option) }, option))
  );
}

// tina/section-toggle.tsx
import React2 from "react";
function EyeIcon({ shown }) {
  return React2.createElement("svg", { width: "22", height: "22", viewBox: "0 0 24 24", fill: "none", "aria-hidden": "true" }, React2.createElement("path", { d: "M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z", stroke: "currentColor", strokeWidth: "1.75", strokeLinejoin: "round" }), React2.createElement("circle", { cx: "12", cy: "12", r: "3", stroke: "currentColor", strokeWidth: "1.75" }), shown ? null : React2.createElement("path", { d: "M5 19 19 5", stroke: "currentColor", strokeWidth: "1.75", strokeLinecap: "round" }));
}
function LockIcon() {
  return React2.createElement("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", "aria-hidden": "true" }, React2.createElement("rect", { x: "5", y: "11", width: "14", height: "10", rx: "2", stroke: "currentColor", strokeWidth: "1.75" }), React2.createElement("path", { d: "M8 11V8a4 4 0 0 1 8 0v3", stroke: "currentColor", strokeWidth: "1.75", strokeLinecap: "round" }));
}
function UnlockIcon() {
  return React2.createElement("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", "aria-hidden": "true" }, React2.createElement("rect", { x: "5", y: "11", width: "14", height: "10", rx: "2", stroke: "currentColor", strokeWidth: "1.75" }), React2.createElement("path", { d: "M8 11V8a4 4 0 0 1 7.4-2", stroke: "currentColor", strokeWidth: "1.75", strokeLinecap: "round" }));
}
function SectionToggle({ input, field, form }) {
  const shown = input.value !== false;
  const lockName = field.name.replace(/^show/, "lock");
  const label = typeof field.label === "string" ? field.label : field.name;
  const [locked, setLocked] = React2.useState(false);
  React2.useEffect(() => {
    if (!form) return;
    const read = (values) => values?.[lockName] === true;
    setLocked(read(form.getState().values));
    const unregister = form.registerField?.(lockName, () => {
    }, { value: true });
    const unsubscribe = form.subscribe((state) => setLocked(read(state.values)), { values: true });
    return () => {
      unsubscribe();
      unregister?.();
    };
  }, [form, lockName]);
  const status = locked && !shown ? "Hidden and locked" : locked ? "Locked" : shown ? "Visible on the site" : "Hidden on the site";
  return React2.createElement(
    "div",
    {
      className: "dezinin-section",
      "data-section-toggle": field.name,
      "data-edit-locked": locked ? "true" : "false",
      "data-shown": shown ? "true" : "false",
      "aria-checked": shown ? "true" : "false"
    },
    React2.createElement("div", { className: "dezinin-section-copy" }, React2.createElement("div", { className: "dezinin-section-label" }, label), React2.createElement("div", { className: "dezinin-section-status" }, status)),
    React2.createElement("div", { className: "dezinin-section-actions" }, React2.createElement(
      "button",
      {
        type: "button",
        className: "dezinin-icon-btn",
        role: "switch",
        "aria-checked": shown,
        "aria-label": `${label} visibility`,
        "data-tooltip": shown ? "Shown" : "Hidden",
        onClick: () => input.onChange(!shown)
      },
      React2.createElement(EyeIcon, { shown })
    ), React2.createElement(
      "button",
      {
        type: "button",
        className: "dezinin-icon-btn",
        "data-hot": locked ? "true" : "false",
        "aria-pressed": locked,
        "aria-label": locked ? `${label} locked` : `${label} unlocked`,
        "data-tooltip": locked ? "Locked" : "Unlocked",
        onClick: () => {
          const next = !locked;
          setLocked(next);
          form?.change(lockName, next);
        }
      },
      locked ? React2.createElement(LockIcon, null) : React2.createElement(UnlockIcon, null)
    ))
  );
}

// tina/config.ts
var sectionToggle = (name, label) => [
  {
    type: "boolean",
    name,
    label,
    ui: { component: SectionToggle }
  },
  {
    type: "boolean",
    name: name.replace(/^show/, "lock"),
    label: `${label} locked`,
    ui: { component: null }
  }
];
var branch = process.env.NEXT_PUBLIC_TINA_BRANCH || process.env.GITHUB_BRANCH || process.env.VERCEL_GIT_COMMIT_REF || process.env.HEAD || "main";
var isLocal = process.env.TINA_PUBLIC_IS_LOCAL === "true";
var slugify = (value) => value.toLowerCase().replace(/['’]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
var config_default = defineConfig({
  branch,
  contentApiUrlOverride: "/api/tina/gql",
  cmsCallback: installDezininBrand,
  authProvider: isLocal ? new LocalAuthProvider() : new UsernamePasswordAuthJSProvider(),
  build: {
    outputFolder: "admin",
    publicFolder: "public"
  },
  media: isLocal ? {
    tina: {
      mediaRoot: "",
      publicFolder: "public"
    }
  } : {
    loadCustomStore: async () => DezininMediaStore
  },
  schema: {
    collections: [
      TinaUserCollection,
      {
        name: "site",
        label: "Common settings",
        path: "content/site",
        format: "json",
        ui: {
          allowedActions: { create: false, delete: false }
        },
        fields: [
          { type: "string", name: "metaTitle", label: "Meta title", required: true },
          { type: "string", name: "metaDescription", label: "Meta description", ui: { component: "textarea" } },
          { type: "image", name: "logo", label: "Logo" },
          { type: "image", name: "logoCompact", label: "Compact logo" },
          {
            type: "object",
            name: "navLinks",
            label: "Center navigation",
            list: true,
            ui: { itemProps: (item) => ({ label: item?.label }) },
            fields: [
              { type: "string", name: "label", label: "Label", required: true },
              { type: "string", name: "href", label: "Link", required: true }
            ]
          },
          { type: "string", name: "ctaLabel", label: "Header button label" },
          { type: "string", name: "ctaHref", label: "Header button link" },
          { type: "string", name: "footerBlurb", label: "Footer description", ui: { component: "textarea" } },
          {
            type: "object",
            name: "footerColumns",
            label: "Footer columns",
            list: true,
            ui: { itemProps: (item) => ({ label: item?.title }) },
            fields: [
              { type: "string", name: "title", label: "Title" },
              {
                type: "object",
                name: "links",
                label: "Links",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.label }) },
                fields: [
                  { type: "string", name: "label", label: "Label" },
                  { type: "string", name: "href", label: "Link" }
                ]
              }
            ]
          },
          {
            type: "object",
            name: "socials",
            label: "Social links",
            list: true,
            ui: { itemProps: (item) => ({ label: item?.label }) },
            fields: [
              { type: "string", name: "label", label: "Label" },
              { type: "string", name: "href", label: "Link" },
              {
                type: "string",
                name: "icon",
                label: "Icon",
                options: ["tiktok", "instagram", "facebook", "youtube", "linkedin"]
              }
            ]
          },
          { type: "string", name: "copyright", label: "Copyright" }
        ]
      },
      {
        name: "home",
        label: "Main page",
        path: "content/home",
        format: "json",
        ui: {
          allowedActions: { create: false, delete: false }
        },
        fields: [
          ...sectionToggle("showHero", "Hero"),
          { type: "image", name: "heroVideo", label: "Hero video" },
          ...sectionToggle("showLookbook", "Lookbook"),
          {
            type: "object",
            name: "headlines",
            label: "Moodboard headlines",
            list: true,
            ui: { itemProps: (item) => ({ label: item?.title }) },
            fields: [
              { type: "string", name: "title", label: "Title", required: true },
              { type: "string", name: "subtitle", label: "Subtitle" }
            ]
          },
          ...sectionToggle("showPartners", "Partners"),
          { type: "string", name: "experienceTitle", label: "Experience heading" },
          { type: "image", name: "partners", label: "Partner logos", list: true },
          ...sectionToggle("showProjects", "Projects"),
          { type: "string", name: "filters", label: "Project filters", list: true },
          {
            type: "object",
            name: "projects",
            label: "Projects",
            list: true,
            ui: { itemProps: (item) => ({ label: item?.title }) },
            fields: [
              { type: "string", name: "number", label: "Number" },
              { type: "string", name: "title", label: "Title", required: true },
              {
                type: "string",
                name: "categories",
                label: "Categories",
                list: true,
                ui: { field: { component: CategorySelect } }
              },
              { type: "image", name: "image", label: "Image" },
              { type: "string", name: "summary", label: "Summary", ui: { component: "textarea" } }
            ]
          },
          ...sectionToggle("showGallery", "Gallery"),
          { type: "string", name: "galleryTitle", label: "Gallery heading" },
          {
            type: "object",
            name: "videos",
            label: "Gallery videos",
            list: true,
            ui: { itemProps: (item) => ({ label: item?.title }) },
            fields: [
              {
                type: "string",
                name: "youtubeId",
                label: "YouTube link",
                description: "Paste a full YouTube link. A video id still works.",
                required: true
              },
              { type: "string", name: "title", label: "Title" }
            ]
          },
          ...sectionToggle("showFaq", "FAQ"),
          { type: "string", name: "faqTitle", label: "FAQ heading" },
          {
            type: "object",
            name: "faqs",
            label: "FAQs",
            list: true,
            ui: { itemProps: (item) => ({ label: item?.question }) },
            fields: [
              { type: "string", name: "question", label: "Question", required: true },
              { type: "string", name: "answer", label: "Answer", ui: { component: "textarea" }, required: true }
            ]
          },
          ...sectionToggle("showContact", "Contact"),
          {
            type: "object",
            name: "contact",
            label: "Contact",
            fields: [
              { type: "string", name: "kicker", label: "Kicker" },
              { type: "string", name: "heading", label: "Heading" },
              { type: "string", name: "email", label: "Email" },
              { type: "string", name: "formTitle", label: "Form title" },
              { type: "string", name: "interestLabel", label: "Interest label" },
              { type: "string", name: "interests", label: "Interests", list: true },
              { type: "string", name: "submitLabel", label: "Submit label" },
              { type: "string", name: "namePlaceholder", label: "Name placeholder" },
              { type: "string", name: "companyPlaceholder", label: "Company placeholder" },
              { type: "string", name: "emailPlaceholder", label: "Email placeholder" },
              { type: "string", name: "phonePlaceholder", label: "Phone placeholder" },
              { type: "string", name: "messagePlaceholder", label: "Message placeholder" }
            ]
          }
        ]
      },
      {
        name: "newsletter",
        label: "Moodboard",
        path: "content/newsletters",
        format: "json",
        ui: {
          router: ({ document: document2 }) => `/newsletters/${document2._sys.filename}`,
          filename: {
            slugify: (values) => slugify(values?.title || "newsletter")
          }
        },
        fields: [
          { type: "string", name: "title", label: "Title", isTitle: true, required: true },
          { type: "number", name: "order", label: "Order" },
          { type: "image", name: "cover", label: "Cover" },
          { type: "image", name: "pdf", label: "PDF" },
          { type: "string", name: "summary", label: "Summary", ui: { component: "textarea" } }
        ]
      },
      {
        name: "page",
        label: "Other pages",
        path: "content/pages",
        format: "json",
        ui: {
          router: ({ document: document2 }) => `/${document2._sys.filename}`
        },
        fields: [
          { type: "string", name: "kicker", label: "Kicker" },
          { type: "string", name: "title", label: "Title", isTitle: true, required: true },
          { type: "string", name: "body", label: "Body", ui: { component: "textarea" } },
          { type: "image", name: "image", label: "Background image" },
          { type: "string", name: "primaryCtaLabel", label: "Primary button" },
          { type: "string", name: "primaryCtaHref", label: "Primary link" },
          { type: "string", name: "secondaryCtaLabel", label: "Secondary button" },
          { type: "string", name: "secondaryCtaHref", label: "Secondary link" }
        ]
      }
    ]
  }
});
export {
  config_default as default
};
