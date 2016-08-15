import {Component} from '@angular/core';
import {AlertBComponent} from './alert/alert.bcomponent';
import {BadgeBComponent} from './badge/badge.bcomponent';
import {ButtonBComponent} from './button/button.bcomponent';
import {BreadcrumbBComponent, BreadcrumbItem} from './breadcrumb/breadcrumb.bcomponent';
import {DropdownBComponent, DropdownItem} from './dropdown/dropdown.bcomponent';
import {HeadingBComponent} from './heading/heading.bcomponent';
import {JumbotronBComponent} from './jumbotron/jumbotron.bcomponent';
import {LabelBComponent} from './label/label.bcomponent';
import {LinkBComponent} from './link/link.bcomponent';
import {PanelBComponent} from './panel/panel.bcomponent';
import {ProgressbarBComponent} from './progressbar/progressbar.bcomponent';
import {TextboxBComponent} from './textbox/textbox.bcomponent';

@Component({
    selector: 'app-component',
    templateUrl: 'app.component.html',
    directives: [
        AlertBComponent,
        BadgeBComponent,
        ButtonBComponent,
        BreadcrumbBComponent,
        DropdownBComponent,
        HeadingBComponent,
        JumbotronBComponent,
        LabelBComponent,
        LinkBComponent,
        PanelBComponent,
        ProgressbarBComponent,
        TextboxBComponent
    ],
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
    ]
}