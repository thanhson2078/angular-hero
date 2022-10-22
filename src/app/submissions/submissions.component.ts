import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { select, Store } from '@ngrx/store';

import { SubmissionsStatusEnum } from '../enum/submissions.enum';
import { AppState } from '../store/reducer';
import { getSubmissions } from '../store/submissions/submissions.action';
import { selectSubmissions } from '../store/submissions/submissions.selector';

import H from '@here/maps-api-for-javascript';

@Component({
  selector: 'app-submissions',
  templateUrl: './submissions.component.html',
  styleUrls: ['./submissions.component.scss'],
})
export class SubmissionsComponent implements OnInit {
  submissions$ = this.store.pipe(select(selectSubmissions));
  SubmissionsStatusEnum = SubmissionsStatusEnum;

  private map?: H.Map;

  @ViewChild('map') mapDiv?: ElementRef;

  constructor(private store: Store<AppState>) {
    this.store.dispatch(getSubmissions());
  }

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    if (!this.map && this.mapDiv) {
      // instantiate a platform, default layers and a map as usual
      const platform = new H.service.Platform({
        apikey: '{API_KEY}'
      });

      const layers = platform.createDefaultLayers();
      const map = new H.Map(
        this.mapDiv.nativeElement,
        layers.vector.normal.map,
        {
          pixelRatio: window.devicePixelRatio,
          center: { lat: 50, lng: 5 },
          zoom: 4,
        }
      );
      this.map = map;
      window.addEventListener('resize', () => map.getViewPort().resize());
      this.addMarkersToMap(this.map);
    }
  }

  addMarkersToMap(map: H.Map): void {
    const parisMarker = new H.map.Marker({ lat: 48.8567, lng: 2.3508 });
    const romeMarker = new H.map.Marker({ lat: 41.9, lng: 12.5 });
    const berlinMarker = new H.map.Marker({ lat: 52.5166, lng: 13.3833 });
    const madridMarker = new H.map.Marker({ lat: 40.4, lng: -3.6833 });
    const londonMarker = new H.map.Marker({ lat: 51.5008, lng: -0.1224 });

    map.addObject(parisMarker);
    map.addObject(romeMarker);
    map.addObject(berlinMarker);
    map.addObject(madridMarker);
    map.addObject(londonMarker);
  }

  onDateSelect(event: any): void {
    console.log('onDateSelect($event)', event);
  }
}
