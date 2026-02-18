# Talon events

Talon exposes event-style APIs where you register callbacks that run when something happens (startup, noise changes, file changes, and more).

## App lifecycle events

Use `app.register(event, callback)` to subscribe and `app.unregister(event, callback)` to remove a subscription.

```py
from talon import app

def on_ready():
    print("Talon is ready")

app.register("ready", on_ready)
```

Available app lifecycle events:

- `ready` Talon is ready. Your callback will be called after Talon launch and during script reloads.
- `launch` Talon launched. Your callback will only be called immediately after Talon launch.
- `startup` Talon launched during system startup.

Use `ready` for initialization that depends on settings, UI state, or registries being fully loaded.

## UI events

Use `ui.register(event, callback)` to subscribe and `ui.unregister(event, callback)` to remove a subscription.

```py
from talon import ui

def on_app_launch(app):
    print(f"App {app.name} launched")

ui.register("app_launch", on_app_launch)
```

Available UI events:

- `""` An empty string registers the callback for all events.
- `app_launch` An application process launched.
- `app_close` An application process exited.
- `app_activate` The active application changed to this app.
- `app_deactivate` This application lost active focus.
- `win_title` A window title changed.
- `win_open` A window was opened/created.
- `win_close` A window was closed/destroyed.
- `win_move` A window position changed.
- `win_resize` A window size changed.
- `win_show` A window became visible/unminimized.
- `win_hide` A window became hidden/minimized.
- `screen_change` Monitor/screen configuration changed.
- `element_focus` Focus moved to a different accessibility element.

## Registry events

Use `registry.register(event, callback)` to subscribe and `registry.unregister(event, callback)` to remove a subscription.

```py
from talon import registry

def on_settings_change(updated_settings: set[str]):
    print("Settings changed", updated_settings)

registry.register("update_settings", on_settings_change)
```

Available registry events:

- `""` An empty string registers the callback for all events.
- `add_module`
- `remove_module`
- `add_context`
- `remove_context`
- `update_actions`
- `update_apps`
- `update_commands`
- `update_decls`
- `update_contexts`
- `update_settings`
- `update_speech`
- `update_tags`

## Noise events

Use `noise.register(event, callback)` to subscribe and `noise.unregister(event, callback)` to remove a subscription.

```py
from talon import noise

def on_pop(active: bool):
    if active:
        print("pop detected")

noise.register("pop", on_pop)
```

Available noise events:

- `""` An empty string registers the callback for all noises.
- `pop` Pop noise
- `hiss` Hiss noise

## Filesystem events

Use `@resource.watch(path)` to monitor file changes.

```py
from talon import resource

@resource.watch("/tmp/notes.csv")
def on_file_event(file):
    print(file.read())
```

Use `fs.watch(path, callback)` to monitor file changes and `fs.unwatch(path, callback)` to remove the watcher.

```py
from talon import fs

def on_file_event(path, flags):
    if flags.exists:
        print(f"changed: {path}")

fs.watch(r"/tmp/notes.txt", on_file_event)
```

`flags` indicates change details such as whether the path exists or was renamed.

## Event handler tips

- Keep callbacks fast; hand off expensive work to actions/timers.
- Always unregister callbacks/watchers when no longer needed.
- Prefer `ready` for startup initialization over top-level code that assumes everything is loaded.
