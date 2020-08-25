
//document.documentElement.style.setProperty('--x','500deg');
var round1 = -90;
var round2 =-270;
var a=0;
var backgroundImg = document.getElementsByClassName("loveday-container")[0];
function rotation()
{   if (round1 < 90)
    {
        round1+=10;
        backgroundImg.style.backgroundImage = "linear-gradient("+round1+"deg, #DBDBDB 50%, transparent 50%),linear-gradient(-270deg, transparent 50%, #ec8bd7 50%),linear-gradient(90deg, #DBDBDB 50%, transparent 50%)";
    }
    else
    {
        if (round2 < -90)
        {
            round2+=10;
            //console.log(round2);
            backgroundImg.style.backgroundImage = "linear-gradient("+round2+"deg, transparent 50%, #ec8bd7 50%),linear-gradient(90deg, #DBDBDB 50%, transparent 50%)";    
        }
        else{
            stopInterval();
        }
    }
    console.log(a++);
}

function stopInterval()
{
    clearInterval(go);
}

var go = setInterval(rotation, 500);
