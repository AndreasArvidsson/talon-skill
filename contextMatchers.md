# Context matchers

In Talon, a context matcher is one or more key/value clauses describing when content is active.

You will see matchers in:

1. `.talon` and `.talon-list` files at the top, above the `-` delimiter.
2. `.py` files as the value of `Context.matches`.
3. `.py` files as the value of `Module.apps.*`.

## Context matchers in .talon and .talon-list files

Context matchers (header lines before `-`) determine whether the entire file is active.

```talon
app: vscode
-
```

A header can have multiple matcher lines. Talon combines them as:

- same key: OR (for example `app: vscode` OR `app: jetbrains`)
- different keys: AND (for example `os: windows` AND `app: vscode`)

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

Use `and` if you want to make the relationship explicit, and `not` to negate a clause.

```talon
# This header defines a context that is active when the operating system is Windows AND the active application is Visual Studio Code OR the active application is NOT WaterFox.
os: windows
and app: vscode
not app: waterfox
-
```

### Context matchers in .py files

In Python, matchers are assigned to `Context.matches`.

```py
from talon import Context

ctx = Context()

ctx.matches = r"""
os: windows
app: vscode
"""
```

Apps can also be declared on a module and then reused in matcher headers.

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
