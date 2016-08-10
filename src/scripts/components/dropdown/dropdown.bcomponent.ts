import {Component} from '@angular/core';
import {BComponent, BComponentAttributes, BComponentInputs} from '../bcomponent';
import {LinkBComponent} from '../link/link.bcomponent';

const DropdownType = {
    separator: 'separator',
    link: 'link',
    header: 'header'
}

class DropdownItem {
    type: string;
    link: string;
}

@Component({
    selector: 'dropdown-bcomponent',
    templateUrl: 'dropdown.bcomponent.html'
})
export class DropdownBComponent extends BComponent {
    
}