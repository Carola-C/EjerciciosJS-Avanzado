let promise1 = new Promise((resolve, reject)=> {
    setTimeout( function(){
        resolve("Resolución correcta!! ");
    }, 250);
});

promise1.then( mensaje => {
    console.log(`Mensaje de resolución:${mensaje}`);
});

let promise2 = new Promise(function(resolve, reject){
    setTimeout( function() {
        reject('Done! ');
    }, 250);
})
.then( function(e) {console.log('done', e);})
.catch( function(e) {console.log('catch: ', e)});