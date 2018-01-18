// default
let topic = 'photoshopbattles';
let parentElement = document.getElementById('contentContainer');


let topicHawaii = 'hawaii';
document.getElementById('subHawaii').addEventListener('click', function (event) {
  event.preventDefault();
  topic = 'hawaii'
  let oReq = new XMLHttpRequest();
  oReq.addEventListener('load', sub1);
  oReq.open('GET', redditApi + topic + '.json');
  oReq.send();
})


// Reddit API Request
let redditApi = 'https://www.reddit.com/r/';
let oReq = new XMLHttpRequest();
oReq.addEventListener('load', function () {
  let fetched = JSON.parse(this.responseText);
  let arr = fetched.data.children;
  cardBuilder(arr, parentElement)
});
oReq.open('GET', redditApi + topic + '.json');
oReq.send();


function cardBuilder(arr, parentElement) {

  let cardContainer = document.createElement('div');

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
    console.log(element.data.selftext);
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