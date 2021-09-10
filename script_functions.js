function validarCampos()
{
    /*validar campos*/
    let campoNombre = document.getElementById('nombre').value;
    let campoTransporte = document.getElementById('transporte').value;
    let campoNumPersonas = document.getElementById('numero-personas').value;
    let campoTelefono = document.getElementById('telefono-contacto').value;
    let valRetorno = false;
    if(campoNombre == '' && campoTransporte == '' && campoNumPersonas == '' && campoTelefono == '')
    {
        document.getElementById('campo-nombre').style.display = 'block';
        document.getElementById('campo-transporte').style.display = 'block';
        document.getElementById('campo-num-personas').style.display = 'block';
        document.getElementById('campo-telefono').style.display = 'block';
        return valRetorno;
    }
    if(campoNombre != '' && campoTransporte != '' && campoNumPersonas != '' && campoTelefono != '')
    {
        document.getElementById('campo-nombre').style.display = 'none';
        document.getElementById('campo-transporte').style.display = 'none';
        document.getElementById('campo-num-personas').style.display = 'none';
        document.getElementById('campo-telefono').style.display = 'none';
        valRetorno = true;
        return valRetorno;
    }
    if(campoNombre == '')
    {
        document.getElementById('campo-nombre').style.display = 'block';
        document.getElementById('campo-transporte').style.display = 'none';
        document.getElementById('campo-num-personas').style.display = 'none';
        document.getElementById('campo-telefono').style.display = 'none';
        return valRetorno;
    }
    if(campoTransporte == '')
    {
        document.getElementById('campo-nombre').style.display = 'none';
        document.getElementById('campo-transporte').style.display = 'block';
        document.getElementById('campo-num-personas').style.display = 'none';
        document.getElementById('campo-telefono').style.display = 'none';
        return valRetorno;
    }
    if(campoNumPersonas == '')
    {
        document.getElementById('campo-nombre').style.display = 'none';
        document.getElementById('campo-transporte').style.display = 'none';
        document.getElementById('campo-num-personas').style.display = 'block';
        document.getElementById('campo-telefono').style.display = 'none';
        return valRetorno;
    }
    if(campoTelefono == '')
    {
        document.getElementById('campo-nombre').style.display = 'none';
        document.getElementById('campo-transporte').style.display = 'none';
        document.getElementById('campo-num-personas').style.display = 'none';
        document.getElementById('campo-telefono').style.display = 'block';
        return valRetorno;
    }
}

function setIdReserva()
{
    if(localStorage.getItem('id') === null)
    {
        localStorage.setItem('id', '1');
    }
    else
    {
        return localStorage.getItem('id');
    }
}

function validarUsuario(usuario, pass)
{
    let indiceUsusario = usuarios.indexOf(usuario);
    if(indiceUsusario == 0)
    {
        window.location = "administrador/index.html";
        sessionStorage.setItem("currentloggedin",usuario);   
    }
    else
    {
        if(indiceUsusario != -1 && pass == claves[indiceUsusario])
        {
            window.location = "pagina.html";
            sessionStorage.setItem("currentloggedin",usuario);   
        }
        else
        {
            alert('Usuario invalido, intente con otro.');
            window.location = "index.html";
        }
    }
    //window.location = "file:///C:/Users/dizs_/Desktop/instituto/proyectoIntegrador/Nueva%20carpeta/pagina.html";
}

function llenarTabla()
{
    var identificador = localStorage.getItem('id');
    for(var i=1;i<identificador;i++)
    {
        //alert(localStorage.getItem('numeroReserva'+i));
        document.getElementById('tabla-llenar').innerHTML += '<tr><td>'+localStorage.getItem('numeroReserva'+i)+'</td><td>'+localStorage.getItem('nombre'+i)+'</td><td>'+localStorage.getItem('numeroPersonas'+i)+'</td><td>'+localStorage.getItem('telefono'+i)+'</td><td><a href="#" onclick="borrarRegistro('+i+')"><i class="fas fa-trash"></i></a></td><td><a href="#" onclick="editarRegistro('+i+')"><i class="fas fa-edit"></i></a></td></tr>';
    }
}

function borrarRegistro(val)
{
    localStorage.removeItem('numeroReserva'+val);
    localStorage.removeItem('nombre'+val);
    localStorage.removeItem('numeroPersonas'+val);
    localStorage.removeItem('telefono'+val);
    alert('Elemento borrado');
    window.location = 'index.html';
}

function editarRegistro(val)
{
    
}

function cerrarSesion()
{
    sessionStorage.clear();
    location.href = 'http://localhost:8080/proyectoIntegrador/final/index.html';
}

var usuarios = ['admin', 'cliente', 'invitado'];
var claves = ['admin2021', 'cli2021', 'inv2021'];

//funciones del cotizador
let vacationCalc = document.getElementById('vacationCalc')

    vacationCalc.addEventListener('submit', calcExpenses)

function calcExpenses(e){
    e.preventDefault();

    let origen = document.getElementById('origen').value,
        destino = document.getElementById('destino').value,
        km = document.getElementById('km').value;
    
    balance = km * 0.3;
    
    UI(origen, destino, balance)

}

function UI(origen, destino, balance){
    let result = document.getElementById('result')
    let dataPrint = document.createElement('div')

    dataPrint.innerHTML = `
        <div class="container-data row">
            <div class="col s4">
                <h6>${origen}</h6>
            </div>      
            <div class="col s4">
                <h6>${destino} </h6>
            </div>
            <div class="col s4">    
                <h6>$${balance} </h6>
            </div>
        </div>
    `
    result.appendChild(dataPrint)

    reset();

}

function reset() {
    document.getElementById('vacationCalc').reset()
}