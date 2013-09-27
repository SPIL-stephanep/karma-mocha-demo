karma-mocha-demo
================

demo howing how to use karma and mocha to do client side js unit testing

##Dependencies##

 + "mocha": "~1.13.0",
 + "karma-chrome-launcher": "~0.1.0",
 + "karma-firefox-launcher": "~0.1.0",
 + "karma-opera-launcher": "~0.1.0",
 + "karma-safari-launcher": "~0.1.1",
 + "karma-ie-launcher": "~0.1.1",
 + "karma-phantomjs-launcher": "~0.1.0",
 + "karma-script-launcher": "~0.1.0",
 + "karma-html2js-preprocessor": "~0.1.0",
 + "karma-requirejs": "~0.1.0",
 + "karma-coffee-preprocessor": "~0.1.0",
 + "karma": "~0.10.2",
 + "karma-mocha": "~0.1.0",
 + "expect.js": "~0.2.0"

(see package.json for more details)

##Get a karma config file##

Simply run : `karma init` at the root of your project and fill in the details asked in the command line interface. This will create a file called `karma.conf.js`

##Start the server##

    cd /path/to/your/project
    karma start

##Run the tests##

    cd /path/to/your/project
    karma run 

Optionally, you can pass : `--loglevel debug` to the run command in order to get more insight if your tests are failing or not being executed.

##Demo##

    git clone git@github.com:SPIL-stephanep/karma-mocha-demo.git
    cd karma-mocha-demo/
    npm install
    karma start

Then, in a second tab:

    cd /path/to/karma-mocha-demo/
    karma run --loglevel debug

