import DancingLinks from './dancingLinks'

export default {

    solve(sudoku) {
        let binaryMatrix = this.convertSudokuToBinaryMatrix(sudoku);
        let indexList = DancingLinks.solveExactCover(binaryMatrix);
        // return this.buildSolution(indexList, binaryMatrix);
        console.log(indexList);
        return indexList;
    },

    //Builds a solution given a list of indexes referencing a binaryMatrix representation of the sudoku puzzle
    buildSolution(indexList, binaryMatrix) {
        let solution = [];
        let n = binaryMatrix.length;
        let index = 0;

        for(let row = 0; row < n; row++){
            let values = [];

            for(let col = 0; col < n; col++){
                values.push(this.getValue(binaryMatrix[indexList[index++]]))
            }

            solution.push(values);
        }

        return solution;
    },

    // Determines the appropriate candidate for a position given a sparse array representing sudoku constraints
    getValue(row) {
        let n = Math.sqrt(row.length / 4);
        let offset = n * n;

        //we only need to look at the 2nd constraint to get the candidate (could also use the 3rd or 4th constraint)
        for(let i = offset; i < row.length - (offset * 2); i++){
            if(row[i] === 1) {
                return i - offset + 1 % n;
            }
        }

        return null;
    },

    // Builds a binary matrix representation of a given sudoku puzzle which can be solved as an exact cover problem
    convertSudokuToBinaryMatrix(sudoku) {
        let n = sudoku.length;
        let result = [];

        for (let row = 0; row < n; row++) {
            for (let col = 0; col < n; col++) {
                if (sudoku[row][col] != null) {
                    result.push(this.buildRow(sudoku[row][col] - 1, row, col, n));
                } else {
                    for (let cand = 0; cand < n; cand++) {
                        result.push(this.buildRow(cand, row, col, n));
                    }
                }
            }
        }

        return result;
    },

    /*  Builds a row representing a candidate in a given position on a sudoku board given the 4 sudoku constraints
     *  1. One number per cell
     *  2. One instance of a number per row
     *  3. One instance of a number per col
     *  4. One instance of a number per region
     */
    buildRow(cand, row, col, n) {
        let numCols = n * n * 4;
        let result = [];

        let region_offset_row = Math.floor(row / Math.sqrt(n)) * Math.sqrt(n) * n;
        let region_offset_col = Math.floor(col / Math.sqrt(n)) * n;

        let constraint1 = (row * n) + col;
        let constraint2 = (n * n) + (row * n) + cand;
        let constraint3 = (n * n * 2) + (col * n) + cand;
        let constraint4 = (n * n * 3) + region_offset_row + region_offset_col + cand;

        for (let i = 0; i < numCols; i++) {
            if (i === constraint1 || i === constraint2 || i === constraint3 || i === constraint4) {
                result.push(1);
            } else {
                result.push(0);
            }
        }

        return result;
    },

    printBinaryMatrix(matrix) {
        let result = ""

        for (let i = 0; i < matrix.length; i++) {
            for (let j = 0; j < matrix[i].length; j++) {
                if (matrix[i][j] > 0) {
                    result += matrix[i][j] + " ";
                } else {
                    result += "  ";
                }
            }
            result += "\n";
        }

        console.log(result);
    }
}