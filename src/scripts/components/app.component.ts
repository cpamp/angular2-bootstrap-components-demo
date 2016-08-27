// <reference path="../../node_modules/angular2-bootstrap-components/bcomponents.d.ts" />
import {Component, Type, ViewContainerRef, ViewChild} from '@angular/core';
import {DropdownItem} from 'ng-bcomponents';
import {ListGroupItem} from 'ng-bcomponents';
import {BadgeBComponent} from 'ng-bcomponents';
import {MediaAlignment} from 'ng-bcomponents';
import {LinkBComponent} from 'ng-bcomponents';
import {ButtonBComponent} from 'ng-bcomponents';
import {SidenavBComponent} from 'ng-bcomponents';
import {LabelBComponent} from 'ng-bcomponents';

@Component({
    selector: 'app-component',
    templateUrl: 'app.component.html'
})
export class AppComponent extends Type {
    public brand = new LinkBComponent().Initialize("ng-bcomponents", "#");
    public navItems = [
        new LinkBComponent().Initialize("Alert", "#alert"),
        new LinkBComponent().Initialize("Badge", "#badge"),
        new LinkBComponent().Initialize("Breadcrumb", "#breadcrumb"),
        new LinkBComponent().Initialize("Button", "#button"),
        new LinkBComponent().Initialize("Button Group", "#button-group"),
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
    ];

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

    @ViewChild('btnRef') btnRef: ButtonBComponent;
    public btnDemoRef = new ButtonBComponent().Initialize("Click it!", "warning", () => {
        this.btnRef.text = "You clicked it!";
    }).InitializeAttributes("button-ref");

    @ViewChild('lblToggle') lblToggle: LabelBComponent;
    @ViewChild('lblFade') lblFade: LabelBComponent;
    @ViewChild('lblSlide') lblSlide: LabelBComponent;
    public btnToggle = new ButtonBComponent().Initialize("Toggle Stuff", "primary", () => {
        this.lblToggle.toggle();
        this.lblFade.fadeToggle();
        this.lblSlide.slideToggle();
    })

    public txtModel: string = "";
    public btnFrontDemo = () => {
        alert("Front!");
    }
    public btnBackDemo = () => {
        alert("Back!");
    }
    public btnFront = new ButtonBComponent().Initialize("FrontGo", "success", this.btnFrontDemo);
    public btnBack = new ButtonBComponent().Initialize("BackGo", "danger", this.btnBackDemo);

    public btnGroupItems = [this.btnFront, this.btnDemoRef, this.btnBack];

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