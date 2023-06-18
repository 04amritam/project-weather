
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '97506cf5c6mshd915c44b4f26f79p17a998jsn53712b85b914',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	
	}
};
const getWeather=(city)=>{
cityName.innerHTML=city

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city,options)
.then(response=>response.json())
.then((response)=>{
	console.log(response)
	temp.innerHTML = response.temp
	temp2.innerHTML = response.temp
	min_temp.innerHTML = response.min_temp
	max_temp.innerHTML = response.max_temp
	feels_like.innerHTML = response.feels_like
	wind_speed.innerHTML = response.wind_speed
	wind_speed2.innerHTML = response.wind_speed	
	wind_degrees.innerHTML = response.wind_degrees
	cloud_pct.innerHTML = response.cloud_pct
	humidity2.innerHTML = response.humidity	
	sunrise.innerHTML = response.sunrise
	sunset.innerHTML = response.sunset

	humidity.innerHTML = response.humidity
	
	
})
.catch(err=>console.error(err));

}

submit.addEventListener("click",(e)=>{
	e.preventDefault()
getWeather(city.value)
})

getWeather("Delhi")














// const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '97506cf5c6mshd915c44b4f26f79p17a998jsn53712b85b914',
// 		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
// 	}
// };

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
	
// } catch (error) {
// 	console.error(error);
// }