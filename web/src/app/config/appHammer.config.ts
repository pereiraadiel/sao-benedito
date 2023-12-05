import { Injectable } from '@angular/core';
import { HammerGestureConfig } from '@angular/platform-browser';

@Injectable()
export class AppHammerConfig extends HammerGestureConfig {
  override = <any>{
    swipe: { direction: Hammer.DIRECTION_ALL },
  };
}
