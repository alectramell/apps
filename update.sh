#!/bin/bash

clear

git add *.md
git add *.sh
git add games
git add widgets

clear

git commit -m "apps"

clear

git push origin master

clear

echo "APPS UP-TO-DATE!" | pv -qL 10
