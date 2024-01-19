function solution(x) {
    var strNum = String(x).split("");
    var sum = 0;
    for (var i = 0; i < strNum.length; i++){
        sum += Number(strNum[i])
    }
    return (x % sum === 0 ? true : false);
}