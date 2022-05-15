// # 문제16 : 로꾸거

// 문장이 입력되면 거꾸로 출력하는 프로그램을 만들어 봅시다.

const reverse = prompt('문장을 입력하세요. 거꾸로 출력됩니다.');
let result = '';

for (let i = reverse.length - 1; i >= 0; i--) {
  result += reverse[i];
}
console.log(result);

// 결과값을 받을 빈 문자열을 생성해 둔 후, for 문으로 입력받은 문자열을 문자의 갯수에서 0까지 반복해서 차곡차곡 쌓아서 그 결과를 출력한다.
