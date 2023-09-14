

let news=[]

let boxcontent = '<div class="list-content"></div>';
let box = document.querySelector('.main-list');
let input_name = document.querySelector('.news_name')
let input_date = document.querySelector('.date')
let input_author = document.querySelector('.author')
let input_news = document.querySelector('.news')
let input_id = document.getElementById('id')
let button = document.querySelector('.add')



function showNews(arr){
	for (let i = 0; i < news.length; i++){

    box.insertAdjacentHTML('beforeend',
    '<div class="list-content"><div class="content-title"><h1 class="name">'+news[i]['name']+'</h1> <p class="text">'+news[i]['date']+'</p></div> <div class="content-text">'+news[i]['text']+'</div> <div class="content-footer"><p class="subtitle">'+news[i]['author']+'</p><p class="id"> Id:'+news[i]['id']+'</p></div></div>');
}

}
console.log(input_author.value)
let key_name = 'name';
let key_text = 'text';
let key_id = 'id';
let key_date = 'date';
let key_author = 'author';



button.addEventListener('click', function(){
    let name = input_name.value;
    let text = input_news.value;
    let date = input_date.value;
    let author = input_author.value;
		let id = input_id.value;

    
    news.push({
        [key_name]:name,
        [key_text]:text,
        [key_id]:id,
        [key_author]:author,
        [key_date]:date




    })
    showNews(news)

    input_name.value = ''
    input_news.value = ''
    input_date.value = ''
    input_author.value = ''
})

console.log(news)



