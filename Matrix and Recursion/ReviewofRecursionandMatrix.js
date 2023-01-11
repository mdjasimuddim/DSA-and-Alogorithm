//Recursion(calling function by itself)
//calling function by itself(infinitive)
//always deal with a base condition to stop recursion
//some sort of change in arguments 

//flatten([1,2,3,[4,5] ])  //[1,2,3,4,5]
//flatten([1,[2,[3,4],[[5]]]])  //[1,2,3,4,5]
//flatten([[1],[2],[3]])  //[1,2,3]
//flatten([[[[1],[[[2]]],[[[[[[[3]]]]]]]]]])  //[1,2,3]

function flatten(arr)
{
    let newArr = [];
    for(let i = 0; i < arr.length; i++){
        //console.log(arr[i]);
        if(Array.isArray(arr[i])){
           newArr = newArr.concat(flatten(arr[i]))
        }
        else{
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
console.log(flatten([[1],[2],[3]]));


//find string from multiple inside object
//helper method recursion

function collectStrings(obj)
{
    let newArr = [];
    function gatherStrings(o){
        for(let key in o){
            if(typeof(o[key]) == 'object'){
                return gatherStrings(o[key]);
            }else{
                newArr.push(o[key]);
            }
        }
    }
    gatherStrings(obj);
    return newArr;
}
const obj = {
    stuff:'foo',
    data:{
        val:{
            thing:{
                info:'bar',
                moreInfo:{
                    evenMoreInfo:{
                        weMadeIt:"baz"
                    }
                }
            }
        }
    }
}
console.log(collectStrings(obj));

//Direct recursion

function collectStringsDirect(obj1)
{
    let stringArr = [];
    for(let key in obj1){
        if(type(obj1[key]) == 'object'){
            stringArr.concat(collectStringsDirect(obj[key]))
        }else{
            stringArr.push(obj1[key])
        }
    }
}

const obj1 = {
    stuff:'foo',
    data:{
        val:{
            thing:{
                info:'bar',
                moreInfo:{
                    evenMoreInfo:{
                        weMadeIt:"baz"
                    }
                }
            }
        }
    }
}
console.log(collectStrings(obj));