const quiz = [
{
  question: '2022年のセリーグ優勝チームは？',
  answers: [
    '横浜DeNAベイスターズ', 
    '東京ヤクルトスワローズ', 
    '阪神タイガース', 
    '中日ドラゴンズ'
  ],
  correc: '東京ヤクルトスワローズ'
},
{
question: '2022年のセリーグ本塁打王は？',
  answers: [
    '村神', 
    '村上', 
    '山川', 
    '阿部慎之助'
  ],
  correc: '村上'
},
{
question: '2022年に球界で流行ったダンスは？',
  answers: [
    'うさぎダンス', 
    'ハムダンス', 
    'キツネダンス', 
    'マツケンサンバ'
  ],
  correc: 'キツネダンス'
}
];

const quizLength = quiz.length;
let quizIndex = 0;

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

