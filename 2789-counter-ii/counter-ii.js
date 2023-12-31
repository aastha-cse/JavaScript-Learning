/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    let x=init;
    let obj={
        increment(){
            x++;
            return x;
        },
        decrement(){
            x--;
            return x;
        },
        reset(){
            x=init;
            return x;
        }
    };
    return obj;
    
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */