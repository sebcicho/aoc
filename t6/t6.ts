import { pseudoRandomBytes } from 'crypto';
import * as fs from 'fs';
import { it } from 'node:test';
import * as readline from 'readline';

interface Position {
    x: number,
    y: number
}

async function trackGuard(filePath: string) {
    const fileStream = fs.createReadStream(filePath);

    const rl = readline.createInterface({
        input: fileStream,
        crlfDelay: Infinity,
    });
    let rawInput:string[][] = [];
    let startInput:string[][] = [];
    
    let iterator = 0;
    for await (const line of rl) {
        if (rawInput[iterator] === undefined){
            rawInput[iterator] = [];
            startInput[iterator] = [];
        }
        line.split('').forEach((char) => {
            rawInput[iterator].push(char);
            startInput[iterator].push(char); 
            
        });
        iterator++;
    
    }
    //  = rawInput;
    console.log(rawInput);

    let startPos: Position = {x:0,y:0}

    const directions = [
        '^','>','V','<'
    ]

    for(let i = 0; i < rawInput.length; i++) {
        for(let j = 0; j < rawInput[i].length; j++) {
            if(directions.includes(rawInput[i][j])){
                startPos = {
                    x:i,
                    y:j
                }
                break;
            }
        }
    }

    console.log('pos: ', startPos);
    let steps = 0;
    let pos: Position | undefined = startPos;
    while(pos !== undefined) {
        
        let res = goOneDirection(rawInput, pos);
        rawInput = res.output;
        pos = res.position;
        steps += res.steps;
    }
    let countX = 0;
    let postionsVisited: Position[] = [];
    for(let i = 0; i < rawInput.length; i++) {
        for(let j = 0; j < rawInput[i].length; j++) {
            if(rawInput[i][j] === 'X') {
                countX++;
                postionsVisited.push({
                    x: i,
                    y: j,
                })
            }
        }
    }
    // console.log('rawinput: ', rawInput);
    const fullPathLength = postionsVisited.length;
    console.log('postionsVisited: ', postionsVisited.length);
    console.log('steps: ', steps);
    postionsVisited = postionsVisited.filter((pos)=> pos.x !== startPos.x || pos.y !== startPos.y)
    let countLoops = 0;
    for(let i = 0; i < postionsVisited.length; i++) {
        let newInput =  startInput.map(innerArray => Array.from(innerArray));
        newInput[postionsVisited[i].x][postionsVisited[i].y] = '#';
        // console.log('newInput: ', newInput);
        let newSteps = 0;
        let tempPos: Position | undefined = startPos;
        let positions: Position[] = [];
        let isLoop = false
        while(tempPos !== undefined && newSteps < steps*100) {
        
            positions.push(tempPos);
            let res = goOneDirection(newInput, tempPos);
            newInput = res.output;
            tempPos = res.position;
            newSteps += res.steps;
            if(newSteps >= steps*100) {
                countLoops++;
                console.log('postionsVisited: ',postionsVisited[i])
            }


        }
       

    }
    console.log('countLoops: ', countLoops);
}

function goOneDirection(
    input: string[][], 
    startPos: Position
) : {
    position: Position | undefined,
    output: string[][],
    steps: number
}{
    const guard = input[startPos.x][startPos.y];
    // console.log('guard: ', guard)
    let pos = startPos;
    let iterator = 0;
    switch (guard) {
        case '^':

            while(pos.x >=0 && input[pos.x][pos.y] !== '#') {
                input[pos.x][pos.y] = 'X';
                iterator++
                pos = {
                    x: pos.x -1,
                    y: pos.y
                };
                
            }
            if(pos.x >=0) {
                pos = {
                    x: pos.x +1,
                    y: pos.y
                }
                input[pos.x][pos.y] = '>';
                return {
                    position: pos,
                    output: input,
                    steps: iterator,
                }
            } else {
                return {
                    position: undefined,
                    output: input,
                    steps: iterator
                }
            }

            break;
        case '>':

            while(pos.y < input[pos.x].length && input[pos.x][pos.y] !== '#') {
                input[pos.x][pos.y] = 'X';
                iterator++
                pos = {
                    x: pos.x,
                    y: pos.y +1
                };
                
            }
            if(pos.y < input[pos.x].length) {
                pos = {
                    x: pos.x,
                    y: pos.y -1
                }
                input[pos.x][pos.y] = 'v';
                return {
                    position: pos,
                    output: input,
                    steps: iterator
                }
            } else {
                return {
                    position: undefined,
                    output: input,
                    steps: iterator
                }
            }

            break;
        case 'v':
            while(pos.x < input.length && input[pos.x][pos.y] !== '#') {
                input[pos.x][pos.y] = 'X';
                iterator++
                pos = {
                    x: pos.x +1,
                    y: pos.y
                };
                
            }
            if(pos.x < input.length) {
                pos = {
                    x: pos.x -1,
                    y: pos.y
                }
                input[pos.x][pos.y] = '<';
                return {
                    position: pos,
                    output: input,
                    steps: iterator
                }
            } else {
                return {
                    position: undefined,
                    output: input,
                    steps: iterator
                }
            }

            break;
        case '<':
            while(pos.y >=0 && input[pos.x][pos.y] !== '#') {
                input[pos.x][pos.y] = 'X';
                iterator++
                pos = {
                    x: pos.x,
                    y: pos.y -1
                };
                
            }
            if(pos.y >=0) {
                pos = {
                    x: pos.x,
                    y: pos.y +1
                }
                input[pos.x][pos.y] = '^';
                return {
                    position: pos,
                    output: input,
                    steps: iterator
                }
            } else {
                return {
                    position: undefined,
                    output: input,
                    steps: iterator
                }
            }
            break;
       
        default:

            break;
    }

    return {
        position: pos,
        output: input,
        steps: iterator
    }
}



trackGuard('input.txt').catch(console.error);