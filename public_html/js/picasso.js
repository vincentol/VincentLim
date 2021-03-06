(function() {
  $(function() {

    /*  Globals
    -------------------------------------------------- */
    var PROPERTIES =               ['translateX', 'translateY', 'opacity', 'rotate', 'scale'],
        $window =                  $(window),
        $body =                    $('body'),
        wrappers =                 [],
        currentWrapper =           null,
        scrollTimeoutID =          0,
        bodyHeight =               0,
        windowHeight =             0,
        windowWidth =              0,
        prevKeyframesDurations =   0,
        scrollTop =                0,
        relativeScrollTop =        0,
        currentKeyframe =          0,
        keyframes = [
          {
            'wrapper' : '#intro',
            'duration' : '100%',
            'animations' :  [
              {
                'selector'    : '.name',
                'translateY'  : -140,
                'opacity'     : 0
              } , {
                'selector'    : '.byline',
                'translateY'  : -110,
                'opacity'     : 0
              } 
            ]
          } , {
            'wrapper' : '#amsection',
            'duration' : '150%',
            'animations' :  [
            {
              'selector'    : 'h2.aboutme',
              'translateY'  : '-30%',
              'opacity'     : [0, 1.75] // hack to accelrate opacity speed
            } ,
            {
              'selector'    : '#amdesc1',
              'translateY'  : '-25%',
              'opacity'     : [0, 1.75] // hack to accelrate opacity speed
            } ,
            {
              'selector'    : '#aboutme1',
              'translateY'  : '-90%',
              'opacity'     : [0, 1.75]
            } 
            ] 
          } , {
            'wrapper' : '#amsection',
            'duration' : '100%',
            'animations' :  [
            {
              'selector'    : '#amdesc1',
              'translateY'  : ['-25%', '-50%'],
              'opacity'     : -.75
            } ,
            {
              'selector'    : '#amdesc2',
              'translateY'  : '-25%',
              'opacity'     : [0, 1.75] // hack to accelrate opacity speed
            } ,
            {
              'selector'    : '#aboutme1',
              'translateY'  : ['-90%', '-120%'],
              'opacity'     : -.75
            } , 
            {
              'selector'    : '#aboutme2',
              'translateY'  : '-90%',
              'opacity'     : [0, 1.75],
            } 
            ]
          } , {
            'wrapper' : '#amsection',
            'duration' : '100%',
            'animations' :  [
            {
              'selector'    : 'h2.aboutme',
              'translateY'  : ['-30%', '-40%'],
              'opacity'     : [1, 0] // hack to accelrate opacity speed
            } , 
            {
              'selector'    : '#amdesc2',
              'translateY'  : ['-25%', '-50%'],
              'opacity'     : -.75
            } ,
            {
              'selector'    : '#aboutme2',
              'translateY'  : ['-90%', '-120%'],
              'opacity'     : -.75
            }  
            ]
          } , {
            'wrapper' : '#class-section',
            'duration' : '150%',
            'animations' :  [
              {
                'selector'    : '.explosion-byline',
                'translateY'  : '-25%',
                'opacity'     : [0, 1.75] // hack to accelrate opacity speed
              } , 
              {
                'selector'    : '.explosion-byline-header',
                'translateY'  : '-25%',
                'opacity'     : [0, 1.75] // hack to accelrate opacity speed
              } , 
              {
                'selector'    : '#domExplosionList',
                'translateY'  : '-70%',
                'opacity'     : [0, 1] // hack to accelrate opacity speed
              }
            ]
          } , {
            'wrapper' : '#class-section',
            'duration' : '150%',
            'animations' :  [
              {
                'selector'    : '.dei-1',
                'translateY'  : '-15%',
                'translateX'  : '-10%',
                'opacity'     : [1, 0],
                'scale'       : 2,
              } , {
                'selector'    : '.dei-2',
                'translateY'  : '-5%',
                'translateX'  : '-4%',
                'opacity'     : [1, 0] // hack to decelrate opacity speed
              } , {
                'selector'    : '.dei-3',
                'translateY'  : '-9%',
                'translateX'  : '2%',
                'opacity'     : [1, 0], // hack to accelrate opacity speed
                'scale'       : 1.2,
              } , {
                'selector'    : '.dei-4',
                'translateY'  : '-17%',
                'translateX'  : '8%',
                'opacity'     : [1, 0], // hack to accelrate opacity speed
                'scale'       : 1.5,
              } , {
                'selector'    : '.dei-5',
                'translateY'  : '-2%',
                'translateX'  : '-15%',
                'opacity'     : [1, 0],
                'scale'       : 2,
              } , {
                'selector'    : '.dei-6',
                'translateY'  : '-1%',
                'translateX'  : '-7%',
                'opacity'     : [1, 0], // hack to decelrate opacity speed
                'scale'       : 1.2,
              } , {
                'selector'    : '.dei-7',
                'translateY'  : '-4%',
                'translateX'  : '2%',
                'opacity'     : [1, 0], // hack to accelrate opacity speed
                'scale'       : 1.1,
              } , {
                'selector'    : '.dei-8',
                'translateY'  : '-3%',
                'translateX'  : '12%',
                'opacity'     : [1, 0], // hack to accelrate opacity speed
                'scale'       : 1.8,
              } , {
                'selector'    : '.dei-9',
                'translateY'  : '3%',
                'translateX'  : '-12%',
                'opacity'     : [1, 0],
                'scale'       : 1.5,
              } , {
                'selector'    : '.dei-10',
                'translateY'  : '5%',
                'translateX'  : '-4%',
                'opacity'     : [1, 0] // hack to decelrate opacity speed
              } , {
                'selector'    : '.dei-11',
                'translateY'  : '8%',
                'translateX'  : '6%',
                'opacity'     : [1, 0], // hack to accelrate opacity speed
                'scale'       : 1.4,
              } , {
                'selector'    : '.dei-12',
                'translateY'  : '1%',
                'translateX'  : '20%',
                'opacity'     : [1, 0], // hack to accelrate opacity speed
                'scale'       : 1.9,
              } , {
                'selector'    : '.dei-13',
                'translateY'  : '8%',
                'translateX'  : '-12%',
                'opacity'     : [1, 0],
                'scale'       : 1.8,
              } , {
                'selector'    : '.dei-14',
                'translateY'  : '4%',
                'translateX'  : '-3%',
                'opacity'     : [1, 0], // hack to decelrate opacity speed
                'scale'       : 1.3,
              } , {
                'selector'    : '.dei-15',
                'translateY'  : '14%',
                'translateX'  : '5%',
                'opacity'     : [1, 0], // hack to accelrate opacity speed
                'scale'       : 1.7,
              } , {
                'selector'    : '.dei-16',
                'translateY'  : '6%',
                'translateX'  : '9%',
                'opacity'     : [1, 0], // hack to accelrate opacity speed
                'scale'       : 2,
              },
              {
                'selector'    : '.explosion-byline',
                'translateY'  : ['-25%', '-40%'],
                'opacity'     : [1, 0] // hack to accelrate opacity speed
              } ,
              {
                'selector'    : '.explosion-byline-header',
                'translateY'  : ['-25%', '-40%'],
                'opacity'     : [1, 0] // hack to accelrate opacity speed
              }
            ]
          } , {
            'wrapper' : '#work-section',
            'duration' : '150%',
            'animations' :  [
              {
                'selector'    : '#workhead',
                'translateY'  : '-25%',
                'opacity'     : [0, 1.75] // hack to accelrate opacity speed
              } , 
              {
                'selector'    : '#ibm-text',
                'translateX'  : '20%',
                'opacity'     : [0, 1.75] // hack to accelrate opacity speed
              }, {
                'selector'    : '#ibm',
                'opacity'     : [0, 1],
                'translateX'  : '-20%'
              } 
            ]
          } , {
            'wrapper' : '#work-section',
            'duration' : '150%',
            'animations' :  [
              {
                'selector'    : '#ibm',
                'opacity'     : [1, 0],
                'translateX'  : ['-20%', '-30%'],
                'rotate'      : ['0', '-90']
              } ,
              {
                'selector'    : '#ibm-text',
                'opacity'     : [1, 0],
                'translateX'  : ['20%', '30%'],
                'rotate'      : ['0', '90']
              } , 
              {
                'selector'    : '#csi',
                'opacity'     : [0, 1],
                'scale'       : [0, 1],
                'translateX'  : ['-10%', '-20%']
              } ,
              {
                'selector'    : '#csi-text',
                'opacity'     : [0, 1],
                'scale'       : [0, 1],
                'translateX'  : ['10%', '20%']
              }
            ]
          } , {
            'wrapper' : '#work-section',
            'duration' : '40%',
            'animations' :  []
          } , {
            'wrapper' : '#work-section',
            'duration' : '150%',
            'animations' :  [
              {
                'selector'  : '#workhead',
                'opacity'   : [1, 0],
                'translateY': ['-25%', '-50%']
              },
              {
                'selector'  : '#csi',
                'opacity'   : [1, 0],
                'translateX': ['-20%', '-20%'],
                'translateY': '-25%'
              },
              {
                'selector'  : '#csi-text',
                'opacity'   : [1, 0],
                'translateX': ['20%', '20%'],
                'translateY': '-25%'
              }
            ]
          } , {
            'wrapper' : '#project-section',
            'duration' : '150%',
            'animations' :  [
              {
                'selector'    : '#projecthead',
                'translateY'  : '-30%',
                'opacity'     : [0, 1.75] // hack to accelrate opacity speed
              } , 
              {
                'selector'    : '#projectdesc',
                'translateY'  : ['-40%', '-25%'],
                'opacity'     : [0, 1.75] // hack to accelrate opacity speed
              } , 
              {
                'selector'    : '.slideshow_container',
                'opacity'     : [0, 1]
              }
            ]
          } , {
            'wrapper' : '#project-section',
            'duration' : '100%',
            'animations' :  [
            {
              'selector'    : '#projecthead',
              'translateY'  : ['-30%', '-30%'],
              'translateX'  : '-25%',
              'opacity'     : [1, 0] // hack to accelrate opacity speed
            } , 
            {
              'selector'    : '#projectdesc',
              'translateY'  : ['-25%', '-25%'],
              'translateX'  : '-25%',
              'opacity'     : [1, 0] // hack to accelrate opacity speed
            } , 
            {
              'selector'    : '.slideshow_container',
              'translateX'  : '25%',
              'opacity'     : [1, 0]
            }
            ]
          } , {
            'wrapper' : '#ending-section',
            'duration' : '150%',
            'animations' :  [
              {
                'selector'    : '#endtro',
                'translateY'  : '-25%',
                'opacity'     : [0, 1.75]
              } ,
              {
                'selector'    : '#endtro-text',
                'translateY'  : '-25%',
                'opacity'     : [0, 1.75]
              } ,
              {
                'selector'    : '.social',
                'scale'       : 1.5,
                'translateX'  : '-20%',
                'rotate'      : ['0', '90']
              } , 
              {
                'selector'    : '.fa',
                'rotate'      : ['0', '-90']
              } ,
              {
                'selector'    : '.fa-facebook',
                'rotate'      : ['0', '-90'],
                'translateX'  : '-2%',
                'translateY'  : '-55%'
              } , 
              {
                'selector'    : '.fa-linkedin',
                'rotate'      : ['0', '-90'],
                'translateX'  : '2%',
                'translateY'  : '-61.5%'
              } ,
              {
                'selector'    : '.fa-github',
                'rotate'      : ['0', '-90'],
                'translateX'  : '6%',
                'translateY'  : '-68%'
              } ,
              {
                'selector'    : '.fa-envelope',
                'rotate'      : ['0', '-90'],
                'translateX'  : '-2%',
                'translateY'  : '-110%'
              } ,
              {
                'selector'    : '.fa-phone',
                'rotate'      : ['0', '-90'],
                'translateX'  : '2%',
                'translateY'  : '-116.6%'
              } ,
              {
                'selector'    : '.fa-user',
                'rotate'      : ['0', '-90'],
                'translateX'  : '6%',
                'translateY'  : '-123.2%'
              } 
            ]
          } , {
            'duration' : '100%',
            'animations' :  []
          }
        ]

    /*  Construction
    -------------------------------------------------- */
    init = function() {
      scrollIntervalID = setInterval(updatePage, 10);
      setupValues();
      $window.resize(throwError)
      if(isTouchDevice) {
        $window.resize(throwError)
      }
    }

    setupValues = function() {
      scrollTop = $window.scrollTop();
      windowHeight = $window.height();
      windowWidth = $window.width();
      convertAllPropsToPx();
      buildPage();
    }

    buildPage = function() {
      var i, j, k;
      for(i=0;i<keyframes.length;i++) { // loop keyframes
          bodyHeight += keyframes[i].duration;
          if($.inArray(keyframes[i].wrapper, wrappers) == -1) {
            wrappers.push(keyframes[i].wrapper);
          }
          for(j=0;j<keyframes[i].animations.length;j++) { // loop animations
            Object.keys(keyframes[i].animations[j]).forEach(function(key) { // loop properties
              value = keyframes[i].animations[j][key];
              if(key !== 'selector' && value instanceof Array === false) {
                var valueSet = [];
                valueSet.push(getDefaultPropertyValue(key), value);
                value = valueSet;
              }
              keyframes[i].animations[j][key] = value;
            });
          }
      }
      $body.height(bodyHeight);
      $window.scroll(0);
      currentWrapper = wrappers[0];
      $(currentWrapper).show();
    }

    convertAllPropsToPx = function() {
      var i, j, k;
      for(i=0;i<keyframes.length;i++) { // loop keyframes
        keyframes[i].duration = convertPercentToPx(keyframes[i].duration, 'y');
        for(j=0;j<keyframes[i].animations.length;j++) { // loop animations
          Object.keys(keyframes[i].animations[j]).forEach(function(key) { // loop properties
            value = keyframes[i].animations[j][key];
            if(key !== 'selector') {
              if(value instanceof Array) { // if its an array
                for(k=0;k<value.length;k++) { // if value in array is %
                  if(typeof value[k] === "string") {
                    if(key === 'translateY') {
                      value[k] = convertPercentToPx(value[k], 'y');
                    } else {
                      value[k] = convertPercentToPx(value[k], 'x');
                    }
                  }
                } 
              } else {
                if(typeof value === "string") { // if single value is a %
                  if(key === 'translateY') {
                    value = convertPercentToPx(value, 'y');
                  } else {
                    value = convertPercentToPx(value, 'x');
                  }
                }
              }
              keyframes[i].animations[j][key] = value;
            }
          });
        }
      }
    }

    getDefaultPropertyValue = function(property) {
      switch (property) {
        case 'translateX':
          return 0;
        case 'translateY':
          return 0;
        case 'scale':
          return 1;
        case 'rotate':
          return 0;
        case 'opacity':
          return 1;
        default:
          return null;
      }
    }

    /*  Animation/Scrolling
    -------------------------------------------------- */
    updatePage = function() {
      window.requestAnimationFrame(function() {
        setScrollTops();
        if(scrollTop > 0 && scrollTop <= (bodyHeight - windowHeight)) {
          animateElements();
          setKeyframe();
        }
      });
    }

    setScrollTops = function() {
      scrollTop = $window.scrollTop();
      relativeScrollTop = scrollTop - prevKeyframesDurations;
    }

    animateElements = function() {
      var animation, translateY, translateX, scale, rotate, opacity;
      for(var i=0;i<keyframes[currentKeyframe].animations.length;i++) {
        animation   = keyframes[currentKeyframe].animations[i];
        translateY  = calcPropValue(animation, 'translateY');
        translateX  = calcPropValue(animation, 'translateX');
        scale       = calcPropValue(animation, 'scale');
        rotate      = calcPropValue(animation, 'rotate');
        opacity     = calcPropValue(animation, 'opacity');

        $(animation.selector).css({
          'transform':    'translate3d(' + translateX +'px, ' + translateY + 'px, 0) scale('+ scale +') rotate('+ rotate +'deg)',
          'opacity' : opacity
        })
      }
    }

    calcPropValue = function(animation, property) {
      var value = animation[property];
      if(value) {
        value = easeInOutQuad(relativeScrollTop, value[0], (value[1]-value[0]), keyframes[currentKeyframe].duration);
      } else {
        value = getDefaultPropertyValue(property);
      }
      // value = +value.toFixed(2) 
      // TEMPORARILY REMOVED CAUSE SCALE DOESN'T WORK WITHA AGRESSIVE ROUNDING LIKE THIS
      return value;
    }

    easeInOutQuad = function (t, b, c, d) {
      //sinusoadial in and out
      return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
    };

    setKeyframe = function() {
      if(scrollTop > (keyframes[currentKeyframe].duration + prevKeyframesDurations)) {
          prevKeyframesDurations += keyframes[currentKeyframe].duration;
          currentKeyframe++;
          showCurrentWrappers();
      } else if(scrollTop < prevKeyframesDurations) {
          currentKeyframe--;
          prevKeyframesDurations -= keyframes[currentKeyframe].duration;
          showCurrentWrappers();
      }
    }

    showCurrentWrappers = function() {
      var i;
      if(keyframes[currentKeyframe].wrapper != currentWrapper) {
        $(currentWrapper).hide();
        $(keyframes[currentKeyframe].wrapper).show();
        currentWrapper = keyframes[currentKeyframe].wrapper;
      }
    }

    /*  Helpers
    -------------------------------------------------- */

    convertPercentToPx = function(value, axis) {
      if(typeof value === "string" && value.match(/%/g)) {
        if(axis === 'y') value = (parseFloat(value) / 100) * windowHeight;
        if(axis === 'x') value = (parseFloat(value) / 100) * windowWidth;
      }
      return value;
    }

    throwError = function() {
      $body.addClass('page-error')
    }

    isTouchDevice = function() {
      return 'ontouchstart' in window // works on most browsers 
      || 'onmsgesturechange' in window; // works on ie10
    }

    init();

  })
}).call(this);
