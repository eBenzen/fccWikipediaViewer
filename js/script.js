//source - https://learn.jquery.com/using-jquery-core/document-ready/

var outputContainer = document.getElementById("output");
var wikidata

function openRandomWiki() {
    window.open("https://en.wikipedia.org/wiki/Special:Random");
}


function getWikis(){
  var searchTerm = document.getElementById("search").value;
  var urlWiki = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + searchTerm;
  console.log(urlWiki);

  $.ajax(urlWiki, {
      dataType: "jsonp",
      data: {
        origin: "*"
      },
      type: "GET",
      success: useData
    });
}

  function useData(data){
    //clear existing contents
    $('#output').empty();

    //Add new search results
    for(var i=0; i<data[1].length; i++){
      $('#output').append('<a href="'+ data[3][i] + '"target="_blank">' +
                             '<div class="outputDiv shadow">' + 
                               '<h4>' + data[1][i] + '</h4>' + 
                               '<span>' + data[2][i] + '</span>' + 
                             '</div>' + 
                          '</a>')
    }
  }
