# input box 설명하기

- View : div
- Text : span
- SafeAreaView : 아이폰,안드로이드 죽은 공간 없애줌
  - 네이게이션은 안에 자동으로 들어가 있음
  - Statusbar

# 인풋창 설명

- 이메일 자동 완성
  - importantForAutofill="yes"
  - autoComplete="email"
  - textContentType="emailAddress"
- 비밀 번호 자동 완성
  - importantForAutofill="yes"
  - autoComplete="password"
  - textContentType="password"
- 비밀번호 안보이는 옵션
  - secureTextEntry
- input 엔터 키 바꾸기
  - returnKeyType="send"
- 키보드 엔터 누르면 내가 원하는 곳으로 이동하기

---

<br />
<br />

# useRef를 이용해서 키보드 엔터 눌렀을 때 어디로 이동할 지 정할 수 있다.
