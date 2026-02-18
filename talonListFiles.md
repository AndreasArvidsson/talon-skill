# Talon list files

`.talon-list` files define entries for a Talon list.

They do not declare new user lists; user lists are declared in Python with `mod.list(...)`, then populated in `.talon-list`.

Like `.talon` files, `.talon-list` files can be conditionally activated using a [context matcher header](./contextMatchers.md) at the top of the file.

`#` denotes a comment in a `.talon-list` file, and any line that starts with `#` will be ignored by Talon.

The list content is key/value pairs. If key and value are the same, you can omit the value.

The file should include a `list: ...` header naming the list on the first line.

## Example

```talon
list: user.color
app: vscode
-

red: ff0000
blue: "0000ff"
black
```

The value of the above list as a Python dictionary is:

```py
{
    "red": "ff0000",
    "blue": "0000ff",
    "black": "black"
}
```
