function evenPowersOfTwo(args) {
    let n = Number(args[0]);
    for(let i=0; i<=n; i+=2) {
        console.log(Math.pow(2, i));
    }
}
evenPowersOfTwo([7]);