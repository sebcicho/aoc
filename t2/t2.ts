import * as fs from 'fs';
import * as readline from 'readline';


async function countReports(filePath: string) {
    const fileStream = fs.createReadStream(filePath);

    const rl = readline.createInterface({
        input: fileStream,
        crlfDelay: Infinity,
    });

    let safeReports = 0;
    for await (const line of rl) {
        console.log('line: ', line)
        const reports: number[] = line.split(' ').map(Number);
        const safe = checkReports(reports);
        if(safe) {
            safeReports++;
        } else {
            for (let i = 0; i < reports.length; i++) {
                
                const reportsSlice = reports.slice();
                reportsSlice.splice(i, 1);
                const safe = checkReports(reportsSlice);
                if (safe) {
                    safeReports++;
                    break;
                }
            }

        }
    }
    console.log('safe: ', safeReports);
    
}

function checkReports(reports: number[]): boolean {
    let direction=0;  // 0 -> not specified 1 -> asc 2 -> dsc
    let errors = 0;
    for (let i = 0; i < reports.length -1; i++) {
        const prevDir = direction;
        const first = reports[i];
        const next = reports[i + 1];
        
        if (first > next) {
            direction = 2;
            if (first - next > 3) {
                errors++;
            }
        } else if (first < next) {
            direction = 1;
            if (next - first > 3) {
                errors++;
            }
        } else if (i !== 0 && first === next ){
            errors++;
        }

        if (i !== 0 && prevDir !== direction) {
            errors++;
        }
        
        if (i === reports.length -2 && errors <= 0) {
            
            return true;
        }

    }
    return false;
}

countReports('input.txt').catch(console.error);