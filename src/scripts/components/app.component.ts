// <reference path="../../node_modules/angular2-bootstrap-components/bcomponents.d.ts" />
import {Component} from '@angular/core';
import {BreadcrumbItem} from 'ng-bcomponents';
import {DropdownItem} from 'ng-bcomponents';
import {ListGroupItem} from 'ng-bcomponents';
import {BadgeBComponent} from 'ng-bcomponents';

@Component({
    selector: 'app-component',
    templateUrl: 'app.component.html'
})
export class AppComponent {
    public breadcrumbItems: BreadcrumbItem[] = [
        new BreadcrumbItem("#home", "Home"),
        new BreadcrumbItem("#bcomponents", "BComponents")
    ];

    public btnClickDemo = () => {
        alert("One more time!");
    }

    public txtModel: string = "";
    public btnFrontDemo = () => {
        alert("Front!");
    }
    public btnBackDemo = () => {
        alert("Back!");
    }

    public dropdownItems = [
        new DropdownItem("default", "First", "#dropdown"),
        new DropdownItem("default", "<b>Bold</b>", "#dropdown"),
        new DropdownItem("separator", "", "#dropdown"),
        new DropdownItem("default", "Yup", "#dropdown"),
        new DropdownItem("header", "Header", "#dropdown"),
        new DropdownItem("default", "after header", "#dropdown")
    ];

    public headers = ['First', 'Second', 'Third'];
    public rows = [
        ['1', '2', '3'],
        ['2', '3', '4']
    ];

    public objectTable = [
        {
            First: "Joe",
            Last: "Doe",
            Position: "Engineer",
            Nickname: "Joey"
        },
        {
            First: "Jane",
            Last: "Some-Last-Name",
            Position: "VIP",
            Nickname: "J"
        },
        {
            First: "Scott",
            Last: "Williams",
            Position: "President",
            Nickname: "Scotty-boy"
        }
    ];

    public badge = (): BadgeBComponent => {
        var badge = new BadgeBComponent();
        badge.value = 3;
        return badge;
    }
    public listGroup = [
        new ListGroupItem("First", this.badge()),
        new ListGroupItem("Second"),
        new ListGroupItem("Third")
    ];
    public listGroupLinked = [
        new ListGroupItem("First", this.badge(), "#", true),
        new ListGroupItem("Second", null, "#"),
        new ListGroupItem("Last", null, "#")
    ];
}