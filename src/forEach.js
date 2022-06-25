Array.prototype._forEach = function (fn, thisArg) {
    let arr = this;
    for (let i = 0; i < arr.length; i++) {
        fn.call(thisArg, arr[i], i, arr)
    }
}

[1,2,3]._forEach((x)=>console.log(x))
