var collegiate = 'https://dictionaryapi.com/api/v3/references/collegiate/json/';
var api_key  = '?key=b464afe3-b582-445c-be5e-b3144bbd1a15';

function setup() {
  noCanvas();

  var word = chrome.extension.getBackgroundPage().word;
  var url = collegiate + word + api_key;
  var url2 = thesaurus + word + api_key2;
  loadJSON(url, gotData);

  function gotData(data) {
    var h = select("#heading")
    var p = select('#definition');
    var str;
    if (data[0]) {
        console.log(data[0].shortdef[0].toString());
        var str = "";
        for(var i=0; i<data[0].shortdef.length; i++){
            str += (i+1).toString() + ". ";
            str += data[0].shortdef[i].toString();
            str += "<br><br>";
        }
        h.html("Word Flash: " + word);
        p.html(str);
    } else {
        p.html('Something went wrong.');
    }
  }

}