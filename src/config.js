export const nav = [
  {
    name: 'lab',
    routeName: 'lab',
    link: '/',
    text: 'Lab'
  },
  {
    name: 'publications',
    routeName: 'publications',
    link: '/publications',
    text: 'Publications'
  },
  {
    name: 'reading',
    routeName: 'reading',
    link: '/reading',
    text: 'Reading'
  },
  {
    name: 'collaborate',
    routeName: 'collaborate',
    link: '/collaborate',
    text: 'Collaborate'
  },
  {
    name: 'work',
    routeName: 'work',
    link: '/work',
    text: 'Work'
  },
  {
    name: 'courses',
    routeName: 'coourses',
    link: '/courses',
    text: 'Courses'
  },
  {
    name: 'about',
    routeName: 'about',
    link: '/about',
    text: 'About'
  }
]

export const foot = [
  'jeff.seemann@uconn.edu',
  '+1 860 555 5555',
  '123 Drury Lane, Storrs, CT 06269',
  'assets/img/DAndDBy.svg'
]

export const colors = {
  uconnBlue: '#0f1938',
  siteGreen: '#49ea7f',
  siteGray: '#5b605d',
  siteWhite: '#fefffa',
  siteBlack: '#313a38',
  profileWhite: '#d7e2dc'
}

export const labProfiles = [
  {
    name: 'Daniel Schwartz',
    major: 'Physiology and Neurobiology',
    position: 'Associate Professor',
    path: 'assets/img/danSchwartz.png'
  },
  {
    name: 'Daniel Schwartz',
    major: 'Physiology and Neurobiology',
    position: 'Associate Professor',
    path: 'assets/img/danSchwartz.png'
  },
  {
    name: 'Daniel Schwartz',
    major: 'Physiology and Neurobiology',
    position: 'Associate Professor',
    path: 'assets/img/danSchwartz.png'
  },
  {
    name: 'Daniel Schwartz',
    major: 'Physiology and Neurobiology',
    position: 'Associate Professor',
    path: 'assets/img/danSchwartz.png'
  },
  {
    name: 'Daniel Schwartz',
    major: 'Physiology and Neurobiology',
    position: 'Associate Professor',
    path: 'assets/img/danSchwartz.png'
  },
  {
    name: 'Daniel Schwartz',
    major: 'Physiology and Neurobiology',
    position: 'Associate Professor',
    path: 'assets/img/danSchwartz.png'
  },
  {
    name: 'Daniel Schwartz',
    major: 'Physiology and Neurobiology',
    position: 'Associate Professor',
    path: 'assets/img/danSchwartz.png'
  },
  {
    name: 'Daniel Schwartz',
    major: 'Physiology and Neurobiology',
    position: 'Associate Professor',
    path: 'assets/img/danSchwartz.png'
  },
  {
    name: 'Daniel Schwartz',
    major: 'Physiology and Neurobiology',
    position: 'Associate Professor',
    path: 'assets/img/danSchwartz.png'
  },
  {
    name: 'Daniel Schwartz',
    major: 'Physiology and Neurobiology',
    position: 'Associate Professor',
    path: 'assets/img/danSchwartz.png'
  }
]

export const apiUri = {
  nowReading: {
    protocol: 'http:',
    hostname: 'jeffwebsite.test',
    pathname: '/api/1.1/tables/reading/rows',
    query: { 'filters[now][eq]': 1 }
  },
  pastReading: {
    protocol: 'http:',
    hostname: 'jeffwebsite.test',
    pathname: '/api/1.1/tables/reading/rows',
    query: { 'filters[now][eq]': 0 }
  }
}
