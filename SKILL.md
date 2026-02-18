---
name: talon
description: Instructions for how to work with user scripts for the Talon voice control software. Understanding .talon and .talon-list files, the unique way the Talon uses Python, and how to write scripts that can be used in Talon.
---

# Talon

Talon is a voice control software that allows users to control their computer using voice commands. It uses a unique scripting language that is based on Python, but with some differences. In this section, we will cover the basics of how to work with user scripts for Talon, including understanding `.talon` and `.talon-list` files, the unique way Talon uses Python, and how to write scripts that can be used in Talon.

## .talon and .talon-list files

Talon introduces two unique file formats for user scripts:

- [`.talon`](./talonFiles.md)
- [`.talon-list`](./talonListFiles.md) files.

## Script to get available actions, captures and lists

[actions.js](./scripts/actions.js) prints a list of available Talon actions.

```sh
$ node scripts/actions.js
Talon REPL | Python 3.13.7 (pipelines/6318:29f8507, Aug 23 2025, 21:59:54) [MSC v.1943 64 bit (AMD64)] on win32)
app.bundle() -> str
  Get active app's bundle identifier
app.executable() -> str
  Get active app's executable name
app.name() -> str
  Get active app's name
```

[captures.js](./scripts/captures.js) prints a list of available Talon captures.

```sh
$ node scripts/captures.js
Talon REPL | Python 3.13.7 (pipelines/6318:29f8507, Aug 23 2025, 21:59:54) [MSC v.1943 64 bit (AMD64)] on win32)
{'name': 'number', 'rule': '<user.number_string>', 'doc': 'Parses a number phrase, returning it as an integer.'}
{'name': 'number_small', 'rule': '{digits} | {number_small}'}
{'name': 'number_small', 'rule': '{user.number_small}', 'doc': 'Parses a small (0-99) number phrase, returning it as an integer.'}
{'name': 'digits', 'rule': '<digit_string>'}
{'name': 'number_string', 'rule': '({digit} | {number_small} | {number_meta} | {number_scale})+'}
{'name': 'letter', 'rule': '{letter}'}
{'name': 'symbol', 'rule': '{symbol}'}
```

[lists.js](./scripts/lists.js) prints a list of available Talon lists.

```sh
$ node scripts/lists.js
Talon REPL | Python 3.13.7 (pipelines/6318:29f8507, Aug 23 2025, 21:59:54) [MSC v.1943 64 bit (AMD64)] on win32)
{"user.letter": [{'air': 'a', 'batt': 'b', 'cap': 'c'}], "user.cursorless_hat_color": {'blue': 'blue', 'green': 'green', 'red': 'red', 'pink': 'pink', 'gold': 'yellow'}}
```

## Testing

To test a voice command you can run the script [sim.js](./scripts/sim.js) with the voice command.

```sh
$ node scripts/sim.js "press air"
Talon REPL | Python 3.13.7 (pipelines/6318:29f8507, Aug 23 2025, 21:59:54) [MSC v.1943 64 bit (AMD64)] on win32)
[1] "press air"
   path: user\andreas-talon\core\keys\keys.talon
   rule: "press <user.key_any>"
```

## References

- [Talon official docs](https://talonvoice.com/docs)
- [Talon community wiki](https://talon.wiki/)
