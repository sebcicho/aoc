"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var readline = require("readline");
function findAntiNodes(filePath) {
    return __awaiter(this, void 0, void 0, function () {
        var fileStream, rl, antinodes, startInput, frequenciesAndPositions, iterator, _a, rl_1, rl_1_1, line, e_1_1, i, j, char, set, antinodesList, _loop_1, _b, _c, key, antinodesMap, antinodesList_1, antinodesList_1_1, position, key;
        var e_2, _d, e_3, _e;
        var _f, e_1, _g, _h;
        return __generator(this, function (_j) {
            switch (_j.label) {
                case 0:
                    fileStream = fs.createReadStream(filePath);
                    rl = readline.createInterface({
                        input: fileStream,
                        crlfDelay: Infinity,
                    });
                    antinodes = [];
                    startInput = [];
                    frequenciesAndPositions = new Map();
                    iterator = 0;
                    _j.label = 1;
                case 1:
                    _j.trys.push([1, 6, 7, 12]);
                    _a = true, rl_1 = __asyncValues(rl);
                    _j.label = 2;
                case 2: return [4 /*yield*/, rl_1.next()];
                case 3:
                    if (!(rl_1_1 = _j.sent(), _f = rl_1_1.done, !_f)) return [3 /*break*/, 5];
                    _h = rl_1_1.value;
                    _a = false;
                    line = _h;
                    if (antinodes[iterator] === undefined) {
                        antinodes[iterator] = [];
                        startInput[iterator] = [];
                    }
                    line.split('').forEach(function (char) {
                        antinodes[iterator].push('.');
                        startInput[iterator].push(char);
                    });
                    iterator++;
                    _j.label = 4;
                case 4:
                    _a = true;
                    return [3 /*break*/, 2];
                case 5: return [3 /*break*/, 12];
                case 6:
                    e_1_1 = _j.sent();
                    e_1 = { error: e_1_1 };
                    return [3 /*break*/, 12];
                case 7:
                    _j.trys.push([7, , 10, 11]);
                    if (!(!_a && !_f && (_g = rl_1.return))) return [3 /*break*/, 9];
                    return [4 /*yield*/, _g.call(rl_1)];
                case 8:
                    _j.sent();
                    _j.label = 9;
                case 9: return [3 /*break*/, 11];
                case 10:
                    if (e_1) throw e_1.error;
                    return [7 /*endfinally*/];
                case 11: return [7 /*endfinally*/];
                case 12:
                    for (i = 0; i < startInput.length; i++) {
                        for (j = 0; j < startInput[i].length; j++) {
                            char = startInput[i][j];
                            set = frequenciesAndPositions.get(char);
                            if (char !== '.') {
                                if (set === undefined) {
                                    set = [];
                                    frequenciesAndPositions.set(char, set);
                                }
                                set.push({ x: i, y: j });
                            }
                        }
                    }
                    antinodesList = [];
                    _loop_1 = function (key) {
                        var set = frequenciesAndPositions.get(key);
                        console.log(set);
                        if (set !== undefined && set.length > 1) {
                            // console.log('dupa');
                            set.forEach(function (pos) {
                                set.forEach(function (posNext) {
                                    if (pos.x !== posNext.x && pos.y !== posNext.y) {
                                        var res = findAntinoedBeetween2Pos(pos, posNext, startInput.length, startInput[0].length);
                                        res.forEach(function (item) {
                                            antinodesList.push(item);
                                        });
                                    }
                                });
                            });
                        }
                    };
                    try {
                        // const ll = frequenciesAndPositions.get('a');
                        // if (ll !== undefined) {
                        //     const pi1: Position|undefined = ll[0];
                        //     const pi2 = ll[1];
                        //     if(pi1 !== undefined && pi2 !== undefined){
                        //         const res = findAntinoedBeetween2Pos(pi1, pi2, startInput.length,  startInput[0].length)
                        //         console.log('p1 = ', pi1);
                        //         console.log('p2 = ', pi2);
                        //         console.log('res: ', res)
                        //     }
                        // }
                        for (_b = __values(frequenciesAndPositions.keys()), _c = _b.next(); !_c.done; _c = _b.next()) {
                            key = _c.value;
                            _loop_1(key);
                        }
                    }
                    catch (e_2_1) { e_2 = { error: e_2_1 }; }
                    finally {
                        try {
                            if (_c && !_c.done && (_d = _b.return)) _d.call(_b);
                        }
                        finally { if (e_2) throw e_2.error; }
                    }
                    ;
                    antinodesList = antinodesList.filter((function (pos) { return pos.x < startInput.length && pos.y < startInput[0].length
                        && pos.x >= 0 && pos.y >= 0; }));
                    antinodesMap = new Map();
                    try {
                        for (antinodesList_1 = __values(antinodesList), antinodesList_1_1 = antinodesList_1.next(); !antinodesList_1_1.done; antinodesList_1_1 = antinodesList_1.next()) {
                            position = antinodesList_1_1.value;
                            key = "".concat(position.x, ",").concat(position.y);
                            if (!antinodesMap.has(key)) {
                                antinodesMap.set(key, position);
                                antinodes[position.x][position.y] = '#';
                            }
                        }
                    }
                    catch (e_3_1) { e_3 = { error: e_3_1 }; }
                    finally {
                        try {
                            if (antinodesList_1_1 && !antinodesList_1_1.done && (_e = antinodesList_1.return)) _e.call(antinodesList_1);
                        }
                        finally { if (e_3) throw e_3.error; }
                    }
                    //  = rawInput;
                    // console.log(antinodes);
                    console.log('===========================');
                    console.log(antinodes);
                    console.log('===========================');
                    console.log('antinodes list: ', antinodesMap);
                    return [2 /*return*/];
            }
        });
    });
}
function findAntinoedBeetween2Pos(pos1, pos2, maxX, maxY) {
    var xDiff = pos1.x - pos2.x;
    var yDiff = pos1.y - pos2.y;
    // console.log('xDiff = ', xDiff);
    // console.log('yDiff = ', yDiff);
    var newx1 = pos1.x + xDiff;
    var newx2 = pos2.x - xDiff;
    var newy1 = pos1.y + yDiff;
    var newy2 = pos2.y - yDiff;
    var anti1 = {
        x: pos1.x + xDiff,
        y: pos1.y + yDiff,
    };
    var anti2 = {
        x: pos2.x - xDiff,
        y: pos2.y - yDiff
    };
    var res = [anti1,
        anti2, pos1, pos2];
    while (newx1 >= 0 && newx1 < maxX && newy1 >= 0 && newy1 < maxY) {
        // console.log('--------------------------');
        // console.log('newx1 = ', newx1);
        // console.log('newy1 = ', newy1);
        newx1 = newx1 + xDiff;
        newy1 = newy1 + yDiff;
        // console.log('newx1 = ', newx1);
        // console.log('newy1 = ', newy1);
        res.push({ x: newx1, y: newy1 });
    }
    while (newx2 >= 0 && newx2 < maxX && newy2 >= 0 && newy2 < maxY) {
        // console.log('--------------------------');
        // console.log('newx2 = ', newx2);
        // console.log('newy2 = ', newy2);
        newx2 = newx2 - xDiff;
        newy2 = newy2 - yDiff;
        // console.log('newx2 = ', newx2);
        // console.log('newy2 = ', newy2);
        res.push({ x: newx2, y: newy2 });
    }
    return res;
}
findAntiNodes('input.txt').catch(console.error);
