//write a function that accepts a positive integer number N
//the function should console log a pyramid shape
//with N levels using # character. Make sure the 
//pyramid has spaces on both left and right hand sides

//Examples
// pyramid(1)
//'#'
//pyramid(2)
//' # '
//'###'

//pyramid(3)
//'  #  '
//' ### '
//'#####'

function pyramid(n){
    let midpoint = Math.floor(2 * (n -1)/2);
      for(let i = 0; i < n; i++){
        let star = '';
        for(let j = 0; j < 2 * n - 1; j++){
            if(midpoint - i <= j && midpoint + i >= j){
                star += '#';
            }else{
                star += ' ';
            }
        }
        console.log(star);
    }
}
console.log(pyramid(5))