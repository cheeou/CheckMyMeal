# Check My meal today - 내세끼🍙 

<img src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=black"> <img src="https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=CSS3&logoColor=black"> <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=JavaScript&logoColor=black">



하루 삼시세끼 정보로 ChatGPT가 섭취 영양소 밸런스를 체크 <br>
![image](https://github.com/user-attachments/assets/594a0809-590f-4327-80d8-e17dd94432e7)


## 개요
'내세끼'는 사용자에게 하루 섭취한 삼시세끼 식단 정보를 통해 현재 영양 상태를 체크해주고, 영양 밸런스를 위해 다음날 식단을 가이드 해주는 서비스입니다.

## 주요 기능
사용자에게 아침, 점심, 저녁 식단 정보를 받아 사전에 세팅해 둔 ChatGPT 응답 컨텐츠를 통하여<br> 
섭취한 식단을 통한 영양 상태 체크 및 올바른 영양소 섭취를 위한 식단 추천을 제공합니다.

## 기획
1. main page : 사용자로부터 식단 정보 입력 받는 페이지
2. loading page : 분석 처리 대기 페이지
3. result page : 분석 결과 페이지 <br>

![image](https://github.com/user-attachments/assets/a74a0f19-bdf4-4a12-a6a0-9d98ae38ac3d)

## 구현 화면
| 실행 화면 | 상세 설명 |
|-----------|------------|
| <img src="https://github.com/user-attachments/assets/8a0b7d4c-1634-49c1-a654-2adbb79f7455" width="400" height="400"/>  | 사용자의 식단을 입력 받습니다.    |
| <img src="https://github.com/user-attachments/assets/d54e1455-e257-412a-a8de-18cbe2514cc5" width="400" height="400"/>    | 분석중의 로딩화면 입니다.    |
| <img src="https://github.com/user-attachments/assets/aea7a0ef-5e49-4f1a-8d78-362674ca2a58" width="400" height="400"/>    | 입력된 식단 정보로 맞춤 정보를 제공합니다. 다시 분석하기 버튼으로 메인으로 돌아갑니다.   |


## 프로젝트 일정

```mermaid
gantt
    title ChatGPT API를 활용한 서비스 만들기(with JS)
    dateFormat  YY-MM-DD

    section 기획 단계
    프로젝트 컨셉 기획 :2024-07-29, 1d
    API 비동기 통신 이해 다지기 :after,2024-07-29, 1d 

    section 구현 단계
    chat GPT API 비동기 연동 개발 작업 : 2024-07-30, 1d
    html,css,js 개발 : 2024-07-31, 1d

    section 프로젝트 문서 작성
    github Readme 작성 : 2024-08-01, 1d
```
