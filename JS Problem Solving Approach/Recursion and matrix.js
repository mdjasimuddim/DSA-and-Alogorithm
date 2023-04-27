//Recursion (calling function by itself)
// Calling function by itself (infinitive)
// always deal with a base condition to stop the recursion
// some sort of change in argument

function flatten(arr)
{
    let newArr = [];
    for(let i = 0; i < arr.length; i++){
        console.log(typeof arr[i]);
        if(Array.isArray(arr[i])){
         newArr =  newArr.concat(flatten(arr[i]));
        }else{
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
// console.log(flatten([1,2,[[3]],[4,5]]));
console.log(flatten([1,2,3,4,5]));


//helper method recursion

function collectStrings(obj)
{
    let stringsArr = [];
    function gatherString(o)
    {
        for(let key in o){
            if(typeof o[key] === 'object'){
                return gatherString(o[key]);
            }else{
                stringsArr.push(o[key]);
            }
        }
    }
    gatherString(obj);
    console.log(stringsArr);
}

const obj = {
    stuff:"foo",
    data:{
        val:{
            thing:{
                info:"bar",
                moreInfo:{
                    evenMoreInfo:{
                        weMadeIt:"baz"
                    }
                }
            }
        }
    }
}
collectStrings(obj);









