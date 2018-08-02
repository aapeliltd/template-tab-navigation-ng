import { Component } from "@angular/core";

@Component({
    selector: "ns-empty-outlet",
    moduleId: module.id,
    template: "<page-router-outlet></page-router-outlet>"
})
export class NsEmptyOutletComponent {

    constructor() {
        // Use the component constructor to inject providers.
    }
}
