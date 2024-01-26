function solution(phone_number) {
    var answer = "";
    var answer2 = "";
    for ( let i = 0; i<phone_number.length; i++){
        if(i<phone_number.length-4){
          answer+= "*"
        } else if(i>phone_number.length-4){
          answer2 = phone_number.slice(-4)
        }
    }
 return answer+answer2;
}