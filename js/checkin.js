function checkin() {
    const usuarioLogueado = sessionStorage.getItem("log1");
    const contraseñaLogueada = sessionStorage.getItem("log2");
    const usuarioGuardado = localStorage.getItem("usuariolog");
    const contraseñaGuardada = localStorage.getItem("contraseñalog");
    const currentPage = window.location.pathname;


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