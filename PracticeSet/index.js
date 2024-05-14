// Callback function 

function callback() {
    
    console.log("Addition Complete..");
}

const add = function (x,y, callback) {
    result =  x + y;
    console.log(result);
    callback();

}

add(10, 4, callback);