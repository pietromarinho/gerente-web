import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare const $: any;

//Metadata
export interface RouteInfo {
    path: string;
    title: string;
    type: string;
    icontype: string;
    collapse?: string;
    children?: ChildrenItems[];
    role?: string;
}

export interface ChildrenItems {
    path: string;
    title: string;
    ab: string;
    type?: string;
    role?: string;
}

//Menu Items
export const ROUTES: RouteInfo[] = [
    {
        path: '/dashboard',
        title: 'Dash',
        type: 'link',
        icontype: 'dashboard'
    },
];
@Component({
    selector: 'app-sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {
    public menuItems: any[];

    constructor(private router: Router) { }
    isMobileMenu() {
        if ($(window).width() > 991) {
            return false;
        }
        return true;
    };

    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
        localStorage.setItem('med1', 'Fabio Ferreira');
        localStorage.setItem('med2', 'Vinicius Cavalcante');
        localStorage.setItem('med3', 'Jorge Fabiano');
        localStorage.setItem('crm1', 'AM 1234');
        localStorage.setItem('crm2', 'AM 1235');
        localStorage.setItem('crm3', 'AM 1236');
    }
    updatePS(): void {
        if (window.matchMedia(`(min-width: 960px)`).matches && !this.isMac()) {
            const elemSidebar = <HTMLElement>document.querySelector('.sidebar .sidebar-wrapper');
            // let ps = new PerfectScrollbar(elemSidebar, { wheelSpeed: 2, suppressScrollX: true });
        }
        $('.collapse').collapse('hide');
    }
    isMac(): boolean {
        let bool = false;
        if (navigator.platform.toUpperCase().indexOf('MAC') >= 0 || navigator.platform.toUpperCase().indexOf('IPAD') >= 0) {
            bool = true;
        }
        return bool;
    }
    logout() {
        localStorage.clear();

        this.router.navigate(['#']);
    }
}
