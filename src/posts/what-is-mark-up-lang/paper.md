---
title: 마크업, 마크다운
date: "2023-10-25T23:02:44.284Z"
description: html은 프로그래밍 언어가 아니다. 그럼 뭐란 말인가?
thumbnail: './thumbnail.png'
categories:
  - web
---

### 인트로
---
프론트엔드를 공부하기 시작하면서 생긴 html에 대한 궁금증을 해결하기 위해 우선 마크업 언어가 무엇인지. 우리가 github 에서 작성하는 [README.md](http://README.md) 의 마크다운은 무엇인지 위키를 통해 알아보고자 한다.<br/><br/>

### Markup Language
---
> **마크업 언어**(markup 言語, markup language)는 [태그](https://ko.wikipedia.org/wiki/%ED%83%9C%EA%B7%B8_(%EC%A0%95%EB%B3%B4)) 등을 이용하여 문서나 데이터의 구조를 명기하는 언어의 한 가지이다.
> 
> 태그는 원래 텍스트와는 별도로 원고의 교정부호와 주석을 표현하기 위한 것이었으나 용도가 점차 확장되어 문서의 구조를 표현하는 역할을 하게 되었다. 이러한 태그 방법의 체계를 마크업 언어라 한다.

- **표현적 마크업**(Presentational markup): 전통적인 워드 처리 시스템이 사용하는 마크업. <br/>[위지위그](https://ko.wikipedia.org/wiki/%EC%9C%84%EC%A7%80%EC%9C%84%EA%B7%B8) 효과를 내는 문서 텍스트에 포함되니 이진 코드. <br/>이러한 마크업은 사람(저자나 편집자도 포함)의 눈에는 보이지 않도록 설계되는 것이 일반적이다.
- **절차적 마크업**(Procedural markup): 마크업은 텍스트에 포함되며 문자를 처리할 프로그램의 명령을 제공한다. <br/>[troff](https://ko.wikipedia.org/w/index.php?title=Troff&action=edit&redlink=1), [LaTeX](https://ko.wikipedia.org/wiki/LaTeX), [포스트스크립트](https://ko.wikipedia.org/wiki/%ED%8F%AC%EC%8A%A4%ED%8A%B8%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8)를 예로 들 수 있다.
- **기술적 마크업**(Descriptive markup): 마크업은 문서의 일부에 이름을 다는 데 사용된다. <br/>예로, HTML의 인용의 이름을 다는 `<cite>`  태그를 들 수 있다.

다음과 같은 예시를 볼 수 있다.
- **HTML (Hyper Text Markup Language)**: 웹 페이지를 작성하기 위해 사용하는 가장 널리 알려진 마크업 언어. <br/>HTML은 웹 페이지의 구조를 정의하고, 텍스트, 이미지, 링크 등 다양한 요소를 웹 페이지에 배치할 수 있도록 한다.
- **XML (eXtensible Markup Language)**: 데이터를 저장하고 전송하는 데 사용되는 마크업 언어. <br/>XML은 데이터를 구조화하는 데 사용되며, 태그는 사용자가 정의할 수 있다.
- **SVG (Scalable Vector Graphics)**: 벡터 기반의 그래픽을 표현하기 위한 XML 기반의 마크업 언어. <br/>SVG는 웹에서 스케일링이 가능한 그래픽을 만드는 데 사용된다.<br/><br/>

### Markdown?
--- 
> **마크다운**(Markdown)은 [일반 텍스트](https://ko.wikipedia.org/wiki/%ED%94%8C%EB%A0%88%EC%9D%B8_%ED%85%8D%EC%8A%A4%ED%8A%B8) 기반의 경량 [마크업 언어](https://ko.wikipedia.org/wiki/%EB%A7%88%ED%81%AC%EC%97%85_%EC%96%B8%EC%96%B4)다. 일반 텍스트로 서식이 있는 문서를 작성하는 데 사용되며, 일반 마크업 언어에 비해 문법이 쉽고 간단한 것이 특징이다. [HTML](https://ko.wikipedia.org/wiki/HTML)과 [리치 텍스트](https://ko.wikipedia.org/wiki/%EB%A6%AC%EC%B9%98_%ED%85%8D%EC%8A%A4%ED%8A%B8)(RTF) 등 서식 문서로 쉽게 변환되기 때문에 [응용 소프트웨어](https://ko.wikipedia.org/wiki/%EC%9D%91%EC%9A%A9_%EC%86%8C%ED%94%84%ED%8A%B8%EC%9B%A8%EC%96%B4)와 함께 배포되는 [README 파일](https://ko.wikipedia.org/wiki/%EB%A6%AC%EB%93%9C%EB%AF%B8)이나 온라인 게시물 등에 많이 사용된다.

- **읽기 쉽고 작성하기 쉽다**: 마크다운의 문법은 간단하고 직관적, 일반 텍스트를 읽고 쓰는 것처럼 쉽게 서식 있는 텍스트를 작성할 수 있다.
- **다양한 플랫폼에서 지원한다**: GitHub, Bitbucket, GitLab 등의 코드 호스팅 플랫폼뿐만 아니라, <br/>Jekyll, Hugo 등의 정적 사이트 생성기, StackOverflow, Reddit 등의 커뮤니티 사이트에서도 마크다운을 지원한다.
- **HTML로 쉽게 변환할 수 있다**: 마크다운 문서는 쉽게 HTML로 변환할 수 있으므로, <br/>웹 사이트에 게시하거나 이메일로 보내는 등 다양한 용도로 사용할 수 있다.<br/><br/>

### 마치며
---
그렇다 이 글도 마크다운으로 작성하고 있다.