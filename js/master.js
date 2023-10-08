let productosHTML = document.querySelector('.productos');
//console.log(productosHTML);


fetch('../datos/productos.json')
.then((respuesta)=>{
    return respuesta.json()
})
.then((productos)=>{
    //console.log(productos) 
    productos.forEach(producto => {
          productosHTML.innerHTML += `
        <div class="col">
          <div class="card h-100">
            <img src="${producto.imagen}" class="card-img-top" alt="${producto.nombre}">
            <div class="card-body">
              <h5 class="card-title">Nombre:${producto.nombre}</h5>
              <p class="card-text">Cantidad: ${producto.cantidad}</p>
              <p class="card-text">Precio: ${producto.precio}</p>
            <a   id='${JSON.stringify(producto)}' href= '#' class='btn btn-secondary d-block botonDetalle' >Ver detalle </a>
            </div>
            </div>
            </div>
        
        `    
    })
    
    let botonDetalle = document.querySelectorAll('.botonDetalle')
    //console.log(botonDetalle);
    let arrayMiListaDeProductos
    let miObjeto
    let codigo

    botonDetalle.forEach(productoSeleccion => {
         productoSeleccion.addEventListener('click', function(e){
             e.preventDefault()
             
             let miListaDeProductos = localStorage.getItem('detallesProducto')
             if(miListaDeProductos == null){
                 arrayMiListaDeProductos = [];
             }else{
                 arrayMiListaDeProductos = JSON.parse(miListaDeProductos)
                
             }

            arrayMiListaDeProductos.push(this.id)
            miObjeto = JSON.parse(arrayMiListaDeProductos[0])
            codigo = miObjeto.codigo
            localStorage.setItem('detallesProducto', JSON.stringify(arrayMiListaDeProductos))
            location.href = `detalle.html?codigo=${codigo}`
             
         })    
     } )
    
})

.catch((error)=>{
    console.log('Ufff ha ocurrido un error '+error )
})
