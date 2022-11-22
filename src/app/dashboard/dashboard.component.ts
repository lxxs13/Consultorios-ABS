import { AfterContentInit, Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements AfterContentInit {
  optionSelected: string = 'Dashboard';
  visible: boolean = true;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver, private _router: Router) {}

  ngAfterContentInit(): void {
    // throw new Error('Method not implemented.');
  }

  showComponent(catalogoSeleccionado: string){
    this.optionSelected = catalogoSeleccionado;
  }

  logout(){
    this._router.navigate(['']);
  }

  hide(visible: boolean){
    this.visible = !this.visible;
  }

}
