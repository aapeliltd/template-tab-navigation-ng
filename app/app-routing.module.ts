import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

const routes: Routes = [
    { path: "", redirectTo: "/home(browseTab:browse//searchTab:search)", pathMatch: "full" },

    // tslint:disable:max-line-length
    // NOTE: tabview provides limited support for lazy loading modules in tab items at the moment
    // 1) If navigation within a tab is not used (i.e. no item->detail and back pattern) there are
    // no restrictions on lazy loading modules (and page router outlet naming)
    // 2) If navigation within a tab is used (i.e. item->detail and back pattern)
    //    such module can be lazy loaded ONLY IF it is loaded in the PRIMARY (unnamed) page router outlet
    // TODO: revisit this approach when there is any progress on:
    // https://github.com/NativeScript/nativescript-angular/issues/1351 (support for nested page router outlets)
    // https://github.com/angular/angular/issues/24657 (ability to customize the Angular internal logic that adds
    // EmptyOutletComponent i.e. <router-outlet></router-outlet> in scenarios with
    // componentless routes, lazy loaded modules, and named (auxiliary) outlets
    // https://github.com/angular/angular/blob/fda30cb3e3e1f34361327b794ba2ef59d866b880/packages/router/src/config.ts#L487)
    // tslint:enable:max-line-length
    { path: "home", loadChildren: "./home/home.module#HomeModule" },
    { path: "browse", loadChildren: "./browse/browse.module#BrowseModule", outlet: "browseTab" },
    { path: "search", loadChildren: "./search/search.module#SearchModule", outlet: "searchTab" }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
