var hostweburl;

// Load the required SharePoint libraries
$(document).ready(function () {
  
  // Load the js file and continue to the 
  //   success event handler
  $.getScript("../_layouts/15/SP.RequestExecutor.js", execCrossDomainRequest);
});

// Function to prepare and issue the request to get
//  SharePoint data
function execCrossDomainRequest() {
  var executor;

  // Initialize the RequestExecutor with the app web URL.
  executor = new SP.RequestExecutor("/");

  // Issue the call against the host web.
  // To get the title using REST we can hit the endpoint:
  //   app_web_url/_api/SP.AppContextSite(@target)/web/title?@target='siteUrl'
  // The response formats the data in the JSON format.
  // The functions successHandler and errorHandler attend the
    //      success and error events respectively.
  //var bla = $("#sInner").val();
  //alert(bla);
  var imagePath = "https://d3gtl9l2a4fn1j.cloudfront.net/t/p/w342";
  alert("pre poziva");
  executor.executeAsync(
      {
        url: "https://api.themoviedb.org/3/search/movie?api_key=f2c99cf74ee4c4214605f5ac1bc00fc6&query=peva",
        method: "GET",
        headers: { "Accept": "application/json; odata=verbose" },
        success: successHandler,
        error: errorHandler
      }
  );
}

// Function to handle the success event.
// Prints the host web's title to the page.
function successHandler(result) {
    alert("OK");
  var jsonObject = JSON.parse(result.body);
  alert(jsonObject);
    try {
        xPath = result.results[0].poster_path;
        //alert(xPath);
        if (xPath != null) {
            var cp = imagePath + xPath;
            console.log(cp);
            $("#poster").attr("src", cp);
            //alert("zamenio src" + cp);
        }
        else {
            $("#poster").attr("src", "images/NotFound.jpg");
        }
    }
    catch (e) {
        alert(e);
        console.log(e);
        $("#poster").attr("src", "images/NotFound.jpg");
    }
}

// Function to handle the error event.
// Prints the error message to the page.
function errorHandler(data, errorCode, errorMessage) {
    alert("greska");
  document.getElementById("HostwebTitle").innerText =
      "Could not complete cross-domain call: " + errorMessage;
}

// Function to retrieve a query string value.
// For production purposes you may want to use
//  a library to handle the query string.
function getQueryStringParameter(paramToRetrieve) {
  var params =
      document.URL.split("?")[1].split("&");
  var strParams = "";
  for (var i = 0; i < params.length; i = i + 1) {
    var singleParam = params[i].split("=");
    if (singleParam[0] == paramToRetrieve)
      return singleParam[1];
  }
}