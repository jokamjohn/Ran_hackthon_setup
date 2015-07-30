/**
 * Created by John kagga on 7/30/2015.
 */

  var map;
  require(["esri/map","dojo/domReady!"], function(Map) {
    map = new Map("mapDiv", {
      center: [-56.049, 38.485],
      zoom: 3,
      basemap: "streets"
    });
  });