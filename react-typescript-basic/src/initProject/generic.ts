//generic
// 타입 지정이 자꾸 바뀌는데, 함수 구조는 똑같아?
// 타입 지정또한 T를 이용해서 매개변수 처리 해버리는 거임
// 같은 함수를 동적으로 사용하려고 쓰는 문법임
// 선언시 <T> 로 타입이 들어갈 자리에 다 T를 넣어주면 되는거임

function printSomething<T>(x: T): T {
  console.log(x);
  return x;
}

printSomething<string>("hi");

// 두 개의 다른 인자 제네릭으로 받기
function getTwoParameters<T, K>(x: T, y: K): void {
  console.log(x, y);
}

getTwoParameters<number, string>(1, "2");
getTwoParameters<number[], string[]>([1], ["3"]);

interface Phone<T> {
  name: string;
  company: string;
  price: number;
  options: T;
}

const iphone15: Phone<String> = {
  name: "iphone14",
  company: "apple",
  price: 1200000,
  options: "lightblue",
};

const zplip2: Phone<string[]> = {
  name: "zplip2",
  company: "samsung",
  price: 15000000,
  options: ["black", "pink", "orange"],
};
