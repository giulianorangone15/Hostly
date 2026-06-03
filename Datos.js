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
        descripcion: "Desconexión absoluta en una espectacular estructura de troncos y piedra de alta gama. Equipada con un imponente hogar a leña para el invierno, piscina privada templada y un deck de madera flotante suspendido sobre las sierras.",
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

// Función para verificar si un día es temporada alta de vacaciones
function verificarSiEsVacaciones(mes, dia) {
    // Verano: Todo Enero (mes 0) y Todo Febrero (mes 1)
    if (mes === 0 || mes === 1) {
        return true;
    }
    // Invierno: Julio completo (mes 6)
    if (mes === 6) {
        return true;
    }
    return false;
}

// Función auxiliar para calcular el precio exacto de una fecha específica
function calcularPrecioDia(fechaObj, precioBase) {
    const yyyy = fechaObj.getFullYear();
    const mm = String(fechaObj.getMonth() + 1).padStart(2, '0');
    const dd = String(fechaObj.getDate()).padStart(2, '0');
    const fechaStr = `${yyyy}-${mm}-${dd}`;
    
    // Regla de oro: Si es feriado, aplica el 40% (manda el feriado siempre)
    if (fechasFeriados.includes(fechaStr)) {
        return precioBase * (1 + PORCENTAJE_AUMENTO_FERIADO);
    }
    
    // Si no es feriado, pero es época de vacaciones, aplica el 30%
    if (verificarSiEsVacaciones(fechaObj.getMonth(), fechaObj.getDate())) {
        return precioBase * (1 + PORCENTAJE_AUMENTO_VACACIONES);
    }
    
    return precioBase; // Tarifa estándar
}

// ============================================================================================
// ⚙️ LÓGICA DE FUNCIONAMIENTO (Sincronizada y Optimizada)
// ============================================================================================

let fotosActuales = [];
let indiceFotoActual = 0;
let propiedadSeleccionadaId = '';
let fechaCalendarioActual = new Date();

let fechaInicioSeleccionada = null; 
let fechaFinSeleccionada = null;    

// 🛠️ CORRECCIÓN DE AUTOSCROLL PARA CELULARES
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
    
    document.getElementById('modal-btn-reservar').setAttribute('onclick', `enviarReservaWhatsApp('${p.titulo}')`);
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
    
    // ⏰ FECHAS PASADAS: Conseguimos el día de hoy limpio (00:00 hs) para comparar con precisión
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
        
        // 🔒 EVALUACIÓN DE REGLAS Y BLOQUEOS:
        // 1. ¿Es una fecha vieja? -> Bloqueo total por tiempo
        if (fechaActualObjeto < hoy) {
            div.classList.add('ocupado'); 
            div.style.opacity = "0.35"; // Opacidad baja para denotar inactividad histórica
            // Queda inerte, no se le da callback onclick
        } 
        // 2. ¿Está bloqueada en tus reservas? -> Bloqueo por ocupación
        else if (prop.fechasOcupadas.includes(fechaTextoStr)) {
            div.classList.add('ocupado');
        } 
        // 3. Es presente o futuro y está disponible -> Habilitado para clics
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

function enviarReservaWhatsApp(nombre) {
    const paxCantidad = document.getElementById('pasajeros-cantidad').value;
    const textoPax = paxCantidad === 'todos' ? '2 personas' : (paxCantidad === '10' ? 'más de 6 personas' : `${paxCantidad} personas`);
    
    let mensaje = `Hola Hostly, me interesa consultar disponibilidad para la propiedad: *${nombre}*.\n`;
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
        mensaje += `\n💰 *Presupuesto estimado:* $${totalWhatsApp.toLocaleString('es-AR')}`;
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
// ==========================================================================
// 📱 CONTROL PREMIUM DE VIDEO PARA CELULARES (Evita la precarga en móviles)
// ==========================================================================
function corregirVideoMovil() {
    // Si el ancho de diseño de la pantalla es menor o igual a 768px
    if (window.innerWidth <= 768) {
        var video = document.querySelector('.video-background');
        if (video) {
            video.remove(); // Elimina por completo el elemento del mapa del sitio
            console.log("Video removido con éxito para optimizar el celular.");
        }
    }
}

// Se ejecuta apenas carga el script de datos
corregirVideoMovil();

// Por las dudas, si el usuario gira el celular de horizontal a vertical
window.addEventListener('resize', corregirVideoMovil);