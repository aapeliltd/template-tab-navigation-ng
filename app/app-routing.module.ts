import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { NsEmptyOutletComponent } from "./ns-empty-outlet.component";

const routes: Routes = [
    { path: "", redirectTo: "/(homeTab:home//browseTab:browse//searchTab:search)", pathMatch: "full" },

    // tslint:disable:max-line-length
    // related to https://github.com/angular/angular/issues/10981
    // related to https://github.com/angular/angular/blob/fda30cb3e3e1f34361327b794ba2ef59d866b880/packages/router/src/config.ts#L487
    // NsEmptyOutletComponent is a dummy class to workaround the inability to customize Angular internal logic
    // that adds automatically EmptyOutletComponent (i.e. <router-outlet></router-outlet) in scenarios with
    // componentless routes, lazy loaded modules, and named (auxiliary) outlets;
    // we need <page-router-outlet></page-router-outlet> instead so we insert it via the NsEmptyOutletComponent instance
    // tslint:enable:max-line-length
    // TODO: revisit this approach when there is any progress on https://github.com/angular/angular/issues/24657
    { path: "home", component: NsEmptyOutletComponent,
      outlet: "homeTab", loadChildren: "./home/home.module#HomeModule" },
    { path: "browse", component: NsEmptyOutletComponent,
      outlet: "browseTab", loadChildren: "./browse/browse.module#BrowseModule" },
    { path: "search", component: NsEmptyOutletComponent,
      outlet: "searchTab", loadChildren: "./search/search.module#SearchModule" }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
