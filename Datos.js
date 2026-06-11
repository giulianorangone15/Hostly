// ============================================================================================
// 🌐 CONTROL DE INTERFAZ Y LOGIN PRINCIPAL (HOSTLY)
// ============================================================================================

let usuarioActual = null;

function iniciarSesionTradicional() {
    const emailInput = document.getElementById('login-email');
    const email = emailInput ? emailInput.value : "usuario@hostly.com";
    
    usuarioActual = {
        uid: "user_tradicional_123",
        displayName: email.split('@')[0],
        email: email,
        photoURL: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80"
    };
    
    console.log("Sesión iniciada vía formulario tradicional.");
    actualizarInterfazUsuario();
}

async function iniciarSesionGoogle() {
    try {
        usuarioActual = {
            uid: "google_uid_giuliano_21",
            displayName: "Giuliano",
            email: "giuliano.mecanica@gmail.com",
            photoURL: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80"
        };
        console.log("Sesión iniciada con Google.");
        actualizarInterfazUsuario();
    } catch (error) {
        console.error("Error en Google Auth:", error);
    }
}

async function cerrarSesionGoogle() {
    usuarioActual = null;
    actualizarInterfazUsuario();
}

function actualizarInterfazUsuario() {
    const vistaBloqueo = document.getElementById('pantalla-login-obligatorio');
    const navbarPrincipal = document.getElementById('navbar-principal');
    const avatarNavbar = document.getElementById('avatar-navbar');
    const menuNombre = document.getElementById('menu-nombre-usuario');
    const menuEmail = document.getElementById('menu-email-usuario');

    if (usuarioActual) {
        if (vistaBloqueo) vistaBloqueo.style.display = 'none';
        if (navbarPrincipal) navbarPrincipal.style.display = 'flex';
        if (avatarNavbar) avatarNavbar.src = usuarioActual.photoURL;
        if (menuNombre) menuNombre.innerText = usuarioActual.displayName;
        if (menuEmail) menuEmail.innerText = usuarioActual.email;
    } else {
        if (vistaBloqueo) vistaBloqueo.style.display = 'flex';
        if (navbarPrincipal) navbarPrincipal.style.display = 'none';
    }
}

function toggleMenuMenu() {
    const menu = document.getElementById('menu-desplegable');
    if (menu) menu.classList.toggle('mostrar');
}

function solicitarServicioPropietario() {
    alert("¡Hola! Pronto vas a poder subir tus propiedades.");
}

window.addEventListener('click', (e) => {
    const menu = document.getElementById('menu-desplegable');
    const zonaUsuario = document.querySelector('.navbar-usuario-zona');
    if (menu && menu.classList.contains('mostrar') && zonaUsuario && !zonaUsuario.contains(e.target)) {
        menu.classList.remove('mostrar');
    }
});

document.addEventListener("DOMContentLoaded", () => {
    actualizarInterfazUsuario();
});

// ===========================
// 💾 BASE DE DATOS DE Hostly
// ===========================

const infoPropiedades = {
'habitacion-executive': {
        id: 'habitacion-executive', 
        titulo: "Hotel Grisabel", 
        tipo: "habitacion", 
        capacidadMax: 4, 
        linkMaps: "https://www.google.com/maps/place/Hotel+Grisabel/@-31.4195327,-64.4949301,17z/data=!4m9!3m8!1s0x942d6619b35730af:0x7772c6a0d0c8980d!5m2!4m1!1i2!8m2!3d-31.4195373!4d-64.4923552!16s%2Fg%2F1tfrc87n?entry=ttu&g_ep=EgoyMDI2MDYwMS4wIKXMDSoASAFQAw%3D%3D", 
        ubicacionCorta: "Centro, Villa Carlos Paz", 
        descripcion: "Disfrutá de una estadía excelente en las habitaciones del Hotel Grisabel. Equipadas con dos camas matromoniales por habitación, sommiers y baño en suite. Al ser un complejo hotelero, contamos con múltiples habitaciones disponibles: si tu grupo es de más de 4 personas, consultanos por WhatsApp para coordinar la reserva de habitaciones múltiples.",
        servicios: ["Wi-Fi Alta Velocidad", "Apto Para Niños", "Desayuno Incluido", "Climatización"],
        precios: { 
            1: 45000,   
            2: 56000,   
            3: 68000,   
            4: 80000,   
            5: 87000,   
            6: 98000,   
            10: 80000 
        },
        imagenes: [ 
            "Hotel Grisabel/portada grisabel.jpg",
            "Hotel Grisabel/frente G.jpg",
            "Hotel Grisabel/habitacion Grisabel.jpg",
            "Hotel Grisabel/desayuno grisabel.jpg"
        ],
        fechasOcupadas: ["2026-06-11", "2026-06-12", "2026-06-13"] 
    },
    'dpto-panoramico': {
        id: 'dpto-panoramico',
        titulo: "Grisabel Premium Department",
        tipo: "departamento", 
        capacidadMax: 4,
        linkMaps: "https://maps.google.com", 
        ubicacionCorta: "Costanera, Villa Carlos Paz",
        descripcion: "Estadía de alta categoría con balcón panorámico al lago. Este departamento de diseño minimalista cuenta con cocina totalmente equipada con barras de mármol, mobiliario de autor, y acceso exclusivo a la piscina climatizada del complejo.",
        servicios: ["🏊 Piscina Complejo", "🌐 Wi-Fi Alta Velocidad", "🚗 Cochera Privada", "📺 Smart TV 4K"],
        precios: { 1: 45000, 2: 52000, 3: 65000, 4: 78000, 5: 78000, 6: 78000, 10: 78000 },
        imagenes: [
            "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80"
        ],
        fechasOcupadas: ["2026-06-15", "2026-06-16", "2026-06-20"]
    },
    'residencia-sierras': {
        id: 'residencia-sierras',
        titulo: "Residencia Villa Suiza",
        tipo: "casa", 
        capacidadMax: 6,
        linkMaps: "https://maps.google.com",
        ubicacionCorta: "Barrio Golf, Villa Carlos Paz",
        descripcion: "Imponente propiedad residencial de dos plantas ideal para familias exigentes. Cuenta con un parque parquizado gigante, galería techada con asador premium, living comedor integrado y seguridad privada las 24 horas.",
        servicios: ["🌳 Parque Gigante", "🔥 Asador y Quincho", "🛡️ Seguridad 24hs", "🧺 Lavarropas"],
        precios: { 1: 80000, 2: 85000, 3: 95000, 4: 110000, 5: 125000, 6: 140000, 10: 140000 },
        imagenes: [
            "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80"
        ],
        fechasOcupadas: ["2026-06-12", "2026-06-13", "2026-06-14"]
    },
    'cabana-alpes': {
        id: 'cabana-alpes',
        titulo: "Cabaña Refugio de Alta Montaña",
        tipo: "cabaña",
        capacidadMax: 10,
        linkMaps: "https://maps.google.com",
        ubicacionCorta: "Zona Altas Cumbres, Villa Carlos Paz",
        descripcion: "Desconexión absoluta en una spectacular estructura de troncos y piedra de alta gama. Equipada con un imponente hogar a leña para el invierno, piscina privada templada y un deck de madera flotante suspendido sobre las sierras.",
        servicios: ["🏊 Piscina Privada", "🔥 Hogar a Leña", "🌐 Wi-Fi Libre", "🚗 Estacionamiento Techado"],
        precios: { 1: 60000, 2: 65000, 3: 75000, 4: 85000, 5: 95000, 6: 110000, 10: 135000 },
        imagenes: [
            "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1542718610-a1d656d1884c?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1449034446853-66c86144b0ad?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1200&q=80"
        ],
        fechasOcupadas: ["2026-06-25", "2026-06-26"]
    }
};

// ============================================================================================
// 🗓️ CONFIGURACIÓN DE AJUSTES POR TEMPORADA (Modificable)
// ============================================================================================

const PORCENTAJE_AUMENTO_FERIADO = 0.40;   // 40% extra en feriados establecidos
const PORCENTAJE_AUMENTO_VACACIONES = 0.30; // 30% extra en temporada alta (invierno/verano)

// Lista de feriados oficiales 2026 ("YYYY-MM-DD")
const fechasFeriados = [
    "2026-01-01", "2026-02-16", "2026-02-17", "2026-03-24", "2026-04-02", 
    "2026-04-03", "2026-05-01", "2026-05-25", "2026-06-15", "2026-06-20", 
    "2026-07-09", "2026-08-17", "2026-10-12", "2026-11-23", "2026-12-08", "2026-12-25"
];

function verificarSiEsVacaciones(mes, dia) {
    if (mes === 0 || mes === 1) return true;
    if (mes === 6) return true;
    return false;
}

function calcularPrecioDia(fechaObj, precioBase) {
    const yyyy = fechaObj.getFullYear();
    const mm = String(fechaObj.getMonth() + 1).padStart(2, '0');
    const dd = String(fechaObj.getDate()).padStart(2, '0');
    const fechaStr = `${yyyy}-${mm}-${dd}`;
    
    if (fechasFeriados.includes(fechaStr)) {
        return precioBase * (1 + PORCENTAJE_AUMENTO_FERIADO);
    }
    if (verificarSiEsVacaciones(fechaObj.getMonth(), fechaObj.getDate())) {
        return precioBase * (1 + PORCENTAJE_AUMENTO_VACACIONES);
    }
    return precioBase;
}

// ============================================================================================
// 🔐 ESTADO GLOBAL DE AUTENTICACIÓN
// ============================================================================================
let usuarioActual = null; 

// ============================================================================================
// ⚙️ LÓGICA DE FUNCIONAMIENTO (Sincronizada y Optimizada)
// ============================================================================================

let fotosActuales = [];
let indiceFotoActual = 0;
let propiedadSeleccionadaId = '';
let fechaCalendarioActual = new Date();

let fechaInicioSeleccionada = null; 
let fechaFinSeleccionada = null;    

window.addEventListener('DOMContentLoaded', () => { 
    renderizarCatalogo(); 
    setTimeout(() => { window.scrollTo(0, 0); }, 10);
});

function renderizarCatalogo() {
    const contenedor = document.getElementById('lista-propiedades');
    const sinResultadosDiv = document.getElementById('sin-resultados');
    if (!contenedor) return;
    
    contenedor.innerHTML = "";
    contenedor.appendChild(sinResultadosDiv);

    Object.values(infoPropiedades).forEach(p => {
        const pasajerosValor = document.getElementById('pasajeros-cantidad').value;
        const pasajerosSeleccionados = pasajerosValor === 'todos' ? 2 : parseInt(pasajerosValor);
        let precioMuestra = p.precios[pasajerosSeleccionados] || p.precios[1];

        const htmlTarjeta = `
            <div class="tarjeta-alojamiento" data-id="${p.id}" onclick="verPropiedad('${p.id}')">
                <div class="foto-contenedor"><img src="${p.imagenes[0]}" alt="${p.titulo}"></div>
                <div class="tarjeta-info">
                    <p class="ubicacion" style="text-transform: uppercase; font-size: 0.75rem; font-weight: 700; color: #007a78; margin-bottom: 4px; letter-spacing: 1px;">${p.tipo}</p>
                    <h4>${p.titulo}</h4>
                    <p class="ubicacion">${p.ubicacionCorta}</p>
                    <div class="servicios">${p.servicios.slice(0, 3).map(s => `<span style="background: #f5f5f5; padding: 3px 8px; border-radius: 4px; font-size: 0.75rem; font-weight: 600;">${s}</span>`).join('')}</div>
                    <div class="tarjeta-precio-boton">
                        <div class="precio-caja">
                            <span class="precio-leyenda">Por noche (${pasajerosValor === 'todos' ? 'Base' : pasajerosSeleccionados + ' pers.'})</span>
                            <span class="precio-monto">$${precioMuestra.toLocaleString('es-AR')}</span>
                        </div>
                        <span class="enlace-ver-mas">Ver Detalles</span>
                    </div>
                </div>
            </div>
        `;
        contenedor.insertAdjacentHTML('beforeend', htmlTarjeta);
    });
}

function filtrarAlojamientos() {
    const tipoElegido = document.getElementById('filtro-tipo').value;
    const pasajerosValor = document.getElementById('pasajeros-cantidad').value;
    const tarjetas = document.querySelectorAll('.tarjeta-alojamiento');
    let contadorVisibles = 0;

    tarjetas.forEach(tarjeta => {
        const id = tarjeta.getAttribute('data-id');
        const p = infoPropiedades[id];
        const cumpleTipo = (tipoElegido === 'todos' || p.tipo === tipoElegido);
        
        let cumpleCapacidad = false;
        if (pasajerosValor === 'todos') {
            cumpleCapacidad = true;
        } else {
            const numPasajeros = parseInt(pasajerosValor);
            cumpleCapacidad = (numPasajeros <= p.capacidadMax || (numPasajeros === 10 && p.capacidadMax >= 6));
        }

        if (cumpleTipo && cumpleCapacidad) {
            tarjeta.style.display = "flex";
            contadorVisibles++;
            let paxParaPrecio = pasajerosValor === 'todos' ? 2 : parseInt(pasajerosValor);
            let precio = p.precios[paxParaPrecio] || p.precios[p.capacidadMax] || p.precios[1];
            
            tarjeta.querySelector('.precio-monto').innerText = "$" + precio.toLocaleString('es-AR');
            tarjeta.querySelector('.precio-leyenda').innerText = `Por noche (${pasajerosValor === 'todos' ? 'Base' : (pasajerosValor === '10' ? 'Más' : pasajerosValor) + ' pers.'})`;
        } else {
            tarjeta.style.display = "none";
        }
    });
    document.getElementById('sin-resultados').style.display = (contadorVisibles === 0) ? "block" : "none";
}

function limpiarFiltros() {
    document.getElementById('filtro-tipo').value = 'todos';
    document.getElementById('pasajeros-cantidad').value = '2'; 
    filtrarAlojamientos(); 
}

function verPropiedad(idPropiedad) {
    const p = infoPropiedades[idPropiedad];
    propiedadSeleccionadaId = idPropiedad;
    fechaCalendarioActual = new Date();
    
    fechaInicioSeleccionada = null;
    fechaFinSeleccionada = null;
    
    document.getElementById('modal-titulo').innerText = p.titulo;
    document.getElementById('modal-ubicacion').innerText = "📍 " + p.ubicacionCorta;
    document.getElementById('modal-descripcion').innerText = p.descripcion;
    document.getElementById('modal-link-maps').setAttribute('href', p.linkMaps);
    
    fotosActuales = p.imagenes;
    indiceFotoActual = 0;
    actualizarFotoModal();
    
    const contServicios = document.getElementById('modal-servicios');
    contServicios.innerHTML = "";
    p.servicios.forEach(s => {
        const sp = document.createElement('span');
        sp.style.cssText = "background-color: #f5f5f5; color: #1a1a1a; padding: 6px 14px; font-size: 0.85rem; border-radius: 20px; font-weight: 600; border: 1px solid #eeeeee;";
        sp.innerText = s;
        contServicios.appendChild(sp);
    });
    
    actualizarPrecioModal();
    generarCalendarioInterno();
    
    // Vinculamos el click al interceptor que valida la sesión de Google antes de mandar el WhatsApp
    document.getElementById('modal-btn-reservar').onclick = () => {
        interceptarYGuardarReserva(p.titulo);
    };
    
    document.getElementById('modal-propiedad').style.setProperty('display', 'block', 'important');
}

function generarCalendarioInterno() {
    const prop = infoPropiedades[propiedadSeleccionadaId];
    const cajaDias = document.getElementById('calendario-dias-caja');
    if (!cajaDias) return;
    
    cajaDias.innerHTML = "";
    const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    const año = fechaCalendarioActual.getFullYear();
    const mes = fechaCalendarioActual.getMonth();
    
    document.getElementById('calendario-mes-año').innerText = `${meses[mes]} ${año}`;
    
    const primerDia = new Date(año, mes, 1).getDay();
    const totalDias = new Date(año, mes + 1, 0).getDate();
    
    const pasajerosValor = document.getElementById('pasajeros-cantidad').value;
    const pasajerosSeleccionados = pasajerosValor === 'todos' ? 2 : parseInt(pasajerosValor);
    let precioBaseNoche = prop.precios[pasajerosSeleccionados] || prop.precios[prop.capacidadMax] || prop.precios[1];
    
    const hoy = new Date();
    hoy.setHours(0, 0, 0, 0);
    
    for (let i = 0; i < primerDia; i++) { 
        const vacio = document.createElement('div');
        vacio.className = "cal-dia vacio";
        cajaDias.appendChild(vacio); 
    }
    
    for (let d = 1; d <= totalDias; d++) {
        const div = document.createElement('div');
        div.className = "cal-dia";
        
        const fechaActualObjeto = new Date(año, mes, d);
        const fechaTextoStr = `${año}-${String(mes+1).padStart(2,'0')}-${String(d).padStart(2,'0')}`;
        
        let precioFinalDelDia = calcularPrecioDia(fechaActualObjeto, precioBaseNoche);
        let esFeriado = fechasFeriados.includes(fechaTextoStr);
        let esVacaciones = verificarSiEsVacaciones(mes, d);
        
        let estiloColorMonto = '';
        if (esFeriado) {
            estiloColorMonto = 'color: #d93838; font-weight: 700;'; 
        } else if (esVacaciones) {
            estiloColorMonto = 'color: #007a78; font-weight: 600;'; 
        }
        
        div.innerHTML = `
            <span class="num-dia ${esFeriado ? 'texto-feriado' : ''} ${esVacaciones ? 'texto-vacaciones' : ''}">${d}</span>
            <span class="monto-dia" style="${estiloColorMonto}">$${(precioFinalDelDia / 1000).toFixed(0)}k</span>
        `;
        
        if (fechaActualObjeto < hoy) {
            div.classList.add('ocupado'); 
            div.style.opacity = "0.35";
        } 
        else if (prop.fechasOcupadas.includes(fechaTextoStr)) {
            div.classList.add('ocupado');
        } 
        else {
            div.classList.add('disponible');
            if (esFeriado) div.classList.add('dia-feriado');
            if (esVacaciones) div.classList.add('dia-vacaciones');
            
            if (fechaInicioSeleccionada && fechaActualObjeto.getTime() === fechaInicioSeleccionada.getTime()) {
                div.classList.add('seleccionado');
            } else if (fechaFinSeleccionada && fechaActualObjeto.getTime() === fechaFinSeleccionada.getTime()) {
                div.classList.add('seleccionado');
            } else if (fechaInicioSeleccionada && fechaFinSeleccionada && fechaActualObjeto > fechaInicioSeleccionada && fechaActualObjeto < fechaFinSeleccionada) {
                div.classList.add('en-rango');
            }
            
            div.onclick = () => {
                seleccionarFechaCalendario(fechaActualObjeto);
            };
        }
        cajaDias.appendChild(div);
    }
}

function seleccionarFechaCalendario(fechaElegida) {
    if (!fechaInicioSeleccionada || (fechaInicioSeleccionada && fechaFinSeleccionada)) {
        fechaInicioSeleccionada = fechaElegida;
        fechaFinSeleccionada = null;
    } 
    else if (fechaElegida < fechaInicioSeleccionada) {
        fechaInicioSeleccionada = fechaElegida;
    } 
    else {
        fechaFinSeleccionada = fechaElegida;
    }
    
    actualizarPrecioModal();
    generarCalendarioInterno();
}

function actualizarPrecioModal() {
    const p = infoPropiedades[propiedadSeleccionadaId];
    const pasajerosValor = document.getElementById('pasajeros-cantidad').value;
    const pasajerosSeleccionados = pasajerosValor === 'todos' ? 2 : parseInt(pasajerosValor);
    let precioBaseNoche = p.precios[pasajerosSeleccionados] || p.precios[p.capacidadMax] || p.precios[1];
    
    const leyendaElemento = document.getElementById('modal-precio-leyenda');
    const montoElemento = document.getElementById('modal-precio-monto');
    
    if (fechaInicioSeleccionada && fechaFinSeleccionada) {
        let precioTotalEstadía = 0;
        let controlFecha = new Date(fechaInicioSeleccionada.getTime());
        let cantidadNoches = 0;
        
        while (controlFecha < fechaFinSeleccionada) {
            precioTotalEstadía += calcularPrecioDia(controlFecha, precioBaseNoche);
            cantidadNoches++;
            controlFecha.setDate(controlFecha.getDate() + 1); 
        }
        
        leyendaElemento.innerText = `Total por ${cantidadNoches} ${cantidadNoches === 1 ? 'noche' : 'noches'} (${pasajerosValor === 'todos' ? 'Base' : pasajerosSeleccionados + ' pers.'})`;
        montoElemento.innerText = `$${precioTotalEstadía.toLocaleString('es-AR')}`;
    } else {
        let hoy = new Date();
        let precioMuestra = calcularPrecioDia(hoy, precioBaseNoche);
        leyendaElemento.innerText = `Precio por noche (${pasajerosValor === 'todos' ? 'Base' : (pasajerosValor === '10' ? 'Más' : pasajerosValor) + ' pers.'})`;
        montoElemento.innerText = `$${precioMuestra.toLocaleString('es-AR')}`;
    }
}

function cambiarMesCalendario(d) { 
    fechaCalendarioActual.setMonth(fechaCalendarioActual.getMonth() + d); 
    generarCalendarioInterno(); 
}

function actualizarFotoModal() { 
    document.getElementById('modal-slider-imagenes').style.backgroundImage = `linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.4)), url('${fotosActuales[indiceFotoActual]}')`; 
}

function cambiarFoto(d) { 
    indiceFotoActual = (indiceFotoActual + d + fotosActuales.length) % fotosActuales.length; 
    actualizarFotoModal(); 
}

function cerrarModal() { 
    document.getElementById('modal-propiedad').style.setProperty('display', 'none', 'important'); 
}

// ============================================================================================
// 🌐 INTERFAZ Y CONTROLADORES DE GOOGLE AUTH VIA INTERRUPTORES SIMULADOS
// ============================================================================================

async function iniciarSesionGoogle() {
    try {
        // Simulación controlada para desarrollo ágil de la interfaz:
        usuarioActual = {
            uid: "google_uid_fake_12345",
            displayName: "Giuliano Test",
            email: "giuliano.test@gmail.com",
            photoURL: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80"
        };
        console.log("Sesión de Google simulada de forma correcta:", usuarioActual);
        actualizarInterfazUsuario();
        alert(`¡Bienvenido/a ${usuarioActual.displayName}!`);
    } catch (error) {
        console.error("Error crítico en OAuth de Google:", error);
    }
}

async function cerrarSesionGoogle() {
    try {
        usuarioActual = null;
        console.log("Sesión destruida localmente.");
        actualizarInterfazUsuario();
        alert("Sesión cerrada correctamente.");
    } catch (error) {
        console.error("Error al revocar sesión:", error);
    }
}

function actualizarInterfazUsuario() {
    const btnLogin = document.getElementById('btn-login-google');
    const btnLogout = document.getElementById('btn-logout-google');
    const avatarUsuario = document.getElementById('avatar-usuario');

    if (usuarioActual) {
        if (btnLogin) btnLogin.style.display = 'none';
        if (btnLogout) btnLogout.style.display = 'block';
        if (avatarUsuario) {
            avatarUsuario.src = usuarioActual.photoURL;
            avatarUsuario.style.display = 'inline-block';
        }
    } else {
        if (btnLogin) btnLogin.style.display = 'block';
        if (btnLogout) btnLogout.style.display = 'none';
        if (avatarUsuario) avatarUsuario.style.display = 'none';
    }
}

// ============================================================================================
// 💾 GESTIÓN E INTERCEPTACIÓN DE DATOS CON ESTADO DE REVISIÓN
// ============================================================================================

function interceptarYGuardarReserva(nombrePropiedad) {
    if (!usuarioActual) {
        alert("⚠️ Debes iniciar sesión con tu cuenta de Google para solicitar una reserva.");
        iniciarSesionGoogle();
        return;
    }

    if (!fechaInicioSeleccionada || !fechaFinSeleccionada) {
        alert("⚠️ Por favor, selecciona fechas de check-in y check-out válidas en el calendario.");
        return;
    }

    const p = infoPropiedades[propiedadSeleccionadaId];
    const pasajerosValor = document.getElementById('pasajeros-cantidad').value;
    const pasajerosSeleccionados = pasajerosValor === 'todos' ? 2 : parseInt(pasajerosValor);
    let precioBaseNoche = p.precios[pasajerosSeleccionados] || p.precios[p.capacidadMax] || p.precios[1];

    let precioTotalEstadía = 0;
    let cantidadNoches = 0;
    let controlFecha = new Date(fechaInicioSeleccionada.getTime());

    while (controlFecha < fechaFinSeleccionada) {
        precioTotalEstadía += calcularPrecioDia(controlFecha, precioBaseNoche);
        cantidadNoches++;
        controlFecha.setDate(controlFecha.getDate() + 1);
    }

    // Creación estructurada del payload con el estado solicitado
    const metadataSolicitud = {
        idReserva: `resv_${Date.now()}`,
        usuario: {
            uid: usuarioActual.uid,
            nombre: usuarioActual.displayName,
            email: usuarioActual.email
        },
        propiedadId: propiedadSeleccionadaId,
        nombrePropiedad: nombrePropiedad,
        checkIn: fechaInicioSeleccionada.toISOString().split('T')[0],
        checkOut: fechaFinSeleccionada.toISOString().split('T')[0],
        noches: cantidadNoches,
        montoTotal: precioTotalEstadía,
        fechaSolicitud: new Date().toISOString(),
        estadoRevision: 'pendiente_revision' // Estado de control maestro inicial
    };

    console.log("Payload guardado exitosamente en LocalStorage con estado de revisión:", metadataSolicitud);

    // Persistencia física temporal en LocalStorage
    let listadoHistórico = JSON.parse(localStorage.getItem('hostly_reservas')) || [];
    listadoHistórico.push(metadataSolicitud);
    localStorage.setItem('hostly_reservas', JSON.stringify(listadoHistórico));

    // Ejecuta el flujo tradicional enviando la confirmación por mensajería
    enviarReservaWhatsApp(nombrePropiedad);
}

// ============================================================================================
// 💬 SALIDAS EXTERNAS DE COMUNICACIÓN
// ============================================================================================

function enviarReservaWhatsApp(nombre) {
    const paxCantidad = document.getElementById('pasajeros-cantidad').value;
    const textoPax = paxCantidad === 'todos' ? '2 personas' : (paxCantidad === '10' ? 'más de 6 personas' : `${paxCantidad} personas`);
    
    let mensaje = `Hola Hostly, Quiero reservar la propiedad: *${nombre}*.\n`;
    mensaje += `Para una capacidad de: *${textoPax}*.`;
    
    if (fechaInicioSeleccionada && fechaFinSeleccionada) {
        const opciones = { day: '2-digit', month: '2-digit', year: 'numeric' };
        const checkIn = fechaInicioSeleccionada.toLocaleDateString('es-AR', opciones);
        const checkOut = fechaFinSeleccionada.toLocaleDateString('es-AR', opciones);
        
        const p = infoPropiedades[propiedadSeleccionadaId];
        const pasajerosSeleccionados = paxCantidad === 'todos' ? 2 : parseInt(paxCantidad);
        let precioBaseNoche = p.precios[pasajerosSeleccionados] || p.precios[p.capacidadMax] || p.precios[1];
        
        let totalWhatsApp = 0;
        let cantidadNoches = 0;
        let controlFecha = new Date(fechaInicioSeleccionada.getTime());
        
        while (controlFecha < fechaFinSeleccionada) {
            totalWhatsApp += calcularPrecioDia(controlFecha, precioBaseNoche);
            cantidadNoches++;
            controlFecha.setDate(controlFecha.getDate() + 1);
        }
        
        mensaje += `\n📅 *Fechas solicitadas:* Desde el *${checkIn}* hasta el *${checkOut}* (${cantidadNoches} noches).`;
        mensaje += `\n💰 *Precio Final:* $${totalWhatsApp.toLocaleString('es-AR')}`;
    } else if (fechaInicioSeleccionada) {
        const opciones = { day: '2-digit', month: '2-digit', year: 'numeric' };
        const checkInSolo = fechaInicioSeleccionada.toLocaleDateString('es-AR', opciones);
        mensaje += `\n📅 *Fecha estimativa de ingreso:* *${checkInSolo}*.`;
    }
    
    window.open(`https://wa.me/5493541523006?text=${encodeURIComponent(mensaje)}`, '_blank'); 
}

function solicitarServicioPropietario() {
    window.open(`https://wa.me/5493541523006?text=${encodeURIComponent('Hola, soy propietario y me interesa delegar la gestión de mi alquiler temporario con Hostly.')}`, '_blank');
}

// ============================================================================================
// 🌐 INTERFAZ Y CONTROLADORES DE GOOGLE AUTH (Para pantalla independiente)
// ============================================================================================

// Variable global para guardar al usuario logueado
let usuarioActual = null;

async function iniciarSesionGoogle() {
    try {
        // Simulación controlada (Tus datos reales de prueba para desarrollo)
        usuarioActual = {
            uid: "google_uid_giuliano_21",
            displayName: "Giuliano",
            email: "giuliano.mecanica@gmail.com",
            photoURL: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80"
        };
        
        console.log("Sesión iniciada con éxito para: " + usuarioActual.displayName);
        actualizarInterfazUsuario();
        
    } catch (error) {
        console.error("Error en la autenticación de Google:", error);
    }
}

async function cerrarSesionGoogle() {
    try {
        usuarioActual = null;
        console.log("Sesión cerrada.");
        actualizarInterfazUsuario();
    } catch (error) {
        console.error("Error al cerrar sesión:", error);
    }
}

/**
 * Controla qué pantalla se bloquea/muestra y llena los datos del menú de las 3 rayitas
 */
function actualizarInterfazUsuario() {
    const vistaBloqueo = document.getElementById('pantalla-login-obligatorio');
    const navbarPrincipal = document.getElementById('navbar-principal');
    const avatarNavbar = document.getElementById('avatar-navbar');
    
    // Elementos del menú desplegable hamburguesa
    const menuNombre = document.getElementById('menu-nombre-usuario');
    const menuEmail = document.getElementById('menu-email-usuario');

    if (usuarioActual) {
        // 🔓 USUARIO LOGUEADO: Ocultamos pantalla verde y activamos la Navbar
        if (vistaBloqueo) vistaBloqueo.style.display = 'none';
        if (navbarPrincipal) navbarPrincipal.style.display = 'flex';
        
        // Cargamos tu info en la barra y en el menú flotante
        if (avatarNavbar) avatarNavbar.src = usuarioActual.photoURL;
        if (menuNombre) menuNombre.innerText = usuarioActual.displayName;
        if (menuEmail) menuEmail.innerText = usuarioActual.email;
        
    } else {
        // 🔒 USUARIO NO LOGUEADO: Volvemos a bloquear y ocultamos la barra
        if (vistaBloqueo) vistaBloqueo.style.display = 'flex';
        if (navbarPrincipal) navbarPrincipal.style.display = 'none';
        
        // Limpiamos los datos para que no queden guardados
        if (avatarNavbar) avatarNavbar.src = "";
    }
}

/**
 * Abre y cierra el menú flotante al tocar las 3 rayitas
 */
function toggleMenuMenu() {
    const menu = document.getElementById('menu-desplegable');
    if (menu) {
        menu.classList.toggle('mostrar');
    }
}

/**
 * Función por si tocan "Publicar mi propiedad"
 */
function solicitarServicioPropietario() {
    alert("¡Hola Giuliano! Pronto vas a poder subir tus propiedades directamente desde este panel.");
}

// Cerrar el menú automáticamente si el usuario hace clic en cualquier otra parte de la pantalla
window.addEventListener('click', (e) => {
    const menu = document.getElementById('menu-desplegable');
    const zonaUsuario = document.querySelector('.navbar-usuario-zona');
    if (menu && menu.classList.contains('mostrar') && zonaUsuario && !zonaUsuario.contains(e.target)) {
        menu.classList.remove('mostrar');
    }
});

// ============================================================================================
// 🌐 CONTROL DE INTERFAZ Y LOGIN (HOSTLY)
// ============================================================================================

// Creamos la variable para guardar los datos del usuario (arranca vacía porque nadie inició sesión)
let usuarioActual = null;

/**
 * 1️⃣ Función que se ejecuta cuando el usuario hace clic en "Continuar con Google"
 */
async function iniciarSesionGoogle() {
    try {
        // Simulamos que Google nos devuelve tus datos reales para las pruebas
        usuarioActual = {
            uid: "google_uid_giuliano_21",
            displayName: "Giuliano",
            email: "giuliano.mecanica@gmail.com",
            photoURL: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80" // Foto de prueba
        };
        
        console.log("¡Sesión iniciada con éxito! Bienvenido, " + usuarioActual.displayName);
        
        // Al tener los datos, actualizamos la pantalla
        actualizarInterfazUsuario();
        
    } catch (error) {
        console.error("Error al conectar con Google:", error);
    }
}

/**
 * 2️⃣ Función para cerrar la sesión desde el menú de las 3 rayitas
 */
async function cerrarSesionGoogle() {
    try {
        usuarioActual = null;
        console.log("Sesión cerrada correctamente.");
        actualizarInterfazUsuario();
    } catch (error) {
        console.error("Error al cerrar sesión:", error);
    }
}

/**
 * 3️⃣ El "árbitro" que decide qué se muestra y qué se oculta en la pantalla
 */
function actualizarInterfazUsuario() {
    const vistaBloqueo = document.getElementById('pantalla-login-obligatorio');
    const navbarPrincipal = document.getElementById('navbar-principal');
    const avatarNavbar = document.getElementById('avatar-navbar');
    
    // Campos de texto adentro de las 3 rayitas
    const menuNombre = document.getElementById('menu-nombre-usuario');
    const menuEmail = document.getElementById('menu-email-usuario');

    if (usuarioActual) {
        // 🔓 SI ESTÁ LOGUEADO: Ocultamos el bloqueo y mostramos la barra superior
        if (vistaBloqueo) vistaBloqueo.style.display = 'none';
        if (navbarPrincipal) navbarPrincipal.style.display = 'flex';
        
        // Le metemos tu foto, nombre y mail a la barra y al menú desplegable
        if (avatarNavbar) avatarNavbar.src = usuarioActual.photoURL;
        if (menuNombre) menuNombre.innerText = usuarioActual.displayName;
        if (menuEmail) menuEmail.innerText = usuarioActual.email;
        
    } else {
        // 🔒 SI NO ESTÁ LOGUEADO: Clava la pantalla de bloqueo y esconde la barra
        if (vistaBloqueo) vistaBloqueo.style.display = 'flex';
        if (navbarPrincipal) navbarPrincipal.style.display = 'none';
        
        // Limpiamos la imagen por seguridad
        if (avatarNavbar) avatarNavbar.src = "";
    }
}

/**
 * 4️⃣ Abre y cierra el panel flotante cuando tocás las 3 rayitas
 */
function toggleMenuMenu() {
    const menu = document.getElementById('menu-desplegable');
    if (menu) {
        menu.classList.toggle('mostrar');
    }
}

/**
 * 5️⃣ Cartelito provisional para la opción de publicar propiedad
 */
function solicitarServicioPropietario() {
    alert("¡Hola Giuliano! Pronto vas a poder subir tus propiedades directamente desde acá.");
}

// 6️⃣ Si el menú está abierto y el usuario hace clic en cualquier otra parte, se cierra solo
window.addEventListener('click', (e) => {
    const menu = document.getElementById('menu-desplegable');
    const zonaUsuario = document.querySelector('.navbar-usuario-zona');
    if (menu && menu.classList.contains('mostrar') && zonaUsuario && !zonaUsuario.contains(e.target)) {
        menu.classList.remove('mostrar');
    }
});

// 7️⃣ ESTO ES CLAVE: Cuando la página se carga de cero, ejecuta el control para bloquear la pantalla
document.addEventListener("DOMContentLoaded", () => {
    actualizarInterfazUsuario();
});

/**
 * Función provisional para el login tradicional (Email y Contraseña)
 */
function iniciarSesionTradicional() {
    const email = document.getElementById('login-email').value;
    
    // Simulamos un ingreso exitoso con el mail que pusieron
    usuarioActual = {
        uid: "user_tradicional_123",
        displayName: email.split('@')[0], // Usa la primera parte del mail como nombre
        email: email,
        photoURL: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80"
    };
    
    console.log("Sesión iniciada vía formulario tradicional.");
    actualizarInterfazUsuario();
}