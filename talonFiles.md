# Talon files

`.talon` files are used to define voice commands and their associated actions. `.talon` files can also define settings and enable tags.

The content of a `.talon` can be conditionally activated based on a [context matcher header](./contextMatchers.md) at the top of the file.

`#` denotes a comment in a `.talon` file, and any line that starts with `#` will be ignored by Talon.

## Voice commands

Left hand side of the colon defines the spoken phrase rule that the user will say to trigger the command. The right hand side defines the action or actions that will be taken when the command is spoken. In Talon a [action](./actions.md) is a function defined in Python.

```talon
# When they user says "go left", the 'edit.left' action will be called and cursor will move left.
go left: edit.left()

# When the user says "press left", the 'key' action will be called with the argument 'left' and the left arrow key will be pressed.
press left: key(left)

# When the user says "custom action", the user.my_custom_action will be called.
custom action: user.my_custom_action()
```

### Arguments in the spoke in phrase rule

The spoken phrase rule doesn't have to be a text literal. It can use dynamic informations from lists and captures.

```talon
# When the user says "press {NAME_OF_KEY}" the key action is called with the value of the list item NAME_OF_KEY.
# eg: "press dash" => key("-")
press {user.key}: key(key)

# When the user says "press {NAME_OF_KEY}" the key action is called with the return value of the matched capture.
press <user.key>: key(key)
```

## Hotkeys

Instead of a spoke in voice command you can press a key to trigger a Talon action

```talon
key(f1): print("f1 is pressed")
```

## Talon script

Talon script is the name of the scripting language that is on the right hand side of a command or hotkey definition. It can call actions/functions but also do some simples scripting things like creating variables.

```talon
Some command:
    value = user.get_value()
    print(value)
```

## Settings

Talon files can define setting values. It cannot declare new settings, but it can define it the values of existing settings. The settings block consists of key/value pairs where the left hand side is the setting identifier and the right hand side the setting value.

```talon
settings():
    speech.timeout = 0.25
    user.mode_indicator_show = true
```

## Tags

Talon files can activate tags. That means that when the context matcher for this file is true the file activates tags that can be used in contexts in other files.

```talon
tag(): browser
tag(): user.git
```

## Example

```talon
app: vscode
-

tag(): user.tabs
tag(): user.git

settings():
    user.scroll_speed = 0.9

save file: edit.save()
```
