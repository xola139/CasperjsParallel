# CasperjsParallel
Simple ejemplo Scraping utilizando Casperjs, GNU Parallel y Crontab


Pre-requisitos.
- Linux
- Nodejs

Requisitos.
- Crontab
- Casperjs
- GNU Parallel

![screenshot](http://i.imgur.com/nylCI4T.png)

Instrucciones:
-----
```shell
$ git clone https://github.com/xola139/CasperjsParallel.git
$ cd CasperjsParallel
$ mkdir scraped_data
$ ./scrap.sh
```

Y listo deberias a comezar a ver los archivos en el folder scraped_data.


Ahora para colocar en cron tab, es tan sencillo como hacer lo siguiente


```shell
$ crontab -e
```
Copias y pegas las sigueintes lineas

```shell
SHELL=/bin/bash
PATH=/sbin:/bin:/usr/sbin:/usr/bin

*/5 * * * *  /home/someUser/CasperjsParallel/scrape.sh >> /home/someUser/CasperjsParallel/log.log
```

Y despues oprimes tecla ESC 
Escribes :wq!
Oprimes enter


Y reinicias el crontab:

```shell
$ service crond restart
```

Y listo tendras todo funcionando.
