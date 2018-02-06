# Notes about redux learinig

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

