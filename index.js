function receivesAFunction(callBack){
    return callBack();
}

function returnsANamedFunction(){
    return function namedFunction(){};
}

function returnsAnAnonymousFunction(){
    return function(){}
}