import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Box, LayoutDashboard, LucideAngularModule, Tag, UsersRound, UserRoundCog, Store, TriangleAlert } from 'lucide-angular';

@Component({
  selector: 'component-shared-sidebar',
  imports: [
    RouterModule,
    LucideAngularModule
  ],
  templateUrl: './sidebar.component.html',
})
export class ComponentSharedSidebar {

  readonly LayoutDashboard = LayoutDashboard;
  readonly Store = Store;
  readonly UsersRound = UsersRound;
  readonly UserRoundCog = UserRoundCog;
  readonly TriangleAlert = TriangleAlert;

  links = [
    { href: "empresas", text: "Empresas", icon: Store },
    { href: "reclamos", text: "Reclamos", icon: TriangleAlert },
    { href: "usuarios", text: "Usuarios", icon: UsersRound },
    { href: "roles", text: "Roles", icon: UserRoundCog },
  ];

  isMobile: boolean = false;

  ngOnInit() {
    this.checkScreenSize();

    window.addEventListener('resize', () => {
      this.checkScreenSize();
    });
  }

  checkScreenSize() {
    this.isMobile = window.innerWidth <= 1024;
  }

}
