console.log('JS sanity');

let oReq = new XMLHttpRequest();
oReq.addEventListener('load', sub1);
oReq.open('GET', 'https://www.reddit.com/r/hawaii.json');
oReq.send();

function sub1() {
  let fetched = JSON.parse(this.response);
  let arr = fetched.data.children;
  //console.log(fetched.data.thumbnail);

  arr.forEach(function (element, index, array){
    //console.log(element.data);
    let title = document.createElement('div');
    document.body.appendChild(title);
    title.innerHTML = element.data.title;

    let author = document.createElement('div');
    title.appendChild(author);
    author.innerHTML = 'by ' + element.data.author;

    let views = document.createElement('div');
    title.appendChild(views);
    views.innerHTML = element.data.view_count;
    
    let image = document.createElement('img');
    image.className = 'image';
    title.appendChild(image);
    image.onerror = function() {
      image.src = 'https://www.sciencedaily.com/images/2017/08/170809142044_1_540x360.jpg';
    }
    image.src = element.data.thumbnail;
  })
}

let oReq2 = new XMLHttpRequest();
oReq2.addEventListener('load', sub2);
oReq2.open('GET', 'https://www.reddit.com/r/photoshopbattles.json');
oReq2.send();

function sub2() {
  let fetched = JSON.parse(this.response);
  let arr = fetched.data.children;
  //console.log(arr)

  arr.forEach(function (element, index, array){
    console.log(element.data);
  })
}
