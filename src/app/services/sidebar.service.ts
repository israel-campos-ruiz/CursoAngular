import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

 public menu: any = [
    {
      titulo:"principal",
      icono: "mdi mdi gauge",
      submenu: [
        {titulo:"dasboard", url:'/dashboard'},
        {titulo:"progressBar", url:'/progress'},
        {titulo:"graficas", url:'/graficas1'},
        {titulo:"ajustes", url:'/account-settings'}

      ],
    }
  ];

  constructor() { }

}
