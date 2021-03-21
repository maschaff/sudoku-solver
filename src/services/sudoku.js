import DancingLinks from './dancingLinks'

export default {

    // eslint-disable-next-line no-unused-vars
    solve(sudoku) {

        let binaryMatrix = this.generateSudokuToBinaryMatrix(9);
        this.printBinaryMatrix(binaryMatrix);

        return DancingLinks.solveWithDancingLinks(binaryMatrix);
    },

    /*
    * Each row represents a number in a given position on the grid i.e.
    * 4 constraints are represented in each row by nxn columns
    *
    * 1. One number per cell
    * 2. One instance of a number per row
    * 3. One instance of a number per col
    * 4. One instance of a number per region
    */
    generateSudokuToBinaryMatrix(n) {
        let result = this.initEmptyBinaryMatrix(n);
        let nxn = Math.pow(n, 2);

        // generate complete binary matrix for a sudoku of a given size n
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                for (let k = 0; k < n; k++) {
                    // (candidate, row, col) - > (k, i, j)
                    let rowIndex = (i * nxn) + (j * n) + k;
                    let region_offset_row = Math.floor( i/Math.sqrt(n) ) * Math.sqrt(n) * n;
                    let region_offset_col = Math.floor( j/Math.sqrt(n) ) * n;

                    let constraint1 = (i * n) + j ;
                    let constraint2 = (nxn) + (i * n) + k;
                    let constraint3 = (nxn * 2) + (j * n) + k;
                    let constraint4 = (nxn * 3) + region_offset_row + region_offset_col + k;

                    result[rowIndex][constraint1] = 1;
                    result[rowIndex][constraint2] = 1;
                    result[rowIndex][constraint3] = 1;
                    result[rowIndex][constraint4] = 1;
                }
            }
        }

        return result;
    },

    initEmptyBinaryMatrix(n) {
        let result = [];
        let numRows = n * n * n;
        let numCols = n * n * 4;

        for(let i = 0; i < numRows; i++) {
            result[i] = [];
            for(let j = 0; j < numCols; j++) {
                result[i].push(0);
            }
        }

        return result;
    },

    printBinaryMatrix(matrix) {
        let result = ""
        for (let i = 0; i < matrix.length; i++) {
            for (let j = 0; j < matrix[i].length; j++) {
                if(matrix[i][j] > 0) {
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