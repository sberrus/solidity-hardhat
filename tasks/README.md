# CREANDO TASKS PERSONALIZADAS

Las tasks son scripts que tu puedes configurar en hardhat que realizen ciertas tareas permitiendo acceder a ciertas
configuraciones y scripts que ya se hayan hecho anteriormente.
Son parecidas a los scripts que generas en NPM/yarn en el archivo package.json pero que tienen mucho más alcance y se programa
diferente.
Para ver la lista de tasks solo se envia el comando en consola "yarn/npx hardhat" -> lista de opciones y lista de tasks

## ESTRUCTURA DE CARPETAS

Las tareas las puedes crear directamente en el archivo hardhat.config.js pero como buena práctica se recomienda crear un directorio "tasks" y crear las diferentes tasks dentro de esta.
