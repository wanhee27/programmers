function solution(n) {
    const strNum = n.toString();
    const numArray = strNum.split('');
    const sortArray = numArray.sort((a,b)=>b-a);
    const answer = Number(sortArray.join(''));
    return answer;
}