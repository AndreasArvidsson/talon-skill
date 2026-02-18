# Talon key codes

Talon key codes are the key names used with the `key(...)` action and hotkey bindings in `.talon` files.

## Basic usage

```talon
press air: key(a)
find: key(ctrl-f)
tab next: key(tab)
```

Hotkey bindings use the same key names:

```talon
key(ctrl-shift-f): user.search_everywhere()
```

## Key action syntax

Common forms:

- `key(f)` press and release one key
- `key(ctrl-f)` hold modifier while pressing key
- `key(ctrl:down)` hold a key down
- `key(ctrl:up)` release a key
- `key(tab:3)` press a key multiple times
- `key(left delete)` send a key sequence

## Common key names

Letters, numbers and symbols:

- `a` through `z`
- `0` through `9`
- `+`, `-`, `?`, etc.

Editing/navigation:

- `left`, `right`, `up`, `down`
- `enter`, `tab`, `space`
- `backspace`, `delete`
- `home`, `end`, `pageup`, `pagedown`
- `escape`

Modifiers:

- `shift`
- `ctrl`
- `alt`
- `super` (Windows key / Command key, platform-dependent)
- right-side variants such as `rshift`, `rctrl`, `ralt`

Function keys:

- `f1` through `f12` (and higher where supported)

Numpad/keypad keys:

- `keypad_0` through `keypad_9`
- `keypad_clear`, `keypad_enter`, `keypad_separator`, `keypad_decimal`
- `keypad_plus`, `keypad_minus`, `keypad_multiply`, `keypad_divide`, `keypad_equals`

Media keys:

- `mute`, `voldown`, `volup`
- `play`, `stop`, `play_pause`
- `prev`, `next`
- `rewind`, `fast_forward`

Misc keys:

- `numlock`, `capslock`, `scroll_lock`, `insert`
- `altgr`
- `brightness_up`, `brightness_down`
