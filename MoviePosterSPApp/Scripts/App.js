'use strict';
//It's not used!!!!

$(document).ready(function () {
    alert("usao");
    $("#searchsubmitInner").click(function () {
        var bla = $("#sInner").val();
        var imagePath = "https://d3gtl9l2a4fn1j.cloudfront.net/t/p/w342";
        $.ajax({
            url: "https://api.themoviedb.org/3/search/movie?api_key=f2c99cf74ee4c4214605f5ac1bc00fc6&query=" + bla,
            dataType: 'json',
            success: function (result) {
                var xPath;
                try {
                    xPath = result.results[0].poster_path;
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
                    $("#poster").attr("src", "images/NotFound.jpg");
                }
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