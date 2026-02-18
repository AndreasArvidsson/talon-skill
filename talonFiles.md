# Talon files

`.talon` files are used to define voice commands and their associated actions. `.talon` files can also define settings and enable tags.

The content of a `.talon` can be conditionally activated based on a [context matcher header](./contextMatchers.md) at the top of the file.

`#` denotes a comment in a `.talon` file, and any line that starts with `#` will be ignored by Talon.

## Voice commands

A Talon voice command has two parts.

1. The left hand side of the colon defines the [spoken phrase rule](./spokenPhraseRule.md) that the user will say to trigger the command.
2. The right hand side of the colon defines Talon script: the action(s) that run when the command is spoken. In Talon, an [action](./actions.md) is a function defined in Python.

```talon
# When the user says "go left", the `edit.left` action runs.
go left: edit.left()

# When the user says "press left", the `key` action runs with argument `left`.
press left: key(left)

# When the user says "custom action", `user.my_custom_action` runs.
custom action: user.my_custom_action()
```

## Hotkeys

Instead of a spoken voice command you can press a key to trigger a Talon action.

```talon
key(f1): edit.left()
```

## Talon script

Talon script is the language used on the right side of a command or hotkey definition. It can call actions/functions and also supports simple scripting features such as variables.

```talon
Some command:
    value = user.get_value()
    print(value)
```

A literal string in Talon script is syntactic sugar for the insert action.

```talon
# Both of these are equivalent
hello world: insert("hello world")
hello world: "hello world"
```

## Settings

Talon files can define setting values. They cannot declare new settings, but they can set values for existing settings. The `settings()` block is key/value pairs where the left side is the setting identifier and the right side is the value.

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
