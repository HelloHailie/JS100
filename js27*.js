// # 문제27 : 객체 만들기

// 첫번째 입력에서는 학생의 이름이 공백으로 구분되어 입력되고, 두번째에는 그 학생의 수학 점수가 공백으로 구분되어 주어집니다.

// 두 개를 합쳐 **학생의 이름이 key**이고 **value가 수학 점수**인 객체를 출력해주세요.

// 입력
// Yujin Hyewon
// 70 100

// 출력
// {'Yujin': 70, 'Hyewon': 100}

const name = prompt('학생의 이름이 공백으로 구분하여 입력하세요.').split(' ');
const mathScore = prompt(
  '그 학생의 수학 점수가 공백으로 구분하여 입력하세요.'
).split(' ');

// 빈 객체를 만들어서 그 안에 추가하는 식으로 만들자.

const result = {};

for (let i = 0; i < name.length; i++) {
  result[name[i]] = Number(mathScore[i]); // 위에 출력값을 보면 이름에는 ''가 붙어있다. 이건 어떻게 하는걸까? // 추가공부필요!
}

console.log(result);
