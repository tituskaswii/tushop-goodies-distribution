Here’s a detailed `README.md` file for the goodies distribution solution:

# Goodies Distribution

This Node.js application distributes goodies among employees in such a way that minimizes the price difference between the highest and lowest priced goodies selected for distribution. The application reads the input data from a file, processes it, and writes the output to another file.

## Problem Statement

The HR team of a company has a set of goodies, each with a different price tag. They need to distribute the goodies among a specified number of employees, ensuring that each employee receives one goodie. The goal is to select the goodies such that the difference between the highest and lowest priced goodie is minimized.

### Input Format

The input is read from a file named `sample_input.txt`, which should contain:

- The number of employees
- A list of goodies with their prices

**Sample Input (`sample_input.txt`):**

```
Number of employees: 4
Goodies and Prices:
Fitbit Plus: 7980
IPods: 22349
MI Band: 999
Cult Pass: 2799
Macbook Pro: 229900
Digital Camera: 11101
Alexa: 9999
Sandwich Toaster: 2195
Microwave Oven: 9800
Scale: 4999
```

### Output Format

The output is written to a file named `sample_output.txt`, which contains:

- The selected goodies for distribution
- The difference between the highest and lowest priced goodies

**Sample Output (`sample_output.txt`):**

```
The goodies selected for distribution are:
Fitbit Plus: 7980
Microwave Oven: 9800
Alexa: 9999
Digital Camera: 11101
And the difference between the chosen goodie with highest price and the lowest price is 3121
```

## Setup

### Prerequisites

- [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/tituskaswii/goodies-distribution.git
   ```

2. Navigate to the project directory:

   ```bash
   cd goodies-distribution
   ```

Note: No need to Install any dependencies since we are only using Nodejs inbuilt libraries i.e. fs & path:

### Running the Application

1. Ensure that the `sample_input.txt` file is in the project directory and contains the correct input format.
2. Run the application:

   ```bash
   node index.js
   ```

3. Check the `sample_output.txt` file for the results.

## Code Explanation

### Key Components

- **File Reading/Writing**: The application uses the built-in `fs` module to read the input and write the output files.
- **Parsing Input**: The input file is parsed to extract the number of employees and the list of goodies with their prices.
- **Finding Minimum Difference**: The goodies are sorted, and a sliding window approach is used to find the selection of goodies that minimizes the price difference between the highest and lowest priced goodie.
- **Output Generation**: The results are formatted and written to the output file.

### Main Functions

- `readInputFile(filePath)`: Reads the input from the specified file.
- `parseInput(input)`: Parses the input data to extract the number of employees and goodies.
- `findGoodiesForEmployees(numEmployees, goodies)`: Finds the selection of goodies that minimizes the price difference.
- `writeOutputFile(filePath, chosenGoodies, minDiff)`: Writes the output to the specified file.

This README provides a comprehensive overview of the project, making it easier for others to understand and use your solution.