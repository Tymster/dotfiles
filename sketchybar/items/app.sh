#!/bin/bash
name=(
    label="Placeholder name"
    script="$PLUGIN_DIR/app.sh"
)
title=(
    label="Placeholder title"
    script="$PLUGIN_DIR/app.sh"
)
sketchybar --add item name left \
    --set name "${name[@]}" \
    --add item title center \
    --set title "${title[@]}" \
    --add event window_focus \
    --add event title_change \
    --subscribe name window_focus title_change front_app_switched \
    --subscribe title window_focus title_change front_app_switched \
    --subscribe icon window_focus title_change front_app_switched
