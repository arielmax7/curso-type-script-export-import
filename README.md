# Curso de TypeScript Usando Export e Import

* Lo primero que debemos de hacer después de descargar y descomprimir el código es ejecutar el siguiente comando:

```
npm install
```
Ese comando descargará todas las dependecias y módulos de node necesarios incluyendo webpack.


* Cuando haya terminado de instalar todos los node_modules, entonces podremos ejecutar el proyecto de con el siguiente comando:

```
npm start
```
Para un correcto funcionamiento, recuerden que deben de ejecutar ese comando en el mismo directorio donde se encuentra el ```package.json```

## Cambiar el puerto del servidor
Por defecto, el puerto para este proyecto es el ```8081```, pero si necesitan cambiarlo porque puede que ese puerto lo use otro servicio en su computadora, pueden cambiarlo abriendo el ```package.json``` >> scripts. Ahí verán la instrucción que lanza el servidor de desarrollo.

```
"start": "webpack serve --mode development --open --port=8081"
```

Simplemente cambian el puerto por el que ustedes necesiten y listo, recuerden guardar los cambios antes de ejecutar el ```npm start```

## Acceso al servidor
Para acceder al proyecto ingresamos desde nuestro navegador a la siguiente dirección: http://localhost:8081/ especificar el puerto elegido.
