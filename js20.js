// # 문제20 : 몫과 나머지

// 공백으로 구분하여 두 숫자가 주어집니다.
// 두번째 숫자로 첫번째 숫자를 나누었을 때 **그 몫과 나머지를 공백으로 구분하여 출력하세요.**

// 입출력

// 입력 : 10 2
// 출력 : 5 0

const inputNum = prompt('공백으로 구분하여 두 숫자를 입력하세요.'); // 두 수를 입력받고
const splitNum = inputNum.split(' '); // 공백으로 나눈 뒤, 배열로 두 수를 나눠준다.

const num1 = Number(splitNum[0]); // 계산을 해야하니 Number로 감싸서 숫자로 만들어준다.
const num2 = Number(splitNum[1]);

console.log(num1 / num2 + ' ' + (num1 % num2));
