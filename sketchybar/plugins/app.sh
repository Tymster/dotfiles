#!/bin/bash
APP_NAME=$(yabai -m query --windows --window | jq -r '.app')
APP_TITLE=$(yabai -m query --windows --window | jq -r '.title')
APP_ID=$(yabai -m query --windows --window | jq -r '.id')
ICON_PATH=$(mdfind "kMDItemCFBundleIdentifier == '$BUNDLE_ID'" | grep -m 1 "icns$")
case "$NAME" in
"name")
    sketchybar --set $NAME label="${APP_NAME}"
    ;;
"title")
    sketchybar --set $NAME label="${APP_TITLE}"
    ;;
"icon")
    ;;
*)
    sketchybar --set $NAME label="OTHER"
    ;;
esac
