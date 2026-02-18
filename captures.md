# Talon captures

A Talon capture parses part of spoken input and returns a Python value that can be used by a voice command.

Captures are useful when:

- you want reusable grammar fragments
- you need parsing logic that is more complex than a plain list lookup
- you want an easy extension point for users overriding behavior in contexts

## Declaring a capture

Captures are declared on a module.

```py
from talon import Module

mod = Module()

@mod.capture(rule="(north | south | east | west)")
def direction(m) -> str:
    "Single cardinal direction"
    return str(m)
```

The `rule` uses the same [spoken phrase rule](./spokenPhraseRule.md) as command rules in `.talon` files.

## Using captures in `.talon` files

Use angle brackets to reference captures.

```talon
move <user.direction>: user.move(direction)
```

When this command matches, `direction` contains the value returned by `user.direction`.

## Capture input (`m`)

Inside capture functions, `m` contains matched components from the rule. You can:

- convert it with `str(m)` for the full matched phrase
- access named parts from lists/captures in the rule (for example `m.letter`)
- use it like a sequence when you need token-level parsing

```py
@mod.capture(rule="{user.letter}")
def letter(m) -> str:
    "One letter key"
    return m.letter
```

## Context-specific capture overrides

You can override or extend a capture for a specific context.

```py
from talon import Context

ctx = Context()
ctx.matches = "app: vscode"

@ctx.capture("user.letter", rule="{user.letter} | {user.additional_letter}")
def letter(m) -> str:
    return str(m)
```

This pattern is common when you want to add app-specific spoken forms without copying a large base list.
