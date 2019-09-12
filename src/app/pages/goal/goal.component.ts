import { Component, OnInit } from "@angular/core";
import { Progress } from "tns-core-modules/ui/progress";

@Component({
    selector: "app-goal",
    moduleId: module.id,
    templateUrl: "./goal.component.html",
    styleUrls: ["./goal.component.scss"]
})
export class GoalComponent implements OnInit {

    progressTest: Progress
    rows;

    constructor() { }

    ngOnInit(): void {
        this.setProgressbarWidth(35)
    }

    setProgressbarWidth(percent) {
    this.rows = percent + "*," + (100 - percent) + "*";
    }

    onProgressBarLoaded(args) {
        let myProgressBar = <Progress>args.object;
        this.progressTest = myProgressBar
        myProgressBar.value = 0
        myProgressBar.maxValue = 100
    }

    increaseProgress() {
        let percent = 0;
        let intervalId = setInterval(() => {
          this.setProgressbarWidth(percent);
          percent++;
        }, 50);
    }

}
