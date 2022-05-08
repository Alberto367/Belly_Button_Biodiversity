function init() {
  var selector = d3.select("#selDataset");  
  d3.json("samples.json").then((data) => {
    console.log(data);
    var sampleNames = data.names;
    sampleNames.forEach((sample) => {
      selector
        .append("option")
        .text(sample)
        .property("value", sample);
  });
})}
  
init();

function optionChanged(newSample) {
  buildMetadata(newSample);
  //buildCharts(newSample);

}

function buildMetadata(sample) {
  d3.json("samples.json").then((data) => {
    var metadata = data.metadata;
    var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
    var result = resultArray[0];
    var PANEL = d3.select("#sample-metadata");
    // items:[{
    //   ID:result.id,
    //   ETHNICITY:result.ethnicity,
    //   GENDER:result.gender,
    //   AGE:result.age,
    //   LOCATION:result.location,
    //   BBTYPE:result.bbtype,
    //   WFREQ:result.wfreq
    // }]
    PANEL.html("");
    PANEL.append("h6").text(result.location);

  });
}
