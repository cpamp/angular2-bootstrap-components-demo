// <reference path="../../node_modules/angular2-bootstrap-components/bcomponents.d.ts" />
import {Component, Type} from '@angular/core';
import {DropdownItem} from 'ng-bcomponents';
import {ListGroupItem} from 'ng-bcomponents';
import {BadgeBComponent} from 'ng-bcomponents';
import {MediaAlignment} from 'ng-bcomponents';
import {LinkBComponent} from 'ng-bcomponents';
import {ButtonBComponent} from 'ng-bcomponents';

@Component({
    selector: 'main-component',
    templateUrl: 'main.component.html'
})
export class MainComponent extends Type {
    public imgGithub = `<img src="../images/github-circle.svg" alt="github"/>`;
    public imgDownload = `<img src="../images/download.svg" alt="download"/>`;

    public toggleMenu = () => {
        $("#wrapper").toggleClass("toggled");
    }

    public breadcrumbItems: LinkBComponent[] = [
        new LinkBComponent().Initialize("Home","#home"),
        new LinkBComponent().Initialize("BComponents", "#bcomponents")
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
    public btnFront = new ButtonBComponent().Initialize("FrontGo", "success", this.btnFrontDemo);
    public btnBack = new ButtonBComponent().Initialize("BackGo", "danger", this.btnBackDemo);

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

    public badge = new BadgeBComponent();
    public listGroup = [
        new ListGroupItem("First", this.badge),
        new ListGroupItem("Second"),
        new ListGroupItem("Third")
    ];
    public listGroupLinked = [
        new ListGroupItem("First", this.badge, "#", true),
        new ListGroupItem("Second", null, "#"),
        new ListGroupItem("Last", null, "#")
    ];

    public alignmentFirst = new MediaAlignment();
    public alignmentSecond = new MediaAlignment("right", "bottom");
}