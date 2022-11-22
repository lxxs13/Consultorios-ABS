import { AfterContentInit, Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, AfterContentInit {
  optionSelected: string = 'Dashboard';
  visible: boolean = true;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver, private _router: Router, private _auth: AuthService) {}
  
  ngOnInit(): void {
    debugger
    if(this._auth.users.length === 1){
      this._router.navigate(['/']);
    }
  }

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
