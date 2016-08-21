import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';


import {AppComponent} from './components/app.component';
import {AlertBComponent} from 'ng-bcomponents';
import {BadgeBComponent} from 'ng-bcomponents';
import {ButtonBComponent} from 'ng-bcomponents';
import {BreadcrumbBComponent} from 'ng-bcomponents';
import {DropdownBComponent} from 'ng-bcomponents';
import {HeadingBComponent} from 'ng-bcomponents';
import {InputGroupBComponent} from 'ng-bcomponents';
import {JumbotronBComponent} from 'ng-bcomponents';
import {LabelBComponent} from 'ng-bcomponents';
import {LinkBComponent} from 'ng-bcomponents';
import {ListGroupBComponent} from 'ng-bcomponents';
import {PanelBComponent} from 'ng-bcomponents';
import {ProgressbarBComponent} from 'ng-bcomponents';
import {TableBComponent} from 'ng-bcomponents';
import {ThumbnailBComponent} from 'ng-bcomponents';
import {WellBComponent} from 'ng-bcomponents';

@NgModule({
    declarations: [
        AppComponent,
        AlertBComponent,
        BadgeBComponent,
        ButtonBComponent,
        BreadcrumbBComponent,
        DropdownBComponent,
        HeadingBComponent,
        InputGroupBComponent,
        JumbotronBComponent,
        LabelBComponent,
        LinkBComponent,
        ListGroupBComponent,
        PanelBComponent,
        ProgressbarBComponent,
        TableBComponent,
        ThumbnailBComponent,
        WellBComponent
    ],
    imports: [BrowserModule, FormsModule],
    bootstrap: [AppComponent]
})
export class AppModule {}