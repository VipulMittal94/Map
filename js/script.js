 
function loadData() {

    var $body = $('body');
    var $wikiElem = $('#wikipedia-links');
    var $nytHeaderElem = $('#nytimes-header');
    var $nytElem = $('#nytimes-articles');
    var $greeting = $('#greeting');

    // clear out old data before new request
    $wikiElem.text("");
    $nytElem.text("");

    // load streetview
    var street = $("#street").val();
    var city = $("#city").val();

    var loc = street + ', ' + city;

    $greeting.text('I want to live at ' + loc + '?');

    var streetviewURL = "https://maps.googleapis.com/maps/api/streetview?size=600x400&location=' + loc + '&key=AIzaSyD26gIGcZOJpPCBDGVrQLt_Pwhcl56nzE4";
    $body.append('<img class="bgimg" src = "' + streetviewURL + '">');
    // YOUR CODE GOES HERE!

    return false;
};

$('#form-container').submit(loadData);
