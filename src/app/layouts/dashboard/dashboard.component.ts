import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { ComponentSharedSidebar } from '@components/shared/sidebar/sidebar.component';
import { LucideAngularModule, Bell, Menu, ChevronRight } from 'lucide-angular';
import { filter } from 'rxjs';

@Component({
  selector: 'layout-dashboard',
  imports: [
    ComponentSharedSidebar,
    LucideAngularModule,
    RouterOutlet
  ],
  templateUrl: './dashboard.component.html',
})
export class LayoutDashboard {

  readonly Bell = Bell;
  readonly Menu = Menu;
  readonly ChevronRight = ChevronRight;

  currentSection: string = '';

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
    // 🟢 Ejecutar breadcrumb al iniciar el componente (importante en recarga)
    setTimeout(() => {
      const breadcrumb = this.findFirstBreadcrumb(this.router.routerState.root);
      this.currentSection = breadcrumb;
      // console.log('INITIAL BREADCRUMB FOUND:', breadcrumb);
    }, 0);

    // 🔁 También escuchar cambios en navegación
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      setTimeout(() => {
        const breadcrumb = this.findFirstBreadcrumb(this.router.routerState.root);
        this.currentSection = breadcrumb;
      }, 0);
    });
  }


  private findFirstBreadcrumb(route: ActivatedRoute): string {
    let current = route;

    while (current.firstChild) {
      current = current.firstChild;
      if (current.snapshot.data['breadcrumb']) {
        return current.snapshot.data['breadcrumb'];
      }
    }

    return '';
  }

}
