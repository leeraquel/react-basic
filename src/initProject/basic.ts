let num: number = 1;
let str: string = "hi";
let isTrue: boolean = false;
let undef: undefined = undefined;
let empty: null = null;

console.log(num);

// 원시타입의 경우 타입 작성하지 않아도 ts가 알아서 타입을 추론
let isTrue2 = true;
let udef2;
let empty2 = null;

// array의 경우 요소의 타입을 명시해야함.

// 배열의 요소의 타입이 한 가지인경우
let arr: number[] = [1, 2, 3, 4, 5];
let arr2: Array<string> = ["hi", "hello"];

// 배열 요소의 타입이 여러 개인 경우
let arr3: (number | string)[] = [1, 2, 3, "가", "나"];
let arr4: (boolean | null | Array<number>)[] = [true, false, null, [4, 22]];
let arrAny: any[] = [1, 2, 3, false, ["a", "b", "c", 3, false], null];

let obj: object = { name: "raquel", age: 23 };

// -----------------------------------------------------------------

// 타입 추론 : 타입을 지정해주지 않아도 타입스크립트가 암묵적으로 지정해줌
let aa = 5;
let bb = "str";
let cc = true;
let dd = null;
let ee;

// aa = '5'
// 타입 지정하지 않아도 다른 타입이 들어오면 타입스크립트에서 오류 반환함
ee = 5;
// 선언만 한 변수의 경우 any type으로 들어감
ee = "abc";
