"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
var express_1 = require("express");
var login_1 = require("./login");
var router = express_1.Router();
exports.router = router;
// LOGIN
router.get("/login", login_1.loginGet);
router.post("/login", login_1.loginPost);
