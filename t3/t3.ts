import * as fs from 'fs';
import * as readline from 'readline';


async function multiplyNumbers(filePath: string) {
    const fileStream = fs.createReadStream(filePath);

    const rl = readline.createInterface({
        input: fileStream,
        crlfDelay: Infinity,
    });
    let rawInput = '';
    for await (const line of rl) {
        rawInput += line;
    }
    // console.log(rawInput);

    const parsed = processInput(rawInput)

    const pattern = /mul\(\s*\d+\s*,\s*\d+\)/g;
    const matches = parsed.match(pattern);
    console.log(matches)

    let sum = 0;
    const numberPattern = /\d+(\.\d+)?/g;
    matches?.forEach((match) => {
        const numbers = match.match(numberPattern)?.map(match => Number(match));
        if (numbers) {
            sum += numbers[0] * numbers[1];
        }
    })
    console.log(sum);
}

function processInput(input: string):string {
    const pattern = /don't\(\).*?do\(\)/g;
    const parsed =  input.replace(pattern, "");

    const endpattern = /(don't\(\)).*$/;
    const final =  parsed.replace(endpattern, "");
    console.log('final: ',final);
    return final;
}

multiplyNumbers('input.txt').catch(console.error);