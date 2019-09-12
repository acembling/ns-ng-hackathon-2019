import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

// Pages
import { HomeComponent } from "./pages/home/home.component";
import { InnerPageComponent } from "./pages/inner-page/inner-page.component";
import { TabsComponent } from "./pages/tabs/tabs.component";
import { GoalComponent } from "./pages/goal/goal.component";

export const PAGES = [
    HomeComponent,
    InnerPageComponent,
    TabsComponent,
    GoalComponent
]

export const COMPONENTS = [

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
        path: "goal",
        component: GoalComponent,
    },
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
