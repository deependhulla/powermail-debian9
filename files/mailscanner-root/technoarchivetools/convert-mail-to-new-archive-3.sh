#!/bin/sh
cd /usr/local/src/technoarchivetools

find /mnt/4tbbackup/datainput/2016-03* -type f -exec php read-mail-and-add-to-search-index.php {} \;
