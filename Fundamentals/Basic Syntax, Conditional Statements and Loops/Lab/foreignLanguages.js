function foreignLanguages(arg) {
    let country = arg;
    if (country == "USA" || country == "England") {
        console.log("English");
    }
    else if (country == "Spain" || country == "Argentina" || country == "Mexico") {
        console.log("Spanish");
    }
    else {
        console.log("unknown");
    }
}
foreignLanguages("Germany");