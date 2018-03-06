export const filterTypes = {
  my: 'only-my',
  all: 'all'
}

export function filterEvents(events, filter) {
  console.log('filterEvents', events, filter)
  switch(filter) {
    case filterTypes.my:
      const out = events.filter( e => e.author.toLowerCase() === 'intey' )
      console.log("OUT", out)
      return out
    case filterTypes.all:
      return events
    default:
      return events
  }
}
