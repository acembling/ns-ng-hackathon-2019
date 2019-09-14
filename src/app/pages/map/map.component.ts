import { Component, OnInit } from "@angular/core";
import { MapboxViewApi, MapboxMarker } from "nativescript-mapbox";
import { DataItem } from "../../services/data.service";
import { DataService } from "../../services/data.service";

@Component({
    selector: "app-map",
    moduleId: module.id,
    templateUrl: "./map.component.html",
    styleUrls: ["./map.component.scss"]
})
export class MapComponent implements OnInit {

    private map: MapboxViewApi;

    elmtreeMarker: MapboxMarker
    firstMarker: MapboxMarker
    upperMarker: MapboxMarker
    rerereMarker: MapboxMarker

    items: Array<DataItem>;

    constructor(private dataService: DataService) { }

    ngOnInit(): void {
        this.items = this.dataService.getItems();
    }

    onMapReady(args): void {
        this.map = args.map;
        if(this.map) {
            this.markers()
        }
    }

    markers() {
        this.firstMarker = <MapboxMarker>{
            id: 1,
            lat: 51.45,
            lng: -0.1,
            title: 'First Point Recycling',
            subtitle: 'Glass, Wood, Plastic',
            selected: true,
        };
        this.elmtreeMarker = <MapboxMarker>{
            id: 2,
            lat: 51.4,
            lng: -0.15,
            title: 'Elmtree Recycling',
            subtitle: 'Plastic, Metal',
        };
        this.upperMarker = <MapboxMarker>{
            id: 3,
            lat: 51.2,
            lng: 0.15,
            title: 'Upper Ridge Point',
            subtitle: 'Plastic',
        };
        this.rerereMarker = <MapboxMarker>{
            id: 4,
            lat: 51.1,
            lng: 0,
            title: 'Re Re Re Center',
            subtitle: 'Plastic, Wood, Metal',
        };
        this.map.addMarkers([
            this.elmtreeMarker,
            this.firstMarker,
            this.upperMarker,
            this.rerereMarker
        ])
    }

    updateMarker(lat: number, lng: number) {
        if(this.map) {
            this.map.setCenter(
                {
                lat: lat,
                lng: lng,
                animated: true
                }
            )
        }
    }

}
