import {Component, Type} from '@angular/core';
import {MainComponent} from './main.component';
import {SidenavBComponent} from 'ng-bcomponents';
import {LinkBComponent} from 'ng-bcomponents';

@Component({
    selector: 'app-component',
    templateUrl: 'app.component.html',
    directives: [SidenavBComponent]
})
export class AppComponent {
    public content: Type = MainComponent as Type;
    public brand = new LinkBComponent().Initialize("ng-bcomponents", "#");
    public navItems = [
        new LinkBComponent().Initialize("Alert", "#alert"),
        new LinkBComponent().Initialize("Badge", "#badge"),
        new LinkBComponent().Initialize("Breadcrumb", "#breadcrumb"),
        new LinkBComponent().Initialize("Button", "#button"),
        new LinkBComponent().Initialize("Dropdown", "#dropdown"),
        new LinkBComponent().Initialize("Heading", "#heading"),
        new LinkBComponent().Initialize("Input Group", "#input-group"),
        new LinkBComponent().Initialize("Jumbotron", "#jumbotron"),
        new LinkBComponent().Initialize("Label", "#label"),
        new LinkBComponent().Initialize("Link", "#link"),
        new LinkBComponent().Initialize("List Group", "#list-group"),
        new LinkBComponent().Initialize("Media", "#media"),
        new LinkBComponent().Initialize("Panel", "#panel"),
        new LinkBComponent().Initialize("Progress Bar", "#progressbar"),
        new LinkBComponent().Initialize("Table", "#table"),
        new LinkBComponent().Initialize("Thumbnail", "#thumbnail"),
        new LinkBComponent().Initialize("Well", "#well")
    ]
}