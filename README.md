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

[![fade.gif](https://i.postimg.cc/vmYBk91h/fade.gif)](https://postimg.cc/JsFMBs5H)

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

### Slide In

[![slide.gif](https://i.postimg.cc/zfxBrBKr/slide.gif)](https://postimg.cc/v16M7G0q)

Se debe agregar al elemento html el siguiente atributo `fds-slide` con el valor que corresponda entre `s`, `m`, `l`.

```bash
fds-slide = s // Para una animación rápida
fds-slide = m // Para una animación media
fds-slide = l // Para una animación lenta
```

Adicionalmente se puede agregar la dirección agregando al elemento html el atributo `fds-direction` con el valor que corresponda entre `top`, `bottom`, `left`, `right`.

```bash
fds-direction = top // Para que la animación ocurra hacia arriba
fds-direction = bottom // Para que la animación ocurra hacia abajo
fds-direction = left // Para que la animación ocurra hacia la izquierda
fds-direction = right // Para que la animación ocurra hacia la derecha
```

También tenemos la posibilidad de generar el efecto en otro elemento dentro de este, añadiendo el atributo `fds-slideTarget` donde queremos que ocurra.

```bash
<div class="container" fds-slide="m" fds-direction="top">
    <p>Text Button</p>
    <div fds-slideTarget> -> </div>
</div>
```

### Scale Up

Se debe agregar al elemento html el siguiente atributo `fds-scale` con el valor que corresponda entre `s`, `m`, `l` para indicar el tamaño al que escala.

```bash
fds-scale = s // Para que el elemento crezca 1.1
fds-scale = m // Para que el elemento crezca 1.2
fds-scale = l // Para que el elemento crezca 1.3
```

### Rotate

Se debe agregar al elemento html el siguiente atributo `fds-rotate` con el valor que corresponda entre `90`, `180`, `360`.

```bash
fds-rotate = 90 // Para que el elemento rote 90°
fds-rotate = 180 // Para que el elemento rote 180°
fds-rotate = 360 // Para que el elemento rote 360°
```

### Hover Background

Se debe agregar al elemento html el siguiente atributo `fds-hoverBg` con el valor que corresponda entre `dark`, `light`, para que oscurezca o aclare el color actual del fondo.

```bash
fds-hoverBg = dark // Para que el color de fondo del elemento se oscurezca
fds-hoverBg = light // Para que el color de fondo del elemento se aclare
```

### Shadow

Se debe agregar al elemento html el siguiente atributo `fds-shadow` con el valor que corresponda entre `s`, `m`, `l` para indicar el tamaño de la sombra.

```bash
fds-shadow = s // Para que el tamaño sea de 2px
fds-shadow = m // Para que el tamaño sea de 4px
fds-shadow = l // Para que el tamaño sea de 6px
```

## Authors

- [Fri3nds Agency](https://www.fri3nds.com/)
