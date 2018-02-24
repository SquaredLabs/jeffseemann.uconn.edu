# Jeff Seemann's Website
Website highlighting research done by Jeffrey Seemann.

## Technology Stack
Before working on this project, you should be familiar with the following protocols and technologies:
- [Admin-On-Rest](https://marmelab.com/admin-on-rest/)
- [ESLint](https://eslint.org/)
- [Docker](https://docs.docker.com/engine/docker-overview/)
- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en/)
- [Npm](https://www.npmjs.com/)
- [PostgreSQL](https://www.postgresql.org/docs/10/static/index.html)
- [PostgREST](https://postgrest.com/en/v4.4/intro.html)
- [React](https://reactjs.org/)
- [React Router](https://reacttraining.com/react-router/)
- [Redux](https://redux.js.org/)
- [Redux Thunk](https://github.com/gaearon/redux-thunk/)
- [SSH Encryption](https://www.digitalocean.com/community/tutorials/understanding-the-ssh-encryption-and-connection-process/)

## Set Up
Project set up should be operating system independent with the use of Docker. Please contact the lead developer or update the documentation if set up varies by machine.

### Software Prerequisites
Please have the following installed on your machine:
- [Docker CE](https://store.docker.com/search?type=edition&offering=community)
- [Git](https://git-scm.com/downloads)
- [Node](https://nodejs.org/en/download/)

### Add SSH Key to your GitHub Account
Before trying to clone the repository, ensure you have a [public/private key pair generated](https://help.github.com/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent/#platform-mac) on your machine and [added to your GitHub account](https://help.github.com/articles/adding-a-new-ssh-key-to-your-github-account/).

### Clone the Repository
```sh
git clone git@github.com:SquaredLabs/Jeff-Website.git
```

### Install Dependencies
```sh
cd Jeff-Website/
rm -rf node_modules/
npm install
```
### Launch Project
```sh
npm start
```
