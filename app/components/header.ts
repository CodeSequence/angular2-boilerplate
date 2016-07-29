import { Component } from '@angular/core';

import { MdToolbar } from '@angular2-material/toolbar';

@Component({
  selector: 'books-header',
  directives: [ MdToolbar ],
  template: `
    <md-toolbar color="primary">
      <span>Books App</span>
    </md-toolbar>
  `
})
export class HeaderComponent { }
