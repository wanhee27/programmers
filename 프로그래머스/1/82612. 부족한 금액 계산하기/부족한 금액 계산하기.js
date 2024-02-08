function solution(price, money, count) {
    let cost = 0;
    for(let i=1; i<=count; i++){
        cost += price*i
    }if(cost>money){
        return cost-money
    }else{
        return 0
    }
}