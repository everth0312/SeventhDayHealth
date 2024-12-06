# SeventhDayHealth

Este es un proyecto que permite a las iglesias que realizaran brigadas de salud y que ofrecen servicios de salud gratuitos a la comunidad que puedan hacer las personas los registros a los eventos o servicios a los cuales van a acceder  permitiendo que este procesmo manual sea un poco automatizado.

En este proyecto esta este que es la pagina principalmente visual y el otro proyecto en react el cual esta en otor repositorio que debe ser clonado y se debe poner a correr segun las indicaciones del reade de dicho proyecto y hacer todos los pasos que se indiquen alli para que se pueda probar las interacciones con esta pagina de una manera integrada.

Las tecnologias usadas en este proyecto con sus versiones son:

MySQL Ver 8.0.40
Node.js Ver 20.18.1
npm Ver 10.8.2
React Ver 18.3.1

Aqui un paso a paso para intalarlas pues se necesitan para correr el proyecto:

## Instalación de MySQL Ver 8.0.40
* Descargar MySQL
Descarga el instalador correspondiente a tu sistema operativo.
* Instalar MySQL
* Ejecuta el instalador.
Selecciona "Developer Default" para instalar las herramientas necesarias.
* Configura la contraseña para el usuario root (asegúrate de recordarla).
* Completa la instalación.
* Verificar la Instalación
Abre una terminal o línea de comandos.
Ejecuta:
`mysql --version`

Debes ver la versión 8.0.40.

Una vez que completes la instalación de MySQL, necesitarás un administrador de bases de datos para interactuar con la base de datos de manera gráfica. MySQL es compatible con una variedad de herramientas, y puedes usar la que prefieras según tu experiencia y necesidades (MySQL Workbench,DBeaver,HeidiSQL,phpMyAdmin)

## Instalación de Node.js Ver 20.18.1 y npm Ver 10.8.2

* Descargar Node.js
* Visita la página oficial de Node.js.
* Descarga la versión LTS para mayor estabilidad.
* Instalar Node.js
* Ejecuta el instalador.
* Verificar la Instalación
Abre una terminal y ejecuta:
`node --version`
`npm --version`

Debes ver las versiones 20.18.1 y 10.8.2, respectivamente.

##  Instalación de React Ver 18.3.1

* Crear un Proyecto con React
* Abre una terminal.
Ejecuta el siguiente comando para crear un nuevo proyecto:
`npx create-react-app my-app --template latest`
*Reemplaza my-app con el nombre de tu proyecto.*

*  Verificar la Versión de React
Una vez creado el proyecto, navega a la carpeta:

* cd my-app
* Verifica la versión de React en el archivo package.json.

Después de tener las tecnologias necesarias se debe  relizar lo siguiente:

1 - Como primer paso clonar el proyecto y seguir los pasos del Readme del siguinete repositorio: ´[https://github.com/elianacudriz/HealthMinistry](https://github.com/elianacudriz/HealthMinistry)´ en la rama main estan todos los cambios finales.

2 - Clonar este proyecto que bajará loa cambios visuales con el comando en el bash ubicado en la rama *production* se deberan todos los cambios finales.

* Luego, se debe ejecutar localmente abriendo en el navegador de su proferencia el archivo de la caprtea HTML/index.html. *se debe abrir algo como localhost:tupuertoHTML/index.html.* Allí esta toda la información de navegación como tal, depués de la página principal esta el nosotros, los servicios a los cuales puedes acceder, pero para poder agendar dichos servicios debes iniciar sesion y para iniciar sesion debes registrarte y para ello redirige a la pagina inicial mencionada désde la pagina 1. la pagina de react. Allí es donde se valida la sesion y se realiza el registro de los servicio.

* Se estara navengando entre las dos páginas.
