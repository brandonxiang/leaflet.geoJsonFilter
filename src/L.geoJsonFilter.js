// L.GeoJSON.extend({
//     initialize: function(geojson, options) {
//         this._geojson = geojson
//         L.GeoJSON.prototype.initialize.call(this, geojson, options)
//     },
//     setFilter: function(_) {
//         this.options.filter = _
//         if (this._geojson) {
//             this.clearLayers()
//             this.addData(this._geojson)
//         }
//         return this
//     }
// })
//

L.GeoJSON.include({
    setFilter: function(_) {
        if (!this._geojson) {
            this._geojson = this.toGeoJSON()
        }
        this.options.filter = _
        this.clearLayers()
        this.addData(this._geojson)
        return this
    }
})
