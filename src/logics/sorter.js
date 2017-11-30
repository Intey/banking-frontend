export default function sortEvents(events, sort) {
  // slice - to copy. We should not mutate 'events'
	if (!events || !events.length || !events.length < 1) return events
  if (!events[0].hasOwnProperty(sort.field)) {
    console.log(`can't filtrate by ${sort.field}. Event doesn't contains it`)
    return events
  }

  events.slice().sort( (e, next) => {
    if (sort.type === 'ASC')
      return ascCompare(e[sort.field], next[sort.field])
    else
      return descCompare(e[sort.field], next[sort.field])
  })

}

function ascCompare(eField, eField2)
{
  return eField > eField2
}
function descCompare(eField, eField2)
{
  return eField < eField2
}
