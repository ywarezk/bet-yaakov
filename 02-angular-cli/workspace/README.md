# Workspace

- can have multiple apps / projects / website
- libraries

# What is @angular/cli

angular is a tool we use to create angular workspace.  
A workspace can have multiple sites and multiple libraries.  

# Summary of all the command for angular cli in this lesson


generate a new workspace

```
npx @angular/cli new workspace --create-application=false
```

generate a new site in our workspace

```
npx ng g application hello
```

Develop with a local server

```
npx ng serve hello
```

Build a project

```
npx ng build hello
```

create a library

```
npx ng g library @shaam/auth
```

to build a library

```
npx ng build @shaam/auth --prod
```
