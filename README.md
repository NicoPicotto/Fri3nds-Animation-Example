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

Se debe agregar al elemento html el siguiente atributo `f3-fade` con el valor que corresponda entre `s`, `m`, `l`.

```bash
f3-fade = s // Para una animación rápida
f3-fade = m // Para una animación media
f3-fade = l // Para una animación lenta
```

Adicionalmente se puede agregar la dirección agregando al elemento html el atributo `f3-direction` con el valor que corresponda entre `top`, `bottom`, `left`, `right`.

```bash
f3-direction = top // Para que la animación venga de arriba
f3-direction = bottom // Para que la animación venga de abajo
f3-direction = left // Para que la animación venga de la izquierda
f3-direction = right // Para que la animación venga de la derecha
```

### Slide In

[![slide.gif](https://i.postimg.cc/zfxBrBKr/slide.gif)](https://postimg.cc/v16M7G0q)

Se debe agregar al elemento html el siguiente atributo `f3-slide` con el valor que corresponda entre `s`, `m`, `l`.

```bash
f3-slide = s // Para una animación rápida
f3-slide = m // Para una animación media
f3-slide = l // Para una animación lenta
```

Adicionalmente se puede agregar la dirección agregando al elemento html el atributo `f3-direction` con el valor que corresponda entre `top`, `bottom`, `left`, `right`.

```bash
f3-direction = top // Para que la animación ocurra hacia arriba
f3-direction = bottom // Para que la animación ocurra hacia abajo
f3-direction = left // Para que la animación ocurra hacia la izquierda
f3-direction = right // Para que la animación ocurra hacia la derecha
```

También tenemos la posibilidad de generar el efecto en otro elemento dentro de este, añadiendo el atributo `f3-slideTarget` donde queremos que ocurra.

```bash
<div class="container" f3-slide="m" f3-direction="top">
    <p>Text Button</p>
    <div f3-slideTarget> -> </div>
</div>
```

### Scale Up

Se debe agregar al elemento html el siguiente atributo `f3-scale` con el valor que corresponda entre `s`, `m`, `l` para indicar el tamaño al que escala.

```bash
f3-scale = s // Para que el elemento crezca 1.1
f3-scale = m // Para que el elemento crezca 1.2
f3-scale = l // Para que el elemento crezca 1.3
```

### Rotate

Se debe agregar al elemento html el siguiente atributo `f3-rotate` con el valor que corresponda entre `90`, `180`, `360`.

```bash
f3-rotate = 90 // Para que el elemento rote 90°
f3-rotate = 180 // Para que el elemento rote 180°
f3-rotate = 360 // Para que el elemento rote 360°
```

### Hover Background

Se debe agregar al elemento html el siguiente atributo `f3-hoverBg` con el valor que corresponda entre `dark`, `light`, para que oscurezca o aclare el color actual del fondo.

```bash
f3-hoverBg = dark // Para que el color de fondo del elemento se oscurezca
f3-hoverBg = light // Para que el color de fondo del elemento se aclare
```

### Shadow

Se debe agregar al elemento html el siguiente atributo `f3-shadow` con el valor que corresponda entre `s`, `m`, `l` para indicar el tamaño de la sombra.

```bash
f3-shadow = s // Para que el tamaño sea de 2px
f3-shadow = m // Para que el tamaño sea de 4px
f3-shadow = l // Para que el tamaño sea de 6px
```

## Authors

- [Fri3nds Agency](https://www.fri3nds.com/)
