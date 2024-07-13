function checkin() {
    var usuarioLogueado = sessionStorage.getItem("log1");
    var contraseñaLogueada = sessionStorage.getItem("log2");
    var usuarioGuardado = localStorage.getItem("usuariolog");
    var contraseñaGuardada = localStorage.getItem("contraseñalog");
    var currentPage = window.location.pathname;


if (usuarioLogueado === usuarioGuardado && contraseñaLogueada === contraseñaGuardada && currentPage.includes('principal.html'))
    return;
else if(usuarioLogueado === usuarioGuardado && contraseñaLogueada === contraseñaGuardada && currentPage.includes('index.html'))
    window.location.assign('principal.html');
else if(usuarioLogueado !== usuarioGuardado && contraseñaLogueada === contraseñaGuardada && currentPage.includes('principal.html'))
    window.location.assign('index.html');
else if(usuarioLogueado === usuarioGuardado && contraseñaLogueada !== contraseñaGuardada && currentPage.includes('principal.html'))
    window.location.assign('index.html');
else if(usuarioLogueado !== usuarioGuardado && contraseñaLogueada !== contraseñaGuardada && currentPage.includes('principal.html'))
    window.location.assign('index.html');
else{
    
}
}