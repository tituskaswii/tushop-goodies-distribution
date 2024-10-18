const fs = require('fs');
const path = require('path');

// Function to read the input file
function readInputFile(filePath) {
    const input = fs.readFileSync(filePath, 'utf-8').split('\n').map(line => line.trim());
    return input;
}

// Function to parse the input and return the number of employees and the list of goodies with their prices
function parseInput(input) {
    const numEmployees = parseInt(input[0].split(':')[1].trim());
    const goodies = [];

    for (let i = 2; i < input.length; i++) {
        const [goodie, price] = input[i].split(':').map(s => s.trim());
        goodies.push({ name: goodie, price: parseInt(price) });
    }

    return { numEmployees, goodies };
}

// Function to find the goodies with the minimum price difference
function findGoodiesForEmployees(numEmployees, goodies) {
    // Sort the goodies by price in ascending order
    goodies.sort((a, b) => a.price - b.price);

    let minDiff = Infinity;
    let chosenGoodies = [];

    // Loop through the sorted goodies and find the group with the minimum difference
    for (let i = 0; i <= goodies.length - numEmployees; i++) {
        const currentSet = goodies.slice(i, i + numEmployees);
        const diff = currentSet[currentSet.length - 1].price - currentSet[0].price;

        if (diff < minDiff) {
            minDiff = diff;
            chosenGoodies = currentSet;
        }
    }

    return { chosenGoodies, minDiff };
}

// Function to write the output to a file
function writeOutputFile(filePath, chosenGoodies, minDiff) {
    const output = [];

    output.push('The goodies selected for distribution are:');
    chosenGoodies.forEach(goodie => {
        output.push(`${goodie.name}: ${goodie.price}`);
    });
    output.push(`And the difference between the chosen goodie with highest price and the lowest price is ${minDiff}`);

    fs.writeFileSync(filePath, output.join('\n'));
}

// Main function to execute the program
function main() {
    const inputFilePath = path.join(__dirname, 'sample_input.txt');
    const outputFilePath = path.join(__dirname, 'sample_output.txt');

    // Read and parse input file
    const input = readInputFile(inputFilePath);
    const { numEmployees, goodies } = parseInput(input);

    // Find goodies with minimum price difference
    const { chosenGoodies, minDiff } = findGoodiesForEmployees(numEmployees, goodies);

    // Write the output to file
    writeOutputFile(outputFilePath, chosenGoodies, minDiff);

    console.log('Output written to sample_output.txt');
}

main();