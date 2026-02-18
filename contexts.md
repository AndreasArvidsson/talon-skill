# Talon contexts

Contexts specify when behavior is active. In Python, a context can implement/override actions and captures, define list values, set settings, and activate tags.

## Create a context and matcher

Set `ctx.matches` to a matcher expression. Definitions on that context are only active while the matcher is true.

```py
from talon import Context

ctx = Context()

ctx.matches = r"""
os: windows
app: vscode
"""
```

## Context-specific action implementations

```py
from talon import Context

ctx = Context()
ctx.matches = "app: vscode"

@ctx.action_class("user")
class UserActions:
    def hello_world():
        print("Hello vscode")
```

## Context-specific capture implementations

```py
from talon import Context

ctx = Context()
ctx.matches = "app: vscode"

@ctx.capture("user.letter", rule="{user.letter} | sky")
def letter(m) -> str:
    return str(m)
```

## Context-specific lists, settings, and tags

```py
from talon import Context

ctx = Context()
ctx.matches = "app: vscode"

ctx.lists["user.git_command"] = ["status", "commit", "push"]
ctx.settings["speech.timeout"] = 0.25
ctx.tags = ["user.git"]
```

## App aliases for matchers

You can define app aliases so matcher headers can use a stable app name.

```py
from talon import Module

mod = Module()

mod.apps.vscode = r"""
os: windows
and app.exe: code.exe
os: linux
and app.name: Code
"""
```
