#! /bin/bash

[[ -f ~/.Xresources ]] && xrdb -merge -I$HOME ~/.Xresources

xrandr --output Virtual1 --mode 1920x1080 
#exec dwm
~/bin/startdwm.sh
