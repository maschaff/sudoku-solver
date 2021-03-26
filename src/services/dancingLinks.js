export default {
    /* Implementation of Algorithm X using dancing links method
     * https://www.ocf.berkeley.edu/~jchu/publicportal/sudoku/0011047.pdf
     */

    solveExactCover(data) {
        let h = this.buildToroidalDoublyLinkedList(data);
        let solution = this.algorithmX(h);
        this.printDataStructure(h);
        return this.listHeaderNames(solution);
    },

    algorithmX(h) {
        return h;
    },

    /* Builds a toroidal doubly linked list representing a given sparse binary matrix.
     * All 1's in the matrix are represented as data objects linked in cols and rows.
     * A row in a binary matrix will correlate to a column in this data structure.
     * The column header name will correlate to a row index
     */
    buildToroidalDoublyLinkedList(matrix){

        //establish root of active headers list
        let h = {
            left: null,
            right: null
        }

        let previous = h;

        //build doubly linked list of headers from root
        for(let i = 0; i < matrix.length; i++) {
            let col_header = {
                name: i,
                size: 0,
                left: previous,
                right: null,
                up: this,
                down: this,
            };

            previous.right = col_header;
            previous = col_header
        }

        //wrap header list back around
        previous.right = h;
        h.left = previous;

        //populate data structure doubly linking rows and columns
        for(let j = 0; j < matrix[0].length; j++) {
            let header = h;
            let rh = {
                left: this,
                right: this,
            }
            let previous = rh;

            for(let i = 0; i < matrix.length; i++) {
                header = header.right;

                if(matrix[i][j] === 1) {
                    let obj = {
                        left: previous,
                        right: previous.right,
                        up: header.up,
                        down: header,
                        column: header
                    }
                    previous.right = obj;
                    previous = obj;

                    header.up.down = obj;
                    header.up = obj;
                    header.size++;
                }
            }

            previous.right = rh.right;
            rh.right.left = previous;
        }

        return h;
    },

    //reduces data structure to a list of header names
    listHeaderNames(h){
        let current_header = h.right;
        let result = [];

        while(current_header !== h) {
            result.push(current_header.name);
            current_header = current_header.right;
        }

        return result;
    }
}