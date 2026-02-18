# Talon list files

`.talon-list` files are used to define the content of a list. It cannot declare new lists only define the content of already declared lists. It cannot append or edit a list in anyway. It's a full definition of the list content.

The content of a `.talon` can be conditionally activated based on a [context matcher header](./contextMatchers.md) at the top of the file.

`#` denotes a comment in a `.talon-list` file, and any line that starts with `#` will be ignored by Talon.

The content of a Talon list is key/value pairs. If you want this same text for both key and value you can omit the value. This is similar to how you can do with objects in JavaScript.

In to long list files the first line needs to be the `list` pair containing the list name.

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
