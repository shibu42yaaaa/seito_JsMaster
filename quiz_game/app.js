// 問題を定義
const question = '2022年のセリーグ優勝チームは？';
// 答え
const answers = [
  '横浜DeNAベイスターズ', 
  '東京ヤクルトスワローズ', 
  '阪神タイガース', 
  '中日ドラゴンズ'
];
const correct = '東京ヤクルトスワローズ';
const $button = document.getElementsByTagName('button'); 
const buttonLength = $button.Length;

const setupQuiz = () => {
    document.getElementById('js-question').textContent = question; 
    
    let buttonIndex = 0;
    while(buttonIndex < buttonLength){
      $button[buttonIndex].textContent = answers[buttonIndex];
      buttonIndex++;
    }
}
// 定義した値を呼ぶ
setupQuiz();

const clickHandler = (e) =>{
  if(correct === e.target.textContent){
    window.alert('正解！');
  } else {
    window.alert('残念。。');
  }
};

// ボタンがクリックされたら生後判定
let handlerIndex = 0;
while (handlerIndex < buttonLength) {
  $button[handlerIndex].addEventListener('click', (e) => {
    clickHandler(e);
  });
  handlerIndex++;
}

