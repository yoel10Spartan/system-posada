#!/bin/bash

sudo rm -r /home/system-posada/build
( cd /home/system-posada && npm run build )
sudo rm -r /var/www/html/femeg/
mkdir /var/www/html/femeg
cp -r /home/system-posada/build/* /var/www/html/femeg/
chown -R www-data:www-data /var/www/html/femeg/
nginx -t
systemctl restart nginx