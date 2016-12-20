# PoniesServer

## Pre-requisites
* 
* install [FeedHenry cli](https://github.com/feedhenry/fh-fhc).
```bash
nvm use v4.4.0 
npm -g install fh-fhc
```
* target a remote domain
```bash
fhc target https://engdev.us.evals.redhatmobile.com/
fhc login corinnekrych@gmail.com 
<enter password>
```

## Project creation
* create project
```bash
> fhc projects create Ponies 
{
  "type": "PROJECT",
  "apps": [],
  "title": "Ponies",
  "sysCreated": 1482250062807,
  "guid": "vgayu6xzyn6w6vzcjqkhv3ie",
  "authorEmail": "corinnekrych@gmail.com",
  "featured": false,
  "sysVersion": 0,
  "sysModified": 1482250062808,
  "template": null,
  "sysGroupFlags": 31,
  "sysGroupList": "",
  "businessObject": "cluster/reseller/customer/domain/project",
  "sysOwner": "opav5q5y2fxqjuu7xbtnhggg",
  "migrated": false,
  "templateId": "default",
  "jsonTemplateId": "bare_project",
  "service": false
}
```

* create cloud apps
```bash
fhc app create --project=vgayu6xzyn6w6vzcjqkhv3ie --title=ponycloud --type=cloud_nodejs --env=dev 
```
TODO: how to deploy with `fhc`.

* go to UI and deply/start

## API
### hello [POST] 

'Hello world' endpoint.

+ Request (application/json)
    + Body
            {
              "hello": "world"
            }

+ Response 200 (application/json)
    + Body
            {
              "msg": "Hello world"
            }
### Add ponies endpoint
Similar to [lib/hello.js](lib/hello.js) create [lib/ponies.js](lib/ponies.js) which retruns a list of ponies.
Add express route in [application.js](application.js).

## Build and run
```bash
npm install
node application.js
```
Go to http://localhost:8001/ponies