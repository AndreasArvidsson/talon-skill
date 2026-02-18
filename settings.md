# Talon settings

Settings let you tune Talon behavior without changing Python logic. You can set built-in settings (for example `key_wait`) and user-defined settings (for example `user.my_prefix_speed`) based on context.

## Declaring a user setting

Declare settings in Python with `Module.setting(...)`.

```py
from talon import Module

mod = Module()

mod.setting(
    "my_prefix_sleep_amount",
    type=int,
    default=200,
    desc="Amount of time to sleep in milliseconds",
)
```

This declares `user.my_prefix_sleep_amount`. Use a unique prefix in names to avoid collisions with other user files.

## Reading a setting in Python

Use `actions.settings.get(...)` to get the context-dependent value.

```py
from talon import actions

value = actions.settings.get("user.my_prefix_sleep_amount")
```

Settings may be unavailable very early during startup. Read them inside actions or callbacks such as `app.register("ready", ...)`.

## Setting values in .talon files

Use a `settings():` block in a `.talon` file.

```talon
app: vscode
-
settings():
    # Built-in setting
    key_wait = 4.0
    # User setting
    user.my_prefix_sleep_amount = 50
```

When the same setting is assigned in multiple places, the most specific active context wins.

## Setting values from Python context

You can also set settings in Python using `Context.settings`.

```py
from talon import Context

ctx = Context()
ctx.matches = "app: vscode"
ctx.settings["user.my_prefix_sleep_amount"] = 50
```
