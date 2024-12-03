import * as fs from 'fs';
import * as readline from 'readline';


async function compareLists(filePath: string) {
    const fileStream = fs.createReadStream(filePath);

    const rl = readline.createInterface({
        input: fileStream,
        crlfDelay: Infinity,
    });

    let leftList:number[] = [];
    let rightList:number[] = [];
    
    for await (const line of rl) {
        const lineAsNumbers: number[] = line.split(' ').map(Number);
        leftList.push(lineAsNumbers[0]);
        rightList.push(lineAsNumbers[3]);

    }
    
    leftList.sort();
    rightList.sort();
    let sum = 0;
    for(let i =0; i < leftList.length; i++) {
        const left = leftList[i];
        const right = rightList[i];

        console.log('left: ', left, '| right: ', right);


        if (left > right) {
            sum += left - right;
        } else {
            sum += right - left;
        }
    }
    console.log(sum);

    const set = new Set(leftList);
    const occurances = new Map<number, number>();

    for(let i =0; i < rightList.length; i++) {
        const item = rightList[i];
        if(occurances.get(item) === undefined) {
            occurances.set(item, 1);
        } else {
            const sum = occurances.get(item);
            occurances.set(item, sum +1);
        }
    }

console.log(occurances)

    let newSum = 0;
    leftList.forEach((item) => {
        console.log('item: ', item);
        console.log('occurances: ', occurances.get(item));
        console.log('--------------------------------------')
        const occurance =  occurances.get(item);

        if (occurance !== undefined) {
            newSum += item * occurance;
        }
 
    });
    console.log(newSum);
}


compareLists('input.txt').catch(console.error);