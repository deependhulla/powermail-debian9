#!/bin/sh

git clone https://github.com/letsencrypt/letsencrypt /opt/letsencrypt
/opt/letsencrypt/certbot-auto --apache -d `hostname` --email support@technoinfotech.com --agree-tos
###./letsencrypt-auto run --apache -d mx1.example.com,mail.example.com --email yourmail@example.com --agree-tos

#in crontab : /opt/letsencrypt/certbot-auto renew
echo "MAILTO=\"\"" >> /var/spool/cron/crontabs/root 
echo "30 2 * * 1 /opt/letsencrypt/certbot-auto renew >> /var/log/letsencrypt-renew.log" >> /var/spool/cron/crontabs/root 

/etc/init.d/cron restart

#
#apt-get install nginx
#make port 80 to 127.0.0.1:81 in /etc/nginx/sites-available/default ..
#disable ipv6


