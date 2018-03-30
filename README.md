# Jeff Seemann's Website
Website highlighting research done by Jeffrey Seemann.

## Technology Stack
Don't worry, knowledge of php is not required for this project. It's just how the headless-CMS is set up, but it can be edited with absolutely no coding! Before working on this project, you should be familiar with the following protocols, projects and technologies:
- [ESLint](https://eslint.org/)
- [Directus](https://docs.getdirectus.com/6.4.0/#What_is_Directus?)
- [Git](https://git-scm.com/)
- [MySQL](https://dev.mysql.com/doc/)
- [Node.js](https://nodejs.org/en/)
- [Npm](https://www.npmjs.com/)
- [React](https://reactjs.org/)
- [React Router](https://reacttraining.com/react-router/)
- [Redux](https://redux.js.org/)
- [Redux Thunk](https://github.com/gaearon/redux-thunk/)
- [SSH Encryption](https://www.digitalocean.com/community/tutorials/understanding-the-ssh-encryption-and-connection-process/)

## Set Up
Project set up should be operating system independent. Please contact the lead developer or update the documentation if set up varies by machine.

### Software Prerequisites
[Digital Ocean](https://www.digitalocean.com/community/tutorials/how-to-install-linux-nginx-mysql-php-lemp-stack-in-ubuntu-16-04) has great tutorials and might help with installing the required technologies. Please have the following installed on your machine:
- [Composer](https://getcomposer.org/download/)
- [Git](https://git-scm.com/downloads)
- [MySQL](https://www.mysql.com/downloads/)
- [Nginx](https://www.nginx.com/resources/wiki/start/topics/tutorials/install/)
- [Node](https://nodejs.org/en/download/)
- [Php](http://php.net/manual/en/install.php)

### Add SSH Key to your GitHub Account
Before trying to clone the repository, ensure you have a [public/private key pair generated](https://help.github.com/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent/#platform-mac) on your machine and [added to your GitHub account](https://help.github.com/articles/adding-a-new-ssh-key-to-your-github-account/).

### Clone the Repositories
The CMS is a [git submodule](https://git-scm.com/book/en/v2/Git-Tools-Submodules) so you'll need to clone two repositories.
```sh
git clone --recurse-submodules git@github.com:SquaredLabs/Jeff-Website.git
```

### Install Dependencies
```sh
cd Jeff-Website/
npm install
```

### Create a database locally:
If you are having difficulties logging in, look up a [Digital Ocean](https://www.digitalocean.com/community/tutorials/how-to-create-a-new-user-and-grant-permissions-in-mysql) tutorial! You'll use this database name later.
```sh
mysql -u $USER -p
create database jeffwebsite;
quit;
```

### Seed initial data and assets:
Get an initial dump of Jeff's website to [import](https://s3.core.uconn.edu/minio/login).
Download image assets and place in `Jeff-Website/cms/storage/`.
```sh
gunzip jeffwebsiteDatabase.sql.gz
mysql < jeffwebsiteDatabase.sql
```

### Install required php packages:
These are just some of the required php packages. If you have to install more, please add them here. Refer to the documentation or logs for troubleshooting.
```sh
sudo apt install php7.1-gd
sudo apt install php7.1-xml
```

### Set up Nginx
Copy the `default` file from the [Directus respository](https://github.com/directus/directus-vagrant/tree/master/config/nginx) into the file `jeff-website.com`. See file path below.
Optionally, you could create this file in `/etc/nginx/sites-available/` and create a symbolic link to `/etc/nginx/sites-enabled/`.
Change the line `root /var/www/html;` to `root /home/$USER/Jeff-Website/cms`, where $USER is the name of your machine. Remove the line `include pagespeed.conf;` from the file.
Change the line `server_name localhost;` to `server_name jeffwebsite.test;` since you'll probably be using localhost for something else.
Change the line `fastcgi_pass unix:/var/run/php5-fpm.sock;` to `fastcgi_pass unix:/var/run/php/php7.1-fpm.sock;` or with whichever version of php you are using and the appropriate file path.
```sh
sudo vim /etc/nginx/sites-enabled/jeff-website.com
```
Update your hosts file to include your recent addition. Add the line `127.0.0.1 jeffwebsite.test`.
```sh
sudo vim /etc/hosts
```
Give nginx/php the ability to write to this folder. Change owner of repository to your user.
```sh
chmod -R 775 ~/Jeff-Website/cms/
sudo chown -R $USER:www-data ~/Jeff-Website
```

### Install CMS dependencies
After doing this, navigate to jeffwebsite.test/login.php in your browser to see the CMS.
```sh
cd cms/
composer install
```

### Launch Project
```sh
cd Jeff-Website/
npm start
```
