setInterval(setClock, 1000);
const secondhand=document.querySelector('.second')
const minutehand=document.querySelector('.minute')
const hourhand=document.querySelector('.hour')

function setClock(){
        const now= new Date();
        const second= (now.getSeconds())/60
        const min=(second+now.getMinutes())/60
        const hour=(min+now.getHours())/12
        setRotate(secondhand,second)
        setRotate(minutehand,min)
        setRotate(hourhand,hour)
        

    }
function setRotate(ele,rotation){
        ele.style.setProperty('--rotation',rotation*360)
    }

    
    setClock()
