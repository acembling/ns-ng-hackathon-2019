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
    rows
    percentValue: number = 60
    isReset: boolean = false

    constructor() { }

    ngOnInit(): void {
        this.setProgressbarWidth(this.percentValue)
    }

    setProgressbarWidth(percent) {
        this.percentValue = percent
        if(this.percentValue < 110) {
            this.rows = percent + "*," + (100 - this.percentValue) + "*";
        }
        if(this.percentValue == 110) {
            this.isReset = true
        }
    }

    resetTarget() {
        this.percentValue = 0
        this.setProgressbarWidth(this.percentValue)
        this.isReset = false
    }

    onProgressBarLoaded(args) {
        let myProgressBar = <Progress>args.object;
        this.progressTest = myProgressBar
        myProgressBar.value = 0
        myProgressBar.maxValue = 100
    }

    increaseProgress() {
        let number = this.percentValue
        number += 10;
        this.setProgressbarWidth(number)
    }

}
