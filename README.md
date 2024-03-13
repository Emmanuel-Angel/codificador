Challenge N° 1 

  Encriptador de Texto
  
  ![image](https://github.com/Emmanuel-Angel/codificador/assets/157259271/266fd926-c005-4bfb-aa9b-0f462ad77d42)


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

![image](https://github.com/Emmanuel-Angel/codificador/assets/157259271/0f91fa9f-d944-4d67-82a3-d948de8d350d)

en donde podrá ingresar cualquier caracter (alfa-numerico y especial), pero en la etiqueta se mostrará únicamente texto en minusculas y el caracter "coma" (,) 
para poder separar el mesaje, si así requiere el mensaje a encriptar.

Al ingresar cualquier caracter la etiqueta de "Ningún mensaje..." identifica que se a ingresado texto.

![image](https://github.com/Emmanuel-Angel/codificador/assets/157259271/bcff5f07-b486-47ee-82fa-108f02caf581)

Sí el mensaje no cumple con lo requerido para la codificación se mostrará un mensaje de vulneravilidad al dar click en el botón "Desencriptar"

El mensaje se codifica siguiendo los criterios solicitados al dar click en el botón "Encriptar" y se muestra en la caja de mensajes:

![image](https://github.com/Emmanuel-Angel/codificador/assets/157259271/764ac20f-5e8a-45ff-975c-2e3175ed6718)

en seguida se elimina el mensaje original y se muestra un botón para copiar debajo del mensaje codificado.

Al dar click en el botón copiar se elimina el mensaje codificado y se muestra un mensaje diferente

![image](https://github.com/Emmanuel-Angel/codificador/assets/157259271/9ba0b4e3-7970-4989-a674-0b12bd0ba87c)

Despues de pegar el mensaje codificado para poder desencriptarlo, si se da click en encriptar se mostrará el siguiente mensaje

![image](https://github.com/Emmanuel-Angel/codificador/assets/157259271/8e2064f0-419c-4c68-91a4-09e838e2948b)

y se procede a desencriptar

![image](https://github.com/Emmanuel-Angel/codificador/assets/157259271/c716fced-8900-4556-b25e-307ace3b3f54)

Desarrollado por Emmanuel Angel Meneses Martínez para AluraLatam 2024.
