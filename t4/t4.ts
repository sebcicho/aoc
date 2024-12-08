import * as fs from 'fs';
import * as readline from 'readline';


async function countXmas(filePath: string) {
    const fileStream = fs.createReadStream(filePath);

    const rl = readline.createInterface({
        input: fileStream,
        crlfDelay: Infinity,
    });
    let rawInput:string[][] = [];
    let iterator = 0;
    for await (const line of rl) {
        if (rawInput[iterator] === undefined){
            rawInput[iterator] = [];
        }
        line.split('').forEach((char) => {
            rawInput[iterator].push(char); 
            
        });
        iterator++;
    
    }

    console.log(rawInput);



    let count = 0;

    for(let i = 0; i < rawInput.length; i++) {
        for(let j = 0; j < rawInput[i].length; j++) {
            
            let tempForward:string[]=[];
            let tempBackward:string[]=[];
            let tempUp:string[]=[];
            let tempDown :string[]=[];

            let tempDiag1:string[]=[];
            let tempDiag2:string[]=[];
            let tempDiag3:string[]=[];
            let tempDiag4:string[]=[];


            for(let k =0; k < 4; k++) {
                try {
                    let forward = rawInput[i][j+k];
                    if(forward!== undefined) {
                        tempForward.push(forward);
                    }
                } catch (error) {
                }

                try {
                    let backward = rawInput[i][j-k];
                    if(backward!== undefined) {
                        tempBackward.push(backward);
                    }
                } catch (error) {
                }

                try {
                    let down = rawInput[i+k][j];
                    if(down!== undefined) {
                        tempDown.push(down);
                    }
                } catch (error) {
                }
                
                try {
                    let up = rawInput[i-k][j];
                    if(up!== undefined) {
                        tempUp.push(up);
                    }
                } catch (error) {
                }

                try {
                    let diag1 = rawInput[i+k][j+k];
                    if(diag1!== undefined) {
                        tempDiag1.push(diag1);
                    }
                } catch (error) {
                }

                try {
                    let diag2 = rawInput[i-k][j+k];
                    if(diag2!== undefined) {
                        tempDiag2.push(diag2);
                    }
                } catch (error) {
                }

                try {
                    let diag3 = rawInput[i-k][j-k];
                    if(diag3!== undefined) {
                        tempDiag3.push(diag3);
                    }
                } catch (error) {
                }
                
                try {
                    let diag4 = rawInput[i+k][j-k];
                    if(diag4!== undefined) {
                        tempDiag4.push(diag4);
                    }
                } catch (error) {
                }

                if(tempForward.join('') === 'XMAS') {
                    count++;
                }
                if(tempDown.join('') === 'XMAS') {
                    count++;
                }
                if(tempBackward.join('') === 'XMAS') {
                    count++;
                }
                if(tempUp.join('') === 'XMAS') {
                    count++;
                }

                if(tempDiag1.join('') === 'XMAS') {
                    count++;
                }
                if(tempDiag2.join('') === 'XMAS') {
                    count++;
                }
                if(tempDiag3.join('') === 'XMAS') {
                    count++;
                }
                if(tempDiag4.join('') === 'XMAS') {
                    count++;
                }
            }

        }
    }

    let count2 = 0;

    for(let i = 0; i < rawInput.length; i++) {
        for(let j = 0; j < rawInput[i].length; j++) {
            let xmas:string[]=[];
            try {
                
                for(let k =-1; k < 2; k++) {
                    for(let l =-1; l < 2; l++) {
                        let letter = rawInput[i+k][j+l];
                        if(letter!== undefined ) {
                            xmas.push(letter);
                        }
                    }
                }
               
            } catch (error) {
            }
            let xmasNew:string[]=[];
            console.log('xmas :', xmas);
            for (let k = 0; k < xmas.length; k += 2) {
                xmasNew.push(xmas[k]);
            }
            console.log('xmasNew: ', xmasNew);
            console.log('===========================',);
            if(xmasNew.join('') === 'MSAMS' || 
            xmasNew.join('') === 'SSAMM'||
             xmasNew.join('') === 'MMASS' || 
             xmasNew.join('') === 'SMASM' ) {
                count2++;
            }
        }
    }
   

    console.log('count: ', count);
    console.log('count2: ', count2);

}



countXmas('input.txt').catch(console.error);;