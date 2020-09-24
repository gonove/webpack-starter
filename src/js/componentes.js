
import '../css/componentes.css';

export const saludar = ( nombre ) => {

    console.log('Creando etiqueta h1 en el HTML');

    const hache1 = document.createElement( 'h1' );
    hache1.innerText = `Hey!, ${ nombre }, what's up?!`;

    document.body.append( hache1 );

}

