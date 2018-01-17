


let topicHawaii = 'hawaii';
document.getElementById('subHawaii').addEventListener('click', function(event){
  event.preventDefault();
  topic = 'hawaii'
  let oReq = new XMLHttpRequest();
  oReq.addEventListener('load', sub1);
  oReq.open('GET', redditApi + topic + '.json');
  oReq.send();
})


let topic = 'photoshopbattles';


// Reddit API Request
let redditApi = 'https://www.reddit.com/r/';
  let oReq = new XMLHttpRequest();
  oReq.addEventListener('load', sub1);
  oReq.open('GET', redditApi + topic + '.json');
  oReq.send();

function sub1() {

  let fetched = JSON.parse(this.response);
  let arr = fetched.data.children;

  arr.forEach(function (element, index, array) {

    let content= document.createElement('div');
    content.className = 'content';
    contentContainer.appendChild(content);

    let title = document.createElement('div');
    title.className = 'contentTitle';
    content.appendChild(title);
    title.innerHTML = element.data.title;

    let author = document.createElement('div');
    author.className = 'author';
    title.appendChild(author);
    author.innerHTML = 'by ' + element.data.author;

    let views = document.createElement('div');
    views.className = 'views';
    title.appendChild(views);
    views.innerHTML = element.data.score + ' views';

    let image = document.createElement('img');
    image.className = 'imgSub1';
    content.appendChild(image);
    image.onerror = function () {
      image.src = 'https://www.sciencedaily.com/images/2017/08/170809142044_1_540x360.jpg';
    }
    image.src = element.data.url;
  })
}


// event listener for subReddit 2
let sub2Link = document.getElementById('subPhotoShopBattles').addEventListener('click', sub2);

  let oReq2 = new XMLHttpRequest();
  oReq2.addEventListener('load', sub2);
  oReq2.open('GET', 'https://www.reddit.com/r/photoshopbattles.json');
  oReq2.send();

function sub2() {
  let fetched = JSON.parse(this.response);
  let arr = fetched.data.children;

  arr.forEach(function (element, index, array) {

    let title = document.createElement('div');
    title.className = 'title'
    document.body.appendChild(title);
    title.innerHTML = element.data.title;

    let author = document.createElement('div');
    author.className = 'author';
    author.innerHTML = 'by ' + element.data.author;

    let views = document.createElement('div');
    views.className = 'views';
    title.appendChild(views);
    views.innerHTML = element.data.view_count;

    let image = document.createElement('img');
    image.className = 'imgSub2';
    title.appendChild(image);
    image.onerror = function () {
      image.src = 'https://media1.britannica.com/eb-media/10/152310-004-AE62B6B8.jpg';
    }

  })
}