# Base_de_datos_cifrada.



Este reto de programación consiste en usar la librería libsodium (en alguno de los lenguajes donde se encuentra disponible: C/C++, Java, PHP, Python) para cifrar una "base de datos" (en realidad, un archivo .CSV) almacenarla en un segundo archivo de salida, y descifrar ese mismo archivo.

Requisitos indispensables. 
1. Al momento de cifrar. Debes encriptar cada registro individualmente, aunque de manera secuencial (los procesas uno por uno, pero no es válido procesarlos todos como un solo mega buffer que contiene todo el archivo en un arreglo de 100MB o mas).
2. Al momento de descifrar. Debes solicitar al usuario que indique cual/cuales registros descifrar, y desencriptar solamente esos registros sin tocar el resto de la base de datos. Idealmente no deberías siquiera cargar los registros no utilizados a memoria desde disco, pero basta con que no sean procesados por libsodium.

Requisitos opcionales.
3. Al momento de descifrar, el usuario podrá elegir no solo las filas sino las columnas a descifrar. Se recomienda utilizar relleno (padding) de caracteres en blanco para ajustar los anchos de columna y poder descifrar solo el/los bloque/s que contengan la columna de interés.
4. Generar la llave criptográfia a partir de un password en formato texto (preferentemente ASCII imprimible). La llave no es el password... la llave es generada algorítmicamente por el password... ¿a qué tema te recuerda eso?
