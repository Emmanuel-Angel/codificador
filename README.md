Challenge N° 1 

  Encriptador de Texto
  
![Image 2024-03-12 at 10 09 28 PM](https://github.com/Emmanuel-Angel/Encriptador/assets/157259271/9777fd8c-7a10-498e-8ff6-fac47ef1a3ec)



Proyecto desarrollado con JavaScript, HTML y CSS para el challenge ONE Principiante en programación del grupo 6 de AluraLatam 
en el cual la aplicación tendra que encriptar y desencriptar texto utilizando los siguientes requisitos:

Debe funcionar solo con letras minúsculas
No deben ser utilizados letras con acentos ni caracteres especiales
Debe ser posible convertir una palabra para la versión encriptada también devolver una palabra encriptada para su versión original.
Por ejemplo:
"gato" => "gaitober"
gaitober" => "gato"

La página debe tener campos para
inserción del texto que será encriptado o desencriptado, y el usuario debe poder escoger entre as dos opciones.
El resultado debe ser mostrado en la pantalla.
Extras:

Un botón que copie el texto encriptado/desencriptado para la sección de transferencia, o sea que tenga la misma funcionalidad del ctrl+C o de la opción "copiar" del menú de las aplicaciones.
Un rodapie con el autor de la aplicación.

Plus++

validación cuando se ingresa un caracter y muestra un mensaje 

al ingresar caracteres especiales se eliminan automaticamente antes de poder codificarlas

al ingresar mayusculas se cambian en automatico para evitar romper el código

solo acepta como caracter especial la "coma"(,).

se eliminan los mensajes, cuando se encripta/desencripta y cuando se copia.


Funcionamiento:

El Usuario podra ingresar un texto en la etiqueta 
![image](https://github.com/Emmanuel-Angel/Encriptador/assets/157259271/ee27cdc8-9636-4db3-8f04-fd1a28c22669)
en donde podrá ingresar cualquier caracter (alfa-numerico y especial), pero en la etiqueta se mostrará únicamente texto en minusculas y el caracter "coma" (,) 
para poder separar el mesaje, si así requiere el mensaje a encriptar.

Al ingresar cualquier caracter la etiqueta de "Ningún mensaje..." identifica que se a ingresado un mensaje.
![image](https://github.com/Emmanuel-Angel/Encriptador/assets/157259271/f0741748-caca-4f81-adf1-d3e96e93c4f8)

Sí el mensaje no cumple con lo requerido para la codificación se mostrará un mensaje de vulneravilidad al dar click en el botón "Desencriptar"
ejemplo: 

![image](https://github.com/Emmanuel-Angel/Encriptador/assets/157259271/88f850e3-1495-4dd9-bb9f-968964c8cf75)

![image](https://github.com/Emmanuel-Angel/Encriptador/assets/157259271/24ec7fa2-edae-4d1c-bb77-0459ef4809db)

El mensaje se codifica siguiendo los criterios solicitados al dar click en el botón "Encriptar" y se muestra en la caja de mensajes:

![image](https://github.com/Emmanuel-Angel/Encriptador/assets/157259271/89670ad0-3927-4786-bda3-43ea227e0a80)

en seguida se elimina el mensaje original y se muestra un botón para copiar debajo del mensaje codificado.

![image](https://github.com/Emmanuel-Angel/Encriptador/assets/157259271/f1668f6e-3851-4b6b-8c3d-27bf9e468931)

Al dar click en el botón copiar se elimina el mensaje codificado y se muestra un mensaje diferente
![image](https://github.com/Emmanuel-Angel/Encriptador/assets/157259271/d09728ca-78b2-4d9b-91a5-c385d7a73729)

Despues de puede pegar el mensaje codificado para poder desencriptarlo, si se da click en encriptar se mostrará el siguiente mensaje

![image](https://github.com/Emmanuel-Angel/Encriptador/assets/157259271/77a6f81a-89ce-45d7-9359-99d95b61f144)

y se procede a desencriptar

![image](https://github.com/Emmanuel-Angel/Encriptador/assets/157259271/0073cee6-38ba-44a2-bbb0-072fdc80b459)

  
