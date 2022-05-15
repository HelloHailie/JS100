// # 문제19 : 제곱을 구하자

// 공백으로 구분하여 두 숫자 a와 b가 주어지면, **a의 b승**을 구하는 프로그램을 작성하세요.

// 제곱 자체가 몇 번 반복해서 곱하는가이다. 그래서 반복문을 사용해보자.

const squared = prompt('공백으로 구분하여 두 숫자 a와 b를 입력하세요.'); // 두 숫자를 입력받고

let splitAandB = squared.split(' '); // 공백으로 구분하고 (split를 사용했기 때문에 배열이 생긴다.)

const a = splitAandB[0];
const b = splitAandB[1]; // 배열을 사용해서 a와 b를 나눈다.

let result = 1; // 곱셈을 누적해서 할당을 해줄거니까 1로 초기화를 해준다.
for (let i = 1; i <= b; i++) {
  // 임의의 변수 i를 입력받은 b까지 반복해주고,
  result = result * a; // a를 곱해서 차곡차곡 result에 쌓아준다.
}
console.log(result);
