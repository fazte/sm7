let news = [

	{
			id:'1',
			name:'Люля-кебаб не свежий',
			author:'Айзек',
			date:'05.01.23',
			text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Malesuada fames ac turpis egestas integer. Nunc sed augue lacus viverra vitae congue eu consequat ac. Et malesuada fames ac turpis egestas integer.'
	},
	{
			id:'2',
			name:'Разворовали фуру арбузом',
			author:'Жумобой',
			date:'05.01.23',
			text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Malesuada fames ac turpis egestas integer. Nunc sed augue lacus viverra vitae congue eu consequat ac. Et malesuada fames ac turpis egestas integer.'
	},
	{
			id:'3',
			name:'Валеньсия или нет?',
			author:'Некто',
			date:'05.01.23',
			text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Malesuada fames ac turpis egestas integer. Nunc sed augue lacus viverra vitae congue eu consequat ac. Et malesuada fames ac turpis egestas integer.'
	},
	{
			id:'4',
			name:'Где продать арбуз?',
			author:'Алибой',
			date:'05.01.23',
			text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Malesuada fames ac turpis egestas integer. Nunc sed augue lacus viverra vitae congue eu consequat ac. Et malesuada fames ac turpis egestas integer.'
	},
	{
			id:'5',
			name:'мидронол',
			author:'гений',
			date:'05.01.23',
			text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Malesuada fames ac turpis egestas integer. Nunc sed augue lacus viverra vitae congue eu consequat ac. Et malesuada fames ac turpis egestas integer.'
	},
] 

let new_news=[{}]

let boxcontent = '<div class="list-content"></div>';
let box = document.querySelector('.main-list');
let input_name = document.querySelector('.news_name')
let input_date = document.querySelector('.date')
let input_author = document.querySelector('.author')
let input_news = document.querySelector('.news')
let button = document.querySelector('.add')




for (let i = 0; i < news.length; i++){

	box.insertAdjacentHTML('beforeend',
	'<div class="list-content"><div class="content-title"><h1 class="name">'+news[i]['name']+'</h1> <p class="text">'+news[i]['date']+'</p></div> <div class="content-text">'+news[i]['text']+'</div> <div class="content-footer"><p class="subtitle">'+news[i]['author']+'</p><p class="id"> Id:'+news[i]['id']+'</p></div></div>');
}

function ShowNewNews(_arr){
	for (let i = 0; i < new_news.length; i++){

    box.insertAdjacentHTML('beforeend',
    '<div class="list-content"><div class="content-title"><h1 class="name">'+new_news[i]['name']+'</h1> <p class="text">'+new_news[i]['date']+'</p></div> <div class="content-text">'+new_news[i]['news']+'</div> <div class="content-footer"><p class="subtitle">'+new_news[i]['author']+'</p><p class="id"> Id:'+new_news[i]['id']+'</p></div></div>');
}

}
console.log(input_author.value)
button.addEventListener('click', function(){
	for (let i = 0; i <= new_news.length; i++){
		new_news[i].push(['id'] = i)
		new_news[i]['name'].push(input_name.value)
		new_news[i]['date'].push(input_date.value)
		new_news[i]['author'].push(input_author.value)
		new_news[i]['news'].push(input_news.value)
	}
	ShowNewNews(new_news)

})


