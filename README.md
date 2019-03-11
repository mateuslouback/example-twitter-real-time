# Example Twitter Realtime

Example of real time application with Java Script using NodeJS, React and React Native.
The application is an example of Twitter registering real-time tweets in the Web and Mobile application.

**Follow the tutorials of each application to run the project.**

**First run the Back-end, then the Front-end and finally the Mobile.**

![](https://media.giphy.com/media/443HOhdusGEk5ieQmv/giphy.gif)


## Back-end

Back-end part of the real-time Twitter sample application using **NodeJS**.

### Create a bank and set up the project
Create a bank at (https://mlab.com/)

In src / index.js set the bank on the line:
```javascript
mongoose.connect('mongodb://<dbuser>:<dbpassword>@<link bank>', {
    useNewUrlParser: true
});
```

### Package installation

Install Yarn:
Open (https://yarnpkg.com/).

Run terminal code
```
$ yarn install
```

### Run server node

Run terminal code
```
$ yarn start
```

## Front-end

Front-end part of the real-time Twitter sample application using **React**.

### Package installation

Install Yarn:
Open (https://yarnpkg.com/).

Run terminal code:
```
$ yarn install
```

### Run app web
Run terminal code:
```
$ yarn start
```

## Mobile

Mobile part of the real-time Twitter sample application using **React Native**.

### Package installation

Install Yarn:
Open (https://yarnpkg.com/).

Run terminal code:
```
$ yarn install
```

### Run app in IOS

Run terminal code:
```
$ react-native run-ios
```

### Run app in Android

Run terminal code:
```
$ react-native run-android
