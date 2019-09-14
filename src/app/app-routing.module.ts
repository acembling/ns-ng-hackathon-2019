import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule, NSEmptyOutletComponent } from "nativescript-angular/router";

// Pages
import { HomeComponent } from "./pages/home/home.component";
import { TabsComponent } from "./pages/tabs/tabs.component";
import { GoalComponent } from "./pages/goal/goal.component";
import { MapComponent } from "./pages/map/map.component";
import { DonateComponent } from "./pages/donate/donate.component";

export const PAGES = [
    HomeComponent,
    TabsComponent,
    GoalComponent,
    DonateComponent
]

export const COMPONENTS = [
    MapComponent,

]

const routes: Routes = [
    {
        path: "",
        redirectTo: "tabs",
        pathMatch: "full"
    },
    {
        path: "tabs",
        component: TabsComponent,
    },
    {
        path: "home",
        component: HomeComponent,
    },
    {
        path: "tabs/map",
        component: MapComponent,
    },
    {
        path: "donate",
        component: DonateComponent,
    },
    {
        path: "goal",
        component: GoalComponent,
    },
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
