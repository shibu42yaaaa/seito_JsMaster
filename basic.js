//配列
let sample = ['a', 'b', 'c'];
console.log(sample);

//ループ
let index = 0;
while(index < 5){
  console.log(index);
  index++;
}

// if/else文
// Chromeで確認できず
if(sample.length > 3){
  console.log('うんぼぼ');
} else {
    console.log('ぐふふ');
}

//関数
const test = () => {
  if(sample.length > 3){
       console.log('うんぼぼ');
  } else {
    console.log('ぐふふ')
  }
};

test();


const test2 = (arg) => {
  if(sample.length > arg){
    console.log('うんぼぼ');
  } else {
    console.log('ぐふふ')
  }
};
// 引数によって結果が変わる
test2(3);

if(inoki.length > 3) {
    console.log('ボンバイエ！');
} else {
    console.log('ボンバ...!');
};

// オブジェクト
const unko2 = {
    color: 'pink',
    size: 'large',
    purfume: 'mint',
    goToilet: () => {
      console.log('Hello World');
    }
};

console.log(unko2);
console.log(unko2.color);
console.log(unko2.goToilet());


console.log(document.getElementsByTagName('button')[0]);

// 一つ目のボタンが押されたときにアラートを表示させる
document.getElementsByTagName('button')[0].addEventListener('click', ()=> {
    //命令を書く
    window.alert('Hello World!!!');
});

