<%@ Page language="C#" Inherits="Microsoft.SharePoint.WebPartPages.WebPartPage, Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register Tagprefix="SharePoint" Namespace="Microsoft.SharePoint.WebControls" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register Tagprefix="Utilities" Namespace="Microsoft.SharePoint.Utilities" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register Tagprefix="WebPartPages" Namespace="Microsoft.SharePoint.WebPartPages" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>

<WebPartPages:AllowFraming ID="AllowFraming" runat="server" />

<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <style>
        div {
            border: 36px solid transparent;
            width: 235px;
            display: table;
            padding: 5px 20px 5px 20px;
        }
        input {
            display: table-cell;
            width: auto;
        }
        #round {
            border-image: url(../images/MovieTape.jpg) 42% round;
        }
    </style>
    <title></title>

    <script type="text/javascript" src="../Scripts/jquery-1.9.1.min.js"></script>
    <script type="text/javascript" src="/_layouts/15/MicrosoftAjax.js"></script>
    <script type="text/javascript" src="/_layouts/15/sp.runtime.js"></script>
    <script type="text/javascript" src="/_layouts/15/sp.js"></script>
    <script>
        $(document).ready(function () {
            $("#searchsubmitInner").click(function () {
                var bla = $("#sInner").val();
                var imagePath = "http://d3gtl9l2a4fn1j.cloudfront.net/t/p/w342";
                $.ajax({
                    url: "https://api.themoviedb.org/3/search/movie?api_key=f2c99cf74ee4c4214605f5ac1bc00fc6&query=" + bla,
                    dataType: 'json',
                    success: function (result) {
                        var xPath;
                        try {
                            xPath = result.results[0].poster_path;
                            //alert(xPath);
                            if (xPath != null) {
                                var cp = imagePath + xPath;
                                console.log(cp);
                                $("#poster").attr("src", cp);
                            }
                            else {
                                $("#poster").attr("src", "../images/NotFound.jpg");
                            }
                        }
                        catch (e) {
                            //alert(e);
                            $("#poster").attr("src", "../images/NotFound.jpg");
                        }
                    }
                });
            });
        });
</script>
</head>
<body>
   <div style="table-layout:auto ">
        <input required="required" placeholder="Search movie poster" type="text"  name="s" id="sInner" style="width:250px;" maxlength="600" />
        <input type="submit" id="searchsubmitInner" value="Search" style="width:100px;" />
        <p></p>
       <div id="round">
           <img width="250px" src='' id="poster" />
       </div>
    </div>
</body>
</html>
