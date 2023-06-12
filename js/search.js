/**document.getElementById("search_btn").addEventListener('click', search_message);

var search_array = []; // 빈 배열 – 전역 변수

function search_message(){
   let search_str = document.querySelector("#search_txt");
    if(search_str.value.length === 0){
       alert("검색어가 비었습니다. 입력해주세요"); 
    }
    else{
       alert("검색을 수행합니다!");
       search_array.push(search_str.value); // 배열에 검색어 추가
       let text = document.getElementById("search_message").innerHTML = search_array.toString(); // 값 변환
        document.querySelector("#form_main").submit();
    }
}**/
// 비속어 목록


document.getElementById("search_btn").addEventListener('click', search_message);

var bannedWords = ["수박", "빙산", "강아지"]; // 비속어 목록에 필터링할 단어를 추가
var search_array = []; // 빈 배열 – 전역 변수

function search_message() {



  
	let search_str = document.querySelector("#search_txt");
	if (search_str.value.length === 0) {
		alert("검색어가 비었습니다. 입력해주세요");
	} 
	else {
		if (containsBannedWord(search_str.value)) {
			alert("비속어가 포함되어 있습니다. 다른 검색어를 입력해주세요.");
		} 
		else {
			alert("검색을 수행합니다!");
			if (search_array.length >= 10) {
				search_array.shift(); // 배열의 첫 번째 값을 삭제
			}
			search_array.push(search_str.value); // 배열에 검색어 추가
			let text = (document.getElementById("search_message").innerHTML = search_array.toString()); // 값 변환
			document.querySelector("#form_main").submit();
		}
	}
}

// 비속어가 포함되어 있는지 확인하는 함수
function containsBannedWord(text) {
  for (var i = 0; i < bannedWords.length; i++) {
    if (text.toLowerCase().includes(bannedWords[i].toLowerCase())) {
      return true;
    }
  }
  return false;
}

