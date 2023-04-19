let empty1 = [];
let empty2 = [,,,];
let all = [1,'test',3.14];
let coffe = ["americano", "latte"]; // 이름, 괄호
const cars = ["Saab", "Volvo", "BMW"]; // 상수 배열
cars[0] = "Jaab"; // 0번 인덱스 값 수정
//const cars = new Array("Saab", "Volvo", "BMW");
let car = cars[2]; // 변수에 배열 값 초기화
cars[1] = Date.now(); // 값에 객체 삽입 가능

document.getElementById("search_message").innerHTML = cars; // 이름 참조 cars는 html 문서 안의 서치 메세지라는 아이디를 가진 공간으로 배정됨

console.log(cars); // 배열 출력
console.log(typeof cars); // 배열 타입 : 객체
