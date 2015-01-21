'use strict';

//var context = SP.ClientContext.get_current();
//var user = context.get_web().get_currentUser();

// This code runs when the DOM is ready and creates a context object which is needed to use the SharePoint object model
//$(document).ready(function () {
//    $("#searchsubmitInner").click(function () {
//        alert("usao");
//        var bla = $("#sInner").val();
//        var imagePath = "https://d3gtl9l2a4fn1j.cloudfront.net/t/p/w342";
//        //var imagePath = "https://image.tmdb.org/t/p/w342";
        
        
//        var url = "https://api.themoviedb.org/3/search/movie?api_key=f2c99cf74ee4c4214605f5ac1bc00fc6&query=" + bla;
//        alert(url);
//        $("#poster").attr("src", "https://image.tmdb.org/t/p/w342/m0UDkSPoVkmNfXFR9FN13yewy4B.jpg");
//        //$.ajax({
//        //    url: "../_api/SP.WebProxy.invoke",
//        //    type: "POST",
//        //    data: JSON.stringify(
//        //    {
//        //        "requestInfo": {
//        //            "__metadata": { "type": "SP.WebRequestInfo" },
//        //            "Url": url,
//        //            "Method": "GET",
//        //            "Headers": {
//        //                "results": [{
//        //                    "__metadata": { "type": "SP.KeyValue" },
//        //                    "Key": "Accept",
//        //                    "Value": "application/json;odata=verbose",
//        //                    "ValueType": "Edm.String"
//        //                }]
//        //            }
//        //        }
//        //    }),
//        //    headers: {
//        //        "Accept": "application/json;odata=verbose",
//        //        "Content-Type": "application/json;odata=verbose",
//        //        "X-RequestDigest": $("#__REQUESTDIGEST").val()
//        //    },
//        //    success: function (result) { alert(result); $("#poster").attr("src", "https://image.tmdb.org/t/p/w342/m0UDkSPoVkmNfXFR9FN13yewy4B.jpg"); },
//        //    error: errorHandler
//        //});

//        //$.ajax({
//        //    url: "https://api.themoviedb.org/3/search/movie?api_key=f2c99cf74ee4c4214605f5ac1bc00fc6&query=" + bla,
//        //    dataType: 'json',
//        //    crossDomain: true,
//        //    success: function (result) {
//        //        alert("Usao u result");
//        //        var xPath;
//        //        // alert(JSON.stringify(result));
//        //        try {
//        //            xPath = result.results[0].poster_path;
//        //            alert(xPath);
//        //            if (xPath != null) {
//        //                var cp = imagePath + xPath;
//        //                console.log(cp);
//        //                //$("#poster").attr("src", cp);
//        //                document.getElementById("poster").src = cp;
//        //                //console.log($("#poster").attr('src'));
//        //                alert("zamenio src" + cp);
//        //            }
//        //            else {
//        //                $("#poster").attr("src", "Images/NotFound.jpg");
//        //            }
//        //        }
//        //        catch (e) {
//        //            alert(e);
//        //            console.log(e);
//        //            $("#poster").attr("src", "../Images/AppIcon.png");
//        //        }
//        //        //$("#poster").attr("src", "images/NotFound.jpg");
//        //    }
//        //});
//    });
//});


$(document).ready(function () {
    alert("usao");
    $("#searchsubmitInner").click(function () {
        var bla = $("#sInner").val();
        var imagePath = "https://d3gtl9l2a4fn1j.cloudfront.net/t/p/w342";
        //alert(bla);
        $.ajax({
            url: "https://api.themoviedb.org/3/search/movie?api_key=f2c99cf74ee4c4214605f5ac1bc00fc6&query=" + bla,
            dataType: 'json',
            success: function (result) {
                var xPath;
                // alert(JSON.stringify(result));
                try {
                    xPath = result.results[0].poster_path;
                    //alert(xPath);
                    if (xPath != null) {
                        var cp = imagePath + xPath;
                        console.log(cp);
                        $("#poster").attr("src", cp);
                    }
                    else {
                        $("#poster").attr("src", "images/NotFound.jpg");
                    }
                }
                catch (e) {
                    //alert(e);
                    $("#poster").attr("src", "images/NotFound.jpg");
                }
                //$("#poster").attr("src", "images/NotFound.jpg");
            }
        });
    });
});

function getUserName() {
    //$("#poster").attr("src", "https://image.tmdb.org/t/p/w342/m0UDkSPoVkmNfXFR9FN13yewy4B.jpg");
    replaceImgTag();
}

function replaceImgTag()
{
    var bla = $("#sInner").val();
    var imagePath = "https://image.tmdb.org/t/p/w342";
    var url = "https://api.themoviedb.org/3/search/movie?api_key=f2c99cf74ee4c4214605f5ac1bc00fc6&query=" + bla;
    alert("usao u replaceImgTag: " + $("#__REQUESTDIGEST").val());
            $("#poster").attr("src", "https://image.tmdb.org/t/p/w342/m0UDkSPoVkmNfXFR9FN13yewy4B.jpg");
            $.ajax({
                url: "../_api/SP.WebProxy.invoke",
                type: "POST",
                data: JSON.stringify(
                {
                    "requestInfo": {
                        "__metadata": { "type": "SP.WebRequestInfo" },
                        "Url": url,
                        "Method": "GET",
                        "Headers": {
                            "results": [{
                                "__metadata": { "type": "SP.KeyValue" },
                                "Key": "Accept",
                                "Value": "application/json;odata=verbose",
                                "ValueType": "Edm.String"
                            }]
                        }
                    }
                }),
                headers: {
                    "Accept": "application/json;odata=verbose",
                    "Content-Type": "application/json;odata=verbose",
                    "X-RequestDigest": $("#__REQUESTDIGEST").val()
                },
                success: onSuccess,
                error: errorHandler
            });




    //$.ajax({
    //    url: "https://api.themoviedb.org/3/search/movie?api_key=f2c99cf74ee4c4214605f5ac1bc00fc6&query=" + bla,
    //    dataType: 'json',
    //    success: function (result) {
    //        var xPath;
    //        alert("OK");
    //        // alert(JSON.stringify(result));
    //        try {
    //            xPath = result.results[0].poster_path;
    //            alert(xPath);
    //            if (xPath != null) {
    //                var cp = imagePath + xPath;
    //                console.log(cp);
    //                $("#poster").attr("src", cp);
    //            }
    //            else {
    //                $("#poster").attr("src", "images/NotFound.jpg");
    //            }
    //        }
    //        catch (e) {
    //            alert(e);
    //            $("#poster").attr("src", "images/NotFound.jpg");
    //        }
    //        //$("#poster").attr("src", "images/NotFound.jpg");
    //    }
    //});
}

function onSuccess() {
    
    var bla = $("#sInner").val();
    var imagePath = "https://d3gtl9l2a4fn1j.cloudfront.net/t/p/w342";
    alert("Usao u result: " + bla);
    $.ajax({
        url: "https://api.themoviedb.org/3/search/movie?api_key=f2c99cf74ee4c4214605f5ac1bc00fc6&query=" + bla,
        dataType: 'json',
        success: function (result) {
            var xPath;
            // alert(JSON.stringify(result));
            try {
                xPath = result.results[0].poster_path;
                alert(xPath);
                if (xPath != null) {
                    var cp = imagePath + xPath;
                    console.log(cp);
                    $("#poster").attr("src", cp);
                }
                else {
                    $("#poster").attr("src", "images/NotFound.jpg");
                }
            }
            catch (e) {
                alert(e);
                $("#poster").attr("src", "images/NotFound.jpg");
            }
            //$("#poster").attr("src", "images/NotFound.jpg");
        }
    });
}

function errorHandler(XHR, textStatus, errorThrown)
{
    alert("error: " + textStatus);
    alert("error: " + errorThrown);
}