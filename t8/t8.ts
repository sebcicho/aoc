import * as fs from 'fs';
import * as readline from 'readline';

interface Position {
    x: number,
    y: number
}

async function findAntiNodes(filePath: string) {
    const fileStream = fs.createReadStream(filePath);

    const rl = readline.createInterface({
        input: fileStream,
        crlfDelay: Infinity,
    });
    let antinodes:string[][] = [];
    let startInput:string[][] = [];
    const frequenciesAndPositions = new Map<string, Position[]>();
    let iterator = 0;
    for await (const line of rl) {
        if (antinodes[iterator] === undefined){
            antinodes[iterator] = [];
            startInput[iterator] = [];
        }
        line.split('').forEach((char) => {
            antinodes[iterator].push('.');
            startInput[iterator].push(char);

          
            
        });
        iterator++;
        
    }

    
    for(let i = 0; i < startInput.length; i++) {
        for(let j = 0; j < startInput[i].length; j++) {
            const char = startInput[i][j];
            let set = frequenciesAndPositions.get(char);
            if (char !== '.'){
                if (set === undefined){
                    set = [];
                    frequenciesAndPositions.set(char, set);
                }
                set.push({x:i, y:j});
            }
            
            
        }
    }


    let antinodesList: Position[] = [];
    
    for (const key of frequenciesAndPositions.keys()) {

        const set = frequenciesAndPositions.get(key);
        console.log(set)
        
        if(set !== undefined && set.length > 1) {
            set.forEach((pos)=> {
                set.forEach((posNext) => {
                    if(pos.x !== posNext.x && pos.y !== posNext.y){
                        const res = findAntinoedBeetween2Pos(pos, posNext, startInput.length,  startInput[0].length);
                        res.forEach((item)=>{

                            antinodesList.push(item);
                        });  
                    }
                    
                })
                
            })
            
        }
    };

    antinodesList = antinodesList.filter((pos => pos.x < startInput.length && pos.y < startInput[0].length
        && pos.x >=0 && pos.y >= 0
    ));
    const antinodesMap = new Map<string, Position>();

for (const position of antinodesList) {
    const key = `${position.x},${position.y}`;
    if (!antinodesMap.has(key)) {
        antinodesMap.set(key, position);
        antinodes[position.x][position.y] = '#'

    }
}
    
    console.log('===========================');
    console.log(antinodes);
    
    console.log('===========================');
    console.log('antinodes list: ', antinodesMap);

}

function findAntinoedBeetween2Pos(pos1: Position, pos2 :Position, maxX:number, maxY:number): Position[] 
{
    const xDiff = pos1.x - pos2.x;
    const yDiff = pos1.y - pos2.y
            
    let newx1 = pos1.x + xDiff    
    let newx2 = pos2.x - xDiff   
    let newy1 = pos1.y + yDiff   
    let newy2 = pos2.y - yDiff
        
    const anti1: Position = {
        x:pos1.x + xDiff,
        y:pos1.y + yDiff,
    }

    const anti2: Position = {
        x: pos2.x - xDiff,
        y: pos2.y - yDiff
    }
    let res = [anti1,
        anti2, pos1, pos2]
    
        
    while(newx1 >=0 && newx1 < maxX && newy1 >=0 && newy1 < maxY ) {
        newx1 = newx1 + xDiff;
        newy1 = newy1 + yDiff;

        res.push({x:newx1, y:newy1});
    }

    while(newx2 >=0 && newx2 < maxX && newy2 >=0 && newy2 < maxY ) {

        newx2 = newx2 - xDiff;
        newy2 = newy2 - yDiff;
        res.push({x:newx2, y:newy2});
    }

    return res;
}


findAntiNodes('input.txt').catch(console.error);