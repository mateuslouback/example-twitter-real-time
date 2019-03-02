# Back-end

Back-end part of the real-time Twitter sample application using **NodeJS**.

## Create a bank and set up the project
Create a bank at (https://mlab.com/home)

In src / index.js set the bank on the line:
```javascript
mongoose.connect('mongodb://<dbuser>:<dbpassword>@<bank>', {
    useNewUrlParser: true
});
```

## Package installation

Install Yarn:
Open (https://yarnpkg.com/).

Run terminal code
```
$ yarn install
```

## Run server node

Run terminal code
```
$ yarn start
```

