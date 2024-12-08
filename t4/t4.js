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
function countXmas(filePath) {
    return __awaiter(this, void 0, void 0, function () {
        var fileStream, rl, rawInput, iterator, _a, rl_1, rl_1_1, line, e_1_1, count, i, j, tempForward, tempBackward, tempUp, tempDown, tempDiag1, tempDiag2, tempDiag3, tempDiag4, k, forward, backward, down, up, diag1, diag2, diag3, diag4, count2, i, j, xmas, k, l, letter, xmasNew, k;
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
                    }
                    line.split('').forEach(function (char) {
                        rawInput[iterator].push(char);
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
                    console.log(rawInput);
                    count = 0;
                    for (i = 0; i < rawInput.length; i++) {
                        for (j = 0; j < rawInput[i].length; j++) {
                            tempForward = [];
                            tempBackward = [];
                            tempUp = [];
                            tempDown = [];
                            tempDiag1 = [];
                            tempDiag2 = [];
                            tempDiag3 = [];
                            tempDiag4 = [];
                            for (k = 0; k < 4; k++) {
                                try {
                                    forward = rawInput[i][j + k];
                                    if (forward !== undefined) {
                                        tempForward.push(forward);
                                    }
                                }
                                catch (error) {
                                }
                                try {
                                    backward = rawInput[i][j - k];
                                    if (backward !== undefined) {
                                        tempBackward.push(backward);
                                    }
                                }
                                catch (error) {
                                }
                                try {
                                    down = rawInput[i + k][j];
                                    if (down !== undefined) {
                                        tempDown.push(down);
                                    }
                                }
                                catch (error) {
                                }
                                try {
                                    up = rawInput[i - k][j];
                                    if (up !== undefined) {
                                        tempUp.push(up);
                                    }
                                }
                                catch (error) {
                                }
                                try {
                                    diag1 = rawInput[i + k][j + k];
                                    if (diag1 !== undefined) {
                                        tempDiag1.push(diag1);
                                    }
                                }
                                catch (error) {
                                }
                                try {
                                    diag2 = rawInput[i - k][j + k];
                                    if (diag2 !== undefined) {
                                        tempDiag2.push(diag2);
                                    }
                                }
                                catch (error) {
                                }
                                try {
                                    diag3 = rawInput[i - k][j - k];
                                    if (diag3 !== undefined) {
                                        tempDiag3.push(diag3);
                                    }
                                }
                                catch (error) {
                                }
                                try {
                                    diag4 = rawInput[i + k][j - k];
                                    if (diag4 !== undefined) {
                                        tempDiag4.push(diag4);
                                    }
                                }
                                catch (error) {
                                }
                                if (tempForward.join('') === 'XMAS') {
                                    count++;
                                }
                                if (tempDown.join('') === 'XMAS') {
                                    count++;
                                }
                                if (tempBackward.join('') === 'XMAS') {
                                    count++;
                                }
                                if (tempUp.join('') === 'XMAS') {
                                    count++;
                                }
                                if (tempDiag1.join('') === 'XMAS') {
                                    count++;
                                }
                                if (tempDiag2.join('') === 'XMAS') {
                                    count++;
                                }
                                if (tempDiag3.join('') === 'XMAS') {
                                    count++;
                                }
                                if (tempDiag4.join('') === 'XMAS') {
                                    count++;
                                }
                            }
                        }
                    }
                    count2 = 0;
                    for (i = 0; i < rawInput.length; i++) {
                        for (j = 0; j < rawInput[i].length; j++) {
                            xmas = [];
                            try {
                                for (k = -1; k < 2; k++) {
                                    for (l = -1; l < 2; l++) {
                                        letter = rawInput[i + k][j + l];
                                        if (letter !== undefined) {
                                            xmas.push(letter);
                                        }
                                    }
                                }
                            }
                            catch (error) {
                            }
                            xmasNew = [];
                            console.log('xmas :', xmas);
                            for (k = 0; k < xmas.length; k += 2) {
                                xmasNew.push(xmas[k]);
                            }
                            console.log('xmasNew: ', xmasNew);
                            console.log('===========================');
                            if (xmasNew.join('') === 'MSAMS' ||
                                xmasNew.join('') === 'SSAMM' ||
                                xmasNew.join('') === 'MMASS' ||
                                xmasNew.join('') === 'SMASM') {
                                count2++;
                            }
                        }
                    }
                    console.log('count: ', count);
                    console.log('count2: ', count2);
                    return [2 /*return*/];
            }
        });
    });
}
countXmas('input.txt').catch(console.error);
;
