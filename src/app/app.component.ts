import { Component } from '@angular/core';
import { HighlightDirective } from './highlight.directive';

@Component({
    selector:'my-app',
    templateUrl:'app.component.html',
    directives:[HighlightDirective]
})
export class AppComponent {
}