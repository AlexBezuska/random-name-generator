#!/bin/bash

cat $1 | sort | uniq >$1.tmp
mv $1.tmp $1
