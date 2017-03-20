export const parameters = (method) => {
  switch (method) {
    case 'allPlayers':
      return [{
        name: 'IsOnlyCurrentSeason',
        display: '¿Current Season?',
        values: getParametersValues('IsOnlyCurrentSeason'),
        type: 'combo'
      },{
        name: 'LeagueID',
        display: 'League',
        values: getParametersValues('LeagueID'),
        type: 'combo'
      },{
        name: 'Season',
        display: 'Season',
        values: getParametersValues('Season'),
        type: 'single'
      }]
    default:
      return 'method'
  }
}


export const getParametersValues = (parameter) => {
  switch (parameter) {
    case 'IsOnlyCurrentSeason':
      return [{
        value: 0,
        display: 'No'
      },{
        value: 1,
        display: 'Yes'
      }]
    case 'LeagueID':
      return [{
        value: '00',
        display: 'NBA'
      },{
        value: '10',
        display: 'ABA'
      },{
        value: '20',
        display: 'NBA D-League'
      }]
    default:
      return []
  }
}
