<!DOCTYPE html>
<html>
<head>
    <title>jiggle Into JavaScript</title>
</head>
<body>
    
    <p>Press the buttons to move the box!</p>
    
    div id="box" style="height:150px; width:150px; background-color:orange; margin:25px"> </div>

    <button id="shrinkBtn">Shrink</button>
    <buktton id="growBtn">Grow <</button>
    <button id="resetBtn">Reset</button>

    <script type="text/JavaScript">
      
        document.getElementById("shrinkBtn").addEventListener("click", function(){
               
            document.getElementById("box").style.height = "25px";
        });
        document.getElementById("growBtn").addEventListener("click", function(){
            document.getElementById("box").style.height = "250px";
        });

        document.getElementById("resetBtn").addEventListener("click", function(){
              
            document.getElementById("box").style.height ="150px";
        });
    </script>
</body>
</html>
