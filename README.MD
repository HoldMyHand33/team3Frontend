# axios 인터셉터

- axios.interceptors.request.use : 요청을 보낼때 마다 실행되는 axios
  - 로컬스토리에서 머 꺼내올때 사용
- axios.interceptors.responese.use : 응답을 받을 때 마다 실행되는 axios
  - 토큰 사용시간 다 지났을 때 재발급 받고 전의 axios 요청 다시 보낼 때 사용
- Four.tsx 참고
