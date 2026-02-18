# Context matchers

In Talon a context matcher is one or more key/value pairs that describes when a Talon context is active. These context matchers are found in a few different places.

1. In `.talon` and `.talon-list` files at the top above the `-` delimiter.
2. In `.py` files as the value to a `Context.matches` assignment.
3. In `.py` files as the value to a `Module.apps.*` assignment.

## Context matchers in .talon and .talon-list files

The contexts matchers, also refered to as context headers, specify when the entire file is active. That means if the matchers evaluate to false no commands, settings, list items etc will be defined from this file.

```talon
# This is a context matcher. It defines the context in which the commands in this file will be active.
# In this case, the context is "app: vscode", which means that the commands in this file will only be active when Visual Studio Code is the active application.
app: vscode
-
```

A header can have multiple contexts matches defined. Different keys will be ORed together, and multiple values for the same key will be ANDed together.

```talon
# This header defines a context that is active when either the active application is Visual Studio Code OR the active application is WaterFox.
app: vscode
app: waterfox
-
```

```talon
# This header defines a context that is active when the operating system is Windows AND the active application is Visual Studio Code.
os: windows
app: vscode
-
```

You can use the `not` keyword to negate a context.

```talon
# This header defines a context that is active when the active application is NOT Visual Studio Code.
not app: vscode
-
```

You can explicitly specify `and` to AND together different contexts.

```talon
# This header defines a context that is active when the operating system is Windows AND the active application is Visual Studio Code OR the active application is WaterFox.
os: windows
and app: vscode
app: waterfox
-
```

### Context matchers in .py files

In Python files we can also create a context. On this context we can then define different actions, settings etc. These definitions are only active when the context matchers evaluate to true.

```py
from talon import Context

ctx = Context()

ctx.matches = r"""
os: windows
app: vscode
"""
```

In python we can also define new applications.

```py
# Defining the application 'vscode' as when the operating system is Windows AND the active application executable is 'code.exe' or when the operating system is Linux and the active application name is 'Code'.
mod.apps.vscode = r"""
os: windows
and app.exe: code.exe
os: linux
and app.name: Code
"""
```

Some times these matchers can be quite complex. VSCode is a good example where there are multiple different names for different forks and versions. In that case it's quite common to split the matcher string into multiple different assignment statements. Normally only the last value would actually be used, but Talon support this as separate definitions.

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
