<template>
  <div ref="mapRef" class="map"></div>
</template>

<script>
import { ref, onMounted } from "vue";
import "ol/ol.css";
import Map from "ol/Map";
import TileLayer from "ol/layer/Tile";
import View from "ol/View";
import WMTS from "ol/source/WMTS";
import { get as getProjection } from "ol/proj";
import WMTSTileGrid from "ol/tilegrid/WMTS";
import { getTopLeft, getWidth } from "ol/extent";
import TileDebug from "ol/source/TileDebug";

export default {
  name: "Map",
  setup() {
    const mapRef = ref();

    onMounted(() => {
      const key = "a99347df0cc2e1d78229166c302d598b";
      const projection = getProjection("EPSG:4326");
      const projectionExtent = projection.getExtent();
      const size = getWidth(projectionExtent) / 256;
      const resolutions = new Array(19);
      const matrixIds = new Array(19);
      for (let z = 0; z < 19; ++z) {
        resolutions[z] = size / Math.pow(2, z);
        matrixIds[z] = z;
      }
      const map = new Map({
        target: mapRef.value,
        layers: [
          new TileLayer({
            source: new WMTS({
              url: "http://t0.tianditu.gov.cn/vec_c/wmts?tk=" + key,
              layer: "vec",
              matrixSet: "c",
              format: "tiles",
              style: "default",
              projection: projection,
              tileGrid: new WMTSTileGrid({
                origin: getTopLeft(projectionExtent),
                resolutions: resolutions,
                matrixIds: matrixIds,
              }),
            }),
          }),
          new TileLayer({
            source: new TileDebug({
              projection: "EPSG:4326",
            }),
          }),
        ],
        view: new View({
          center: [0, 0],
          projection: "EPSG:4326",
          zoom: 2,
        }),
      });
      console.log(map);
    });
    return {
      mapRef,
    };
  },
};
</script>

<style scoped>
.map {
  width: 100%;
  height: 100%;
}
</style>
