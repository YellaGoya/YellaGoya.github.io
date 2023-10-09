---
title: 어바웃 String
date: "2022-05-20T22:12:03.284Z"
description: 남은 할일 목록
thumbnail: './thumbnail.png'
categories:
  - javascript
  - string
  - 공부
---

### 프로퍼티

- String.length <br/> 문자열 내의 문자 갯수를 반환 = `내용`과 `길이`를 소유하고 있으니 `유사 배열 객체`이다.

```javascript
const str = 'hello'
console.log(str.length) // 5
```

| String.fromCharCode() | 쉼표로 구분되는 일련의 유니코드에 해당하는 문자들로 구성된 문자열을 반환함. |
| --- | --- |
| String.fromCodePoint() | 쉼표로 구분되는 일련의 코드 포인트(code point)에 해당하는 문자들로 구성된 문자열을 반환함. |
| String.raw() | 템플릿 문자열(template string)의 원형을 반환함. |
| indexOf() | String 인스턴스에서 특정 문자나 문자열이 처음으로 등장하는 위치의 인덱스를 반환함. |
| lastIndexOf() | String 인스턴스에서 특정 문자나 문자열이 마지막으로 등장하는 위치의 인덱스를 반환함. |
| charAt() | String 인스턴스에서 전달받은 인덱스에 위치한 문자를 반환함. |
| charCodeAt() | String 인스턴스에서 전달받은 인덱스에 위치한 문자의 UTF-16 코드를 반환함. (0 ~ 65535) |
| charPointAt() | String 인스턴스에서 전달받은 인덱스에 위치한 문자의 유니코드 코드 포인트(unicode code point)를 반환함. |
| slice() | String 인스턴스에서 전달받은 시작 인덱스부터 종료 인덱스 바로 앞까지의 문자열을 추출한 새 문자열을 반환함. |
| substring() | String 인스턴스에서 전달받은 시작 인덱스부터 종료 인덱스 바로 앞까지의 문자열을 추출한 새 문자열을 반환함. |
| substr() | String 인스턴스에서 전달받은 시작 인덱스부터 길이만큼의 문자열을 추출한 새로운 문자열을 반환함. |
| split() | String 인스턴스에서 구분자(separator)를 기준으로 나눈 후, 나뉜 문자열을 하나의 배열로 반환함. |
| concat() | String 인스턴스에 전달받은 문자열을 결합한 새로운 문자열을 반환함. |
| toUpperCase() | String 인스턴스의 모든 문자를 대문자로 변환한 새로운 문자열을 반환함. |
| toLowerCase() | String 인스턴스의 모든 문자를 소문자로 변환한 새로운 문자열을 반환함. |
| trim() | String 인스턴스의 양 끝에 존재하는 공백과 모든 줄 바꿈 문자(LF, CR 등)를 제거한 새로운 문자열을 반환함. |
| search() | 인수로 전달받은 정규 표현식에 맞는 문자나 문자열이 처음으로 등장하는 위치의 인덱스를 반환함. |
| replace() | 인수로 전달받은 패턴에 맞는 문자열을 대체 문자열로 변환한 새 문자열을 반환함. |
| match() | 인수로 전달받은 정규 표현식에 맞는 문자열을 찾아서 하나의 배열로 반환함. |
| includes() | 인수로 전달받은 문자나 문자열이 포함되어 있는지를 검사한 후 그 결과를 불리언 값으로 반환함. |
| startsWith() | 인수로 전달받은 문자나 문자열로 시작되는지를 검사한 후 그 결과를 불리언 값으로 반환함. |
| endsWith() | 인수로 전달받은 문자나 문자열로 끝나는지를 검사한 후 그 결과를 불리언 값으로 반환함. |
| toLocaleUpperCase() | 영문자뿐만 아니라 모든 언어의 문자를 대문자로 변환한 새로운 문자열을 반환함. |
| toLocaleLowerCase() | 영문자뿐만 아니라 모든 언어의 문자를 소문자로 변환한 새로운 문자열을 반환함. |
| localeCompare() | 인수로 전달받은 문자열과 정렬 순서로 비교하여 그 결과를 정수 값으로 반환함. |
| normalize() | 해당 문자열의 유니코드 표준화 양식(Unicode Normalization Form)을 반환함. |
| repeat() | 해당 문자열을 인수로 전달받은 횟수만큼 반복하여 결합한 새로운 문자열을 반환함. |
| toString() | String 인스턴스의 값을 문자열로 반환함. |
| valueOf() | String 인스턴스의 값을 문자열로 반환함. |

<br>

- String.prototype.charAt(number) : String<br>파라미터로 전달한 index 위치에 해당하는 문자 반환.<br><br>`0 ~ (length - 1)` 까지만 가능. 음수 지원 안됨.

```jsx
const str = 'hello'
console.log(str.charAt(4)) // 'o'
```
<br>

- String.prototype.indexOf(searchString, fromIndex) : number<br>인수로 전달한 문자 또는 문자열을 대상하는 문자열에서 검색해 처음 발견된 곳의 index 반환, 발견 못하면 `-1`<br><br>`fromIndex` 없이 전달하면 처음부터, 같이 전달하면 `fromIndex` 부터

```jsx
const str = 'hello world'
console.log(str.indexOf('wo')) // 6
console.log(str.indexOf('wo'), 8) // -1 
// 8 부터는 'wo'가 없다.
```
<br>


- String.prototype.lastIndexOf(searchString, fromIndex) : number<br>위 `indexOf` 와 동일하지만 검색 방향이 `역방향` 즉, 뒤에서 앞으로 찾는다.
<br>

- String.prototype.replace(searchValue, replaceValue) : string<br>`searchValue` 를 문자열에서 찾아 `replaceValue` 로 대체시켜 반환.<br><br>첫 발견한 문자열만 대체된다.
    * `searchValue` 문자 or 정규 표현식
    * `replaceValue` 문자 or 콜백함수

```jsx
const str = 'hello world'

str.replace('world', 'javascript') // 'hello javascript'
str.replace('world', '**$&**') // 'hello **world**'
```

- regex 교체 패

| $` | 일치한 문자 이전 값 참조 |
| --- | --- |
| $' | 일치한 문자 이후 값 참조 |
| $+ | 마지막으로 캡처된 값 참조 |
| $& | 일치한 문자 결과 전체 참조 |
| $_ | 입력(input)된 문자 전체 참조 |
| $1~9 | 캡처(Capture)된 값 참조 |

- regex

| replace(' ','') | 첫번째 공백 제거 |
| --- | --- |
| replace(/\-/g,'') | 특정문자 제거1 (-) |
| replace(/,/g,'') | 특정문자 제거2 (,) |
| replace(/^\s+/,'') | 앞의 공백 제거 |
| replace(/\s+$/,'') | 뒤의 공백 제거 |
| replace(/^\s+|\s+$/g,'') | 앞뒤 공백 제거 |
| replace(/\s/g,'') | 문자열 내의 모든 공백 제거 |
| replace(/\n/g,'') | n개행 제거 |
| replace(/\r/g,'') | 엔터 제거 |

```jsx
str.replace(/[a-zA-Z]/g,(n) => {return n === n.toUpperCase() ? n.toLowerCase() :  n.toUpperCase()})
```

<br>

- String.prototype.split(separator, limit) : string[]<br>`separator` 를 기준으로 분리된 각 문자열로 이루어진 배열을 반환.<br><br>인수가 없거나 해당하는 문자가 없다면 원본에 배열을 씌워 반환.

```jsx
const str = 'hello world, hello javascript
str.split(' ')    // ['hello', 'world,', 'hello', 'javascript']
str.split('')     // ['h', 'e', 'l', 'l', 'o', ' ', 'w', ... ] 모두 분리
str.split('')     // ['hello world, hello javascript']
str.split(' ', 2) // ['hello', 'world,']
str.split('l')    // ['he', '', 'o wor', 'd, he', '', 'o javascript']
```

<br>

- String.prototype.substring(start, end) : string<br>`start` 부터 `end` 바로 앞 문자까지를 문자열로 전달한다.<br>
```jsx
const str = 'ABCDEFG
str.substring(2, 5) // 'CDE'
str.substring(5, 2) // 'CDE' 반대로 넣어도 자동 교환
str.substring(3)    // 'DEFG' end 인수가 없으면 끝까지 잘라냄
str.substring(-2)   // -1, NaN 과 같은 음수는 0으로 취
```

<br>

- String.prototype.slice(start, end) : string<br>`substring` 과 같으나 음수 인수 전달이 안됨.

<br>

- String.prototype.toLowerCase() : string
- String.prototype.toUpperCase() : string<br>문자열의 모든 문자를 소문자, 대문자로 변경한다.

<br>

- String.prototype.trim() : string<br>문자열의 양 끝 공백문자를 제거한다.

```jsx
const str = '   javascript '

str.trim() // 'javascript'
```

<br>


- String.prototype.repeat(number) : string<br>인수로 전달한 숫자 만큼 반복한 문자열을 반환.

```jsx
const str = 'hello'

str.repeat(0)   // ''
str.repeat(2)   // 'hellohello'
str.repeat(2.5) // 'hellohello'
```

<br>

- String.prototype.includes(searchValue, position) : boolean<br>`searchValue` 문자열이 포함되어 있는지 검사 후 boolean으로 반환.