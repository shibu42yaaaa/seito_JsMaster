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

document.getElementsByTagName('button')[0].textContent = answers[0];
document.getElementsByTagName('button')[1].textContent = answers[1];
document.getElementsByTagName('button')[2].textContent = answers[2];
document.getElementsByTagName('button')[3].textContent = answers[3];

// ボタンがクリックされたら生後判定
document.getElementsByTagName('button')[1].addEventListener('click', () => {
    if(correct === document.getElementsByTagName('button')[1].textContent){
      window.alert('正解！');
    } else {
      window.alert('残念。。');
    }
});
