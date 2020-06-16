import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { SettingsService } from 'src/app/services/settings.service';

declare function init_plugins();

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styles: []
})
export class SettingsComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private _document, public settingsService:SettingsService) { }

  ngOnInit() {
     init_plugins();
  }

  changeTheme(theme:string, link:any){
    this.applyCheck(link)
   this.settingsService.applyTheme(theme)
  }

  applyCheck(link:any){
    const selector :any = document.getElementsByClassName('selector');
    for( let linkReference of selector){
        linkReference.classList.remove('working')
    }

    link.classList.add('working')
    
    
  }


}
