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
