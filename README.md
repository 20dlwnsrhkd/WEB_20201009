# WEB_20201009

## 수정사항
# 비속어 필터링

처음에 검색어 비속어 필터링 문제를 해결할 때 비속어를 검사는 하지만 필터링이 안되고 검색은 계속 진행되는 상황이 발생하였다.
공백 검사 코드 내부에 넣어야 하는데 밖어 넣어서 였다.

# 검색어 목록 제한하기 & 카운트 다운

딱히 문제는 없었다.

# 아이디 패스워드 필터링 하기

교수님이 만드신 ppt에 정규 표현식의 내용이 이메일과 비밀번호가 바뀌는 것이 좋다고 생각하여 바꿨다.
마찬가지로 필터링을 진행하고 나서 옳지 않은 형식인데 그냥 로그인이 실행되었다. 
처음에는 login 함수를 먼저 실행하고 중간에 login_check 함수를 실행 했는데 순서를 바꿔서 체크 후 실행하니 잘 되었다.
테스트 함수를 실행하는 부분에서 변수 이름만 처음에 넣었는데 검사가 안되는거 같아서 .value를 넣으니 해결되었다. 
근데 이게 원인인지는 잘 모르겠다. 하지만 실행은 잘 된다.
ex) if (!emailRegex.test(id.value))]

# 로그인, 로그아웃 횟수 저장하기

횟수를 저장하는 부분에서 iogin.js의 코드가 너무 길어져서 코드가 너무 복잡해 보여서 count.js 파일을 하나 추가했다.
문제 자체는 어렵지 않았으나 쿠키에 대한 이해도가 떨어졌던 것 같다. 하지만 문제를 해결하는 좀 더 배우게 되었다.
횟수를 추가하는 함수를 어디에 넣어야 하는지 고민이 좀 많았던 것 같다.
ex) 쿠키 값은 관리자 모드를 통해서 변경할 수 있음

# 로그인 시간 유지하기 & 실패시 시간 제한

횟수를 저장하는 부분이 해결되어 쉽겠지.. 라고 생각했으나 가장 시간을 많이 잡아먹었다.
처음에는 로그아웃 시의 시간과 이후 로그인 시간을 쿠키에 저장해서 5분이 지났으면 다시 로그인 할 수 있도록 만들려고 했으나,
코드가 복잡해 지고 굳이 그럴 필요가 없다고 느껴서 방향을 바꿨다,
setTimeout 함수 사용법이나, 로그인 성공 후 로그아웃 실패 카운트를 초기화 할지 말지 등 고민이 좀 있었다.
계속 새로 고침을 실행하면 수정을 반복했던 것 같다.

# 세션 읽기 함수 추가

어려운 부분은 없었다.

# 검색창 입력 후 카카오 맵 실행 & 프로필 바꾸기

프로필 바꾸는 부분은 이전에 했던 내용과 크게 다른 부분이 없어서 금방 해결했고,
검색창 입력은 카카오 api에서 코드만 복사해서 내용만 살짝 바구면 되서 쉬울 줄 알았는데 Places를 인식을 못한다.
결국 검색창을 만드는 것에는 성공 했으나 검색을 실행하지는 못한다...

# 카카오 맵 검색 기능 해결

카카오 맵 검색기능에 객체를 이해하지 못하는 경우가 발생했는데 알고보니까 라이브러리 서비스를 추가하지 않아서 였다. 
&libraries=services를 자바스크립트 코드에 추가 하고 나니 해결 되었다