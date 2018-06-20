# Notes about Redux learinig

# When to use Redux

For global state, change which changes should apply to many components.
Examples:
- routing
  * created event, should route to event page(by param, route to event-list)
- cross-session data - configs, that can be used anywhare, and also should be
  saved between sessions

# Store

Contains a state of application. It's not all-computed state, but real state,
splited by conception.

# Reducer

Change state by action.

## About filtering

No filtering in events reducer, because it's throw out filtered event, and we
need to save them.  We can do filtering there, but it this case, we need to
have one more state: 'all_events' for show all events, when we discard
filtering.  So, do real filtering, lazy-way: where it's become mast filtered -
in containers.

## Fetch Error Handlign

When fetch fails i want to display error message - global and on concrete view.
Global to attention user, and concrete view, for cocretize whats wrong.
For example - event builder, that have ~5 fields, each of those can be
misfilled and should have it's own error message.

So, after fetch-fail action, i need to save error messages for current view.

Next issue - in future i will have many error states for each view/fetch.
I can cut this corner with hope that i has only one current view, and i don't
need to save all errors, but only current. If in future i need separate - i
just one more. YAGNI.

