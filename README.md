visit link for for how to create react tailwind starter pack<br/>
https://tailwindcss.com/docs/guides/create-react-app <br/>

then, delete App.js and App.css files. create App.jsx in index.js add below line (so that App.jsx is linked)<br/>
import App from './App.jsx'; //previosly (before deleting App.js & App.css) it was import './App';<br/>

code for ur app<br/>

npm i react-router-dom<br/>
npm install @reduxjs/toolkit react-redux<br/>
npm install react-hot-toast<br/>
npm install react-icons --save<br/>

npm run start<br/>
ctrl c<br/>
npm run build<br/>

Dont't igonre build file through .gitignore file<br/>
we need this while hosting on render, so we will upload this on github too.<br/>

git init<br/>
git add .<br/>
git commit -m "first commit"<br/>
git branch -M main<br/>
git remote add origin https://github.com/snowden7not/CartY.git<br/>
git push -u origin main<br/>

now u will see ur files on github.<br/>
GO to render.com -> dashboard -> new ->static Site -> paste repositary link in search box -> continue -> create Static Site<br/>

Ur site is live now.<br/>
