// # 문제28 : 2-gram

// **2-gram**이란 문자열에서 2개의 연속된 요소를 출력하는 방법입니다.

// 예를 들어 'Javascript'를 2-gram으로 반복해 본다면 다음과 같은 결과가 나옵니다.

// 입력
// Javascript

// 출력
// J a
// a v
// v a
// a s
// s c
// c r
// r i
// i p
// p t

// 입력으로 문자열이 주어지면 2-gram으로 출력하는 프로그램을 작성해 주세요.

// 먼저 문자열인지 확인하기
// 문자열이라면 문자열의 길이를 확인한 후 0,1 번째/ 1,2 / 2,3 / 3,4 / 4,5 / ... 끝전, 끝 까지 반복해서 문자를 반복하기
// 예를들어 입력받은 값이 'happy'라면
// h a
// a p
// p p
// p y

// const input = prompt('문자열을 입력하세요.');

// if (typeof input === 'string') {
//   for (let i = 1; i < input.length; i++) {
//     `${input[i - 1]} ${input[i]}`;
//   }
// } // 이 식은 맨 끝 값만 나온다.

// for (let i = 2; i <= 9; i++){
//     for (let j = 1; j<= 9; j++){
//         console.log(i * j);
//     }
// } // 구구단 만들기 식을 참고 해서 내가 원하는 값을 콘솔로그로 묶는다.

const input = prompt('문자열을 입력하세요.');

if (typeof input === 'string') {
  for (let i = 1; i < input.length; i++) {
    console.log(`${input[i - 1]} ${input[i]}`);
  }
}
