function displayTime()
{
    var date=new Date();
    var hs=date.getHours();
    var min=date.getMinutes();
    var sec=date.getSeconds();
    var session=document.getElementById("sessions")
    if(hs>=12)
    {
        document.getElementById("sessions").innerHTML="PM";
    }
    else{
        session.innerHTML="AM";
    }
    if(hs>12)
    {
        hs=hs-12;
    }
    document.getElementById("hours").innerHTML=hs;
    document.getElementById("minutes").innerHTML=min;
    document.getElementById("seconds").innerHTML=sec;
}
setInterval(displayTime,10);