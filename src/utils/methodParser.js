export const methodParser = (method) => {
  switch (method) {
    case 'allPlayers':
      return 'Get all the NBA Players'
    default:
      return 'method'
  }
}
