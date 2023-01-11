//spatrial matrix 3*3 and 4*4
function matrix(n)
{
    const results = [];
    for(let i = 0; i < n; i++){
        results.push([]);
    }
    let startColumn = 0;
    let endColumn = n - 1;
    let startRow = 0;
    let endRow = n - 1;
    let counter = 1;
    while( startColumn <= endColumn && startRow <= endRow){
        //top row
        for(let i = startColumn; i <= endColumn; i++){
            results[startRow][i] = counter;
            counter++;
        }
        startRow++;
        //rightcolumn
        for(let i = startRow; i <= endRow; i++){
            results[i][endColumn] = counter;
            counter++;
        }
        endColumn--;
        //Bottom row
        for(let i = endColumn; i >= startColumn; i--){
            results[endRow][i] = counter;
            counter++;
        }
        endRow--;
        //startcolumn
        for(let i = endRow; i >= startRow; i--){
            results[i][startColumn] = counter;
            counter++;
        }
        startColumn++;
    }
    console.log(results);
}
matrix(5);

var generateMatrix = function(n) {
    const results = [];
    for(let i = 0; i < n; i++){
        results.push([]);
    }
    let startColumn = 0;
    let endColumn = n - 1;
    let startRow = 0;
    let endRow = n - 1;
    let counter = 1;
    while( startColumn <= endColumn && startRow <= endRow){
        //top row
        for(let i = startColumn; i <= endColumn; i++){
            results[startRow][i] = counter;
            counter++;
        }
        startRow++;
        //rightcolumn
        for(let i = startRow; i <= endRow; i++){
            results[i][endColumn] = counter;
            counter++;
        }
        endColumn--;
        //Bottom row
        for(let i = endColumn; i >= startColumn; i--){
            results[endRow][i] = counter;
            counter++;
        }
        endRow--;
        //startcolumn
        for(let i = endRow; i >= startRow; i--){
            results[i][startColumn] = counter;
            counter++;
        }
        startColumn++;
    }
    console.log(results);
};
generateMatrix(3);