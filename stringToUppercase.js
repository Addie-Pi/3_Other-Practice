// transform string to uppercase without using exsiting function

let demoStr = "jAvaSCRipt";

toUppercasefn = (sourceStr) => {
    let result = "";
    for(let i = 0; i < sourceStr.length; i++){
        let char = sourceStr.charCodeAt(i);

        // use ASCII code
        if (char >= 97 && char <= 122) {
          result += String.fromCharCode(char - 32)
        } else {
          result += sourceStr[i]
        }
    }

    console.log("result: ", result);
}

toUppercasefn(demoStr);
