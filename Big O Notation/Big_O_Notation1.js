//Big(O)
//How number of operation increases/relates with input
//Best case (omega)
//average case (theta)
//worst case(O)
//Big (O) = O(n)
function log(n)
{
    let count = 0;
    for(let i = 0; i < n; i++){
        count++;
        console.log(i);
    }
    console.log(count);
}

log(14)

//Big(O) = O(n^2)
function log1(n)
{
    let count = 0;
    for(let i = 0; i < n; i++){
        for(let j = 0; j < n; j++){
            console.log(i,j);
            count++;
        }
    }
}

log1(3);

function log2(n)
{
    let count = 0;
    for(let i = 0; i < n; i++){
        for(let j = 0; j < n; j++){
            console.log(i,j);
            count++;
        }
    }
}

log2(4);
//O(2n) = O(n)
// Big(O) = O(n)
function log3(n)
{
    let count = 0;
    for(let i = 0; i < n; i++){
        for (j = 0; j < 2;j++){
            console.log(i,j);
            count++;
        }
    }
    console.log(count);
}
log3(4);
// Big(O)  = O(n) + O(n) = O(2n)
function log4(n)
{
    let count = 0;
    for(let i = 0; i < n; i++){
        count++;
    }
    for(let i = 0; i < n; i++){
        count++;
    }
    console.log(count);
}
log4(4)

//O(n*n*n) = O(n^3)
function log5(n)
{
    let count = 0;
    for(let i = 0; i < n; i++){
        for(let j = 0; j < n; j++){
            for(let k = 0; k < n; k++){
                console.log(i,j,k);
                count++;
            }
        }
    }
   console.log(count); 
}
log5(3);

//O(n^n + n) = O(n^2)  //quadratic
function log6(n)
{
    let count = 0;
    for(let i = 0; i < n; i++){
        for(let j = 0; j < n; j++){
           console.log(i,j);
           count++;
        }
    }
    for(let k = 0; k < n; k++){
        console.log(k);
        count++;
    }
   console.log(count); 
}
log6(3);
//O(1)  //constant
function addItems(n)
{
    console.log(n+n+n);
}
addItems(10);