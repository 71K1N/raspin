# Raspin

Uma RESP API para controlar GPIO do raspBerry via requisicoes HTTP

## Uso

`npm install`

`npm start`

### Configuração padrão

* Porta: 8080

### Documentação

#### Modo PIN io

` ip.do.seu.raspiberry:8080/mode/:pin/:io` 

* pin: numero do gpio
* io: 
  * i : input
  * 0: output

Exemplo:

` ip.do.seu.raspiberry:8080/mode/2/o`  => Define o GPIO 2 como output



