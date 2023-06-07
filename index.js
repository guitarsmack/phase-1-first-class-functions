function receivesAFunction(first) {
    return first();
}

function returnsANamedFunction() {
    return function second() {

    }
}

function returnsAnAnonymousFunction() {
    return function() {
        
    }
}