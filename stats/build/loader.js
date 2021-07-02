"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
function loadCsv(fname, loader) {
    return fs_1.default
        .readFileSync(fname, {
        encoding: "utf-8",
    })
        .split("\n")
        .map(function (v) {
        return v.split(",");
    })
        .map(function (v) {
        return loader(v);
    });
}
exports.default = loadCsv;
