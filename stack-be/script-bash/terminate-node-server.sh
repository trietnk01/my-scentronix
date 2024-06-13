#!/bin/sh

# Author : Diennk
# Copyright (c) Tutorialspoint.com
# Script follows here:


PM2_EXIST=$(if pm2 list 2> /dev/null | grep -q PapayaServer; then echo "Yes" ; else echo "No" ; fi)
if [ $PM2_EXIST = Yes ] ; then
    pm2 stop PapayaServer
    pm2 delete PapayaServer
fi
rm -rf dist