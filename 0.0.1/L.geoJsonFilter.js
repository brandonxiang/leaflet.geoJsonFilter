L.GeoJSONFilter = L.GeoJSON.extend({
    initialize: function(geojson, options) {
        this._geojson = geojson;
        L.GeoJSON.prototype.initialize.call(this,geojson,options);
    },
     setFilter: function(_) {
        this.options.filter = _;
        if (this._geojson) {
            this.clearLayers();
            this.addData(this._geojson);
        }
        return this;
    }
});

L.geoJsonFilter = function (geojson, options) {
	return new L.GeoJSONFilter(geojson, options);
};