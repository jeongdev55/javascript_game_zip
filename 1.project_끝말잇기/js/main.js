const $number=document.querySelector('#number');
const $number_btn=document.querySelector('#number_btn');
const $meddie_right=document.querySelector('.meddie_right');

var appendText=""; //변할수 있는 값이기 때문에 var 로 선언


const setNumber =() =>{ //사용자 수에 따른 이름 입력 부분 출력
    const number=$number.value; //입력된 사용자 수를 가져옴
    if(number>0){
        $meddie_right.style.display='block'; //입력이 될 경우 바로 보이도록 설정
        for(let i=0;i<number;i++){ //반복문 실행
            appendText+='<span>참가자 '+(i+1)+'</span><input type="text" id="user'+i+' placeholder="이름 입력"><br><br>';
        }
        $number.value="";
    }else{
        alert("인원수를 입력해주세요.");
    }
    $meddie_right.innerHTML=appendText; //문자열을 반환해줌
};

$number_btn.addEventListener('click', setNumber); //체크 이벤트

