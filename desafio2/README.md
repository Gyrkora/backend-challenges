# backend-challenges

Implementar un programa que contenga una clase llamada "Contenedor" que reciba el nombre del archivo con el que va a trabajar e implementar los siguientes métodos:

- save(object): Number - Recibe un objeto, lo guarda en el archivo, devuelve el id asignado.
- getById(Number): Object - Recibe un id y devuelve el objeto con ese id, o null si no está.
- getAll(): Object[] - Devuelve un array con los objetos presentes en el archivo.
- deleteById(Number): void - Eliminar del archivo el objeto con el id buscado.
- deleteAll(): void - Elimina todos los objetos presentes en el archivo.

Aspectos a incluir en el entregable:

- El método "save" incorporará al producto un id númerico, que deberá ser siempre uno o más que el id del último objeto agregado (o id 1 si es e lprimer objeto que se agrega) y no puede estar repetido.

- Tomar en consideraicón el contenido previo del archivo, en caso de utilizar uno existente.

- Implementar el manejo de archivos con el módulo fs de node.js, utilizando promesas con async/await y manejo de erroes.

- Probar el módulo creando un contenedor de productos, que se guarde en el archivo: "productos.txt"

- incluir un llamado de prueba a cada método, y mostrando por pantalla según corresponda para verificar el correcto funcionamiento del módulo construído.
