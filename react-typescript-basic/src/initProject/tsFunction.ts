// return 값이 없는 함수

function strConsole(str: string): void {
  console.log(str);
}

strConsole("hello world");

function returnStr(str: string): string {
  return str;
}

console.log(returnStr("hello typescript"));

// 옵셔널한 인자
// function jsPrint(a, b) {
//   console.log(a);
//   console.log(b);
// }

// jsPrint("hi", "hello");

// jsPrint("하나만");
// js에서는 가능하지만 ts 에서는 지원 안 하기 때문에 에러 발생
//

function tsPrint(a: string, b?: string): void {
  console.log(a);
  console.log(b);
}

tsPrint("hi", "greeting");

// 다른 방식으로 선언하기
function myFunction(a: number): void {
  console.log("function 키워드로 선언");
}

const myFunction2 = (a: number): void => {
  console.log("화살표 함수로 선언");
};

const myFunction3 = function (a: number): void {
  console.log("함수 표현식으로 선언");
};

// interface 에서 함수
interface Greeting {
  name: string;
  hi(): void; // hi라는 문자열을 콘솔에 찍음
  bye(str: string): void; // 파라미터로 받은 str을 콘솔에 찍음
}

const user: Greeting = {
  name: "raquel",
  hi() {
    console.log("Hello");
  },
  bye(str: string) {
    console.log(str);
  },
};

user.hi();
user.bye("byebye");

// -------------------------
// 인자의 타입은 함수 선언 시 인자에 바로 할당
// 함수의 타입은 인자를 받는 소괄호 뒤에 작성
// 만약 함수에 리턴값이 없다면 void
// 무한 루프는 never 쓰기

//----------------------------
