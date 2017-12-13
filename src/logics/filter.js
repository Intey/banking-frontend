export const filterTypes = {
  my: 'only-my',
  all: 'all'
}

export function filterEvents(events, filter) {
  console.log('filterEvents', events, filter)
  switch(filter) {
    case filterTypes.my:
      return events.filter( e => e.author.toLowerCase() === 'Intey' )
    case filterTypes.all:
      return events
    default:
      return events
  }
}
