
# Librería de animaciones Fri3nds

El objetivo de este proyecto es generar una librería de animaciones propias basadas en atributos a ser utilizada en Webflow.

Por el momento existe una versión sin GSAP y con GSAP.




## Instalación

Para instalar la versión sin GSAP se debe pegar el siguiente código en embebed.

```bash
<script src="https://cdn.jsdelivr.net/gh/NicoPicotto/Fri3nds-Animation-Example@third/fades.js"></script>
```
    
Para instalar la versión con GSAP se debe pegar el siguiente código en embebed.

```bash
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.5/gsap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.5/ScrollTrigger.min.js"></script>
<script src="https://cdn.jsdelivr.net/gh/NicoPicotto/Fri3nds-Animation-Example@master/fades-gsap.js"></script>
```
## Documentación
Por el momento la única interacción es Fade, con la opción de indicar la dirección.

### Fade
Se debe agregar al elemento html el siguiente atributo `fds-fade` con el valor que corresponda entre `s`, `m`, `l`.

```bash
fds-fade = s // Para una animación rápida
fds-fade = m // Para una animación media
fds-fade = l // Para una animación lenta
```

Adicionalmente se puede agregar la dirección agregando al elemento html el atributo `fds-direction` con el valor que corresponda entre `top`, `bottom`, `left`, `right`.

```bash
fds-direction = top // Para que la animación venga de arriba
fds-direction = bottom // Para que la animación venga de abajo
fds-direction = left // Para que la animación venga de la izquierda
fds-direction = right // Para que la animación venga de la derecha
```


## Authors

- [Fri3nds Agency](https://www.fri3nds.com/)

