/*
! Line Charts
*/
Plotly.newPlot('plotArea', [{ x: [1, 2, 3], y: [10, 20, 30] }]);
Plotly.newPlot('mariaPlot', [{ x: [1, 2, 3, 4], y: [5, 10, 15, 20] }]);

/* 
! Bar Chart of Lunches
*/
var trace = [
  {
    x: ['burrito', 'pizza', 'chicken'],
    y: [10, 18, 5],
    type: 'bar'
  }
];

var layout = {
  title: 'Luncheon Survey',
  xaxis: { title: 'Food Options' },
  yaxis: { title: 'Number of Respondents' }
};

Plotly.newPlot('lunchBar', trace, layout);

/* 
! Bar Chart of Beverages
*/
var drinksData = [
  {
    x: [
      'nonalcoholic beer',
      'nonalcoholic wine',
      'nonalcoholic martini',
      'nonalcoholic margarita',
      'ice tea',
      'nonalcoholic rum & coke',
      'nonalcoholic mai tai',
      'nonalcoholic gin & tonic'
    ],
    y: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
    type: 'bar'
  }
];

var layout = {
  title: 'Drinks Survey',
  xaxis: { title: 'Drink Options' },
  yaxis: { title: '% of Drinks Ordered' }
};

Plotly.newPlot('drinksBar', drinksData, layout);

/* 
! Pie Chart
*/

var bevsData = [
  {
    labels: [
      'nonalcoholic beer',
      'nonalcoholic wine',
      'nonalcoholic martini',
      'nonalcoholic margarita',
      'ice tea',
      'nonalcoholic rum & coke',
      'nonalcoholic mai tai',
      'nonalcoholic gin & tonic'
    ],
    values: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
    type: 'pie'
  }
];

var layout = {
  title: 'Drinks Survey'
};

Plotly.newPlot('drinksPie', bevsData, layout);
