/*
 * Generate Dropdown Menu Items: ID numbers
 */
function init() {
  var selector = d3.select('#selDataset');

  d3.json('samples.json').then(data => {
    console.log(data);
    var sampleNames = data.names;
    sampleNames.forEach(sample => {
      selector
        .append('option')
        .text(sample)
        .property('value', sample);
    });
  });
}

init();
/*
! NOTE: The function optionChanged() is called when a change takes place in 
! in the drop-down menu from HTML. [this.value = newSample aka ID number]
*/
function optionChanged(newSample) {
  buildMetadata(newSample);
  buildCharts(newSample);
}
/*
 * optionChanged calls two other functions: buildMetadata() and buildCharts()
 */

/*
 * Print information to the Demographic Info panel once a user selects an ID number
 */
function buildMetadata(sample) {
  d3.json('samples.json').then(data => {
    var metadata = data.metadata;
    var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
    var results = Object.entries(resultArray);
    console.log(results);
    var PANEL = d3.select('#sample-metadata');

    PANEL.html('');
    PANEL.append('h6').text(results.location);
  });
}
