const url = 'https://spotify23.p.rapidapi.com/search/?q=%3CREQUIRED%3E&type=multi&offset=0&limit=10&numberOfTopResults=5';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'b91acf5cc7mshb7020959cc252bcp1e6389jsnb1ab907b1b6e',
		'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
	}
};

fetch(url, options)
.then((data) => {
    data.json();
})
.then((data) => {
    console.log(data);
})
.catch((err) => {
    console.log(err);
})