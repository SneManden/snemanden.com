export interface SwipeEvents {
  onLeft: () => void;
  onRight: () => void;
  onUp: () => void;
  onDown: () => void;
}

export class Swipe {
  xDown: number | null = null;
  yDown: number | null = null;
  xDiff: number | null = null;
  yDiff: number | null = null;
  private events: SwipeEvents = {
    onLeft: () => {},
    onRight: () => {},
    onUp: () => {},
    onDown: () => {},
  };

  constructor(private element: HTMLElement, events: Partial<SwipeEvents>) {
    this.events = { ...this.events, ...events };
    
    this.xDown = null;
    this.yDown = null;

    this.element.addEventListener('touchstart', evt => {
      this.xDown = evt.touches[0].clientX;
      this.yDown = evt.touches[0].clientY;
    }, false);
  }

  handleTouchMove(evt: TouchEvent) {
    if (!this.xDown || !this.yDown) {
      return;
    }

    var xUp = evt.touches[0].clientX;
    var yUp = evt.touches[0].clientY;

    this.xDiff = this.xDown - xUp;
    this.yDiff = this.yDown - yUp;

    if (Math.abs(this.xDiff) > Math.abs(this.yDiff) ) { // Most significant.
      if (this.xDiff > 0) {
        this.events.onLeft();
      } else {
        this.events.onRight();
      }
    } else {
      if (this.yDiff > 0) {
        this.events.onUp();
      } else {
        this.events.onDown();
      }
    }

    // Reset values.
    this.xDown = null;
    this.yDown = null;
  }

  run(): void {
    this.element.addEventListener('touchmove', evt => {
      this.handleTouchMove(evt);
    }, false);
  }
}
