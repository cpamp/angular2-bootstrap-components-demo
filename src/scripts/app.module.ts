import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';


import {AppComponent} from './components/app.component';
import {AlertBComponent} from 'bcomponents';
import {BadgeBComponent} from 'bcomponents';
import {ButtonBComponent} from 'bcomponents';
import {BreadcrumbBComponent, BreadcrumbItem} from 'bcomponents';
import {DropdownBComponent} from 'bcomponents';
import {HeadingBComponent} from 'bcomponents';
import {InputGroupBComponent} from 'bcomponents';
import {JumbotronBComponent} from 'bcomponents';
import {LabelBComponent} from 'bcomponents';
import {LinkBComponent} from 'bcomponents';
import {PanelBComponent} from 'bcomponents';
import {ProgressbarBComponent} from 'bcomponents';
import {TableBComponent} from 'bcomponents';
import {ThumbnailBComponent} from 'bcomponents';
import {WellBComponent} from 'bcomponents';

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