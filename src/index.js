const formatPrice = (price) => {

  const newPrice = new window.Intl.NumberFormat('en-EN', {
    style: 'currency',
    currency:'USD'
  }).format(price)

  return newPrice
}


function send() {

  const numberMovies = document.getElementById("movies");
  const numberMoviesValue = numberMovies.value;
  const priceTicketMovie = document.getElementById("priceMovies");
  const priceTicketMovieValue = priceTicketMovie.value;
  const numberSeries = document.getElementById("series");
  const numberSeriesValue = numberSeries.value;
  const disneyPlatform = document.getElementById("disney");
  const netflixPlatform = document.getElementById("netflix");
  const amazonPlatform = document.getElementById("amazon");
  const hboPlatform = document.getElementById("hbo");

  const streamingPlatform = [
    {
      'name': 'disneyPlatformValue',
      'value': disneyPlatform.checked
    },
    {
      'name': 'netflixPlatformValue',
      'value': netflixPlatform.checked
    },
    {
      'name': 'amazonPlatformValue',
      'value': amazonPlatform.checked },
    {
      'name': 'hboPlatformValue',
      'value': hboPlatform.checked
    }
  ]


  //Costs
  const monthCineValue = Math.floor(numberMoviesValue) * priceTicketMovieValue ;
  const monthCineCost = formatPrice(monthCineValue);
  let streamingPlatformValue = 0;
  let streamingPlatformCosts = 0;

  streamingPlatform.forEach(item => {
    if (item.value == true) {
      streamingPlatformValue = streamingPlatformCosts + 2.75;
    }
  })
  streamingPlatformCosts = formatPrice(streamingPlatformValue)

  //Create Elements
  const answerNode = document.querySelector('section#solution');
  const answerTitle = document.createElement('h3');
  const answer = document.createElement('p');
  const cineCost = document.createElement('p');
  const streamingCost = document.createElement('p');
  answerNode.append(answerTitle, answer, streamingCost, cineCost)


  //Insert text
  answerTitle.innerText = 'Respuesta';
  streamingCost.innerText = 'El costo mensual de streaming es de ' + streamingPlatformCosts;
  cineCost.innerText = 'El costo mensual de cine es de ' + monthCineCost;

  if(monthCineCost == streamingPlatformCosts){
    answer.innerText = "Los valores ingresados no son validos";
  } else if (monthCineCost > streamingPlatformCosts) {
    answer.innerText = "Es m??s economico contratar plataformas de streaming";
    console.log(`Es m??s economico contratar plataformas de streaming`)
  } else {
    answer.innerText = "Es m??s economico ir a cine"
    console.log(`Es m??s economico ir a cine`)
  }


  // Remove Asyc Element
  setTimeout(() => {
    answerNode.remove(answerTitle, answer, streamingCost, cineCost);
    monthCineCost = 0;
    streamingPlatformCosts = 0;
  }, 10000);

  }