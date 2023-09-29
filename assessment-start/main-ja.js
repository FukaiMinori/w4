const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

const storyText = '気温摂氏94 fahrenheitで外は寒かった。:insertx:は出かけた。:inserty:に着いた。:insertz:。体重300 poundsポンドの:insertx:は驚いたが、　Bobは驚かなかった。:inserty:ではよくあることだった。';
const insertX = ['ドアラ', 'つば九郎', 'DBスターマン'];
const insertY = ['ZOZOマリンスタジアム', 'ベルーナドーム', 'エスコンフィールド'];
const insertZ = ['雪が降っていた', '槍が降っていた', 'サードフライが飛んでいた'];

randomize.addEventListener('click', result);

function result() {
  let newStory = storyText;

  const xItem = randomValueFromArray(insertX);
  const yItem = randomValueFromArray(insertY);
  const zItem = randomValueFromArray(insertZ);

  newStory = newStory.replace(':insertx:',xItem);
  newStory = newStory.replace(':insertx:',xItem);
  newStory = newStory.replace(':inserty:',yItem);
  newStory = newStory.replace(':insertz:',zItem);

  if (customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace('Bob', name);
  }

  if (document.getElementById("us").checked) {
    const weight = `${Math.round(300*0.0714286)} stone`;
    const temperature =  `${Math.round((94-32) * 5 / 9)} centigrade`;
    newStory = newStory.replace('94 fahrenheit', temperature);
    newStory = newStory.replace('300 pounds', weight);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}
