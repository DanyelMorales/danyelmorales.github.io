---
layout: post
title: Documentación de software 
tags:
  - software
  - ingeniería
  - documentación
lang: es
---
La documentación de productos de software es importante porque permite comunicar
detalles que al inspeccionar un sistema no se pueden alcanzar a comprender con
facilidad.

Sin embargo, a pesar de que la documentación es de utilidad, existe controversia
sobre si en realidad es necesario documentar todos los procesos o si es útil
elaborar manuales tan extensos. Esta controversia existe sobre todo entre los
métodos tradicionales y los métodos ágiles de desarrollo de software.

Por un lado las metodologías tradicionales hacen énfasis en que el producto
arrojado por cada etapa del ciclo de vida del software deberá ser un documento
con todos los detalles que estén involucrados. Esto incluye manuales extensos de
usuario que deberán ser entregados al cliente.  Otra de las características de
este enfoque, es que se basa en el uso de contratos entre la empresa
desarrolladora de software y el cliente que solicita el producto. De esta forma
es posible controlar los requerimientos y las peticiones de cambio.  

Se debe aclarar que la  documentación así como los tipos de documentación que
son resultados de estas metodologías  son de muchas variedades, puesto que cada
tipo de documento va enfocado a mostrar los detalles de diferentes puntos del
sistema.

En contraste las metodologías ágiles hacen énfasis en el hecho de que al
producir software el enfoque deberá ser orientado a los clientes, el usuario y
 los desarrolladores mismos. En general los principios de estas se basan en el
“Manifiesto ágil” (“Agile manifesto for software development,” 2015)  el cual
argumenta que la documentación no es tan importante, puesto que esta tiende a
degradarse  y quedar obsoleta muy rápido con cada petición de cambio del
cliente.

De este modo los desarrolladores deberán estar más cerca del cliente, mostrando
el progreso y recibiendo retroalimentación constante por parte de estos.  Los
requerimientos cambiantes no son un problema, puesto que existen diversos
principios y estrategias que se siguen para realizar los ajustes del cliente.
Una de las debilidades de este enfoque es que los desarrolladores tienden a no
generar documentación ni de usuario, ni de desarrolladores y muchas veces no
suelen comentar el código fuente,  Sommerville( 2011, p.57-77).

El manifiesto ágil tiende a malinterpretarse en el principio que reza:

>   “se deberá valorar más  al software operativo sobre la documentación
>   exhaustiva“.

Muchos desarrolladores piensan  que no debe existir documentación puesto que es
tiempo perdido y que resta esfuerzo al proyecto. Sin embargo esto es erróneo ya
que si bien la “documentación exhaustiva” tiende a degradarse, es necesario
realizar de algún modo el registro para comunicar los detalles no tan obvios del
sistema. El principio antes citado, no habla sobre documentación nula, habla en
realidad sobre el hecho de realizar documentación puntual sobre lo que en
realidad importa.   

Lo anterior se demuestra cuando en un equipo ágil mientras los miembros están
activos en los proyectos sabrán los detalles del sistema. Si en un momento dado
entrará un nuevo miembro, este sería fácilmente capacitado puesto que los
miembros poseen la información y perspectivas necesarias. Pero, si en un
instante los miembros originales de un proyecto se van, es evidente que se irá
perdiendo información realmente útil, poniendo en riesgo el mismo proyecto
puesto que no hay referencia alguna sobre lo que contiene, lo que hace o lo que
debería hacer el sistema (documento de requerimientos).


TIPOS DE DOCUMENTACIÓN
----------------------
Actualmente existen muchos tipos de empresas y organizaciones con necesidades
infinitamente diferentes por lo tanto el nivel de documentación en cada empresa
es diferente.   Por ejemplo, es muy conocido que los sistemas críticos como los
aviones y naves espaciales deberían seguir un enfoque dirigido por un plan por
lo tanto su documentación debe ser más extensa, puesto que dependen vidas
humanas del mismo y es lógico pensar que deben ser sometidos a reguladores
externos. Sin embargo si se trata de un sistema empresarial posiblemente sea
mejor usar un enfoque ágil con documentación ágil en el cual el enfoque  sea
solo documentar lo que en realidad importa.

En mi experiencia existen 3 tipos de documentación de mucha utilidad para
cualquier proyecto ágil:

-   Documentación de usuario

-   Documentación de desarrollador

-   API DOCS.

### API DOCS
Sin embargo también el hecho de realizar documentación en el código fuente, en
aquellos métodos que realicen operaciones complejas para posteriormente generar
los llamados ”API DOCS”. La finalidad de los api docs consiste en resumir las
interfaces en el código fuente sin tener que visualizar directamente todo el
código.

Un buen ejemplo es el sitio de zend framework:
<https://framework.zend.com/apidoc/1.12/index.html>

### Documentación de desarrollador

Recomiendo ampliamente que se tome el enfoque de documentar de forma clara las
características de un sistema y el como funciona, esto con la finalidad de
aclarar dudas y orientar a futuros desarrolladores, esto bien puede ser aplicado
con documentación markdown o con un blog para desarrolladores en la intranet de
la empresa, un buen CMS como wordpress bastaría para clasificar los temas que se
requieren.  

Ejemplo: https://framework.zend.com/manual/2.4/en/index.html

### Documentación de usuario

Para la documentación de usuario, la documentación markdown es de utilidad ya
que puede posteriormente convertirse a diversos formatos. Sin embargo, para este
tipo de documentación tal vez sería útil separarlo en un repositorio a parte en
la cual se pueda actualizar constantemente.

Si se maneja un sistema de control de versiones como GIT, debería documentarse
ahí mismo en una carpeta llamada “docs”, una forma ágil de realizarlo consiste
en utilizar documentos markdown. La documentación markdown puede enfocarse tanto
a documentación de desarrollador, o de usuario.

 


**Bibliography:**

Agile manifesto for software development. (2015, June 29). Retrieved February 5,
2017, from Agile Alliance,
<https://www.agilealliance.org/agile101/the-agile-manifesto/>

Sommerville, I. (2011). Ingeniería de software (9th ed.). México:
Addison-Wesley.
