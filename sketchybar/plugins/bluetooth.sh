#!/bin/bash

CHARGING=$(system_profiler SPBluetoothDataType | awk '/Connected:/,/Not Connected:/ {print}' | awk 'NR==2,NR==2')
sketchybar --set $NAME label=""
