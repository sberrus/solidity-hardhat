# Freecodecamp - Hardhat

En este repositorio estará la explicación de:

- Como configurar hardhat para que pueda compilar y realizar deploys en la red local o en redes que deseemos configurar.
- Que son los plugins.
- Como verificar contratos inteligentes en etherscan o en otras plataformas.
- Programar y crear scripts para los mismos.
- Manejo de errores comunes y como solventarlos.
- Trabajar con la consola y los scripts de hardhat.

### Consejos

- Si a la hora de realizar un deploy a una mainnet hay un error al validar el contrato, principalmente en etherscan, BORRAR LAS CARPETAS "/artifacts" y "/cache".

### PROBAR CONTRATO EN NODE DE HARDHAT

Para probar en el frontend un contrato desplegado en la blackchain local de hardhat que nos provee mediante el comando "yarn|npm hardhat node" tenemos que tener configurado lo siguiente:

- Levantar Node de Hardhat mediante comando "yarn|npm hardhat node".
- Configurar Metamask para usar la red localhost y la llave privada que nos provee hardhat.
- Comprobar que el contrato desplegado en la red local es el mismo que intentamos consumir en el frontend.
