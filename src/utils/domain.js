
export function filterUser(user, text) {
  return text.trim() && user.user.username.toLowerCase().startsWith(text.toLowerCase())
}

export function displayUsername(user) {
  return user.user.username
}

