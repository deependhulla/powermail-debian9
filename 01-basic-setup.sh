#!/bin/bash

apt-get update
#apt-get upgrade

#debconf-get-selections | grep phpmyadmin

CFG_HOSTNAME_FQDN=`hostname`
echo "postfix postfix/main_mailer_type select Internet Site" | debconf-set-selections
#echo "postfix postfix/mailname string $CFG_HOSTNAME_FQDN" | debconf-set-selections

## default password for mysql root on debian 9 localhost is NONE
MYSQL_ROOT_PASS=""
AUTOGENERATED_PASS=`pwgen -c -1 20`
echo "phpmyadmin phpmyadmin/reconfigure-webserver multiselect apache2" | debconf-set-selections
echo "phpmyadmin phpmyadmin/dbconfig-install boolean true" | debconf-set-selections
echo "phpmyadmin phpmyadmin/mysql/admin-user string root" | debconf-set-selections
echo "phpmyadmin phpmyadmin/mysql/admin-pass password $MYSQL_ROOT_PASS" | debconf-set-selections
echo "phpmyadmin phpmyadmin/mysql/app-pass password $AUTOGENERATED_PASS" |debconf-set-selections
echo "phpmyadmin phpmyadmin/app-password-confirm password $AUTOGENERATED_PASS" | debconf-set-selections

apt-get -y install vim openssh-server net-tools pwgen dialog postfix xfsprogs clamav clamav-base clamav-daemon clamav-freshclam clamdscan clamav-unofficial-sigs spamassassin spampd spamc sa-compile build-essential iptraf mariadb-server build-essential bridge-utils mc screen elinks git curl wget telnet iputils-ping sudo bind9 debconf-utils pwgen software-properties-common postfix-mysql dovecot-mysql dovecot-sieve dovecot-managesieved php-imap phpmyadmin php-mcrypt mcrypt dovecot-imapd dovecot-pop3d dovecot-sieve dovecot-antispam sendemail fail2ban libwbxml2-utils openssl pyzor razor rsync mailutils p7zip-full elfutils p7zip-rar autoconf whiptail automake proftpd-basic postfix-pcre whois opendkim opendkim-tools libemail-valid-perl libmail-sendmail-perl libmime-charset-perl libmime-encwords-perl libnet-domain-tld-perl libserf-1-1 libsvn1 subversion tnef zip apache2 unbound certbot acmetool apt-transport-https libssl-dev pflogsumm dirmngr php-mail mysqltuner dnsutils zoo unzip bzip2 arj nomarch lzop cabextract apt-listchanges libnet-ldap-perl libauthen-sasl-perl clamav-docs daemon libio-string-perl libio-socket-ssl-perl libnet-ident-perl zip libnet-dns-perl systemd unrar-free p7zip rpm2cpio tnef libtool flex bison debhelper mariadb-client quota quotatool wamerican apache2-doc libapache2-mod-php libapache2-mod-fcgid apache2-suexec-pristine php-memcache php-imagick php-gettext php7.0 php7.0-common php7.0-ldap php7.0-gd php7.0-mysql php7.0-imap php7.0-cli php7.0-cgi php-pear php7.0-mcrypt php7.0-curl php7.0-intl php7.0-pspell php7.0-recode php7.0-sqlite3 php7.0-tidy php7.0-xmlrpc php7.0-xsl php7.0-zip php7.0-mbstring php7.0-imap php7.0-mcrypt php7.0-snmp php7.0-xmlrpc php7.0-xsl dos2unix automysqlbackup ethtool lftp ncftp unrtf catdvi libfann2 altermime libberkeleydb-perl libconvert-binhex-perl libconvert-tnef-perl libconvert-uulib-perl libio-stringy-perl libmime-tools-perl libnet-cidr-lite-perl libnet-libidn-perl libnet-patricia-perl libunix-syslog-perl pax ripole libauthen-pam-perl libio-pty-perl apt-show-versions libapt-pkg-perl imagemagick memcached tidy php-apcu libclass-dbi-mysql-perl ca-certificates catdoc exiv2 libexiv2-14 libgif7 liblept5 libtesseract-data libtesseract3 poppler-utils tesseract-ocr tesseract-ocr-eng tesseract-ocr-equ tesseract-ocr-osd spf-tools-perl libmail-srs-perl libmail-spf-xs-perl libencode-zapcp1252-perl bc lynx swaks redis-server libdigest-sha3-perl libencode-detect-perl libgeo-ip-perl lhasa libsnmp-perl rpm unrar pyzor-doc php-mailparse libxml2-utils recoll xapian-tools libpst4 multitail python-certbot-apache libphp-phpmailer php-memcached php-redis recoll xapian-tools libpst4 antiword wv sqlite3-doc sqlite3 pssh php-mbstring php-intl php-zip composer libfile-copy-recursive-perl libio-tee-perl libunicode-string-perl libreadonly-perl libsys-meminfo-perl libdatetime-format-mail-perl mlocate ftp postfwd libnumber-bytes-human-perl libjs-jquery-mousewheel php-mail-mime php-net-sieve pigz pstotext libimage-exiftool-perl python-libxslt1 

echo iptables-persistent iptables-persistent/autosave_v4 boolean true | sudo debconf-set-selections
echo iptables-persistent iptables-persistent/autosave_v6 boolean true | sudo debconf-set-selections

##ipv4 iptables rules saved in /etc/iptables/rules.v4
## install GeoIP for blocking contry spefic IPs
## works only on Intel and not on ARM -- Tokudb is good for Archive Databases
## etckeeper to keep in git all version change
## fetchmail for mail download
apt-get -y install iptables-persistent geoip-bin geoip-database mariadb-plugin-tokudb  etckeeper fetchmail

## in case one need mouse pointer on console-terminal for copy paste
#apt-get -y install gpm

a2enmod actions > /dev/null 2>&1 
a2enmod proxy_fcgi > /dev/null 2>&1 
a2enmod alias > /dev/null 2>&1 
a2enmod suexec > /dev/null 2>&1
a2enmod rewrite > /dev/null 2>&1
a2enmod ssl > /dev/null 2>&1
a2enmod actions > /dev/null 2>&1
a2enmod include > /dev/null 2>&1
a2enmod dav_fs > /dev/null 2>&1
a2enmod dav > /dev/null 2>&1
a2enmod auth_digest > /dev/null 2>&1
a2enmod fcgid > /dev/null 2>&1
a2enmod cgi > /dev/null 2>&1
a2enmod headers > /dev/null 2>&1
a2enmod proxy_http > /dev/null 2>&1
#a2enmod fastcgi > /dev/null 2>&1
a2ensite default-ssl > /dev/null 2>&1	
a2ensite proxy_http > /dev/null 2>&1	

# ngnix is install for imap/smtp load balance if needed
/etc/init.d/apache2 stop
apt-get -y install nginx-full 
/etc/init.d/nginx stop
systemctl disable nginx > /dev/null 2>&1


/etc/init.d/mysql restart


MYSQLPASSVPOP=`pwgen -c -1 8`
echo $MYSQLPASSVPOP > /usr/local/src/mysql-admin-pass
echo "mysql admin password in /usr/local/src/mysql-admin-pass"

echo "GRANT ALL PRIVILEGES ON *.* TO admin@localhost IDENTIFIED BY '$MYSQLPASSVPOP'" with grant option | mysql -uroot
mysqladmin -uroot reload
mysqladmin -uroot refresh

### Time Server Setup
echo "NTP=0.arch.pool.ntp.org 1.arch.pool.ntp.org 2.arch.pool.ntp.org 3.arch.pool.ntp.org" >> /etc/systemd/timesyncd.conf
timedatectl set-timezone 'Asia/Kolkata'
timedatectl set-ntp true
timedatectl status

### changing timezone to Asia Kolkata
sed -i "s/;date.timezone =/date\.timezone \= \'Asia\/Kolkata\'/" /etc/php/7.0/apache2/php.ini
sed -i "s/;date.timezone =/date\.timezone \= \'Asia\/Kolkata\'/" /etc/php/7.0/cli/php.ini


systemctl restart  systemd-timedated systemd-timesyncd

## restart rsyslog show that mail.log shows proper time
/etc/init.d/rsyslog restart
/etc/init.d/apache2 restart

## make cpan auto yes for pre-requist modules.
(echo y;echo o conf prerequisites_policy follow;echo o conf commit)|cpan

## install webmin
echo "deb http://download.webmin.com/download/repository sarge contrib " > /etc/apt/sources.list.d/webmin.list
curl -s http://www.webmin.com/jcameron-key.asc | apt-key add -
apt-get update
apt-get install webmin
## change port from 10000 to 8383
sed -i "s/10000/8383/g" /etc/webmin/miniserv.conf
/etc/init.d/webmin restart
## for termnial name in alt tab ..do following in xfce4 desktop
## Applications -> settings -> Settings Manager -> Window Manager Tweaks -> Cycling -> Cycle through windows in a list
