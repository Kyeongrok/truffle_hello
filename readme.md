# truffle hello
트러플(truffle)로 개발환경 구축하고 배포하고 test하고 hello출력하기

## 필요한 것
1. nod.js, npm
2. npm i -g truffle
3. ganache(가나슈) 테스트용 네트워크

## ganache-cli
맥이 아니거나 cli가 편한 경우 이걸 쓰면 된다.

포트 기본값이 8545다 truffle.js에 포트번호는 8545로 바꿔주어야 한다.

* npm i -g ganache-cli
* ganache-cli -u 0


## 실행하는 방법
* truffle compile
* truffle migrate --network development --compile-all --reset
* truffle test