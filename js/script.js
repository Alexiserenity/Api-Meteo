
// Fonction appelée au lancement du site
function start() 
{
  // Création de l'objet apiWeather
  const apiWeather = new API_WEATHER();
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
      let main = new Array(3);
      let description = new Array(3);
      let temp = new Array(3);
      let icon = new Array(3);
      const i = 0;
      for(i=0, i<3, i++)
      {
        main[i] = data.weather[i].main;      
        description[i] = data.weather[i].description;
        temp[i] = data.main.temp;
        icon[i] = apiWeather.getHTMLElementFromIcon(data.weather[i].icon);

        // Modifier le DOM
        document.getElementById('today-forecast-main').innerHTML = main;
        document.getElementById('today-forecast-more-info').innerHTML = description;
        document.getElementById('icon-weather-container').innerHTML = icon;
        document.getElementById('today-forecast-temp').innerHTML = `${temp}°C`;
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

