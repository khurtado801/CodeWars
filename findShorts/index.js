findShorts = (s) => {
    let strSplit = s.split(' ');
    let shortestStr = strSplit[0].length;

    for(let i = 1; i < strSplit.length; i++) {
        if(strSplit[i].length < shortestStr) {
            shortestStr = strSplit[i].length;
        }
    }
    return shortestStr;
}

console.log(findShorts('bitcoin take over the world maybe who knows perhaps'));
