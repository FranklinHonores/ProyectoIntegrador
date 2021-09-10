function guardarReserva()
{
    let id = localStorage.getItem('id');
    id = parseInt(id);
    if(validarCampos() == true)
    {
        let campoNombre = document.getElementById('nombre').value;
        let campoTransporte = document.getElementById('transporte').value;
        let campoNumPersonas = document.getElementById('numero-personas').value;
        let campoTelefono = document.getElementById('telefono-contacto').value;

        /*guardar los campos en el localstorage*/
        localStorage.setItem('numeroReserva'+id, id);
        localStorage.setItem('nombre'+id, campoNombre);
        localStorage.setItem('transporte'+id, campoTransporte);
        localStorage.setItem('numeroPersonas'+id, campoNumPersonas);
        localStorage.setItem('telefono'+id, campoTelefono);

        id = id + 1;
        localStorage.setItem('id', id);
        alert('Cita agendada con éxito');
        window.location = "../pagina.html";
    }
}