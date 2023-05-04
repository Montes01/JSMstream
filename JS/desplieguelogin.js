const displayon = (a) => {
    document.getElementById(a).style = 'padding:0%; opacity:1; z-index:1; ';
}
const displayoff = (a) => {
    document.getElementById(a).style = 'padding: 0% 30%;opacity:0; z-index:-1; ';
}

function tema (){
    let color = getComputedStyle(document.documentElement).getPropertyValue('--colorprincipal');
    if( color == '#00001a'){
        document.documentElement.style.setProperty('--colorprincipal', '#17001a');
        document.documentElement.style.setProperty('--colorsecundario', '#4b0c53');
        document.documentElement.style.setProperty('--colorterciario', '#e731ff');
        document.documentElement.style.setProperty('--colordegradado1', '#32014e');
        document.documentElement.style.setProperty('--colordegradado2', 'rgb(225, 0, 255)');
    } else if (color == '#17001a'){
        document.documentElement.style.setProperty('--colorprincipal', '#000000');
        document.documentElement.style.setProperty('--colorsecundario', '#2a2a2a');
        document.documentElement.style.setProperty('--colorterciario', '#b5b5b5');
        document.documentElement.style.setProperty('--colordegradado1', '#111111');
        document.documentElement.style.setProperty('--colordegradado2', '#ffffff');
    } else {
        document.documentElement.style.setProperty('--colordegradado1', '#01044e');
        document.documentElement.style.setProperty('--colordegradado2', 'rgb(0, 94, 255)');
        document.documentElement.style.setProperty('--colorprincipal', '#00001a');
        document.documentElement.style.setProperty('--colorsecundario', '#0c0e53');
        document.documentElement.style.setProperty('--colorterciario', '#3138ff');
        
    }
}
const showtipetext = (a,b) => {
    let contraseña = document.getElementById(a)
    let color = document.getElementById(b)
    if (contraseña.type == 'password') {
        contraseña.type = 'text'
        color.style = 'filter: invert(0);'
    } else if (contraseña.type == 'text') {
        contraseña.type = 'password'
        color.style = 'filter: invert(1);'
    }
}

function displayonandoff (z) {
    let ison = 0;
    if (ison == 0) {
        displayon(z)
        ison ++
    } else {
        displayoff(z)
        ison --
    }
}

// you will be here after full DOM loading and parsing
let range = document.getElementById('rangevolume')
let audiovolume = document.getElementById('audiodefondo')
audiovolume.volume = range.value
console.log(audiovolume.volume);
range.addEventListener("input", function() {
    audiovolume.volume = range.value
  });