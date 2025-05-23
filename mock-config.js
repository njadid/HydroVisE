export const config = {
  controls: {
    baseMapType: {
      defaultMap: {
        var_id: 'osmDefault',
        var_name: 'OpenStreetMap',
        selected: true,
        onEvent: 'selectBaseMap(this)',
      },
      satellite: {
        var_id: 'googleSatellite',
        var_name: 'Satellite View',
        selected: false,
        onEvent: 'selectBaseMap(this)',
      },
      terrain: {
        var_id: 'googleTerrain',
        var_name: 'Terrain View',
        selected: false,
        onEvent: 'selectBaseMap(this)',
      },
    },
  },
};
