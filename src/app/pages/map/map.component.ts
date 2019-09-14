import { Component, OnInit } from "@angular/core";
import { MapboxViewApi, MapboxMarker } from "nativescript-mapbox";

@Component({
    selector: "app-map",
    moduleId: module.id,
    templateUrl: "./map.component.html",
    styleUrls: ["./map.component.scss"]
})
export class MapComponent implements OnInit {

    private map: MapboxViewApi;
    isTrue: boolean = false

    constructor() { }

    ngOnInit(): void {
        this.isTrue = true
    }

    onMapReady(args): void {
        this.map = args.map;
        if(this.map) {
            this.markers()
        }
    }

    markers() {
        const elmtreeMarker = <MapboxMarker>{
            id: 2,
            lat: 51.4,
            lng: -0.15,
            title: 'Elmtree Recycling',
            subtitle: 'Plastic, Metal',
        };
        const firstMarker = <MapboxMarker>{
            id: 2,
            lat: 51.45,
            lng: -0.1,
            title: 'First Point Recycling',
            subtitle: 'Glass, Wood, Plastic',
            selected: true,
        };
        const upperMarker = <MapboxMarker>{
            id: 2,
            lat: 51.2,
            lng: 0.15,
            title: 'Upper Ridge Point',
            subtitle: 'Plastic',
        };
        const rerereMarker = <MapboxMarker>{
            id: 2,
            lat: 51.1,
            lng: 0,
            title: 'Re Re Re Center',
            subtitle: 'Plastic, Wood, Metal',
        };
        this.map.addMarkers([
            elmtreeMarker,
            firstMarker,
            upperMarker,
            rerereMarker
        ])
    }

}
