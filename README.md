# E-commerce OffStyle

El proyecto realiza funcionalidades comunes de un e-commerce, se puede navegar entre cada categoria, ver cada producto de forma individual, elegir el stock, añadir al carrito, poder realizar la compra y se devolverá una simulación de Tikcket de compra. 

Acá va un listado de las tecnologias usadas
Las tecnologías usadas son:

    >Create React App
    >Sweet Alert
    >Css3
    >HTML5


Funcionalidades del proyecto:

    -Visualizar items
        -Elegir categorias de filtrado.
    -Visualizar cada producto
    -Poder elegir el stock de cada producto
    -Añadir al carrito el item seleccionado
    -En el carrito, visualizar la orden de compra
        -Ver el total de costo
        -Ver la cantidad elegida de cada Item
        -Poner los datos necesarios para realizar la compra
        -Una vez realizada la compra, los datos del comprador se enviarán a firebase.
    Última actualizacion:
        -En el ultimo update (update-stock), se añadió lo siguiente:    
            -Luego de realizar una orden, el stock elegido por el usuario será descontado del producto que él compro. De esa forma, en cada compra que se realiza, el stock irá disminuyendo hasta 0. Esto se hace actualizando los datos de el producto, restando el stock elegido por el usuario y el stock que había anteriormente. Todo esto suecede en firebase.
            

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
