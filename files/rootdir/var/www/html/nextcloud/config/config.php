<?php
$CONFIG = array (
  'instanceid' => 'oc1fo0fzeauu',
  'passwordsalt' => 'ZMbKPhs9oMGnVXO9iK0Ic81bqHMjb2',
  'secret' => 'zjqbwgqA8B/zXwOGkr8CsJhagnaBhSmOT0oRH/9afYMI2Z3T',
  'trusted_domains' => 
  array (
    0 => 'live.technomail.in',
  ),

/* 'defaultapp' => 'rainloop', */
'knowledgebaseenabled' => false,
'enable_avatars' => true,
'allow_user_to_change_display_name' => true,


'filelocking.enabled' => true,
'memcache.local' => '\OC\Memcache\Redis',
'memcache.locking' => '\OC\Memcache\Redis',
'redis' => array(
     'host' => 'localhost',
     'port' => 6379,
      ),

  'mail_smtpmode' => 'smtp',
  'mail_from_address' => 'postmaster',
  'mail_domain' => 'ticloud.in',
  'mail_smtphost' => '127.0.0.1',
  'mail_smtpport' => '2525',
  'user_backends' =>
  array (
    0 =>
    array (
      'class' => 'OC_User_IMAP',
      'arguments' =>
      array (
        0 => '{localhost:143/imap/novalidate-cert}',
      ),
    ),
  ),
'maintenance' => false,

  'datadirectory' => '/var/www/nextcloud-data',
  'overwrite.cli.url' => 'http://live.technomail.in/nextcloud',
  'dbtype' => 'mysql',
  'version' => '12.0.0.29',
  'dbname' => 'nextcloud',
  'dbhost' => 'localhost',
  'dbport' => '',
  'dbtableprefix' => 'oc_',
  'dbuser' => 'nextcloud',
  'dbpassword' => 'Choyoo7N',
  'installed' => true,
);