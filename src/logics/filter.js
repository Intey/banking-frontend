export default function filterEvents(events, filter) {
  console.log('filterEvents', events, filter)
  switch(filter) {
    case 'MY':
      return events.filter( e => e.author === 'Intey' )
    case 'ALL':
      return events
    default:
      return events
  }
}
