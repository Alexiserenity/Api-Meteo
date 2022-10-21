
// Fonction appelée au lancement du site
function start() 
{
  // Création de l'objet apiWeather
  apiWeather = null;
  if(document.getElementById("city-input") && document.getElementById("city-input").value){
    apiWeather = new API_WEATHER(document.getElementById("city-input").value);
  }
  else{
    apiWeather = new API_WEATHER();
  }

  // Appel par défaut de la strat grace à 'onload'
  apiWeather.onload = function(){start()};
  // Appel de la fonction fetchTodayForecast
  apiWeather
    .fetchTodayForecast()
    .then(function(response) {
      // Récupère la donnée d'une API
      const data = response.data;

      // On récupère l'information principal
      const main = data.weather[0].main;      
      const description = data.weather[0].description;
      const temp = data.main.temp;
      const icon = apiWeather.getHTMLElementFromIcon(data.weather[0].icon);

      // Modifier le DOM
      document.getElementById('today-forecast-main').innerHTML = main;
      document.getElementById('today-forecast-more-info').innerHTML = description;
      document.getElementById('icon-weather-container').innerHTML = icon;
      document.getElementById('today-forecast-temp').innerHTML = `${temp}°C`;
      
    })
    
    .getThreeDayforecast()
    .then(function(response)
    {
      for(i=0; i<3; i++){
        // On récupère l'information principal
        const main = data.list[i].weather[0].main;
        const description = data.list[i].weather[0].description;
        const temp = data.list[i].temp.day;
        const icon = apiWeather.getHTMLElementFromIcon(data.list[i].weather[0].icon);
  
        // Modifier le DOM2
        document.getElementById('day'+(i+2)+'-forecast-main').innerHTML = main;
        document.getElementById('day'+(i+2)+'-forecast-more-info').innerHTML = description;
        document.getElementById('day'+(i+2)+'-icon-weather-container').innerHTML = icon;
        document.getElementById('day'+(i+2)+'-forecast-temp').innerHTML = `${temp}°C`;
      }
  
    })
    
    
    .catch(function(error) {
      // Affiche une erreur
      console.error(error);
    });
    
}


function text()
{
  var input = document.getElementById("city-input").value;
}

