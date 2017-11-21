README

-install linux commands on windows (if needed)
https://msdn.microsoft.com/en-us/commandline/wsl/install-win10

-remove original version of linux (if one exists)
sudo apt-get remove nodejs

-install nvm
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.6/install.sh | bash

-install node
nvm install 8.9.1
nvm use 8.9.1

(restart terminal)

-install extra node tools
sudo apt-get install build-essential

-install yarn
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
sudo apt-get update && sudo apt-get install yarn

-install git (if needed)
apt-get install git

-clone repo from
https://github.com/postlight/headless-wp-starter

-install wp server
yarn install

-run robo setup
robo wordpress:setup

-start wp server with 
yarn start

-login to WP dashboard and update plugins
 remove pro plugins, install ACF standard plugin

-install angular cli
npm install -g @angular/cli

-install npm packages
