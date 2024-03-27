# Prueba técnica Sinapsis - Serverless

### Descripción de proyecto

El proyecto se basa en desarrollar un mantenimiento de clientes, usuarios y campañas cuenta con las funciones de Crear, Editar, Eliminar, Buscar entre otras funciones personalizadas. Para el desarrollo sé usaron las siguientes tecnologías:

- NestJS
- TypeORM
- Serverless
- Serverless-offline
- MySQL
- OpenAPI

### Como levantar el proyecto

1. Tener instalado NodeJS
2. Tener instalado un servidor de base de datos para MySQL
2. Clonar el proyecto en su computador
3. Abrir el proyecto en un editor de código
4. Abrir una terminal de comando y ejecutar el comando `npm install`
5. Crear el archivo .env y añadir las siguientes variables

    ```
      DB_HOST=
      DB_PORT=
      DB_DATABASE=
      DB_DATABASE=
      DB_PASSWORD=
    ```
6. Una vez configurada la conexión a la base de datos desde las variables de entorno, ejecutar el comando `npm run build`; este creará la carpeta dist con los archivos compilados
6. Por ultimo ejecutar el comando `npx serverless offline` para levantar el servidor local
7. Para ver los endpoints desarrollados debe ingresar a la ruta `http://localhost:3000/api`

___Nota___: En la base del proyecto hay un archivo `database.sql`, para tener
datos con los cuales probar el API debe ejecutar los scripts.