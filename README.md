Created Youtube Homepage Clone using React, JavaScript and CSS.

Demo - https://lokeshloki3.github.io/youtubeclone/

Steps - 

1. Install Node.

2. Install Vite Run command:
	npm create vite@latest projectname 
		Select -
			React
			JavaScript
	cd react-jobs
	npm install

3. Run command:
	npm run dev

4. npm i react-router-dom
wrap content of App.jsx inside {BrowserRouter} from react-router-dom

5. Host Vite Project on github pages -

	npm install gh-pages --save-dev
	
	Add in package.json above name
	"homepage" : "https://username.github.io/reponame"
	
	Add both in Scripts in package.json above dev -
	"predeploy":"npm run build",
	"deploy":"gh-pages -d dist",
	
	Add in vite.config.js above plugin -
	base:"/reponame/",
	
	Add /reponame to Route to render Home in App.json for Github Page
	If wants to change commit in repo first remove homepage url 
	and after committing again write homepage for navbar logo only
	
	git init
	git status
	git add .
	git commit -m "initial commit"
	git branch -M 'main'
	git remote add origin "url of repository"
	git push -u origin 'main'
	
	npm run deploy
