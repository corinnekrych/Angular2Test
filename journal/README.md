# Journal

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.24.
This project test the integration with [PatternFly]() and experiment how to create Angular2 component.
It uses:
- [Vertical Navigation](http://www.patternfly.org/pattern-library/navigation/vertical-navigation/#_code)

# How to create it step by step
```bash
npm install -g angular-cli@1.0.0-beta.24
ng new journal
app.component.ts -> Trials and tribulation

npm install patternfly --save
ng g component navigation

ng serve
```
* create src/css, add patternfly.css + patternfly-additions.css
* create src/fonts/** from node_modules/paternfly/dist/fonts
* in component add css
```TypeScript
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css', 'css/patternfly.css', 'css/patternfly-additions.css']
})
```


## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. 
The app will automatically reload if you change any of the source files.
