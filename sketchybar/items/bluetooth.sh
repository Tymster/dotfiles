#!/bin/bash
source "$HOME/.config/sketchybar/icons.sh"

device=(
    icon="$EARBUDS"
    script="$PLUGIN_DIR/bluetooth.sh"
    updates=on
    update_freq=1
)
sketchybar --add item device right \
    --set device "${device[@]}"