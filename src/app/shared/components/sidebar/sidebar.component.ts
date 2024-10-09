import { Component, input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from '@app/app.routes';
import { isStringEmpty } from '@app/shared/utils';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  routes = input(routes);

  get filteredRoutes() {
    return routes.filter( 
      route => !isStringEmpty(route.path) && !route.path!.includes(":") 
    )
  }
}
