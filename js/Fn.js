const Fn = (x) => {
    //y = (x^2)/1000-120
    return (x * x) / 1000 - 120;
}
const differentialFn = (x) => {
    //微分した関数
    //y = x / 500
    return x / 500;
}

const callFn = (n) => {
    let result = [];

    for(let i = 0; i < n; i++) {
        result.push(Fn(i));
    }
    return result;
}