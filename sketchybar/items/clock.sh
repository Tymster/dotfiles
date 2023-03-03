#!/bin/bash

calendar=(
    icon=cal
    icon.font="$FONT:Regular:12.0"
    label.font="$FONT:Regular:14.0"
    label.width=50
    label.align=right
    padding_left=0
    update_freq=30
    script="$PLUGIN_DIR/clock.sh"

)

sketchybar --add item calendar right \
    --set calendar "${calendar[@]}" \
    --subscribe calendar system_woke
