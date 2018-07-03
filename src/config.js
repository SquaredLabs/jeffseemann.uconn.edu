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

export const colors = {
  uconnBlue: '#0f1938',
  siteGreen: '#49ea7f',
  siteGray: '#5b605d',
  siteWhite: '#fefffa',
  siteBlack: '#313a38',
  profileWhite: '#d7e2dc'
}

export const apiUri = {
  labProfiles: {
    pathname: '/api/1.1/tables/lab_members/rows',
    query: { 'filters[active][eq]': 1 }
  },
  labContent: {
    pathname: '/api/1.1/tables/lab_content/rows'
  },
  nowReading: {
    pathname: '/api/1.1/tables/reading/rows',
    query: { 'filters[now][eq]': 1 }
  },
  pastReading: {
    pathname: '/api/1.1/tables/reading/rows',
    query: { 'filters[now][eq]': 0 }
  },
  collaborators: {
    pathname: '/api/1.1/tables/collaborators/rows',
    query: { 'filters[sponsor][eq]': 0 }
  },
  sponsors: {
    pathname: '/api/1.1/tables/collaborators/rows',
    query: { 'filters[sponsor][eq]': 1 }
  },
  positions: {
    pathname: '/api/1.1/tables/work/rows',
    query: { 'filters[active][eq]': 1 }
  },
  about: {
    pathname: '/api/1.1/tables/about/rows'
  },
  courses: {
    pathname: '/api/1.1/tables/courses/rows'
  },
  publications: {
    pathname: '/api/1.1/tables/publications/rows'
  },
  contact_address: {
    pathname: '/api/1.1/tables/contact_address/rows'
  },
  contact_email: {
    pathname: '/api/1.1/tables/contact_email/rows'
  },
  contact_phone: {
    pathname: '/api/1.1/tables/contact_phone/rows'
  }
}
