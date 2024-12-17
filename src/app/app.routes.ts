import { Routes } from '@angular/router';
import { ShipComponent } from './ship/ship.component';

export const routes: Routes = [
    { path: 'ship', component: ShipComponent }, // Route for ShipComponent
    { path: '', redirectTo: '/ship', pathMatch: 'full' }, // Optional: Default route
    { path: '**', redirectTo: '/ship' }, // Optional: Wildcard route for unknown paths
];
