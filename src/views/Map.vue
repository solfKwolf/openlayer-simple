<template>
  <div ref="mapRef" class="map"></div>
</template>

<script>
import { ref, onMounted } from "vue";
import "ol/ol.css";
import Map from "ol/Map";
import OSM from "ol/source/OSM";
import TileLayer from "ol/layer/Tile";
import View from "ol/View";
import { fromLonLat } from "ol/proj";

export default {
  name: "Map",
  setup() {
    const mapRef = ref();

    onMounted(() => {
      const map = new Map({
        target: mapRef.value,
        layers: [
          new TileLayer({
            source: new OSM(),
          }),
        ],
        view: new View({
          center: fromLonLat([116.67748810935825, 23.356809081282396]),
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
