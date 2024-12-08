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
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var readline = require("readline");
function trackGuard(filePath) {
    return __awaiter(this, void 0, void 0, function () {
        var fileStream, rl, rawInput, startInput, iterator, _a, rl_1, rl_1_1, line, e_1_1, startPos, directions, i, j, steps, pos, res, countX, postionsVisited, i, j, fullPathLength, countLoops, i, newInput, newSteps, tempPos, positions, isLoop, res;
        var _b, e_1, _c, _d;
        return __generator(this, function (_e) {
            switch (_e.label) {
                case 0:
                    fileStream = fs.createReadStream(filePath);
                    rl = readline.createInterface({
                        input: fileStream,
                        crlfDelay: Infinity,
                    });
                    rawInput = [];
                    startInput = [];
                    iterator = 0;
                    _e.label = 1;
                case 1:
                    _e.trys.push([1, 6, 7, 12]);
                    _a = true, rl_1 = __asyncValues(rl);
                    _e.label = 2;
                case 2: return [4 /*yield*/, rl_1.next()];
                case 3:
                    if (!(rl_1_1 = _e.sent(), _b = rl_1_1.done, !_b)) return [3 /*break*/, 5];
                    _d = rl_1_1.value;
                    _a = false;
                    line = _d;
                    if (rawInput[iterator] === undefined) {
                        rawInput[iterator] = [];
                        startInput[iterator] = [];
                    }
                    line.split('').forEach(function (char) {
                        rawInput[iterator].push(char);
                        startInput[iterator].push(char);
                    });
                    iterator++;
                    _e.label = 4;
                case 4:
                    _a = true;
                    return [3 /*break*/, 2];
                case 5: return [3 /*break*/, 12];
                case 6:
                    e_1_1 = _e.sent();
                    e_1 = { error: e_1_1 };
                    return [3 /*break*/, 12];
                case 7:
                    _e.trys.push([7, , 10, 11]);
                    if (!(!_a && !_b && (_c = rl_1.return))) return [3 /*break*/, 9];
                    return [4 /*yield*/, _c.call(rl_1)];
                case 8:
                    _e.sent();
                    _e.label = 9;
                case 9: return [3 /*break*/, 11];
                case 10:
                    if (e_1) throw e_1.error;
                    return [7 /*endfinally*/];
                case 11: return [7 /*endfinally*/];
                case 12:
                    //  = rawInput;
                    console.log(rawInput);
                    startPos = { x: 0, y: 0 };
                    directions = [
                        '^', '>', 'V', '<'
                    ];
                    for (i = 0; i < rawInput.length; i++) {
                        for (j = 0; j < rawInput[i].length; j++) {
                            if (directions.includes(rawInput[i][j])) {
                                startPos = {
                                    x: i,
                                    y: j
                                };
                                break;
                            }
                        }
                    }
                    console.log('pos: ', startPos);
                    steps = 0;
                    pos = startPos;
                    while (pos !== undefined) {
                        res = goOneDirection(rawInput, pos);
                        rawInput = res.output;
                        pos = res.position;
                        steps += res.steps;
                    }
                    countX = 0;
                    postionsVisited = [];
                    for (i = 0; i < rawInput.length; i++) {
                        for (j = 0; j < rawInput[i].length; j++) {
                            if (rawInput[i][j] === 'X') {
                                countX++;
                                postionsVisited.push({
                                    x: i,
                                    y: j,
                                });
                            }
                        }
                    }
                    fullPathLength = postionsVisited.length;
                    console.log('postionsVisited: ', postionsVisited.length);
                    console.log('steps: ', steps);
                    postionsVisited = postionsVisited.filter(function (pos) { return pos.x !== startPos.x || pos.y !== startPos.y; });
                    countLoops = 0;
                    for (i = 0; i < postionsVisited.length; i++) {
                        newInput = startInput.map(function (innerArray) { return Array.from(innerArray); });
                        newInput[postionsVisited[i].x][postionsVisited[i].y] = '#';
                        newSteps = 0;
                        tempPos = startPos;
                        positions = [];
                        isLoop = false;
                        while (tempPos !== undefined && newSteps < steps * 100) {
                            positions.push(tempPos);
                            res = goOneDirection(newInput, tempPos);
                            newInput = res.output;
                            tempPos = res.position;
                            newSteps += res.steps;
                            if (newSteps >= steps * 100) {
                                countLoops++;
                                console.log('postionsVisited: ', postionsVisited[i]);
                            }
                        }
                    }
                    console.log('countLoops: ', countLoops);
                    return [2 /*return*/];
            }
        });
    });
}
function goOneDirection(input, startPos) {
    var guard = input[startPos.x][startPos.y];
    // console.log('guard: ', guard)
    var pos = startPos;
    var iterator = 0;
    switch (guard) {
        case '^':
            while (pos.x >= 0 && input[pos.x][pos.y] !== '#') {
                input[pos.x][pos.y] = 'X';
                iterator++;
                pos = {
                    x: pos.x - 1,
                    y: pos.y
                };
            }
            if (pos.x >= 0) {
                pos = {
                    x: pos.x + 1,
                    y: pos.y
                };
                input[pos.x][pos.y] = '>';
                return {
                    position: pos,
                    output: input,
                    steps: iterator,
                };
            }
            else {
                return {
                    position: undefined,
                    output: input,
                    steps: iterator
                };
            }
            break;
        case '>':
            while (pos.y < input[pos.x].length && input[pos.x][pos.y] !== '#') {
                input[pos.x][pos.y] = 'X';
                iterator++;
                pos = {
                    x: pos.x,
                    y: pos.y + 1
                };
            }
            if (pos.y < input[pos.x].length) {
                pos = {
                    x: pos.x,
                    y: pos.y - 1
                };
                input[pos.x][pos.y] = 'v';
                return {
                    position: pos,
                    output: input,
                    steps: iterator
                };
            }
            else {
                return {
                    position: undefined,
                    output: input,
                    steps: iterator
                };
            }
            break;
        case 'v':
            while (pos.x < input.length && input[pos.x][pos.y] !== '#') {
                input[pos.x][pos.y] = 'X';
                iterator++;
                pos = {
                    x: pos.x + 1,
                    y: pos.y
                };
            }
            if (pos.x < input.length) {
                pos = {
                    x: pos.x - 1,
                    y: pos.y
                };
                input[pos.x][pos.y] = '<';
                return {
                    position: pos,
                    output: input,
                    steps: iterator
                };
            }
            else {
                return {
                    position: undefined,
                    output: input,
                    steps: iterator
                };
            }
            break;
        case '<':
            while (pos.y >= 0 && input[pos.x][pos.y] !== '#') {
                input[pos.x][pos.y] = 'X';
                iterator++;
                pos = {
                    x: pos.x,
                    y: pos.y - 1
                };
            }
            if (pos.y >= 0) {
                pos = {
                    x: pos.x,
                    y: pos.y + 1
                };
                input[pos.x][pos.y] = '^';
                return {
                    position: pos,
                    output: input,
                    steps: iterator
                };
            }
            else {
                return {
                    position: undefined,
                    output: input,
                    steps: iterator
                };
            }
            break;
        default:
            break;
    }
    return {
        position: pos,
        output: input,
        steps: iterator
    };
}
trackGuard('input.txt').catch(console.error);
