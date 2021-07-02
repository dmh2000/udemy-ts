"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var loader_1 = __importDefault(require("./loader"));
var Result;
(function (Result) {
    Result[Result["Home"] = 0] = "Home";
    Result[Result["Away"] = 1] = "Away";
    Result[Result["Draw"] = 2] = "Draw";
})(Result || (Result = {}));
/**
 * Parse a data
 * @param v
 * @returns Date
 */
function parseDate(v) {
    var d0 = v.split("/");
    // parse the date
    var d1 = d0.map(function (v) {
        return parseInt(v);
    });
    return new Date(d1[2], d1[0] - 1, d1[1]);
}
/**
 * Parse the result string
 * @param v
 * @returns Result
 */
function parseResult(v) {
    var w;
    if (v == "H") {
        w = Result.Home;
    }
    else if (v == "A") {
        w = Result.Away;
    }
    else {
        w = Result.Draw;
    }
    return w;
}
/**
 * convert an array of strings to a match object
 * @param fields
 * @returns Match
 */
function loadMatch(fields) {
    // return a match object
    return {
        date: parseDate(fields[0]),
        home: fields[1],
        away: fields[2],
        score_home: parseInt(fields[3]),
        score_away: parseInt(fields[4]),
        winner: parseResult(fields[5]),
        name: fields[6],
    };
}
// load the file
var matches = loader_1.default("football.csv", loadMatch);
// return a function that emits a canned report
function reportA(a, reporter) {
    return function () {
        return reporter(a);
    };
}
// return a function that emits a report
function report(reporter) {
    return function (a) {
        return reporter(a);
    };
}
// or load and stream to a counter
function manWins(matches) {
    return matches.reduce(function (p, v) {
        if (v.home == "Man United" && v.winner === Result.Home) {
            p++;
        }
        else if (v.away == "Man United" && v.winner === Result.Away) {
            p++;
        }
        return p;
    }, 0);
}
var matchReport = report(manWins);
console.log(matchReport(matches));
