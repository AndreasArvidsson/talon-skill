# Actions

In Talon, an action is a Python function callable from `.talon` files or Python code.

## Declaring a new action

Actions are primarily declared on a class decorated with `@mod.action_class`. The class is only a declaration container; Talon does not instantiate it.

When declaring user actions, you are required to include a docstring. User actions live in the `user` namespace.

```py
from talon import Module

mod = Module()

@mod.action_class
class Actions:
    def hello_world():
        """Print hello world"""
        print("Hello world")
```

You can also declare a single action with `@mod.action`.

```py
@mod.action
def open_docs():
    "Open project docs"
    ...
```

## Calling an action

Call actions from `.talon`:

```talon
hello world: user.hello_world()
```

or from Python:

```py
from talon import actions

actions.user.hello_world()
```

## Context-specific action implementations

Use a context to provide an implementation for an existing action when that context is active.

```py
from talon import Context

ctx = Context()
ctx.matches = r"""
app: vscode
"""

@ctx.action_class("user")
class UserActions:
    def hello_world():
        print("Hello vscode")
```

When no context implementation is active, Talon falls back to the base declaration/implementation. You can also override built-in namespaces (for example `"edit"` or `"app"`) with `@ctx.action_class("edit")`.
