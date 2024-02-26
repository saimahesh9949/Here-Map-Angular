import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-mapposition',
  standalone: true,
  imports: [],
  templateUrl: './mapposition.component.html',
  styleUrl: './mapposition.component.scss'
})
export class MappositionComponent {
  @Output() notify = new EventEmitter();

  @Input() public zoom = 2;
  @Input() public lat = 0;
  @Input() public lng = 0;

}
