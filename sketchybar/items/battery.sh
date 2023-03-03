#!/bin/bash
battery=(
    icon=""
    script="$PLUGIN_DIR/battery.sh"
    icon.font="$FONT:Regular:12.0"
    label.font="$FONT:Regular:20.0"
    label.align="center"
    padding_right=5
    padding_left=0
    width=dynamic
    label.drawing=on
    update_freq=120
    updates=on
)

sketchybar --add item battery right \
    --set battery "${battery[@]}" \
    --subscribe battery power_source_change system_woke
