// TUPLE

let drink: [string, number] = ["아메리카노", 4500];
// 갯수와 순서가 정해져있는 배열을 튜플 타입이라고 말함
drink = ["라떼", 4800];

//push와 같은 배열에 추가, 삭제 요소가 동작할까?
drink.push("hi");
console.log(drink);
// push는 js의 유연한 성격을 바탕으로 작동함 !
// shift, pop도 작동함

// drink[3] = '수정은요?';
// 타입을 지정하지 않은 요소에 접근해서 수정하는 것은 불가능

// 배열에 spread 연산자 사용 가능
console.log(...drink);

// READ ONLY
// 길이를 특정하고, 타입과 순서를 '완벽히' 고정 시키기 위해 사용
let drink2: readonly [string, number] = ["바나나우유", 2000];
// drink2[0] = '딸기우유'

// ENUM
// js 오브젝트와 유사하지만 선언 이후로는 내용 추가 or 삭제 불가능
enum Auth {
  admin = 0,
  user = 1,
  guest = 2,
}

console.log(Auth.user, Auth.guest);

const userType: number = 2;
if (userType !== Auth.admin) {
  console.log("관리자 권한이 없습니다.");
}
if (userType !== Auth.user) {
  console.log("게스트 계정입니다.");
}

// 문자형 enum
enum Cafe {
  americano = "아메리카노",
  latte = "latte",
}
// enum의 경우 같은 타입으로 작성해주는 것이 좋음
enum coke {
  coda,
  pesi,
  zero,
  sprite = "스프라이트",
}

//enum 자동 값 할당
enum productType {
  food,
  cloth,
  shoes,
}
// 순서대로 0, 1, 2 숫자값으로 배정
console.log(productType.food);

// ------------------------------------------------------------
// js 변수선언과 동일하게 마음대로 값을 할당하고 수정할 수 있음
// any를 사용하는 경우 ts를 사용하는 의미 x
// 빈 배열 먼저 선언할 때, 받아오는 데이터 타입이 확실하지 않을 때,
// 할당해야하는 타입을 모를 때 사용하게 됨.
console.log("---any---");

let myVal: any = 1;
console.log(myVal);
myVal = "문자열로 바꿀거지";
console.log(myVal);
myVal = [1, 2, 3, "배열", true, undefined];
console.log(myVal);

// -------------------------
// 실습

const olimpic_newgame: readonly [object, boolean] = [
  {
    name: "쇼트트랙",
    type: "혼성 계주",
  },
  true,
];

// olimpic_newgame[1] = false;
console.log(olimpic_newgame);

// Interface
console.log("----interface-----");

interface Student {
  name: string;
  isPassed: boolean;
}

// interface 확장
interface Student {
  age: number;
  // interface의 확장은 extends 선언 없이 추가하고 싶은 키와 발류를 넣으면
  // 알아서 그 값을 추가해주고, 추가한 키를 선언하지 않은 객체에 대해 오류 메시지 반환함
}

// 위에서 선언한 student interface에서 age 키도 추가해야 에러가 나지 않음
const student1: Student = {
  name: "raquel",
  isPassed: true,
  age: 1,
  // age: 1, // student interface 선언 시 age 키는 없었으므로 에러 발생
};
