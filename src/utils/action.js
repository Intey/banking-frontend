export function act(type, payload=undefined) {
  if (payload !== undefined)
  {
    return {
      type: type,
      payload: payload
    }
  }
  else
  {
    return { type: type }
  }
}
