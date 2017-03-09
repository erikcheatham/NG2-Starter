# NG2-Starter
A skeleton/start app built with Angular2 and Typescript


### Main Dev Software Dependencies
1. [NodeJS](http://nodejs.org/)
2. [Git](https://git-scm.com/downloads)
3. [VSCode](https://code.visualstudio.com/) & [VisualStudio 2017](https://www.visualstudio.com/vs/visual-studio-2017-rc/)

### Main Project Dependencies
1. [Angular2](https://angular.io/docs/ts/latest/)
2. [TypeScript](https://www.typescriptlang.org/docs/tutorial.html)
3. [Angular-Cli](https://cli.angular.io/)

### API references
This application leverages the following APIs to persist and retrieve data.


### Cloud Environment
**Subscription: DWZ-MS-Corp-01**

**Resource Groups**
1. [RG-FireCodeAnalysis-NP-01](https://portal.azure.com/#blade/HubsExtension/Resources/resourceType/Microsoft.Resources%2Fsubscriptions%2FresourceGroups)


# Getting Started

Before doing anything else, make sure you have the latest version of [NodeJS](http://nodejs.org/) (LTS) is installed.
This provides the platform on which the build tooling runs.

If unfamiliar with the main project dependencies, please take the time to read through entry level documentation for each. dependency.

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.24.
 >**Note:** If you need to  update the angular-cli PLEASE FOLLOW [THESE INSTRUCTIONS](https://github.com/angular/angular-cli#updating-angular-cli) 


### Set Up Local Repository
1.  Navigate/create your local workspace(something like C:/Code)
2.  Open up a command prompt and clone this Repository

    ``
    git clone https://dow-vsts.visualstudio.com/Market%20Sell/_git/NG2-Starter
    ``
3.  Navigate to the newly created 'NG2-Starter' directory
4.  If you're looking to use this template as a starting point for a new project, you will need to point git at your actual project branch origin. To do this, run the following command to remove existing remote origins

    ``
    git remote rm origin
    ``
6.  Now, set your new origin with the following command

    ``
    git remote add origin [Insert URL to VSTS GIT Repo]
    ``
7.  Lastly, Push the NG2-Starter code to your new repository

    ``
    git push -u origin --all
    ``

### Update npm

Run `npm install -g npm `
>**Note:** You may also adjust the verbosity of npm output by running `npm config set loglevel warn`


### Install node-gyp

In a windows environment, you may need to install node-gyp dependencies seperately.
Run the following command from an **elevated powershell** terminal.

1. `npm install -g --production windows-build-tools`
2. `npm install -g node-gyp`

### Install the [Angular-CLI](https://github.com/angular/angular-cli)

Run `npm install -g angular-cli`


### Install Application Dependencies

From the project root directory(ie.. C:\Code\NG2-Starter) run `npm install`

# Build and Test

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.


# Branching and Workflow

You can see the branches for this Git Repository [here](https://dow-vsts.visualstudio.com/Market%20Sell/CDMC%20-%20General/_git/NG2-Starter/branches?_a=all)
Here is highly recommended reading about [Git Integration in VSCode](https://code.visualstudio.com/Docs/editor/versioncontrol).

## Navigating branches
When you first clone the repository, you will be placed in the master branch.
It is the only branch cloned from the repository.

Once you have created and mapped some feature branches, run `git checkout EXISTINGBranchName` to start working in a different local branch.


## Creating a feature branch
We will rely on feature branches(off of the Dev branch) to work on features/userstories.

A feature branch should typically contain a focused amount of work specific to one user story.

To create a feature branch, select the 'New Branch' button in the browser window.
 **Make sure you are based on Dev**
Use a brief branch name in pascal Case (ie ..'ProjectLandingPage')

To start working in the new branch, open up a command line where you iniitially cloned the repository.
Run `git checkout -b NewBranchName origin/NewBranchName` to create a local version of the remote branch, and move to it.

>**Note** If git errors when trying to run this command, go [here](http://stackoverflow.com/questions/22984262/cannot-update-paths-and-switch-to-branch-at-the-same-time)

## Commitng changes

Use `git pull` to grab the latest changes for your current working branch. Resolve any merge conflicts.

Use `git commit` to create a **local** changeset/commit of 'staged' changes.

Use `git push` to push your local commits to the remote feature branch you are working in. 

Finally, to merge the origin/FeatureBranch into the origin/Dev branch, [you must create a Pull Request](https://dow-vsts.visualstudio.com/Market%20Sell/CDMC%20-%20General/_git/NG2-Starter/pullrequests)
**Make Sure you are creating a pull request into the Dev Branch**

A successful pull request will trigger a build and a deployment to the Dev environment in Azure.


# General Development Practices

Don't make sweeping changes to dependency versioning without testing for breaking changes incrementally. Let team members know when you update dependencies.

Run `ng serve --prod --aot` to check for breaking changes after adding new project dependencies and before pull requests to the Dev branch. This will reflect a production build and performance increase provided by 'Ahead Of Time' compilation.

Run unit test as you develop and before pull requests to Dev.

Follow conventions outlined by the [angular style guide](https://angular.io/docs/ts/latest/guide/style-guide.html#!#04-06) when building out your application.

1. lower case file names
2. multi words seperated by '-'
3. use .component, .model, .service, .module, .spec suffixes to describe the contents of the file


Consider using a [Core Feature module](https://angular.io/docs/ts/latest/guide/style-guide.html#!#04-11) to promote re-usability and shared functionality across your application.


#Known Issues

Unit Tests may time out on the hosted build server due to phantomJS.Possible solutions in [this post](http://stackoverflow.com/questions/24119506/karma-jasmine-times-out-without-running-tests).
