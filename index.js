const apiKey={
    key:'bc63c33c266959f4939546ec5f44c7c4',
    baseUrl:"https://api.openweathermap.org/data/2.5/weather?",
}


const searchBox=document.getElementById('searchInput');
// Event Listener function on enter
searchBox.addEventListener('keypress',(event)=>{
    if(event.keyCode==13){
        getWeatherReport(searchBox.value)
        document.querySelector('.details').style.display="block";
    }
})

// Get weather report
function getWeatherReport(city){
 fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${'bc63c33c266959f4939546ec5f44c7c4'}&units=metric`)
    .then(weather => {
        return weather.json();
    }).then(showWeatherReport)
}

function showWeatherReport(weather){
    console.log(weather)
    let city=document.getElementById('city');
    // console.log(city)
    city.innerText=`${weather.name},${weather.sys.country}`;

    let temprature=document.querySelector('.temp');
    temprature.innerHTML=`${Math.round(weather.main.temp)}&deg;C`;
   

    let minMax=document.querySelector('.min-max');

    minMax.innerHTML=`(min)${Math.floor(weather.main.temp_min)}&deg;C (max)${Math.ceil(weather.main.temp_max)}&deg;C`;
    let weatherType=document.querySelector('.type');
    weatherType.innerText=`${weather.weather[0].main}`

    let date=document.querySelector('.date');
    let todayDate=new Date();
    date.innerHTML=dateManage(todayDate);

    if(weatherType.textContent=='Clear'){
        document.body.style.backgroundImage=`url('https://media.istockphoto.com/photos/sun-on-blue-sky-with-clouds-picture-id824800468?b=1&k=20&m=824800468&s=170667a&w=0&h=3shOnnkimj6ovXSrOtjHOngOSab4vPKCMzmdV-tnZVw=')`
    }
    else if(weatherType.textContent=='Clouds'){
        document.body.style.backgroundImage=`url('https://images.unsplash.com/photo-1495072667656-424d680e6299?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGNsb3VkeSUyMHdlYXRoZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60')`
    }
    else if(weatherType.textContent=='Haze'){
        document.body.style.backgroundImage=`url('https://media.istockphoto.com/photos/fog-and-clouds-on-mountain-picture-id1160438555?b=1&k=20&m=1160438555&s=170667a&w=0&h=K-BiNam5YFkh9Bk8uAizMj3Q0juIpQoqizl_UJs8qwQ=')`
    }
    else if(weatherType.textContent=='Sunny'){
        document.body.style.backgroundImage=`url("https://images.unsplash.com/photo-1469122312224-c5846569feb1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c3Vubnl8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60")`
    }
    else if(weatherType.textContent=='Rain'){
        document.body.style.backgroundImage=`url('https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmFpbnl8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60')`
    }
    else if(weatherType.textContent=="Snow"){
        document.body.style.backgroundImage=`url('https://images.unsplash.com/photo-1414541944151-2f3ec1cfd87d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8c25vd3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60')`
    }
    else{
        document.body.style.backgroundImage=`url("https://images.unsplash.com/photo-1560461311-0535e8fa1ba5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHdlYXRoZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60")`
    }

}
function dateManage(dateArgu){
    let days=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];

    let months=["January",'February',"March",'April',"May","June","July","August","September","October","November","December"];

    let year=dateArgu.getFullYear();
    let month=months[dateArgu.getMonth()];
    let date=dateArgu.getDate();
    let day=days[dateArgu.getDay()];

    return `${month} ${date} (${day}),${year}`;
}