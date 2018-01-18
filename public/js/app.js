// default
let topic = 'hawaii';
let parentElement = document.getElementById('contentContainer');

let topicHawaii = 'hawaii';
document.getElementById('subHawaii').addEventListener('click', redditApi(topicHawaii));

let photoShopBattles = 'photoshopbattles';
document.getElementById('subPhotoShopBattles').addEventListener('click', redditApi(photoShopBattles));

let technology = 'technology';
document.getElementById('technology').addEventListener('click', redditApi(technology));


// Reddit API Request
function redditApi(topic) {
  let chosenTopic = topic
  let redditApi = 'https://www.reddit.com/r/';
  let oReq = new XMLHttpRequest();
  oReq.addEventListener('load', function () {
  let fetched = JSON.parse(this.responseText);
  let arr = fetched.data.children;
  cardBuilder(arr, parentElement)
  });
  oReq.open('GET', redditApi + chosenTopic + '.json');
  oReq.send();
}


function cardBuilder(arr, parentElement) {

  let cardContainer = document.createElement('div');
  cardContainer.className = 'cardContainer';

  arr.forEach(function (element, index, array) {

    let content = document.createElement('div');
    content.className = 'content';
    document.getElementById('contentContainer');

    let image = document.createElement('img');
    image.className = 'image';
    content.appendChild(image);
    image.onerror = function () {
      image.src = 'https://www.sciencedaily.com/images/2017/08/170809142044_1_540x360.jpg';
    }
    image.src = element.data.url;

    let title = document.createElement('div');
    title.className = 'contentTitle';
    content.appendChild(title);
    title.innerHTML = element.data.title;

    let author = document.createElement('div');
    author.className = 'author';
    content.appendChild(author);
    author.innerHTML = 'by ' + element.data.author;

    let views = document.createElement('div');
    views.className = 'views';
    title.appendChild(views);
    views.innerHTML = element.data.score + ' views';

    let description = document.createElement('div');
    description.className = 'description';
    content.appendChild(description);
    //console.log(element.data.selftext);
    let selfText = element.data.selftext;
    if (selfText === "") {
      description.innerHTML = 'No Description';
    } else {
      description.innerHTML = selfText;
    }
    cardContainer.appendChild(content)
  })
  parentElement.innerHTML = '';
  parentElement.appendChild(cardContainer);
}


