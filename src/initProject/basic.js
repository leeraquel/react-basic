var num = 1;
var str = "hi";
var isTrue = false;
var undef = undefined;
var empty = null;
var obj = { greeting: "hello" };
// 원시타입의 경우 타입 작성하지 않아도 ts가 알아서 타입을 추론
var isTrue2 = true;
var udef2;
var empty2 = null;
// array의 경우 요소의 타입을 명시해야함.
// 배열의 요소의 타입이 한 가지인경우
var arr = [1, 2, 3, 4, 5];
var arr2 = ["hi", "hello"];
// 배열 요소의 타입이 여러 개인 경우
var arr3 = [1, 2, 3, "가", "나"];
var arr4 = [true, false, null, [4, 22]];
var arrAny = [1, 2, 3, false, ["a", "b", "c", 3, false], null];
