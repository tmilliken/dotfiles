#!/bin/bash 

picom &
xrdb -merge ~/.Xresources &
# /usr/lib/mate-polkit/polkit-mate-authentication-agent-1 &
nitrogen --restore &
~/dwmscripts/dwmbar2 &



