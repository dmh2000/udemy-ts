"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginPost = exports.loginGet = void 0;
function loginGet(req, res) {
    console.log("get login");
    res.send("\n      <form method=\"POST\">\n      <div>\n        <label style=\"display:inline-block;width:100px;\">Email</label>\n        <input name=\"email\" />\n      <div>\n      <div style=\"padding:4px;\"></div>\n      <label style=\"display:inline-block;width:100px;\">Password</label>\n      <input type=\"password\" name=\"password\"/>\n      </div>\n      <div>\n      <button>Submit</button>\n      </form>\n      ");
}
exports.loginGet = loginGet;
function loginPost(req, res) {
    console.log("post login");
    var _a = req.body, email = _a.email, password = _a.password;
    console.log(email, password);
    // check for missing email or password
    res.send(email + ":" + password);
}
exports.loginPost = loginPost;
