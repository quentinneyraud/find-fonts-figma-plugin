#!/usr/bin/env bash

osascript <<'EOF'
if application "Figma" is running then
    tell application "Figma" to activate
    tell application "System Events" to tell process "Figma"
        keystroke "p" using {command down, option down}
    end tell

    if application "Code" is running then
        delay 0.1
        tell application "Code" to activate
    end if

    return "Running"
else
    return "Not running"
end if
EOF
