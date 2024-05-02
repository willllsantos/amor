function clicar() {
    var s = document.getElementById("sim")
    s.innerText = "SIM, EU VOU TE DAR MEU AMOR =) "    
    s.style.backgroundColor = "green"

    setTimeout(function() {
        location.reload();
    }, 2000)
    
}

function clicou() {
    var c = document.getElementById("nao")
    c.innerText = "SIM, EU VOU TE DAR MEU AMOR :} "    
    c.style.backgroundColor = "green"

    setTimeout(function() {
        location.reload();
    }, 2000)
}


