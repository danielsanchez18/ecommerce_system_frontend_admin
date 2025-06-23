import { Component } from '@angular/core';
import { LucideAngularModule, Store, TriangleAlert, UserRoundCog, UsersRound } from 'lucide-angular';

@Component({
  selector: 'component-dashboard-stats',
  imports: [
    LucideAngularModule
  ],
  templateUrl: './stats.component.html',
})
export class ComponentDashboardStats {

  readonly Store = Store;
  readonly UsersRound = UsersRound;
  readonly TriangleAlert = TriangleAlert;
  readonly UserRoundCog = UserRoundCog;

}
