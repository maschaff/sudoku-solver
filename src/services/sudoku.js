import DancingLinks from './dancingLinks'

export default {

    solve(sudoku) {
        let binaryMatrix = this.convertSudokuToBinaryMatrix(sudoku);
        this.printBinaryMatrix(binaryMatrix);
        return DancingLinks.solveWithDancingLinks(binaryMatrix);
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
                //result += matrix[i][j] + " ";
            }
            result += "\n";
        }
        console.log(result);
    }
}