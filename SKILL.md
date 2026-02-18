---
name: talon
description: Instructions for how to work with user scripts for the Talon voice control software. Understanding .talon and .talon-list files, the unique way Talon uses Python, and how to write scripts that can be used in Talon.
---

# Talon

Talon is a voice control software that allows users to control their computer using voice commands. It uses a unique scripting language that is based on Python, but with some differences. In this section, we will cover the basics of how to work with user scripts for Talon, including understanding `.talon` and `.talon-list` files, the unique way Talon uses Python, and how to write scripts that can be used in Talon.

## .talon and .talon-list files

Talon introduces two unique file formats for user scripts:

- [.talon files](./talonFiles.md) Define voice commands, hotkeys and settings
- [.talon-list files](./talonListFiles.md) Define list content

## Talon concepts

- [Actions](./actions.md) Python functions callable from Talon voice commands
- [Lists](./lists.md) Key/value mappings that provide variables in spoken rules
- [Captures](./captures.md) Python callbacks that parse spoken grammar into values
- [Modules](./modules.md) Declarations for actions, lists, captures, settings, modes, tags, and apps
- [Contexts](./contexts.md) Context-specific implementations and values
- [Tags](./tags.md) Feature flags that can be enabled in one file and matched on in another file
- [Context matchers](./contextMatchers.md) Match logic that controls when files/contexts are active
- [Spoken phrase rule](./spokenPhraseRule.md) Spoken grammar used in commands and captures
- [Settings](./settings.md) Settings
- [Events](./events.md) Events
- [Key codes](./keyCodes.md) Key codes for hotkeys and key action

## Scripts to get available actions, captures, lists, and settings

[actions.js](./scripts/actions.js) prints a list of available Talon actions.

```sh
$ node scripts/actions.js
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
{"user.letter": [{'air': 'a', 'batt': 'b', 'cap': 'c'}], "user.cursorless_hat_color": {'blue': 'blue', 'green': 'green', 'red': 'red', 'pink': 'pink', 'gold': 'yellow'}}
```

[settings.js](./scripts/settings.js) prints a list of available Talon settings.

```sh
$ node scripts/settings.js
['speech.record_all', 'user.subtitles_show', 'user.subtitles_screens', 'user.subtitles_size']
```

## Testing

To test a voice command you can run the script [sim.js](./scripts/sim.js) with the voice command.

```sh
$ node scripts/sim.js "press air"
[1] "press air"
   path: user\andreas-talon\core\keys\keys.talon
   rule: "press <user.key_any>"
```

## References

- [Talon official docs](https://talonvoice.com/docs)
- [Talon community wiki](https://talon.wiki/)
