function login_count() {
  var login_cnt = parseInt(getCookie("login_cnt") || "0");
  login_cnt++;
  setCookie("login_cnt", login_cnt, 1);
  console.log("로그인 횟수: " + login_cnt);
}

function login_fail_count() {
	var login_fail_cnt = parseInt(getCookie("login_fail_cnt") || "0");

  
	login_fail_cnt++;
	setCookie("login_fail_cnt", login_fail_cnt, 1);
	console.log("로그인 실패 횟수: " + login_fail_cnt);
	alert("로그인 잠금까지 "+ (5-login_fail_cnt)+"번 남았습니다.")
	
	if (login_fail_cnt == 5) {  
		alert("1분 동안 로그인을 할 수 없습니다.");
		var login_ban = parseInt(getCookie("login_ban") || "0");
		login_ban = 'Y';
		setCookie("login_ban", login_ban, 1);
		setTimeout(function () {
			document.cookie = "login_ban = 0";
		},  60 * 1000);
		setCookie("login_fail_cnt", 0, 1);
	}
}


function logout_count() {
  var logout_cnt = parseInt(getCookie("logout_cnt") || "0");
  logout_cnt++;
  setCookie("logout_cnt", logout_cnt, 1);
  console.log("로그아웃 횟수: " + logout_cnt);
}
