# vue2x-ts-boilerplate

## 구성
- vue
  - cli base, vue 2.x
  - composition api
- typescript
  - decorator 활용 설정
- storybook
- pwa
  - cli 로 구성시 설치만 진행 
- test
  - e2e
    - cypress
  - unit
    - jest

* * *

## 폴더 구조
- TODO
```bash
// 
```

## 구성 진행 상황
| 완료 여부   |      구분      |  비고 |
|----------|:-------------:|------:|
| col 1 is |  left-aligned | - |
| col 1 is |  left-aligned | - |

## scripts
| 환경 | script | 구분 | 비고 |
|:---:|:------:|:---:|:---:|
| local | local:serve | serve | 로컬 개발환경 실행 |
| local | local:build | build | 로컬 빌드 |
| - | storybook:serve | serve | storybook 실행 |
| - | storybook:build | build | storybook 빌드 |
| - | lint | - | lint 실행 |
| - | test:unit | - | unit test 실행 |
| - | test:e2e | - | e2e test 실행 |
* * *

## TODO
### storybook typescript 작성
- 이전에 알고 있던 작성 방식보다 개선된 방식 파악
- strictBindCallApply
  - https://github.com/storybookjs/storybook/issues/11916

* * *
## 고민할 사항
### test
- 어느 레벨까지 작성?
  - component, ui 관련 포함
  - libs, 로직 관련만 고려
- test 코드는 어느 위치에 작성?
  - root tests 에
  - test 코드를 작성하는 소스 위치에
- e2e test
  - [cypress](https://www.cypress.io/)
    - cli 나 보편적으로 사용되는 cypress 활용 
  - [playwright](https://playwright.dev/)
    - 예전 casper.js / phantom.js 와 유사
    - snapshot 기능
      - jest 의 snapshot 과 다름
      - 실제 화면을 캡쳐
        - 이전에 기능 테스트할때, 이전 캡쳐 이미지와 [pixelmatch](https://github.com/mapbox/pixelmatch) 등을 이용해 화면상의 비교점 체크 가능 
    - [qawolf](https://github.com/qawolf/qawolf)
      - 실제 ui 제어하는 상태를 기록하여, playwright 테스트 코드 작성하게 하는 도구 
### storybook
- 작성 편의
  - ts 로 작성하는게 좋을지
  - composition 기반과 class 기반일때의 작성 차이 발생 
### tsconfig
- interface 정의시 I prefix 사용 여부
- namespace 사용 여부
- type vs interface 
