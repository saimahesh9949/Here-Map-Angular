// import {
//   Component,
//   ViewChild,
//   ElementRef,
//   Input,
//   SimpleChanges,
//   EventEmitter,
//   Output,
// } from '@angular/core';
// import H from '@here/maps-api-for-javascript';
// import onResize from 'simple-element-resize-detector';
// @Component({
//   selector: 'app-jsmap',
//   standalone: true,
//   imports: [],
//   templateUrl: './jsmap.component.html',
//   styleUrl: './jsmap.component.scss',
// })
// export class JsmapComponent {
//   private map?: H.Map;

//   @ViewChild('map') mapDiv?: ElementRef;

//   ngAfterViewInit(): void {
//     if (!this.map && this.mapDiv) {
//       const platform = new H.service.Platform({
//         apikey: 'DRsCcPd-nQCz-dI7FllMkXTfI50mlo2LucvHb0jbaak',
//       });
//       const layers = platform.createDefaultLayers();
//       // const map = new H.Map(
//       //   this.mapDiv.nativeElement,
//       //   (layers as any).vector.normal.map,
//       //   {
//       //     pixelRatio: window.devicePixelRatio,
//       //     center: {lat: 0, lng: 0},
//       //     zoom: 2,
//       //   },
//       // );
//       const map = new H.Map(
//         this.mapDiv.nativeElement,
//         (layers as any).vector.normal.map,
//         {
//           pixelRatio: window.devicePixelRatio,
//           // In this example, the map centers on
//           // Luxembourg City, with the zoom level of 16:
//           zoom: 3,
//           center: { lat: 49.6107, lng: 6.1314 },
//         }

//        // Corrected import
//       );

//       // This array stores coordinates of some interesting landmarks in Luxembourg City:
//       const landmarks = [
//         { name: 'Notre-Dame Cathedral', lat: 39.610364, lng: 6.129416 },
//         { name: 'Grand Ducal Palace', lat: 29.611204, lng: 6.13072 },
//         { name: 'Casemates du Bock', lat:19.611847, lng: 6.131925 },
//         { name: 'Adolphe Bridge', lat: 9.6083, lng: 6.127109 },
//       ];

//       landmarks.forEach((landmark) => {
//         const marker = new H.map.Marker({
//           lat: landmark.lat,
//           lng: landmark.lng,
//         });
//         marker.setData(landmark.name);
//         map.addObject(marker);
//       });

//       onResize(this.mapDiv.nativeElement, () => {
//         map.getViewPort().resize();
//       });

//       this.map = map;

//       map.addEventListener('mapviewchange', (ev: H.map.ChangeEvent) => {
//         this.notify.emit(ev);
//       });
//       new H.mapevents.Behavior(new H.mapevents.MapEvents(map));

//       // if(this.map){

//       // }
//     }

//   }

//   @Input() public zoom = 2;
//   @Input() public lat = 0;
//   @Input() public lng = 0;

//   private timeoutHandle: any;
//   @Output() notify = new EventEmitter();

//   ngOnChanges(changes: SimpleChanges) {
//     clearTimeout(this.timeoutHandle);
//     this.timeoutHandle = setTimeout(() => {
//       if (this.map) {
//         if (changes['zoom'] !== undefined) {
//           this.map.setZoom(changes['zoom'].currentValue);
//         }
//         if (changes['lat'] !== undefined) {
//           this.map.setCenter({
//             lat: changes['lat'].currentValue,
//             lng: this.lng,
//           });
//         }
//         if (changes['lng'] !== undefined) {
//           this.map.setCenter({
//             lat: this.lat,
//             lng: changes['lng'].currentValue,
//           });
//         }
//       }
//     }, 100);
//   }

// // planRoute(start: { lat: number; lng: number }, end: { lat: number; lng: number }): void {
// //   if (this.map && this.router) {
// //     const routeRequestParams = {
// //       'routingMode': 'fast',
// //       'transportMode': 'car',
// //       'origin': `${start.lat},${start.lng}`,
// //       'destination': `${end.lat},${end.lng}`,
// //     };

// //     const onResult = (result: any) => {
// //       const route = result.routes[0];
// //       const lineString = new H.geo.LineString();

// //       route.sections.forEach((section: any) => {
// //         lineString.pushPoint.apply(lineString, section.geoCoordinates);
// //       });

// //       const routeLine = new H.map.Polyline(lineString, {
// //         style: { strokeColor: 'blue', lineWidth: 3 },
// //       } as H.map.Polyline.Options);

// //       if (this.map) {
// //         this.map.addObject(routeLine);

// //         const bounds = routeLine.getBoundingBox();
// //         if (bounds) {
// //           this.map.getViewModel().setLookAtData({ bounds: bounds as H.geo.AbstractGeometry });
// //         }
// //       } else {
// //         console.error('Error: Map is not defined.');
// //       }
// //     };

// //     const onError = (error: any) => {
// //       console.error('Error calculating the route:', error);
// //     };

// //     this.router.calculateRoute(routeRequestParams, onResult, onError);
// //   } else {
// //     console.error('Error: Map or router is not defined.');
// //   }
// // }

// }

// ???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????

//stage 2

import {
  Component,
  ViewChild,
  ElementRef,
  Input,
  SimpleChanges,
  EventEmitter,
  Output,
} from '@angular/core';
import H from '@here/maps-api-for-javascript';
import onResize from 'simple-element-resize-detector';
@Component({
  selector: 'app-jsmap',
  standalone: true,
  imports: [],
  templateUrl: './jsmap.component.html',
  styleUrl: './jsmap.component.scss',
})
export class JsmapComponent {
  private map?: H.Map;

  @ViewChild('map') mapDiv?: ElementRef;

  ngAfterViewInit(): void {
    this.openHereMap()
  }


  openHereMap(){

      const platform: any = new H.service.Platform({
        apikey: 'DRsCcPd-nQCz-dI7FllMkXTfI50mlo2LucvHb0jbaak',
      });
      if (!this.map && this.mapDiv) {
        const platform = new H.service.Platform({
          apikey: 'DRsCcPd-nQCz-dI7FllMkXTfI50mlo2LucvHb0jbaak',
        });
        const layers = platform.createDefaultLayers();

        const map = new H.Map(
          this.mapDiv.nativeElement,
          (layers as any).vector.normal.map,
          {
            pixelRatio: window.devicePixelRatio,
            zoom: 3,
            center: { lat: 49.6107, lng: 6.1314 },
            padding: { top: 50, right: 50, bottom: 50, left: 50 },
          }
        );
        // const behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));
        const ui = H.ui.UI.createDefault(map,layers);
        const landmarks = [
          { name: 'Notre-Dame Cathedral', lat: 17.610364, lng: 79.129416 },
          { name: 'Grand Ducal Palace', lat: 17.611204, lng: 79.23072 },
          { name: 'Casemates du Bock', lat: 17.611847, lng: 79.331925 },
          { name: 'Adolphe Bridge', lat: 17.6083, lng: 79.427109 },
        ];

        landmarks.forEach((landmark) => {
          const marker = new H.map.Marker({
            lat: landmark.lat,
            lng: landmark.lng,
          });
          marker.setData(landmark.name);
          map.addObject(marker);
        });

        onResize(this.mapDiv.nativeElement, () => {
          map.getViewPort().resize();
        });

        this.map = map;

        map.addEventListener('mapviewchange', (ev: H.map.ChangeEvent) => {
          this.notify.emit(ev);
        });
        new H.mapevents.Behavior(new H.mapevents.MapEvents(map));
      }
      //////////////

      const origin = { lat:  17.366, lng:  78.476 };
      const destination = { lat:17.9693, lng:79.5926 };

      // const routingParameters = {
      //   routingMode: 'fast',
      //   transportMode: 'car',
      //   // The start point of the route:
      //   origin: `${origin.lat},${origin.lng}`,
      //   // The end point of the route:
      //   destination: `${destination.lat},${destination.lng}`,
      //   // Include the route shape in the response
      //   return: 'polyline',
      // };
      // Add multiple waypoints ????????????????????????????????????????????????????????????????????????????????????????????//
      const waypoints = [
        // Liepaja, Latvia
        { lat:  17.466, lng:  78.689 },
        { lat:  17.566, lng:  78.776 },
        // { lat: 45.7, lng: 21.2 },
        // Klajpeda, Lithuania
        { lat:  17.666, lng:  78.876 }
      ];
      const waypointMarkers: any = [];
      const routingParameters = {
        routingMode: 'fast',
        transportMode: 'pedestrian',
        origin: `${origin.lat},${origin.lng}`,
        destination: `${destination.lat},${destination.lng}`,
        return: 'polyline',
        // Add a via parameter to the query for each coordinate pair:
        via: new H.service.Url.MultiValueQueryParameter(
          waypoints.map((wp) => `${wp.lat},${wp.lng}`)
        ),
      };

      /// >>>>> customize marker styles ???????????????????????????????????????????????????????????????????????????????????????

      // Define the marker style
      const commonSvgStyle = (
        fill: any
      ) => `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48">
      <path d="M24 0C12.955 0 4 9.075 4 20.075C4 28.35 24 48 24 48S44 28.35 44 20.075C44 9.075 35.045 0 24 0Z" fill="${fill}"/>
  </svg>`;

      // Define the fill colors for start, end, and waypoint markers:
      const startFill = 'blue';
      const endFill = 'green';
      const waypointFill = 'purple';

      // Create SVG icons for start, end, and waypoint markers using the common style and the corresponding fill color:
      const startIconSvg = commonSvgStyle(startFill);
      const endIconSvg = commonSvgStyle(endFill);
      const waypointIconSvg = commonSvgStyle(waypointFill);

      //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>.

      const onResult = (result: any) => {
        // Ensure that at least one route was found
        if (result.routes.length) {
          const lineStrings: any = [];
          result.routes[0].sections.forEach((section: any) => {
            // Create a linestring to use as a point source for the route line
            lineStrings.push(
              H.geo.LineString.fromFlexiblePolyline(section.polyline)
            );
          });

          // Create an instance of H.geo.MultiLineString

          // >>>>>>>>>>>>>>>> single line ??????????????????????????????????????????????????????????????????????????????????//}

          // const multiLineString = new H.geo.MultiLineString(lineStrings);
          // // Create a polyline to display the route:
          // const routeLine = new H.map.Polyline(multiLineString, {
          //   style: { strokeColor: 'blue', lineWidth: 3 },
          // } as H.map.Polyline.Options);

          // >>>>>>>>>>>>>>>> single line ??????????????????????????????????????????????????????????????????????????????????//}

          const multiLineString = new H.geo.MultiLineString(lineStrings);

          const routeBackground = new H.map.Polyline(multiLineString, {
            style: {
              lineWidth: 6,
              strokeColor: 'rgba(0, 128, 255, 0.7)',
              lineTailCap: 'arrow-tail',
              lineHeadCap: 'arrow-head',
            },
          } as any);

          const routeArrows = new H.map.Polyline(multiLineString, {
            style: {
              lineWidth: 6,
              fillColor: 'white',
              strokeColor: 'rgba(255, 255, 255, 1)',
              lineDash: [0, 2],
              lineTailCap: 'arrow-tail',
              lineHeadCap: 'arrow-head',
            },
          } as any);

          var routeLine = new H.map.Group();
          routeLine.addObjects([routeBackground, routeArrows]);

          // Create a polyline to display the route:

          //>>>>>>>>>>>>>>>

          // Create a marker for the start point:

          // const startMarker = new H.map.Marker(origin);  >>>>>>>>>>>> deafult

          // >>>>>>>>>>>>>>>>>>>>>> custom marker styles
          const startMarker = new H.map.Marker(origin, {
            icon: new H.map.Icon(startIconSvg, {
              size: {
                w: 32,
                h: 32,
              },
            }),
          } as any);

          // Create a marker for the end point:
          const endMarker = new H.map.Marker(destination, {
            icon: new H.map.Icon(endIconSvg, {
              size: {
                w: 32,
                h: 32,
              },
            }),
          } as any);

          // Create a H.map.Group to hold all the map objects and enable us to obtain
          // the bounding box that contains all its objects within

          const group = new H.map.Group();
          // group.addObjects([routeLine, startMarker, endMarker]);  >>>>>>>> way point

          ///////////////// add mult way points
          waypoints.forEach((waypoint) => {
            // const waypointMarker = new H.map.Marker({
            //     lat: waypoint.lat,
            //     lng: waypoint.lng
            // });
            const waypointMarker = new H.map.Marker(
              {
                lat: waypoint.lat,
                lng: waypoint.lng,
              },
              {
                icon: new H.map.Icon(waypointIconSvg, {
                  size: {
                    w: 32,
                    h: 32,
                  },
                }),
              } as any
            );

            // Populate the waypointMarkers array:
            waypointMarkers.push(waypointMarker);
          });
          group.addObjects([
            routeLine,
            startMarker,
            endMarker,
            ...waypointMarkers,
          ]);

          // Add the group to the map
          if (this.map) {
            this.map.addObject(group);
            this.map.getViewModel().setLookAtData({
              bounds: group.getBoundingBox(),
            });
          }
        }
      };

      // Get an instance of the routing service version 8:

      const router = platform.getRoutingService(null, 8);

      // Call the calculateRoute() method with the routing parameters,
      // the callback, and an error callback function (called if a
      // communication error occurs):
      router.calculateRoute(
        routingParameters,
        onResult,
        function (error: { message: any }) {
          alert(error.message);
        }
      );

      // MapEvents enables the event system.
      // The behavior variable implements default interactions for pan/zoom (also on mobile touch environments).

      // const behavior = new H.mapevents.Behavior(
      //   new H.mapevents.MapEvents(this.map!)
      // );


      // Enable dynamic resizing of the map, based on the current size of the enclosing container

      window.addEventListener('resize', () => this.map?.getViewPort().resize());


  }

  @Input() public zoom = 2;
  @Input() public lat = 0;
  @Input() public lng = 0;

  private timeoutHandle: any;
  @Output() notify = new EventEmitter();

  ngOnChanges(changes: SimpleChanges) {
    clearTimeout(this.timeoutHandle);
    this.timeoutHandle = setTimeout(() => {
      if (this.map) {
        if (changes['zoom'] !== undefined) {
          this.map.setZoom(changes['zoom'].currentValue);
        }
        if (changes['lat'] !== undefined) {
          this.map.setCenter({
            lat: changes['lat'].currentValue,
            lng: this.lng,
          });
        }
        if (changes['lng'] !== undefined) {
          this.map.setCenter({
            lat: this.lat,
            lng: changes['lng'].currentValue,
          });
        }
      }
    }, 100);
  }
}
