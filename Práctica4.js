new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve(10);
    }, 250);
})
.then( function(num) {
    console.log('first then: ', num);
    return num*2;
})
.then(function(num){
    console.log('second then: ', num);
    return num*3;
})
.then(function(num) {
    console.log('last then: ',num)
});