module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    let nth = req.body.nth
    
    var memo = {};

    memo[0] = 0;
    memo[1] = 1;

    function fib(n) {
        var sign = n >= 0 ? 1 : -1;
        n = Math.abs(n);

        // If we already calculated the value, just use the same
        if(memo[n] !== undefined)
            return sign*memo[n];

        // Else we will calculate it and store it and also return it
        return sign*(memo[n] = fib(n-1)+fib(n-2));
    }
    
    let answer = fib(nth)

    context.res = {
        body: answer.toString()
    };
}