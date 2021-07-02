import loadCsv from "./loader";

enum Result {
  Home,
  Away,
  Draw,
}

interface Match {
  date: Date;
  home: string;
  away: string;
  score_home: number;
  score_away: number;
  winner: Result;
  name: string;
}

/**
 * Parse a data
 * @param v
 * @returns Date
 */
function parseDate(v: string): Date {
  const d0 = v.split("/");

  // parse the date
  const d1 = d0.map((v) => {
    return parseInt(v);
  });
  return new Date(d1[2], d1[0] - 1, d1[1]);
}

/**
 * Parse the result string
 * @param v
 * @returns Result
 */
function parseResult(v: string): Result {
  let w: Result;
  if (v == "H") {
    w = Result.Home;
  } else if (v == "A") {
    w = Result.Away;
  } else {
    w = Result.Draw;
  }
  return w;
}

/**
 * convert an array of strings to a match object
 * @param fields
 * @returns Match
 */
function loadMatch(fields: string[]): Match {
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
const matches = loadCsv<Match>("football.csv", loadMatch);

// return a function that emits a canned report
function reportA<T, R>(a: T[], reporter: (v: T[]) => R): () => R {
  return function (): R {
    return reporter(a);
  };
}

// return a function that emits a report
function report<T, R>(reporter: (v: T[]) => R): (a: T[]) => R {
  return function (a: T[]): R {
    return reporter(a);
  };
}

// or load and stream to a counter
function manWins(matches: Match[]): number {
  return matches.reduce((p: number, v: Match): number => {
    if (v.home == "Man United" && v.winner === Result.Home) {
      p++;
    } else if (v.away == "Man United" && v.winner === Result.Away) {
      p++;
    }
    return p;
  }, 0);
}

const matchReport = report(manWins);
console.log(matchReport(matches));
