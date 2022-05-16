// # 문제29 : 대문자만 지나가세요

// 진구는 영어 학원 아르바이트를 하고 있습니다. 반 아이들은 알파벳을 공부하는 학생들인데 오늘은 대문자 쓰기 시험을 봤습니다.

// **알파벳 하나만을 입력하고 그 알파벳이 대문자이면 YES를 아니면 NO를 출력하는 프로그램**을 만들어 주세요.

// 1. 유저에게 input 값 받기
// 2. .toUpperCase()를 써서 이것과 비교를 해서 boolean 값을 출력하자
// toUpperCase 뒤에 꼭 ()를 써줘야한다.

const input = prompt('알파벳 하나만 입력하세요.');
if (input === input.toUpperCase()) {
  true;
} else {
  false;
}
