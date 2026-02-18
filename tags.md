# Talon tags

Tags are feature flags in Talon contexts. They let one file enable behavior and other files react to that behavior through `tag:` matchers.

## Declaring a tag

Declare user tags in Python on a module.

```py
from talon import Module

mod = Module()
mod.tag("git", desc="Git command set")
```

This declares `user.git`.

## Activating tags in `.talon` files

Use `tag():` inside a `.talon` file to activate one or more tags when that file's matcher is active.

```talon
app: vscode
-
tag(): user.git
tag(): user.tabs
```

## Activating tags in Python contexts

You can also activate tags from Python.

```py
from talon import Context

ctx = Context()
ctx.matches = "app: vscode"
ctx.tags = ["user.git", "user.tabs"]
```

## Matching on tags

Use `tag: ...` in a context matcher to scope commands/actions to that feature.

```talon
tag: user.git
-
git status: user.git_status()
```

```py
from talon import Context

ctx = Context()
ctx.matches = "tag: user.git"
```

## When to use tags

Use tags when:

- a feature should be reusable across apps/files
- one context should enable behavior defined elsewhere
- you want to avoid duplicating large matcher blocks
