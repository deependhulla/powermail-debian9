#!/bin/sh

/etc/init.d/apache2 restart
/etc/init.d/postfix restart
/etc/init.d/dovecot restart
/etc/init.d/spamassassin restart
/etc/init.d/clamav-daemon restart

/opt/technomail-inbound/stop-inbound.sh
sleep 4
/opt/technomail-inbound/start-inbound.sh
