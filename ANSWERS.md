¿Cuál es el valor predeterminado flexDirectionen React Native? ¿En qué se diferencia de CSS en la web?
En React Native el valor predeterminado es flexDirection: column, mientras que en CSS web es row. Por eso en React Native los hijos de un View se apilan verticalmente sin escribir nada, y hay que poner flexDirection: row explícitamente para alinearlos en horizontal.

¿Cuál es la diferencia entre justifyContent y alignItems?
justifyContent distribuye los hijos a lo largo del eje principal (el definido por flexDirection), mientras que alignItems los alinea a lo largo del eje transversal.

¿Qué flex: 1 hace dentro de una fila? ¿Y en el extremo exterior Viewde una pantalla?
Dentro de una fila, flex: 1 hace que el elemento ocupe todo el espacio restante disponible a lo largo del eje principal. En el View exterior de la pantalla, flex: 1 hace que ocupe todo el alto (y ancho) disponible del dispositivo, lo que permite centrar contenido verticalmente con justifyContent.

¿Cuál es la diferencia entre resizeMode="cover" y resizeMode="contain"?
cover escala la imagen para cubrir todo el contenedor manteniendo la proporción, recortando lo que sobra. contain escala la imagen para que se vea entera dentro del contenedor manteniendo la proporción, dejando espacios vacíos si la proporción no coincide.

¿Por qué usamos StyleSheet.create en lugar de objetos simples dentro de JSX?
StyleSheet.create valida los estilos una sola vez, los registra y devuelve IDs estables, lo que reduce el trabajo de reconciliación y evita recrear objetos en cada render. Además separa la definición de estilos de la estructura del componente, mejora la legibilidad y permite reutilizarlos y combinarlos con arrays.

¿Por qué no aparece una sombra escrita con shadowColoren Android?
Android no implementa las propiedades shadow de iOS; usa la propiedad elevation para dibujar una sombra basada en la elevación del elemento. Por eso hay que usar Platform.select para aplicar shadow en iOS y elevation en Android.
