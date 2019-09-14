import { Injectable } from "@angular/core";

export interface DataItem {
    id: number;
    name: string;
    description: string;
    lat: number;
    lng: number;
}

@Injectable({
    providedIn: "root"
})
export class DataService {

    private items = new Array<DataItem>(
        {
            id: 1,
            name: "First Point Recycling",
            description: "Capabilities to recycle: Glass, Wood, Plastic",
            lat: 51.45,
            lng: -0.1
        },
        {
            id: 2,
            name: "Elmtree Recycling",
            description: "Capabilities to recycle: Plastic, Metal",
            lat: 51.4,
            lng: -0.15
        },
        {
            id: 3,
            name: "Upper Ridge Point",
            description: "Capabilities to recycle: Plastic",
            lat: 51.2,
            lng: 0.15
        },
        {
            id: 4,
            name: "Re Re Re Center",
            description: "Capabilities to recycle: Plastic, Wood, Metal",
            lat: 51.1,
            lng: 0
        }
    );

    getItems(): Array<DataItem> {
        return this.items;
    }

    getItem(id: number): DataItem {
        return this.items.filter((item) => item.id === id)[0];
    }
}
