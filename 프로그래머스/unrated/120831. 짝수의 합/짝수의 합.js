function solution(n) {
    var anwer = 0;
    for (var i = 0; i <= n; i++) {
        if (i % 2 == 0)
            anwer += i;
    }
    return anwer;
}