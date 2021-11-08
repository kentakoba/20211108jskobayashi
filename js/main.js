/*課題1　これはネットでコピペしました。
いまだに？な状況です。*/

const array = [2, 4, 7, 5, 4, 3, 8];

const result = array.filter((x, i, self) => self.indexOf(x) === i);

// 結果出力
console.log(result);



/*課題2ver1*/

/*関数leapyearによって、インプット(引数)に対して処理結果を返す(return)。
その処理結果の内容は、if構文当てはまるなら正(true)・当てはまらないなら誤を返す(false)*/
function leapyear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return true;
  }
  return false;
}

/*const inputyear = leapyear(2021);⇒この記述にするとyear2がfalseになる*/
const inputyear = 2020;/*関数へのインプット(引数)をここで設定*/


if (leapyear(inputyear)) {
  /*if文に与えられた条件が関数(leapyear)となる。
  そして、その条件の結果がtrueの場合、以下にて実行処理する*/
  console.log(inputyear + '年はうるう年です');/*⇒実行処理内容を記載*/
} else {
  /*条件の結果がfalseの場合、以下にて実行処理する*/
  console.log(inputyear + '年はうるう年ではありません');/*⇒実行処理内容を記載*/
}



/*課題2ver2*/
function isleapyear(year2) {
  if ((year2 % 4 === 0 && year2 % 100 !== 0) || year2 % 400 === 0) {
    return console.log(year2 + '年はうるう年です');
  }
  return console.log(year2 + '年はうるう年ではありません');
}

const year2 = isleapyear(2021);/*インプット内容*/

