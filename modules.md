# Talon modules

Talon modules declare reusable API surface: actions, lists, captures, settings, modes, tags, and app definitions. This is how user code extends Talon.

User declarations on a module are exposed in the `user` namespace (for example `user.my_action`, `user.my_list`).

Names should be declared once and then implemented or specialized in [Talon contexts](./contexts.md). Re-declaring the same identifier causes load errors.

## Create a module

Start by creating a module instance.

```py
from talon import Module

mod = Module()
```

## Declare actions

[Declaring a new action on a module](./actions.md#declaring-a-new-action)

## Declare lists

```py
mod.list("letter", "The spoken phonetic alphabet")
```

## Declare captures

```py
@mod.capture(rule="{user.letter}")
def first_letter(m) -> str:
    "Single letter"
    return m.letter
```

## Declare settings, modes, and tags

```py
mod.setting("scroll_speed", type=float, default=1, desc="Scrolling speed")
mod.mode("game", "Game mode")
mod.tag("git", desc="Git commands")
```

## Define apps

Defining apps lets you reuse complex application matchers across [context matchers](./contextMatchers.md).

```py
# Defining the app 'vscode' as when the operating system is Windows AND the active application executable is 'code.exe' or when the operating system is Linux and the active application name is 'Code'.
mod.apps.vscode = r"""
os: windows
and app.exe: code.exe
os: linux
and app.name: Code
"""
```

App definitions can be split into multiple assignments. Talon treats them as additional alternatives for that app.

```py
mod.apps.vscode = r"""
os: windows
and app.exe: code.exe
"""
mod.apps.vscode = r"""
os: linux
and app.name: Code
"""
```
