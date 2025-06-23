import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ComponentDashboardStats } from '@components/dashboard/stats/stats.component';

@Component({
  selector: 'page-dashboard-overview',
  imports: [
    RouterModule,
    ComponentDashboardStats
],
  templateUrl: './overview.component.html',
})
export class PageDashboardOverview { }
