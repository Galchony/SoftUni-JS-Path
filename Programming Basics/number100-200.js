function number100To200(args) {
    let num = parseInt(args[0]);

    if (num < 100) {
        console.log("Less than 100");
    }
    else if (num > 200) {
        console.log("Greater than 200");
    }
    else {
        console.log("Between 100 and 200");
    }
}
number100To200(["95"]);
number100To200(["120"]);
number100To200(["210"])