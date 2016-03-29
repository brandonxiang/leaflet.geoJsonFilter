#L.geojsonFilter

This extension of leaflet is inspired by mapbox setfilter function.

When you use `setFilter` function in `L.geoJson`, the origin geoJson will not be stored. After changing the filter, markers will becomes less. Therefore I wants to save the geoJson alternatively.  

##usage

 ```
 marker.setFilter(function(f){
    return f.properties.number === 2;
});
 ```
