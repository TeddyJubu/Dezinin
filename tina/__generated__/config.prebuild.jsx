// tina/config.ts
import { defineConfig, LocalAuthProvider } from "tinacms";
import { TinaUserCollection, UsernamePasswordAuthJSProvider } from "tinacms-authjs/dist/tinacms";

// tina/admin-brand.ts
var ADMIN_CSS = '@font-face{font-family:Montserrat;font-style:italic;font-weight:400;font-display:swap;src:url(/vendor/media/b5e37d11b304fc7d-s.de3dacd9.woff2)format("woff2");unicode-range:U+460-52F,U+1C80-1C8A,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F}\n@font-face{font-family:Montserrat;font-style:italic;font-weight:400;font-display:swap;src:url(/vendor/media/178d5fd8ddb5ce59-s.83ef81a4.woff2)format("woff2");unicode-range:U+301,U+400-45F,U+490-491,U+4B0-4B1,U+2116}\n@font-face{font-family:Montserrat;font-style:italic;font-weight:400;font-display:swap;src:url(/vendor/media/45b63fe037c60d0d-s.d2ca58db.woff2)format("woff2");unicode-range:U+102-103,U+110-111,U+128-129,U+168-169,U+1A0-1A1,U+1AF-1B0,U+300-301,U+303-304,U+308-309,U+323,U+329,U+1EA0-1EF9,U+20AB}\n@font-face{font-family:Montserrat;font-style:italic;font-weight:400;font-display:swap;src:url(/vendor/media/f12c927eaf7b23c0-s.b6492805.woff2)format("woff2");unicode-range:U+100-2BA,U+2BD-2C5,U+2C7-2CC,U+2CE-2D7,U+2DD-2FF,U+304,U+308,U+329,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}\n@font-face{font-family:Montserrat;font-style:italic;font-weight:400;font-display:swap;src:url(/vendor/media/a3264cb69f626630-s.p.952f628b.woff2)format("woff2");unicode-range:U+0000-00FF,U+131,U+152-153,U+2BB-2BC,U+2C6,U+2DA,U+2DC,U+304,U+308,U+329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}\n@font-face{font-family:Montserrat;font-style:italic;font-weight:500;font-display:swap;src:url(/vendor/media/b5e37d11b304fc7d-s.de3dacd9.woff2)format("woff2");unicode-range:U+460-52F,U+1C80-1C8A,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F}\n@font-face{font-family:Montserrat;font-style:italic;font-weight:500;font-display:swap;src:url(/vendor/media/178d5fd8ddb5ce59-s.83ef81a4.woff2)format("woff2");unicode-range:U+301,U+400-45F,U+490-491,U+4B0-4B1,U+2116}\n@font-face{font-family:Montserrat;font-style:italic;font-weight:500;font-display:swap;src:url(/vendor/media/45b63fe037c60d0d-s.d2ca58db.woff2)format("woff2");unicode-range:U+102-103,U+110-111,U+128-129,U+168-169,U+1A0-1A1,U+1AF-1B0,U+300-301,U+303-304,U+308-309,U+323,U+329,U+1EA0-1EF9,U+20AB}\n@font-face{font-family:Montserrat;font-style:italic;font-weight:500;font-display:swap;src:url(/vendor/media/f12c927eaf7b23c0-s.b6492805.woff2)format("woff2");unicode-range:U+100-2BA,U+2BD-2C5,U+2C7-2CC,U+2CE-2D7,U+2DD-2FF,U+304,U+308,U+329,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}\n@font-face{font-family:Montserrat;font-style:italic;font-weight:500;font-display:swap;src:url(/vendor/media/a3264cb69f626630-s.p.952f628b.woff2)format("woff2");unicode-range:U+0000-00FF,U+131,U+152-153,U+2BB-2BC,U+2C6,U+2DA,U+2DC,U+304,U+308,U+329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}\n@font-face{font-family:Montserrat;font-style:italic;font-weight:600;font-display:swap;src:url(/vendor/media/b5e37d11b304fc7d-s.de3dacd9.woff2)format("woff2");unicode-range:U+460-52F,U+1C80-1C8A,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F}\n@font-face{font-family:Montserrat;font-style:italic;font-weight:600;font-display:swap;src:url(/vendor/media/178d5fd8ddb5ce59-s.83ef81a4.woff2)format("woff2");unicode-range:U+301,U+400-45F,U+490-491,U+4B0-4B1,U+2116}\n@font-face{font-family:Montserrat;font-style:italic;font-weight:600;font-display:swap;src:url(/vendor/media/45b63fe037c60d0d-s.d2ca58db.woff2)format("woff2");unicode-range:U+102-103,U+110-111,U+128-129,U+168-169,U+1A0-1A1,U+1AF-1B0,U+300-301,U+303-304,U+308-309,U+323,U+329,U+1EA0-1EF9,U+20AB}\n@font-face{font-family:Montserrat;font-style:italic;font-weight:600;font-display:swap;src:url(/vendor/media/f12c927eaf7b23c0-s.b6492805.woff2)format("woff2");unicode-range:U+100-2BA,U+2BD-2C5,U+2C7-2CC,U+2CE-2D7,U+2DD-2FF,U+304,U+308,U+329,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}\n@font-face{font-family:Montserrat;font-style:italic;font-weight:600;font-display:swap;src:url(/vendor/media/a3264cb69f626630-s.p.952f628b.woff2)format("woff2");unicode-range:U+0000-00FF,U+131,U+152-153,U+2BB-2BC,U+2C6,U+2DA,U+2DC,U+304,U+308,U+329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}\n@font-face{font-family:Montserrat;font-style:italic;font-weight:700;font-display:swap;src:url(/vendor/media/b5e37d11b304fc7d-s.de3dacd9.woff2)format("woff2");unicode-range:U+460-52F,U+1C80-1C8A,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F}\n@font-face{font-family:Montserrat;font-style:italic;font-weight:700;font-display:swap;src:url(/vendor/media/178d5fd8ddb5ce59-s.83ef81a4.woff2)format("woff2");unicode-range:U+301,U+400-45F,U+490-491,U+4B0-4B1,U+2116}\n@font-face{font-family:Montserrat;font-style:italic;font-weight:700;font-display:swap;src:url(/vendor/media/45b63fe037c60d0d-s.d2ca58db.woff2)format("woff2");unicode-range:U+102-103,U+110-111,U+128-129,U+168-169,U+1A0-1A1,U+1AF-1B0,U+300-301,U+303-304,U+308-309,U+323,U+329,U+1EA0-1EF9,U+20AB}\n@font-face{font-family:Montserrat;font-style:italic;font-weight:700;font-display:swap;src:url(/vendor/media/f12c927eaf7b23c0-s.b6492805.woff2)format("woff2");unicode-range:U+100-2BA,U+2BD-2C5,U+2C7-2CC,U+2CE-2D7,U+2DD-2FF,U+304,U+308,U+329,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}\n@font-face{font-family:Montserrat;font-style:italic;font-weight:700;font-display:swap;src:url(/vendor/media/a3264cb69f626630-s.p.952f628b.woff2)format("woff2");unicode-range:U+0000-00FF,U+131,U+152-153,U+2BB-2BC,U+2C6,U+2DA,U+2DC,U+304,U+308,U+329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}\n@font-face{font-family:Montserrat;font-style:normal;font-weight:400;font-display:swap;src:url(/vendor/media/8298327da6d5bcce-s.fb2d5852.woff2)format("woff2");unicode-range:U+460-52F,U+1C80-1C8A,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F}\n@font-face{font-family:Montserrat;font-style:normal;font-weight:400;font-display:swap;src:url(/vendor/media/44fac91e6f2d2b1b-s.0a39a854.woff2)format("woff2");unicode-range:U+301,U+400-45F,U+490-491,U+4B0-4B1,U+2116}\n@font-face{font-family:Montserrat;font-style:normal;font-weight:400;font-display:swap;src:url(/vendor/media/2b402d8aebffd579-s.ec7e94a5.woff2)format("woff2");unicode-range:U+102-103,U+110-111,U+128-129,U+168-169,U+1A0-1A1,U+1AF-1B0,U+300-301,U+303-304,U+308-309,U+323,U+329,U+1EA0-1EF9,U+20AB}\n@font-face{font-family:Montserrat;font-style:normal;font-weight:400;font-display:swap;src:url(/vendor/media/a88409fdd7dc121c-s.62b55a98.woff2)format("woff2");unicode-range:U+100-2BA,U+2BD-2C5,U+2C7-2CC,U+2CE-2D7,U+2DD-2FF,U+304,U+308,U+329,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}\n@font-face{font-family:Montserrat;font-style:normal;font-weight:400;font-display:swap;src:url(/vendor/media/e8f2fbee2754df70-s.p.9b7a96b4.woff2)format("woff2");unicode-range:U+0000-00FF,U+131,U+152-153,U+2BB-2BC,U+2C6,U+2DA,U+2DC,U+304,U+308,U+329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}\n@font-face{font-family:Montserrat;font-style:normal;font-weight:500;font-display:swap;src:url(/vendor/media/8298327da6d5bcce-s.fb2d5852.woff2)format("woff2");unicode-range:U+460-52F,U+1C80-1C8A,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F}\n@font-face{font-family:Montserrat;font-style:normal;font-weight:500;font-display:swap;src:url(/vendor/media/44fac91e6f2d2b1b-s.0a39a854.woff2)format("woff2");unicode-range:U+301,U+400-45F,U+490-491,U+4B0-4B1,U+2116}\n@font-face{font-family:Montserrat;font-style:normal;font-weight:500;font-display:swap;src:url(/vendor/media/2b402d8aebffd579-s.ec7e94a5.woff2)format("woff2");unicode-range:U+102-103,U+110-111,U+128-129,U+168-169,U+1A0-1A1,U+1AF-1B0,U+300-301,U+303-304,U+308-309,U+323,U+329,U+1EA0-1EF9,U+20AB}\n@font-face{font-family:Montserrat;font-style:normal;font-weight:500;font-display:swap;src:url(/vendor/media/a88409fdd7dc121c-s.62b55a98.woff2)format("woff2");unicode-range:U+100-2BA,U+2BD-2C5,U+2C7-2CC,U+2CE-2D7,U+2DD-2FF,U+304,U+308,U+329,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}\n@font-face{font-family:Montserrat;font-style:normal;font-weight:500;font-display:swap;src:url(/vendor/media/e8f2fbee2754df70-s.p.9b7a96b4.woff2)format("woff2");unicode-range:U+0000-00FF,U+131,U+152-153,U+2BB-2BC,U+2C6,U+2DA,U+2DC,U+304,U+308,U+329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}\n@font-face{font-family:Montserrat;font-style:normal;font-weight:600;font-display:swap;src:url(/vendor/media/8298327da6d5bcce-s.fb2d5852.woff2)format("woff2");unicode-range:U+460-52F,U+1C80-1C8A,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F}\n@font-face{font-family:Montserrat;font-style:normal;font-weight:600;font-display:swap;src:url(/vendor/media/44fac91e6f2d2b1b-s.0a39a854.woff2)format("woff2");unicode-range:U+301,U+400-45F,U+490-491,U+4B0-4B1,U+2116}\n@font-face{font-family:Montserrat;font-style:normal;font-weight:600;font-display:swap;src:url(/vendor/media/2b402d8aebffd579-s.ec7e94a5.woff2)format("woff2");unicode-range:U+102-103,U+110-111,U+128-129,U+168-169,U+1A0-1A1,U+1AF-1B0,U+300-301,U+303-304,U+308-309,U+323,U+329,U+1EA0-1EF9,U+20AB}\n@font-face{font-family:Montserrat;font-style:normal;font-weight:600;font-display:swap;src:url(/vendor/media/a88409fdd7dc121c-s.62b55a98.woff2)format("woff2");unicode-range:U+100-2BA,U+2BD-2C5,U+2C7-2CC,U+2CE-2D7,U+2DD-2FF,U+304,U+308,U+329,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}\n@font-face{font-family:Montserrat;font-style:normal;font-weight:600;font-display:swap;src:url(/vendor/media/e8f2fbee2754df70-s.p.9b7a96b4.woff2)format("woff2");unicode-range:U+0000-00FF,U+131,U+152-153,U+2BB-2BC,U+2C6,U+2DA,U+2DC,U+304,U+308,U+329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}\n@font-face{font-family:Montserrat;font-style:normal;font-weight:700;font-display:swap;src:url(/vendor/media/8298327da6d5bcce-s.fb2d5852.woff2)format("woff2");unicode-range:U+460-52F,U+1C80-1C8A,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F}\n@font-face{font-family:Montserrat;font-style:normal;font-weight:700;font-display:swap;src:url(/vendor/media/44fac91e6f2d2b1b-s.0a39a854.woff2)format("woff2");unicode-range:U+301,U+400-45F,U+490-491,U+4B0-4B1,U+2116}\n@font-face{font-family:Montserrat;font-style:normal;font-weight:700;font-display:swap;src:url(/vendor/media/2b402d8aebffd579-s.ec7e94a5.woff2)format("woff2");unicode-range:U+102-103,U+110-111,U+128-129,U+168-169,U+1A0-1A1,U+1AF-1B0,U+300-301,U+303-304,U+308-309,U+323,U+329,U+1EA0-1EF9,U+20AB}\n@font-face{font-family:Montserrat;font-style:normal;font-weight:700;font-display:swap;src:url(/vendor/media/a88409fdd7dc121c-s.62b55a98.woff2)format("woff2");unicode-range:U+100-2BA,U+2BD-2C5,U+2C7-2CC,U+2CE-2D7,U+2DD-2FF,U+304,U+308,U+329,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}\n@font-face{font-family:Montserrat;font-style:normal;font-weight:700;font-display:swap;src:url(/vendor/media/e8f2fbee2754df70-s.p.9b7a96b4.woff2)format("woff2");unicode-range:U+0000-00FF,U+131,U+152-153,U+2BB-2BC,U+2C6,U+2DA,U+2DC,U+304,U+308,U+329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}\n@font-face{font-family:Roboto Slab;font-style:normal;font-weight:300;font-display:swap;src:url(/vendor/media/8856956fa550053e-s.aa7ab40d.woff2)format("woff2");unicode-range:U+460-52F,U+1C80-1C8A,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F}\n@font-face{font-family:Roboto Slab;font-style:normal;font-weight:300;font-display:swap;src:url(/vendor/media/fe9e8dd4a2ad4385-s.4ceec0fb.woff2)format("woff2");unicode-range:U+301,U+400-45F,U+490-491,U+4B0-4B1,U+2116}\n@font-face{font-family:Roboto Slab;font-style:normal;font-weight:300;font-display:swap;src:url(/vendor/media/c492570a33c2511a-s.f486836d.woff2)format("woff2");unicode-range:U+1F??}\n@font-face{font-family:Roboto Slab;font-style:normal;font-weight:300;font-display:swap;src:url(/vendor/media/2e31362fa3cbeb8b-s.54409f46.woff2)format("woff2");unicode-range:U+370-377,U+37A-37F,U+384-38A,U+38C,U+38E-3A1,U+3A3-3FF}\n@font-face{font-family:Roboto Slab;font-style:normal;font-weight:300;font-display:swap;src:url(/vendor/media/bd177ace3eee3014-s.02644e92.woff2)format("woff2");unicode-range:U+102-103,U+110-111,U+128-129,U+168-169,U+1A0-1A1,U+1AF-1B0,U+300-301,U+303-304,U+308-309,U+323,U+329,U+1EA0-1EF9,U+20AB}\n@font-face{font-family:Roboto Slab;font-style:normal;font-weight:300;font-display:swap;src:url(/vendor/media/da2446ec5f26383f-s.c0fe6b67.woff2)format("woff2");unicode-range:U+100-2BA,U+2BD-2C5,U+2C7-2CC,U+2CE-2D7,U+2DD-2FF,U+304,U+308,U+329,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}\n@font-face{font-family:Roboto Slab;font-style:normal;font-weight:300;font-display:swap;src:url(/vendor/media/5cf8828ea9d4dda3-s.p.e51369d5.woff2)format("woff2");unicode-range:U+0000-00FF,U+131,U+152-153,U+2BB-2BC,U+2C6,U+2DA,U+2DC,U+304,U+308,U+329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}\n@font-face{font-family:Roboto Slab;font-style:normal;font-weight:400;font-display:swap;src:url(/vendor/media/8856956fa550053e-s.aa7ab40d.woff2)format("woff2");unicode-range:U+460-52F,U+1C80-1C8A,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F}\n@font-face{font-family:Roboto Slab;font-style:normal;font-weight:400;font-display:swap;src:url(/vendor/media/fe9e8dd4a2ad4385-s.4ceec0fb.woff2)format("woff2");unicode-range:U+301,U+400-45F,U+490-491,U+4B0-4B1,U+2116}\n@font-face{font-family:Roboto Slab;font-style:normal;font-weight:400;font-display:swap;src:url(/vendor/media/c492570a33c2511a-s.f486836d.woff2)format("woff2");unicode-range:U+1F??}\n@font-face{font-family:Roboto Slab;font-style:normal;font-weight:400;font-display:swap;src:url(/vendor/media/2e31362fa3cbeb8b-s.54409f46.woff2)format("woff2");unicode-range:U+370-377,U+37A-37F,U+384-38A,U+38C,U+38E-3A1,U+3A3-3FF}\n@font-face{font-family:Roboto Slab;font-style:normal;font-weight:400;font-display:swap;src:url(/vendor/media/bd177ace3eee3014-s.02644e92.woff2)format("woff2");unicode-range:U+102-103,U+110-111,U+128-129,U+168-169,U+1A0-1A1,U+1AF-1B0,U+300-301,U+303-304,U+308-309,U+323,U+329,U+1EA0-1EF9,U+20AB}\n@font-face{font-family:Roboto Slab;font-style:normal;font-weight:400;font-display:swap;src:url(/vendor/media/da2446ec5f26383f-s.c0fe6b67.woff2)format("woff2");unicode-range:U+100-2BA,U+2BD-2C5,U+2C7-2CC,U+2CE-2D7,U+2DD-2FF,U+304,U+308,U+329,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}\n@font-face{font-family:Roboto Slab;font-style:normal;font-weight:400;font-display:swap;src:url(/vendor/media/5cf8828ea9d4dda3-s.p.e51369d5.woff2)format("woff2");unicode-range:U+0000-00FF,U+131,U+152-153,U+2BB-2BC,U+2C6,U+2DA,U+2DC,U+304,U+308,U+329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}\n@font-face{font-family:Roboto Slab;font-style:normal;font-weight:500;font-display:swap;src:url(/vendor/media/8856956fa550053e-s.aa7ab40d.woff2)format("woff2");unicode-range:U+460-52F,U+1C80-1C8A,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F}\n@font-face{font-family:Roboto Slab;font-style:normal;font-weight:500;font-display:swap;src:url(/vendor/media/fe9e8dd4a2ad4385-s.4ceec0fb.woff2)format("woff2");unicode-range:U+301,U+400-45F,U+490-491,U+4B0-4B1,U+2116}\n@font-face{font-family:Roboto Slab;font-style:normal;font-weight:500;font-display:swap;src:url(/vendor/media/c492570a33c2511a-s.f486836d.woff2)format("woff2");unicode-range:U+1F??}\n@font-face{font-family:Roboto Slab;font-style:normal;font-weight:500;font-display:swap;src:url(/vendor/media/2e31362fa3cbeb8b-s.54409f46.woff2)format("woff2");unicode-range:U+370-377,U+37A-37F,U+384-38A,U+38C,U+38E-3A1,U+3A3-3FF}\n@font-face{font-family:Roboto Slab;font-style:normal;font-weight:500;font-display:swap;src:url(/vendor/media/bd177ace3eee3014-s.02644e92.woff2)format("woff2");unicode-range:U+102-103,U+110-111,U+128-129,U+168-169,U+1A0-1A1,U+1AF-1B0,U+300-301,U+303-304,U+308-309,U+323,U+329,U+1EA0-1EF9,U+20AB}\n@font-face{font-family:Roboto Slab;font-style:normal;font-weight:500;font-display:swap;src:url(/vendor/media/da2446ec5f26383f-s.c0fe6b67.woff2)format("woff2");unicode-range:U+100-2BA,U+2BD-2C5,U+2C7-2CC,U+2CE-2D7,U+2DD-2FF,U+304,U+308,U+329,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}\n@font-face{font-family:Roboto Slab;font-style:normal;font-weight:500;font-display:swap;src:url(/vendor/media/5cf8828ea9d4dda3-s.p.e51369d5.woff2)format("woff2");unicode-range:U+0000-00FF,U+131,U+152-153,U+2BB-2BC,U+2C6,U+2DA,U+2DC,U+304,U+308,U+329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}\n@font-face{font-family:Roboto Slab;font-style:normal;font-weight:600;font-display:swap;src:url(/vendor/media/8856956fa550053e-s.aa7ab40d.woff2)format("woff2");unicode-range:U+460-52F,U+1C80-1C8A,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F}\n@font-face{font-family:Roboto Slab;font-style:normal;font-weight:600;font-display:swap;src:url(/vendor/media/fe9e8dd4a2ad4385-s.4ceec0fb.woff2)format("woff2");unicode-range:U+301,U+400-45F,U+490-491,U+4B0-4B1,U+2116}\n@font-face{font-family:Roboto Slab;font-style:normal;font-weight:600;font-display:swap;src:url(/vendor/media/c492570a33c2511a-s.f486836d.woff2)format("woff2");unicode-range:U+1F??}\n@font-face{font-family:Roboto Slab;font-style:normal;font-weight:600;font-display:swap;src:url(/vendor/media/2e31362fa3cbeb8b-s.54409f46.woff2)format("woff2");unicode-range:U+370-377,U+37A-37F,U+384-38A,U+38C,U+38E-3A1,U+3A3-3FF}\n@font-face{font-family:Roboto Slab;font-style:normal;font-weight:600;font-display:swap;src:url(/vendor/media/bd177ace3eee3014-s.02644e92.woff2)format("woff2");unicode-range:U+102-103,U+110-111,U+128-129,U+168-169,U+1A0-1A1,U+1AF-1B0,U+300-301,U+303-304,U+308-309,U+323,U+329,U+1EA0-1EF9,U+20AB}\n@font-face{font-family:Roboto Slab;font-style:normal;font-weight:600;font-display:swap;src:url(/vendor/media/da2446ec5f26383f-s.c0fe6b67.woff2)format("woff2");unicode-range:U+100-2BA,U+2BD-2C5,U+2C7-2CC,U+2CE-2D7,U+2DD-2FF,U+304,U+308,U+329,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}\n@font-face{font-family:Roboto Slab;font-style:normal;font-weight:600;font-display:swap;src:url(/vendor/media/5cf8828ea9d4dda3-s.p.e51369d5.woff2)format("woff2");unicode-range:U+0000-00FF,U+131,U+152-153,U+2BB-2BC,U+2C6,U+2DA,U+2DC,U+304,U+308,U+329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}\n@font-face{font-family:Roboto Slab;font-style:normal;font-weight:700;font-display:swap;src:url(/vendor/media/8856956fa550053e-s.aa7ab40d.woff2)format("woff2");unicode-range:U+460-52F,U+1C80-1C8A,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F}\n@font-face{font-family:Roboto Slab;font-style:normal;font-weight:700;font-display:swap;src:url(/vendor/media/fe9e8dd4a2ad4385-s.4ceec0fb.woff2)format("woff2");unicode-range:U+301,U+400-45F,U+490-491,U+4B0-4B1,U+2116}\n@font-face{font-family:Roboto Slab;font-style:normal;font-weight:700;font-display:swap;src:url(/vendor/media/c492570a33c2511a-s.f486836d.woff2)format("woff2");unicode-range:U+1F??}\n@font-face{font-family:Roboto Slab;font-style:normal;font-weight:700;font-display:swap;src:url(/vendor/media/2e31362fa3cbeb8b-s.54409f46.woff2)format("woff2");unicode-range:U+370-377,U+37A-37F,U+384-38A,U+38C,U+38E-3A1,U+3A3-3FF}\n@font-face{font-family:Roboto Slab;font-style:normal;font-weight:700;font-display:swap;src:url(/vendor/media/bd177ace3eee3014-s.02644e92.woff2)format("woff2");unicode-range:U+102-103,U+110-111,U+128-129,U+168-169,U+1A0-1A1,U+1AF-1B0,U+300-301,U+303-304,U+308-309,U+323,U+329,U+1EA0-1EF9,U+20AB}\n@font-face{font-family:Roboto Slab;font-style:normal;font-weight:700;font-display:swap;src:url(/vendor/media/da2446ec5f26383f-s.c0fe6b67.woff2)format("woff2");unicode-range:U+100-2BA,U+2BD-2C5,U+2C7-2CC,U+2CE-2D7,U+2DD-2FF,U+304,U+308,U+329,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}\n@font-face{font-family:Roboto Slab;font-style:normal;font-weight:700;font-display:swap;src:url(/vendor/media/5cf8828ea9d4dda3-s.p.e51369d5.woff2)format("woff2");unicode-range:U+0000-00FF,U+131,U+152-153,U+2BB-2BC,U+2C6,U+2DA,U+2DC,U+304,U+308,U+329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}\n\n:root, .tina-tailwind {\n  --tina-color-primary-light: #ff6b3d;\n  --tina-color-primary: #fe4101;\n  --tina-color-primary-dark: #c43200;\n  --tina-color-error-light: #ff8c5a;\n  --tina-color-error: #fe4101;\n  --tina-color-error-dark: #c43200;\n  --tina-color-indicator: #fe4101;\n  --tina-color-grey-0: #120f0e;\n  --tina-color-grey-1: #1a1614;\n  --tina-color-grey-2: #221c1a;\n  --tina-color-grey-3: #2a2422;\n  --tina-color-grey-4: #5c5654;\n  --tina-color-grey-5: #8b8988;\n  --tina-color-grey-6: #a39e9b;\n  --tina-color-grey-7: #c4bfbb;\n  --tina-color-grey-8: #e4e2df;\n  --tina-color-grey-9: #f5e6d3;\n  --tina-color-grey-10: #f7f1ea;\n  --tina-font-family: Montserrat, sans-serif;\n}\nhtml, body.tina-tailwind {\n  background: #120f0e;\n  color: #e4e2df;\n}\n.tina-tailwind {\n  background: #120f0e;\n  color: #e4e2df;\n  font-family: Montserrat, sans-serif;\n}\n.tina-tailwind h1,\n.tina-tailwind h2,\n.tina-tailwind h3 {\n  font-family: "Roboto Slab", serif;\n}\n.tina-tailwind .bg-white,\n.tina-tailwind .bg-gray-50,\n.tina-tailwind .hover\\:bg-white:hover,\n.tina-tailwind .hover\\:bg-gray-50:hover {\n  background-color: #1a1614 !important;\n}\n.tina-tailwind .bg-gray-100,\n.tina-tailwind .bg-gray-200,\n.tina-tailwind .hover\\:bg-gray-100:hover,\n.tina-tailwind .hover\\:bg-gray-200:hover {\n  background-color: #2a2422 !important;\n}\n.tina-tailwind .from-gray-50,\n.tina-tailwind .to-gray-50,\n.tina-tailwind .from-gray-50\\/50 {\n  --tw-gradient-from: #120f0e var(--tw-gradient-from-position);\n  --tw-gradient-to: #1a1614 var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);\n}\n.tina-tailwind .text-black,\n.tina-tailwind .text-gray-900,\n.tina-tailwind .text-gray-800,\n.tina-tailwind .text-gray-700,\n.tina-tailwind .text-gray-800\\/80 {\n  color: #e4e2df !important;\n}\n.tina-tailwind .text-gray-600,\n.tina-tailwind .text-gray-500,\n.tina-tailwind .text-gray-400 {\n  color: #a39e9b !important;\n}\n.tina-tailwind .border-gray-100,\n.tina-tailwind .border-gray-200,\n.tina-tailwind .border-gray-300,\n.tina-tailwind .divide-gray-200 > :not([hidden]) ~ :not([hidden]) {\n  border-color: #2a2422 !important;\n}\n.tina-tailwind .bg-tina-orange,\n.tina-tailwind .bg-tina-orange-dark,\n.tina-tailwind .hover\\:bg-tina-orange:hover,\n.tina-tailwind .hover\\:bg-tina-orange-dark:hover,\n.tina-tailwind .hover\\:bg-tina-orange-dark\\/90:hover {\n  background-color: #fe4101 !important;\n}\n.tina-tailwind .text-tina-orange,\n.tina-tailwind .text-tina-orange-dark,\n.tina-tailwind .text-blue-400,\n.tina-tailwind .text-blue-500,\n.tina-tailwind .text-blue-600,\n.tina-tailwind .hover\\:text-blue-400:hover,\n.tina-tailwind .hover\\:text-blue-500:hover {\n  color: #fe4101 !important;\n}\n.tina-tailwind .fill-tina-orange,\n.tina-tailwind .fill-orange-500 {\n  fill: #fe4101 !important;\n}\n.tina-tailwind .ring-tina-orange-dark,\n.tina-tailwind .focus\\:ring-tina-orange-dark:focus,\n.tina-tailwind .focus\\:ring-blue-500:focus {\n  --tw-ring-color: #fe4101 !important;\n}\n.tina-tailwind input,\n.tina-tailwind textarea,\n.tina-tailwind select {\n  background-color: #120f0e !important;\n  color: #e4e2df !important;\n  border-color: #3a3330 !important;\n}\n.tina-tailwind input::placeholder,\n.tina-tailwind textarea::placeholder {\n  color: #8b8988 !important;\n}\n.tina-tailwind svg[viewBox="0 0 32 32"]:has(path[d^="M18.6466"]) {\n  background: url("/images/logo_red.png") center / contain no-repeat;\n  width: 36px !important;\n  min-width: 36px !important;\n  height: 36px !important;\n}\n.tina-tailwind svg[viewBox="0 0 32 32"]:has(path[d^="M18.6466"]) path {\n  opacity: 0;\n}\n.tina-tailwind svg[viewBox="0 0 1020 254"] {\n  background: url("/dezinin_vert.svg") left center / contain no-repeat;\n  width: 220px !important;\n  min-width: 220px !important;\n  height: 32px !important;\n}\n.tina-tailwind svg[viewBox="0 0 1020 254"] path {\n  opacity: 0;\n}\n.tina-tailwind a[href*="tina.io"] {\n  display: none !important;\n}\n.tina-tailwind img[alt*="Llama"] {\n  content: url("/dezinin_vert.svg");\n  width: 12rem !important;\n  height: auto !important;\n  object-fit: contain;\n}\n.tina-tailwind [data-section-locked="true"] {\n  display: none !important;\n}\n';
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
function lockSections() {
  document.querySelectorAll("[data-section-toggle]").forEach((toggle) => {
    const hidden = toggle.getAttribute("aria-checked") === "false" || toggle.getAttribute("data-edit-locked") === "true";
    let sibling = fieldRow(toggle).nextElementSibling;
    while (sibling) {
      if (sibling.querySelector("[data-section-toggle]")) break;
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
}
function installDezininBrand(cms) {
  if (typeof document === "undefined") return cms;
  const branded = window;
  if (branded.__dezininBrand) return cms;
  branded.__dezininBrand = true;
  document.title = "DEZININ";
  const icon = document.querySelector("link[rel='icon']") || document.createElement("link");
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
      if (record.type === "characterData") rewriteText(record.target);
      record.addedNodes.forEach((node) => rewriteTree(node));
    }
    lockSections();
  });
  observer.observe(document.body, { subtree: true, childList: true, characterData: true });
  document.addEventListener("click", () => window.setTimeout(lockSections, 0));
  return cms;
}

// tina/section-toggle.tsx
import React from "react";
var iconButton = (color) => ({
  flex: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: 36,
  height: 36,
  padding: 0,
  border: "none",
  borderRadius: 8,
  background: "transparent",
  color,
  cursor: "pointer"
});
function EyeIcon({ shown }) {
  return React.createElement("svg", { width: "22", height: "22", viewBox: "0 0 24 24", fill: "none", "aria-hidden": "true", style: { display: "block", opacity: shown ? 1 : 0.45 } }, React.createElement("path", { d: "M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z", stroke: "currentColor", strokeWidth: "1.75", strokeLinejoin: "round" }), React.createElement("circle", { cx: "12", cy: "12", r: "3", stroke: "currentColor", strokeWidth: "1.75" }));
}
function LockIcon() {
  return React.createElement("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", "aria-hidden": "true", style: { display: "block" } }, React.createElement("rect", { x: "5", y: "11", width: "14", height: "10", rx: "2", stroke: "currentColor", strokeWidth: "1.75" }), React.createElement("path", { d: "M8 11V8a4 4 0 0 1 8 0v3", stroke: "currentColor", strokeWidth: "1.75", strokeLinecap: "round" }));
}
function UnlockIcon() {
  return React.createElement("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", "aria-hidden": "true", style: { display: "block" } }, React.createElement("rect", { x: "5", y: "11", width: "14", height: "10", rx: "2", stroke: "currentColor", strokeWidth: "1.75" }), React.createElement("path", { d: "M8 11V8a4 4 0 0 1 7.4-2", stroke: "currentColor", strokeWidth: "1.75", strokeLinecap: "round" }));
}
function SectionToggle({ input, field, form }) {
  const shown = input.value !== false;
  const lockName = field.name.replace(/^show/, "lock");
  const label = typeof field.label === "string" ? field.label : field.name;
  const [locked, setLocked] = React.useState(false);
  React.useEffect(() => {
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
  return React.createElement(
    "div",
    {
      "data-section-toggle": field.name,
      "data-edit-locked": locked ? "true" : "false",
      "aria-checked": shown ? "true" : "false",
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 16,
        marginBottom: 8,
        padding: "10px 12px",
        border: "1px solid #2a2422",
        borderRadius: 8,
        background: "#1a1614"
      }
    },
    React.createElement("div", { style: { fontSize: 15, fontWeight: 600, color: shown ? "#e4e2df" : "#6f6a67" } }, label),
    React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 2 } }, React.createElement(
      "button",
      {
        type: "button",
        role: "switch",
        "aria-checked": shown,
        "aria-label": `${label} visibility`,
        title: shown ? "Shown" : "Hidden",
        onClick: () => input.onChange(!shown),
        style: iconButton(shown ? "#e4e2df" : "#6f6a67")
      },
      React.createElement(EyeIcon, { shown })
    ), React.createElement(
      "button",
      {
        type: "button",
        "aria-pressed": locked,
        "aria-label": locked ? `${label} locked` : `${label} unlocked`,
        title: locked ? "Locked" : "Unlocked",
        onClick: () => {
          const next = !locked;
          setLocked(next);
          form?.change(lockName, next);
        },
        style: iconButton(locked ? "#fe4101" : "#e4e2df")
      },
      locked ? React.createElement(LockIcon, null) : React.createElement(UnlockIcon, null)
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
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public"
    }
  },
  schema: {
    collections: [
      TinaUserCollection,
      {
        name: "site",
        label: "Site",
        path: "content/site",
        format: "json",
        ui: {
          allowedActions: { create: false, delete: false },
          router: () => "/"
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
        label: "Home",
        path: "content/home",
        format: "json",
        ui: {
          allowedActions: { create: false, delete: false },
          router: () => "/"
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
              { type: "string", name: "categories", label: "Categories", list: true },
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
              { type: "string", name: "youtubeId", label: "YouTube id", required: true },
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
        label: "Newsletters",
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
        label: "Pages",
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
