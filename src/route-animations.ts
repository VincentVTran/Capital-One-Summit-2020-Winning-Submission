import { transition,trigger,query,style,group,animate } from '@angular/animations';
var left = [
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%'
      })
    ], { optional: true }),
    query(':enter', [
      style({ left: '-100%'})
    ]),
    group([
      query(':leave', [
        animate('600ms ease', style({ left: '100%'}))
      ], { optional: true }),
      query(':enter', [
        animate('600ms ease', style({ left: '0%'}))
      ])
    ]),
    // Normalize the page style... Might not be necessary

    // Required only if you have child animations on the page
    // query(':leave', animateChild()),
    // query(':enter', animateChild()),
  ];

  var right = [
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        right: 0,
        width: '100%'
      })
    ], { optional: true }),
    query(':enter', [
      style({ right: '-100%'})
    ]),
    group([
      query(':leave', [
        animate('600ms ease', style({ right: '100%'}))
      ], { optional: true }),
      query(':enter', [
        animate('600ms ease', style({ right: '0%'}))
      ])
    ]),
    // Normalize the page style... Might not be necessary

    // Required only if you have child animations on the page
    // query(':leave', animateChild()),
    // query(':enter', animateChild()),
  ];
  
export const slider =
  trigger('routeAnimations', [
    transition('* => isLeft', left ),
    transition('* => isRight', right ),
    transition('isRight => *', left ),
    transition('isLeft => *', right )
  ]);

