# Spoken phrase rule

The spoken phrase rule is used in two different places in Talon:

1. In [`.talon` files](./talonFiles.md) on the left hand side of a voice command.
2. In `.py` files as the rule of a Talon capture.

## Simple rule

In its simplest form a spoken phrase rule is one or more words.

Note that only letters are supported. Symbols and numbers needs to be spelled out and in practice, symbols and numbers are usually represented through lists/captures (for example `{user.symbol}` or `<number_small>`).

```talon
# When the user says "go left", the `edit.left` action runs.
go left: edit.left()
```

## Arguments in the spoken phrase rule

The spoken phrase rule does not have to be text-only. It can include dynamic values from Talon lists and captures.

`{NAME}` is a Talon list called `NAME`. When the user speaks a key in the Talon list the associated value will be used as the argument.

`<NAME>` is a Talon capture called `NAME`. When the user speaks something matching the capture rule the return value of the capture function will be used as the argument.

```talon
# When the user says "press {NAME_OF_KEY}" the key action is called with the value of the list item NAME_OF_KEY.
# eg: "press dash" => key("-")
press {user.key}: key(key)

# When the user says "press {NAME_OF_KEY}" the key action is called with the return value of the matched capture.
press <user.key>: key(key)
```

If the same list/capture appears more than once, you can access each matched value with a numeric suffix.

```talon
# When the user says "press air and bat": letter_1 = "a" and letter_2 = "b".
press {user.letter} and {user.letter}:
    key(letter_1)
    key(letter_2)
```

## Optionals in the spoken phrase rule

Part of the spoken phrase can be optional. The optional part is denoted by `[]`.

```talon
# This voice command will match both "go left" and "left".
[go] left: edit.left()
```

## Conditionals in the spoken phrase rule

Sometimes you want to say either A or B. In that case we use the `|` operator. This is often combined with parentheses to set boundaries.

```talon
# This voice command will match both "go left" and "move left".
(go | move) left: edit.left()
```

## Repetitions in the spoken phrase rule

Sometimes you want to be able to repeat part of the grammar multiple times. We do this with either:

- `*` that means zero or more repetitions
- `+` that means one or more repetitions

```talon
# This voice command will match "left", "go left", "go go left", etc.
(go)* left: edit.left()
# This voice command will match "go left", "go go left", etc, but not "left".
(go)+ left: edit.left()
```

Repetitions are mostly used for list or capture arguments. In this case we use the `_list` suffix to get a list of all the argument values.

```talon
# This voice command will match "press air", "press air and bat", "press air and bat and cap".
# When the user says "press air and bat and cap": letter_list = ["a", "b", "c"].
press {user.letter} (and {user.letter})*: user.press_many(letter_list)
```

## Spoken phrase rule cheat sheet

- `{user.letter}` Talon list argument
- `<user.letter>` Talon capture argument
- `[go] left` Optional grammar
- `a | b` Conditional `a` or `b`
- `(a | b) c` Parenthesis for boundaries
- `{user.letter}*` Zero or many repeater
- `{user.letter}+` One or many repeater
- `letter_1` Access first value for letter list/capture
- `letter_list` Access list of values for letter list/capture
