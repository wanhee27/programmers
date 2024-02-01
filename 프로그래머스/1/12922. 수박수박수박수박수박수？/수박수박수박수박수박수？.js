function solution(n) {
    let count = Math.ceil(n/2)
    var answer = '수박'.repeat(count);
    return answer.slice(0,n);
}