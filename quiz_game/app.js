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

document.getElementById('js-question').textContent = question;

const $button = document.getElementsByTagName('button'); 

$button[0].textContent = answers[0];
$button[1].textContent = answers[1];
$button[2].textContent = answers[2];
$button[3].textContent = answers[3];

// ボタンがクリックされたら生後判定
$button[0].addEventListener('click', () => {
    if(correct === $button[0].textContent){
      window.alert('正解！');
    } else {
      window.alert('残念。。');
    }
});

$button[1].addEventListener('click', () => {
    if(correct === $button[1].textContent){
      window.alert('正解！');
    } else {
      window.alert('残念。。');
    }
});

$button[2].addEventListener('click', () => {
    if(correct === $button[2].textContent){
      window.alert('正解！');
    } else {
      window.alert('残念。。');
    }
});

$button[3].addEventListener('click', () => {
    if(correct === $button[3].textContent){
      window.alert('正解！');
    } else {
      window.alert('残念。。');
    }
});
