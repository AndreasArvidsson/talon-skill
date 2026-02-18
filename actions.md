# Actions

In Talon a action is a Python function. The actions can be called from `.talon` files or other Python files.

## Declaring a new action

All Talon actions are defined as methods on a class. Note that no instance of this class will ever be created. The class name doesn't matter as it will not be used.

All actions first needs to be declared on a Talon module. When declaring a new action you need to provide a docstring. All user declared actions will be declared in the `user` namespace.

```py
from talon import Module

mod = Module()

@mod.action_class
class Actions:
    def hello_world():
        """Prints hello world"""
        print("Hello wold")
```

## Calling a action

The action can now be called either from a Talon file:

```talon
hello world: user.hello_world()
```

or from Python:

```py
from talon import actions

actions.user.hello_world()
```

## Context specific definition of a action

You can define a version of the action on a context meaning that this version of the action will be used when the context is active. Is not the module definition will be used instead.

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
