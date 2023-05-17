
# Librería de animaciones Fri3nds

El objetivo de este proyecto es generar una librería de animaciones propias basadas en atributos a ser utilizada en Webflow. Las animaciones están generadas con GSAP.


## Instalación

Para instalar se debe insertar el siguiente script en el body del proyecto.

```bash
<script src="https://cdn.jsdelivr.net/gh/NicoPicotto/Fri3nds-Animation-Example@secondVersion/fades-gsap.js"></script>
```
    
## Documentación
Para implementar las animaciones se deben insertar los atributos en el elemento que se desea animar.

[![custom-attributes.jpg](https://i.postimg.cc/q7BZ0hwQ/custom-attributes.jpg)](https://postimg.cc/873bmCqr)

### Fade In
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

### Slide
Se debe agregar al elemento html el siguiente atributo `fds-fade` con el valor que corresponda entre `s`, `m`, `l`.

```bash
fds-fade = s // Para una animación rápida
fds-fade = m // Para una animación media
fds-fade = l // Para una animación lenta
```

Adicionalmente se puede agregar la dirección agregando al elemento html el atributo `fds-direction` con el valor que corresponda entre `top`, `bottom`, `left`, `right`.

```bash
fds-direction = top // Para que el elemento se mueva hacia arriba
fds-direction = right // Para que el elemento se mueva hacia la derecha
```

## Authors

- [Fri3nds Agency](https://www.fri3nds.com/)

