let num: number = 1;
let str: string = "hi";
let isTrue: boolean = false;
let undef: undefined = undefined;
let empty: null = null;
let obj: object = { greeting: "hello" };

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
