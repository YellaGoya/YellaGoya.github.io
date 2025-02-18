---
title: '자바스크립트 기초 : 호이스팅'
date: "2024-05-08T00:00:00.000Z"
description: 호이스팅이란 무엇일까? 그리고 왜 일어나는 것일까?
thumbnail: './thumbnail.webp'
categories:
  - 기술면접
  - Javascript
  - 호이스팅
---

### 인트로
---
> JavaScript 호이스팅은 **인터프리터가 코드를 실행하기 전에 함수, 변수, 클래스 또는 임포트(import)의 선언문을 해당 범위의 맨 위로 끌어올리는 것처럼 보이는 현상**을 뜻합니다.
> 

내가 아래에 선언 및 초기화 해둔 것을 위로 올린다는 것은 무엇일까? <br/>
더 깊이 들어가기 전 알아야 할 것은 호이스팅은 기능이 아닌 현상이다.

<br/>

### 함수 호이스팅 & 변수 호이스팅

---

아래 2가지 호이스팅 예시를 먼저 확인해보자.

```jsx
printHello(); // 정상적으로 'hello'출력.

function printHello() {
	console.log('hello');
}
```

```jsx
console.log(name); // 'undefined'출력, 하지만 'undeclared'에 대한 참조오류는 나지않는다.

var name = 'roscoe';
```

우리가 알고있는 자바스크립트 개념에서 코드는 순차적으로 읽고 실행된다.<br/>
하지만 위의 `printHello` `name` 2가지 경우, 참조하는 시점에 선언되어 있지 않은 함수 및 변수에 접근이 가능하고 함수의 경우 사용까지 가능하다.

이 것을 우리는 `호이스팅`이라고 부른다. <br/>
인터프리터가 메모리 공간을 선언 전에 미리 할당하기 때문이다.

말이 어려울 수 있지만 자바스크립트엔진이 한번 코드를 스캔하고 나서 변수 및 함수를 `실행 컨텍스트` 에 먼저 기록해두는 행동을 이해하자. `실행 컨텍스트` 라는 코드를 실행하기 위한 환경이 필요하기 때문이다.

( 우리도 사전지식 없이 무작정 일에 뛰어들지 않는 것 처럼 자바스크립트 엔진도 코드를 실행하기 위한 환경을 먼저 생성한다. )

<br/>

### 변수와 함수 호이스팅은 조금 다르다.

---

```jsx
console.log(name); // 'undefined'출력, 하지만 'undeclared'에 대한 참조오류는 나지않는다.

var name = 'roscoe';
```

함수는 호이스팅이 발생한 경우 함수가 동작하지만 변수에 접근하는 경우 참조에러는 나지 않지만 `undefined` 가 나타난다.<br/>
이 차이는 함수를 선언하는 방식에 의해 생긴다.
함수 선언식 function 키워드의 경우 함수의 정의와 동시에 선언하게 된다.

그렇기에 호이스팅된 함수의 경우 동작이 가능하나 변수의 경우 할당을 제외한 선언만 호이스팅 되기에 할당이 되지 않은 상태 `undefined` 가 나타나는 것이다.

<br/>

### 전부다 호이스팅 되는 것인가? TDZ

---

```jsx
console.log(name); // ReferenceError: name is not defined

const name = 'roscoe';
```

`var, function` 키워드를 제외하고 `let, const, class, arrow function` 은 호이스팅 현상이 나타나지 않는다. <br/>
하지만 실제로 메모리의 자리를 차지하고 있다.

동일하게 메모리를 차지하는데 왜 let, const 등을 사용했을 때 참조 에러가 나는 것일까?<br/>
그 것은 TDZ(Temporal Dead Zone), 즉 사각지대에 존재하기 때문이다.

var, function 을 제외한 변수는 선언 단계 전까지 TDZ가 형성되어 참조할 수 없게만든다.

기존 var 변수를 사용하며 호이스팅으로 인해 의도하지 않은 결과가 발생하였고 이를 해결하기 위해 let, const  등의 키워드로 선언하게 되면 TDZ로 인해 참조할 수 없다.

<br/>

### 마치며

---

이 모든 현상은 코드 실행시 자바스크립트 엔진이 실행 컨텍스트를 생성하기에 나타난다.

var, function 선언식의 경우 호이스팅이 발생하며 의도치 않은 문제를 발생시킬 수 있다.<br/>
let, const, 함수 표현식을 사용하여 실수를 미연에 방지하도록 하자.

만악의 근원 실행 컨텍스트의 경우 본인의 이해가 완성될 때 알아보도록 하자.