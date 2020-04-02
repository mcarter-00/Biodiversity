/*
 * Read external data via server.
 */
d3.json('samples.json').then(function(data) {
  console.log(data);
});
/*
 * Extract only the wfreq, or the weekly belly button washing frequency,
 * of each person into a new array.
 */
d3.json('samples.json').then(function(data) {
  wfreq = data.metadata.map(person => person.wfreq);
  console.log(wfreq);
});
/*
 * Sort the wfreq array in descending order.
 */
d3.json('samples.json').then(function(data) {
  wfreq = data.metadata.map(person => person.wfreq).sort((a, b) => b - a);
  console.log(wfreq);
});
/*
 * Delete null values from the sorted wfreq array.
 */
d3.json('samples.json').then(function(data) {
  wfreq = data.metadata.map(person => person.wfreq).sort((a, b) => b - a);
  filteredWfreq = wfreq.filter(element => element != null);
  console.log(filteredWfreq);
});
/*
 * Print all the metadata of the first person (ID 940).
 ! The Object.entries() method returns key-value pairs of an object as arrays.
 ! The forEach() method allows access to each element of an array.
 */
d3.json('samples.json').then(function(data) {
  firstPerson = data.metadata[0];
  Object.entries(firstPerson).forEach(([key, value]) => {
    console.log(key + ': ' + value);
  });
});
/*
 * Create an event where Disney character prints in the console
 * upon changing Disney dropdown.
 */
d3.selectAll('body').on('change', updateDisneyPage);
function updateDisneyPage() {
  var dropdownDisneyMenu = d3.selectAll('#selectDisneyOption').node();
  var dropdownDisneyMenuID = dropdownDisneyMenu.id;
  var selectedDisneyOption = dropdownDisneyMenu.value;

  console.log(dropdownDisneyMenuID);
  console.log(selectedDisneyOption);
}
