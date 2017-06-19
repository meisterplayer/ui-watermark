Watermark plugin for Meister
=======

This plugin adds a watermark to the video in order to brand the video more.

Config options
-------

#### iconUrl *[String]* (required) ####

This is the url to the watermark that will be placed on the video.

``` JavaScript
var meisterPlayer = new Meister('#player', {
    Watermark: {
        iconUrl: 'URL_TO_WATERMARK',
    }
});
```

#### position *[String]* (default: 'top-left') ####

The position of the watermark. Can be anything of the following types:

- top-left
- top-right
- bottom-left
- bottom-right

``` JavaScript
var meisterPlayer = new Meister('#player', {
    Watermark: {
        iconUrl: 'URL_TO_WATERMARK',
        position: 'bottom-right',
    }
});
```

#### style *[Object]* ####

This allows you to style the wrapper via javascript. 
The style propertie maps to HTMLElement.prototype.style so any style property can be used.


``` JavaScript
var meisterPlayer = new Meister('#player', {
    Watermark: {
        iconUrl: 'URL_TO_WATERMARK',
        style: {
            margin: '2%',
        }
    }
});
```
