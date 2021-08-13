function send() {
  const numberMovies = document.getElementById("movies");
  const numberMoviesValue = numberMovies.value;
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
  const monthCineCost = Math.floor(numberMoviesValue) * 3 ;
  let streamingPlatformCosts = 0;
  streamingPlatform.forEach(item => {
    if (item.value == true) {
      streamingPlatformCosts = streamingPlatformCosts + 2.75
    }
  })


  //Create Elements
  const answerNode = document.querySelector('section#solution');
  const answerTitle = document.createElement('h3');
  const answer = document.createElement('p');
  const cineCost = document.createElement('p');
  const streamingCost = document.createElement('p');
  answerNode.append(answerTitle, answer, streamingCost, cineCost)


  //Insert text
  answerTitle.innerText = 'Respuesta';
  streamingCost.innerText = 'El costo mensual es de ' + streamingPlatformCosts;
  cineCost.innerText = 'El costo mensual es de ' + monthCineCost;

  if(monthCineCost == streamingPlatformCosts){
    answer.innerText = "Los valores ingresados no son validos";
  } else if (monthCineCost > streamingPlatformCosts) {
    answer.innerText = "Es más economico contratar plataformas de streaming";
    console.log(`Es más economico contratar plataformas de streaming`)
  } else {
    answer.innerText = "Es más economico ir a cine"
    console.log(`Es más economico ir a cine`)
  }


  // Remove Asyc Element
  setTimeout(() => {
    answerNode.remove(answerTitle, answer, streamingCost, cineCost);
    monthCineCost = 0;
    streamingPlatformCosts = 0;
  }, 10000);

  }