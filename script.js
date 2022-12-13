var icon = document.getElementById("icon");
            var bulet = document.getElementById("EL1");
            var bulet2 = document.getElementById("EL2");
            icon.onclick = function(){
                document.body.classList.toggle("dark-theme");
                 if(document.body.classList.contains("dark-theme")){
                     icon.src ="Img/sun.png";
                     bulet.src ="Img/D_Ellipse 1.png"
                     bulet2.src ="Img/D_Ellipse 2.png"
                 }else{
                     icon.src = "Img/moon.png";
                     bulet.src ="Img/Ellipse 1.png"
                     bulet2.src ="Img/Ellipse 2.png"

                 }
            }