//# 문제2 : 배열의 내장함수
//<pass>부분에 배열 내장함수를 이용하여 코드를 입력하고 다음과 같이 출력되게 하세요.
//데이터
var arr = [200, 100, 300];
//pass
console.log(arr); // 100과 300 사이에 10000가 추가되었다. 배열 중간에 추가를 시키려면 splice함수를 쓰자 splice(복사시작인덱스,삭제할인덱스,추가할인덱스)
//100은 인덱스 2니까 2, 삭제할 인덱스는 없으니까 0, 10000를 추가할거니까 10000를 쓴다.
arr.splice(2, 0, 10000);

//출력
//[200, 100, 10000, 300]
