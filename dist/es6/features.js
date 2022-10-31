(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.bundle = factory());
}(this, (function () { 'use strict';

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

    return arr2;
  }

  function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];

    if (!it) {
      if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
        if (it) o = it;
        var i = 0;

        var F = function () {};

        return {
          s: F,
          n: function () {
            if (i >= o.length) return {
              done: true
            };
            return {
              done: false,
              value: o[i++]
            };
          },
          e: function (e) {
            throw e;
          },
          f: F
        };
      }

      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }

    var normalCompletion = true,
        didErr = false,
        err;
    return {
      s: function () {
        it = it.call(o);
      },
      n: function () {
        var step = it.next();
        normalCompletion = step.done;
        return step;
      },
      e: function (e) {
        didErr = true;
        err = e;
      },
      f: function () {
        try {
          if (!normalCompletion && it.return != null) it.return();
        } finally {
          if (didErr) throw err;
        }
      }
    };
  }

  function spatial_abilities(id) {
    var status = {
      alabama: {
        native_american: true,
        number_markers: true,
        county_brush: true,
        shapefile: true,
        find_unpainted: true,
        contiguity: true
      },
      alaska: {
        number_markers: true,
        native_american: true,
        shapefile: true,
        school_districts: true,
        municipalities: true,
        current_districts: true,
        boundaries: [{
          id: '2021_plan',
          label: '2021 Proclamation Plan',
          path: 'current_districts/alaska/2021_plan'
        }],
        portal: {
          endpoint: 'https://www.akredistrict.org/map-comment'
        }
      },
      alaska_blocks: {
        coalition: false,
        school_districts: true,
        municipalities: true,
        current_districts: true,
        portal: {
          endpoint: 'https://www.akredistrict.org/map-comment',
          saveredirect: 'www.akredistrict.org/create/edit.html'
        }
      },
      arizona: {
        number_markers: true,
        county_brush: true,
        native_american: true,
        shapefile: true // find_unpainted: true,

      },
      maricopa: {
        native_american: true,
        number_markers: true
      },
      nwaz: {
        native_american: true,
        number_markers: true
      },
      seaz: {
        native_american: true,
        number_markers: true
      },
      mesaaz: {
        native_american: true,
        number_markers: true,
        border: true,
        sideload: true
      },
      glendaleaz: {
        border: true,
        number_markers: true,
        shapefile: true,
        coalition: false,
        boundaries: [{
          id: 'districts',
          label: 'Current Districts',
          path: 'current_districts/arizona/glendaleaz',
          centroids: true
        }]
      },
      phoenix: {
        native_american: true,
        number_markers: true,
        border: true
      },
      yuma: {
        native_american: true,
        number_markers: true,
        border: true,
        shapefile: true,
        find_unpainted: true,
        boundaries: [{
          id: 'districts',
          label: 'Current Districts',
          path: 'current_districts/arizona/yuma',
          centroids: true
        }]
      },
      yuma_awc: {
        native_american: true,
        number_markers: true,
        border: true,
        shapefile: true,
        find_unpainted: true,
        boundaries: [{
          id: 'districts',
          label: 'Current Districts',
          path: 'current_districts/arizona/yuma_awc',
          centroids: true
        }]
      },
      arkansas: {
        number_markers: true,
        county_brush: true,
        shapefile: true,
        find_unpainted: true
      },
      california: {
        number_markers: true,
        native_american: true,
        county_brush: true,
        shapefile: true,
        sideload: true // find_unpainted: true,

      },
      ca_SanDiego: {
        number_markers: true,
        shapefile: true,
        border: true,
        purple_demo: true,
        boundaries: [{
          id: 'districts',
          label: 'Current City Council Districts (2011)',
          path: 'current_districts/california/ca_SanDiego',
          lineColor: 'orangered'
        }, {
          id: 'neighborhood',
          label: 'Community Planning Group Areas',
          path: 'neighborhoods/california/ca_SanDiego',
          centroids: true,
          lineColor: 'darkgreen'
        }, {
          id: 'pbeats',
          // aka police beats
          label: 'Neighborhood Areas',
          path: 'neighborhoods/california/ca_SanDiego_beats',
          centroids: true,
          lineColor: 'darkblue'
        }, {
          id: 'schools',
          label: 'School Districts',
          path: 'school_districts/california/ca_SanDiego',
          centroids: true,
          fill: true,
          fill_alt: true
        }],
        portal: {
          endpoint: 'https://portal.sandiego-mapping.org'
        }
      },
      livermore: {
        number_markers: true,
        border: true,
        shapefile: true,
        coalition: false
      },
      ca_contracosta: {
        number_markers: true,
        border: true,
        shapefile: true,
        school_districts: true,
        municipalities: true,
        current_districts: true,
        boundaries: [{
          id: 'contracosta_cdp',
          label: 'Census Designated Places',
          path: 'ca_contracosta_cdp'
        }],
        portal: {
          endpoint: 'https://portal.contracosta-mapping.org'
        }
      },
      ca_sutter: {
        number_markers: true,
        border: true,
        shapefile: true,
        municipalities: true,
        current_districts: true,
        boundaries: [{
          id: 'precincts',
          label: 'Current Precincts',
          path: 'current_districts/california/ca_sutter_precincts'
        }]
      },
      ftmyers: {
        number_markers: true,
        border: true,
        shapefile: true,
        find_unpainted: true
      },
      contracosta: {
        number_markers: true,
        border: true,
        shapefile: true,
        municipalities: true,
        portal: {
          endpoint: 'https://portal.contracosta-mapping.org'
        }
      },
      pasorobles: {
        number_markers: true,
        border: true,
        shapefile: true
      },
      sacramento: {
        coalition: false,
        shapefile: true,
        number_markers: true,
        border: true,
        sideload: true // divisor: 1000,

      },
      "29palms": {
        coalition: false,
        shapefile: true,
        number_markers: true,
        border: true,
        sideload: false,
        current_districts: true
      },
      yuba_city: {
        coalition: false,
        shapefile: false,
        number_markers: true,
        border: true,
        sideload: false
      },
      buena_park: {
        coalition: false,
        shapefile: false,
        number_markers: true,
        border: true,
        sideload: false
      },
      modesto: {
        coalition: false,
        shapefile: false,
        number_markers: true,
        border: true,
        sideload: false
      },
      sbusd_5: {
        coalition: false,
        shapefile: false,
        number_markers: true,
        border: true,
        sideload: false,
        boundaries: [{
          id: 'sbusd_feeder',
          label: 'Elementary School Attendance Boundaries',
          path: 'school_districts/california/sbusd-feeder-districts',
          lineColor: 'black'
        }, {
          id: 'sbusd',
          label: 'Cities and Towns',
          path: 'municipalities/california/sbusd-municipalities',
          lineColor: 'black'
        }]
      },
      sbusd_7: {
        coalition: false,
        shapefile: false,
        number_markers: true,
        border: true,
        sideload: false,
        boundaries: [{
          id: 'sbusd_feeder',
          label: 'Elementary School Attendance Boundaries',
          path: 'school_districts/california/sbusd-feeder-districts',
          lineColor: 'black'
        }, {
          id: 'sbusd',
          label: 'Cities and Towns',
          path: 'municipalities/california/sbusd-municipalities',
          lineColor: 'black'
        }]
      },
      navajoco: {
        coalition: false,
        shapefile: true,
        number_markers: true,
        border: true,
        sideload: false,
        current_districts: "Supervisorial Districts",
        boundaries: []
      },
      san_dimas: {
        coalition: false,
        shapefile: true,
        number_markers: true,
        border: true,
        sideload: false
      },
      marinco: {
        coalition: false,
        shapefile: true,
        number_markers: true,
        border: true,
        current_districts: "Marin County",
        boundaries: [{
          path: "municipalities/california/marinco",
          id: "cities_towns",
          label: "Cities and Towns",
          centroids: false,
          fill: false
        }, {
          path: "school_districts/california/marinco",
          id: "school_districts",
          label: "School Districts",
          centroids: false,
          fill: false
        }]
      },
      oxnarduhsd: {
        coalition: false,
        shapefile: true,
        number_markers: true,
        border: true,
        boundaries: [{
          path: "school_districts/california/oxnarduhsd_elementary",
          id: "elementary_schools",
          label: "Elementary School Attendance Boundaries",
          centroids: false,
          fill: false
        }, {
          path: "municipalities/california/oxnarduhsd",
          id: "cities_towns",
          label: "Cities and Towns",
          centroids: false,
          fill: false
        }]
      },
      anaheim: {
        coalition: false,
        shapefile: true,
        number_markers: true,
        border: true,
        sideload: false,
        current_districts: true
      },
      arcadia: {
        coalition: false,
        shapefile: true,
        number_markers: true,
        border: true,
        sideload: false,
        current_districts: true
      },
      la_mirada: {
        coalition: false,
        shapefile: true,
        number_markers: true,
        border: true,
        sideload: false,
        current_districts: true
      },
      lakewood: {
        coalition: false,
        shapefile: true,
        number_markers: true,
        border: true,
        sideload: false
      },
      stlouis: {
        shapefile: true,
        number_markers: true,
        border: true
      },
      placentia: {
        coalition: false,
        shapefile: true,
        number_markers: true,
        border: true,
        sideload: false,
        current_districts: true
      },
      san_bruno: {
        coalition: false,
        shapefile: true,
        number_markers: true,
        border: true,
        sideload: false
      },
      ca_sonoma: {
        coalition: false,
        border: true,
        shapefile: true,
        number_markers: true,
        current_districts: true
      },
      sunnyvale: {
        coalition: false,
        border: true,
        shapefile: true,
        number_markers: true,
        current_districts: true
      },
      laverne: {
        coalition: false,
        border: true,
        shapefile: true,
        number_markers: true
      },
      pomona: {
        coalition: false,
        border: true,
        shapefile: true,
        number_markers: true,
        current_districts: true
      },
      ca_richmond: {
        coalition: false,
        border: true,
        shapefile: true,
        number_markers: true,
        current_districts: true
      },
      elcajon: {
        coalition: false,
        border: true,
        shapefile: true,
        number_markers: true,
        current_districts: true
      },
      ca_carlsbad: {
        coalition: false,
        border: true,
        shapefile: true,
        number_markers: true,
        current_districts: true
      },
      encinitas: {
        coalition: false,
        border: true,
        shapefile: true,
        number_markers: true,
        current_districts: true
      },
      buenapark: {
        coalition: false,
        border: true,
        shapefile: true,
        number_markers: true,
        current_districts: true
      },
      halfmoon: {
        coalition: false,
        border: true,
        shapefile: true,
        number_markers: true,
        current_districts: true
      },
      ca_stockton: {
        coalition: false,
        border: true,
        shapefile: true,
        number_markers: true,
        current_districts: true
      },
      lodi: {
        coalition: false,
        border: true,
        shapefile: true,
        number_markers: true,
        current_districts: true
      },
      ca_pasadena: {
        coalition: false,
        border: true,
        shapefile: true,
        number_markers: true,
        current_districts: true
      },
      ca_goleta: {
        coalition: false,
        border: true,
        shapefile: true,
        number_markers: true
      },
      ca_glendora: {
        coalition: false,
        border: true,
        shapefile: true,
        number_markers: true
      },
      ca_santabarbara: {
        coalition: false,
        border: true,
        shapefile: true,
        number_markers: true,
        current_districts: true
      },
      ca_fresno: {
        coalition: false,
        border: true,
        shapefile: true,
        number_markers: true,
        current_districts: true
      },
      ca_fresno_ci: {
        coalition: false,
        border: true,
        shapefile: true,
        number_markers: true,
        current_districts: true
      },
      ca_nevada: {
        coalition: false,
        border: true,
        shapefile: true,
        number_markers: true,
        current_districts: true
      },
      ca_merced: {
        coalition: false,
        border: true,
        shapefile: true,
        number_markers: true,
        current_districts: true
      },
      ca_kings: {
        coalition: false,
        border: true,
        shapefile: true,
        number_markers: true,
        current_districts: true
      },
      lake_el: {
        coalition: false,
        border: true,
        shapefile: true,
        number_markers: true,
        current_districts: true
      },
      ca_chino: {
        coalition: false,
        border: true,
        shapefile: true,
        number_markers: true,
        current_districts: true
      },
      ca_campbell: {
        coalition: false,
        border: true,
        shapefile: true,
        number_markers: true,
        current_districts: true
      },
      ca_fremont: {
        coalition: false,
        border: true,
        shapefile: true,
        number_markers: true,
        current_districts: true
      },
      ca_buellton: {
        coalition: false,
        border: true,
        shapefile: true,
        number_markers: true
      },
      ca_vallejo: {
        coalition: false,
        border: true,
        shapefile: true,
        number_markers: true,
        current_districts: true
      },
      ca_grover: {
        coalition: false,
        border: true,
        shapefile: true,
        number_markers: true
      },
      ca_oceano: {
        coalition: false,
        border: true,
        shapefile: true,
        number_markers: true
      },
      ca_sm_county: {
        coalition: false,
        border: true,
        shapefile: true,
        number_markers: true,
        current_districts: true
      },
      sbusd: {
        coalition: false,
        border: true,
        number_markers: true,
        school_districts: true,
        municipalities: true
      },
      pvsd: {
        coalition: false,
        border: true,
        number_markers: true,
        load_coi: true,
        boundaries: [{
          id: 'es_boundary',
          label: 'Elementary School Attendance Boundaries',
          path: 'school_districts/california/pvsd_feeder',
          lineColor: 'black'
        }, {
          id: 'citycouncil',
          label: 'Camarillo City Council Districts (2010)',
          path: 'current_districts/california/camarillo_city_council',
          lineColor: 'black'
        }, {
          id: 'places',
          label: 'Census Places',
          path: 'neighborhoods/california/camarillo_places',
          lineColor: 'black'
        }]
      },
      ca_sanbenito: {
        coalition: false,
        border: true,
        shapefile: true,
        number_markers: true,
        current_districts: true
      },
      ca_marin: {
        coalition: false,
        border: true,
        shapefile: true,
        number_markers: true,
        current_districts: true
      },
      ca_watsonville: {
        coalition: false,
        border: true,
        shapefile: true,
        number_markers: true
      },
      ca_marina: {
        coalition: false,
        border: true,
        shapefile: true,
        number_markers: true,
        current_districts: true
      },
      ca_arroyo: {
        coalition: false,
        border: true,
        shapefile: true,
        number_markers: true
      },
      ca_cvista: {
        coalition: false,
        border: true,
        shapefile: true,
        number_markers: true,
        current_districts: true
      },
      ca_camarillo: {
        coalition: false,
        border: true,
        shapefile: true,
        number_markers: true,
        current_districts: true
      },
      ca_bellflower: {
        coalition: false,
        border: true,
        shapefile: true,
        number_markers: true,
        current_districts: true
      },
      napa2021: {
        border: true,
        shapefile: true,
        number_markers: true // contiguity: 2,

      },
      napacounty2021: {
        border: true,
        shapefile: true,
        number_markers: true,
        // contiguity: 2,
        municipalities: true
      },
      ca_tuolumne: {
        border: true,
        shapefile: true,
        number_markers: true,
        municipalities: true
      },
      napa_boe: {
        border: true,
        shapefile: true,
        number_markers: true,
        municipalities: true
      },
      napa_college: {
        border: true,
        shapefile: true,
        number_markers: true,
        municipalities: true
      },
      santa_clara_h2o: {
        border: true,
        shapefile: true,
        number_markers: true,
        municipalities: true
      },
      santarosa: {
        border: true,
        shapefile: true,
        number_markers: true,
        municipalities: false,
        coalition: false,
        current_districts: true
      },
      ca_sanmateo: {
        number_markers: true,
        // contiguity: 2,
        border: true,
        shapefile: true,
        neighborhood_borders: 'Neighborhoods'
      },
      ca_santa_ana: {
        number_markers: true,
        border: true,
        shapefile: true
      },
      ca_kern: {
        number_markers: true,
        border: true,
        // contiguity: 2,
        shapefile: true,
        municipalities: true
      },
      ca_poway: {
        coalition: false,
        number_markers: true
      },
      ca_torrance: {
        coalition: false,
        number_markers: true
      },
      menlo_park: {
        border: true,
        find_unpainted: true,
        boundaries: [{
          id: 'schools',
          label: 'School Districts',
          path: 'school_districts/california/menlo_park',
          centroids: true,
          fill: true,
          fill_alt: 'orange'
        }, {
          id: 'neighborhood',
          label: 'Neighborhoods',
          path: 'neighborhoods/california/menlo_park',
          centroids: true,
          fill: true,
          fill_alt: true
        }, {
          id: 'flooded',
          label: 'Flood Zone',
          path: 'menlo_park_floodzone',
          fill: '#8090c2'
        }, {
          id: 'menloh2o',
          label: 'California Water Service',
          path: 'menlo_park_water',
          fill: '#c6dbef' // centroids: true,

        }, {
          id: 'menloh2o2',
          label: 'East Palo Alto Water District',
          path: 'menlo_park_water2',
          fill: '#9ecae1' // centroids: true,

        }, {
          id: 'menloh2o5',
          label: 'Palo Alto Park Water District',
          path: 'menlo_park_water5',
          fill: '#6baed6' // centroids: true,

        }, {
          id: 'menloh2o3',
          label: 'Menlo Park Water District',
          path: 'menlo_park_water3',
          fill: '#3182bd' // centroids: true,

        }, {
          id: 'menloh2o4',
          label: 'O’Connor Water District',
          path: 'menlo_park_water4',
          fill: '#08519c' // centroids: true,

        }, {
          id: 'menlomulti',
          label: 'Multi-Family Parcels',
          path: 'menlo_park_multifamily'
        }]
      },
      ca_imperial: {
        number_markers: true,
        border: true,
        shapefile: true,
        municipalities: "Census Places",
        find_unpainted: true
      },
      ojai: {
        number_markers: true,
        border: true,
        shapefile: true,
        find_unpainted: true
      },
      ca_foothill: {
        number_markers: true,
        border: true,
        shapefile: true,
        find_unpainted: true
      },
      ca_sanjoaquin: {
        number_markers: true,
        border: true,
        shapefile: true,
        municipalities: true,
        boundaries: [{
          id: 'bg_gj',
          label: 'Block Groups',
          path: 'ca_sanjoaquin_bg'
        }, {
          id: 'tract_gj',
          label: 'Tracts',
          path: 'ca_sanjoaquin_tract',
          centroids: true
        }]
      },
      rp_lax: {
        border: true,
        shapefile: true,
        number_markers: true,
        // contiguity: 2,
        coalition: false,
        current_districts: 'Current Council Districts',
        boundaries: [{
          id: 'latimes_places',
          label: 'LA Times Neighborhoods',
          path: 'neighborhoods/lax_LATimes_Neighborhood',
          centroids: true
        }, {
          id: 'ncouncil_places',
          label: 'Neighborhood Councils',
          path: 'neighborhoods/lax_neighborhood_council',
          centroids: true
        }]
      },
      ca_butte: {
        border: true,
        shapefile: true,
        number_markers: true,
        // contiguity: 2,
        municipalities: 'Census Designated Places',
        current_districts: true,
        native_american: true,
        boundaries: [{
          id: 'greenline',
          label: 'Greenline',
          path: 'ca_butte_greenline',
          lineColor: '#070',
          lineWidth: 2.5
        }]
      },
      ca_humboldt: {
        border: true,
        shapefile: true,
        // contiguity: 2,
        number_markers: true,
        municipalities: true,
        sideload: true,
        native_american: true
      },
      ca_oakland: {
        border: true,
        shapefile: true,
        number_markers: true,
        find_unpainted: true
      },
      ca_martinez: {
        border: true,
        shapefile: true,
        number_markers: true // contiguity: 2,

      },
      carpinteria: {
        border: true,
        shapefile: true,
        number_markers: true
      },
      ca_brentwood: {
        border: true,
        shapefile: true,
        number_markers: true,
        coalition: false
      },
      ca_riverside: {
        border: true,
        shapefile: true,
        number_markers: true,
        coalition: false,
        boundaries: [{
          id: 'council_districts',
          label: 'Current Wards (enacted 2012)',
          path: 'current_districts/california/ca_riverside'
        }, {
          id: 'neighborhood',
          label: 'Neighborhoods',
          path: 'neighborhoods/california/ca_riverside',
          namefield: 'Neighborho',
          centroids: true
        }]
      },
      ca_rohnert: {
        border: true,
        shapefile: true,
        number_markers: true,
        coalition: false
      },
      ca_millbrae: {
        border: true,
        number_markers: true,
        coalition: false
      },
      ca_belmont: {
        border: true,
        number_markers: true,
        coalition: false
      },
      ca_elkgrove: {
        border: true,
        number_markers: true,
        coalition: false,
        boundaries: [{
          id: 'council_districts',
          label: 'City Council Districts (enacted 2011)',
          path: 'ca_elkgrove/city_council_districts'
        }, {
          id: 'city_limits_census_day_2020',
          label: 'City Limits before Census Day 2020',
          path: 'ca_elkgrove/city_limits_census_day_2020'
        }, {
          id: 'special_planning_areas',
          label: 'Special Planning Areas',
          path: 'ca_elkgrove/special_planning_areas'
        }]
      },
      az_pima: {
        border: true,
        number_markers: true,
        coalition: true,
        native_american: true,
        shapefile: true,
        boundaries: [{
          id: 'current_supervisor_dists',
          label: 'Current Supervisor/P.C.C. Districts',
          path: 'az_pima/current_supervisor_dists'
        }, {
          id: 'incorp_jurisdictions',
          label: 'Incorporated Jurisdictions',
          path: 'az_pima/incorp_jurisdictions'
        }, {
          id: "incumbent_precincts",
          label: "Voter Precincts Containing Incumbent Elected Official’s Residence",
          path: "az_pima/incumbent_precincts"
        }, {
          id: 'school_districts',
          label: 'School Districts',
          centroids: true,
          namefield: 'SDISTNAME',
          path: 'az_pima/school_districts'
        }]
      },
      az_maricopa: {
        border: true,
        number_markers: true,
        coalition: false,
        boundaries: [{
          id: 'school',
          label: 'School Districts',
          path: 'az_maricopa/school'
        }, {
          id: 'congressional',
          label: 'Congressional Districts',
          path: 'az_maricopa/congressional'
        }, {
          id: "legislative",
          label: "Legislative Districts",
          path: "az_maricopa/legislative"
        }, {
          id: 'current',
          label: 'Current Districts',
          path: 'az_maricopa/current'
        }, {
          id: 'cities',
          label: 'Cities',
          centroids: true,
          namefield: 'Juris',
          path: 'az_maricopa/cities'
        }]
      },
      sanjoseca: {
        border: true,
        shapefile: true,
        number_markers: true,
        boundaries: [{
          id: 'sj_places',
          label: 'Neighborhoods',
          path: 'neighborhoods/sanjose_neighborhoods',
          centroids: true
        }]
      },
      ca_scvosa: {
        border: true,
        number_markers: true,
        coalition: false,
        boundaries: [{
          id: 'fee_title',
          label: 'Protected Lands: Fee Title',
          path: 'ca_scvosa/fee_title'
        }, {
          id: 'conservation_easement',
          label: 'Protected Lands: Conservation Easements',
          path: 'ca_scvosa/conservation_easement'
        }, {
          id: 'schools',
          label: 'K-12 Schools',
          path: 'ca_scvosa/schools',
          centroids: true,
          namefield: 'School'
        }, {
          id: 'census_places',
          label: 'Census Places',
          path: 'ca_scvosa/census_places',
          centroids: true
        }]
      },
      ca_west_sac: {
        border: true,
        number_markers: true,
        coalition: false
      },
      ca_diamond_bar: {
        border: true,
        number_markers: true,
        coalition: false,
        boundaries: [{
          id: 'parks',
          label: 'Parks',
          centroids: true,
          namefield: 'NAME',
          path: 'ca_diamond_bar/parks'
        }, {
          id: 'school_districts',
          label: 'School Districts',
          centroids: true,
          namefield: 'NAME',
          path: 'ca_diamond_bar/school_districts',
          lineWidth: 0.5
        }]
      },
      ca_fpud: {
        border: true,
        number_markers: true,
        coalition: false,
        boundaries: [{
          id: 'current_divisions',
          label: 'Current Divisions',
          path: 'ca_fpud/current_divisions'
        }]
      },
      indianapolis_cc: {
        border: true,
        number_markers: true,
        coalition: false,
        boundaries: [{
          id: 'neighborhoods',
          label: 'Neighborhoods',
          path: 'indianapolis_cc/neighborhoods',
          centroids: true,
          namefield: 'NAME'
        }, {
          id: 'cities_and_towns',
          label: 'Cities and Towns',
          path: 'indianapolis_cc/cities_and_towns',
          centroids: true,
          namefield: 'CITYNAME'
        }]
      },
      nm_abq: {
        border: true,
        number_markers: true,
        coalition: false,
        boundaries: [{
          id: 'current_districts',
          label: 'City Council Districts (enacted 2011)',
          path: 'nm_abq/current_districts'
        }, {
          id: 'incumbents',
          label: "Current City Councilor Locations",
          path: 'nm_abq/incumbents',
          centroids: true,
          namefield: 'Name'
        }]
      },
      redwood: {
        border: true,
        shapefile: true,
        number_markers: true,
        // contiguity: 2,
        current_districts: true,
        school_districts: true,
        neighborhood_borders: true
      },
      ca_ventura: {
        border: true,
        shapefile: true,
        number_markers: true,
        municipalities: true
      },
      ca_yolo: {
        border: true,
        shapefile: true,
        number_markers: true,
        municipalities: true
      },
      longbeach: {
        border: true,
        shapefile: true,
        number_markers: true,
        find_unpainted: true,
        current_districts: true
      },
      ca_solano: {
        border: true,
        shapefile: true,
        number_markers: true,
        municipalities: true
      },
      ca_sc_county: {
        border: true,
        shapefile: true,
        number_markers: true,
        municipalities: true
      },
      ca_siskiyou: {
        border: true,
        shapefile: true,
        number_markers: true,
        municipalities: true
      },
      sanluiso: {
        coalition: false,
        number_markers: true,
        // contiguity: 2,
        shapefile: true,
        border: true,
        municipalities: true // sideload: true,

      },
      ccsanitation: {
        shapefile: true
      },
      ccsanitation2: {
        shapefile: true,
        border: true,
        current_districts: true,
        number_markers: true
      },
      santa_clara: {
        border: true
      },
      napa: {
        number_markers: true,
        border: true
      },
      napaschools: {
        number_markers: true,
        coalition: false,
        border: true
      },
      chicago: {
        number_markers: true,
        multiyear: 2019,
        border: true,
        parties: ["Rahm Emanuel", "Jesus \u201CChuy\u201D Garc\xEDa", "Lori Lightfoot", "Toni Preckwinkle"]
      },
      colorado: {
        number_markers: true,
        county_brush: true,
        native_american: true,
        contiguity: 2,
        shapefile: true,
        find_unpainted: true,
        load_coi: false
      },
      connecticut: {
        county_brush: true,
        native_american: true,
        number_markers: true,
        contiguity: 2,
        shapefile: true,
        find_unpainted: true,
        load_coi: false
      },
      dc: {
        number_markers: true,
        contiguity: 2,
        shapefile: true,
        find_unpainted: true
      },
      delaware: {
        number_markers: true,
        native_american: true,
        contiguity: 2,
        shapefile: true,
        find_unpainted: true
      },
      florida: {
        native_american: true,
        number_markers: true,
        county_brush: true,
        shapefile: true,
        find_unpainted: true,
        sideload: true,
        portal: {
          endpoint: "https://portal.florida-mapping.org"
        }
      },
      miamifl: {
        number_markers: true,
        neighborhoods: true,
        border: true
      },
      miamidade: {
        number_markers: true,
        neighborhoods: true,
        boundaries: [{
          path: 'city_border/miamifl',
          id: 'citybor',
          label: 'Show City Border'
        }]
      },
      fl_hills: {
        number_markers: true,
        shapefile: true
      },
      fl_orange: {
        number_markers: true,
        shapefile: true
      },
      fl_osceola: {
        number_markers: true,
        shapefile: true
      },
      orlando: {
        number_markers: true,
        shapefile: true,
        border: true
      },
      tampa: {
        number_markers: true,
        shapefile: true,
        border: true
      },
      kissimmee: {
        number_markers: true,
        shapefile: true
      },
      georgia: {
        number_markers: true,
        county_brush: true,
        contiguity: 2,
        shapefile: true,
        find_unpainted: true
      },
      hawaii: {
        number_markers: true,
        native_american: true,
        county_brush: true,
        shapefile: true
      },
      idaho: {
        native_american: true,
        number_markers: true,
        county_brush: true,
        shapefile: true,
        contiguity: 2,
        find_unpainted: true
      },
      illinois: {
        number_markers: true,
        county_brush: true,
        shapefile: true,
        find_unpainted: true
      },
      indiana: {
        number_markers: true,
        county_brush: true,
        shapefile: true,
        find_unpainted: true,
        school_districts: true,
        current_districts: true,
        municipalities: 'Cities and Towns',
        portal: {
          endpoint: 'https://portal.indiana-mapping.org'
        }
      },
      iowa: {
        number_markers: true,
        contiguity: 2,
        shapefile: true // find_unpainted: true,

      },
      kansas: {
        native_american: true,
        number_markers: true,
        county_brush: true,
        shapefile: true,
        find_unpainted: true
      },
      kentucky: {
        number_markers: true,
        county_brush: true,
        shapefile: true,
        find_unpainted: true
      },
      lax: {
        neighborhoods: true,
        number_markers: true,
        contiguity: 2,
        shapefile: true,
        find_unpainted: true,
        boundaries: [{
          id: 'va2010',
          label: 'State Assembly',
          path: 'lax_2010'
        }, {
          id: 'va2013',
          label: 'State Senate',
          path: 'lax_senate'
        }, {
          id: 'lax_ush',
          label: 'US House',
          path: 'lax_congress'
        }]
      },
      little_rock: {
        number_markers: true
      },
      louisiana: {
        native_american: true,
        county_brush: true,
        // lakes
        number_markers: true,
        // fetch is failing?
        contiguity: 2,
        shapefile: true,
        find_unpainted: true,
        load_coi: false
      },
      la_vra: {
        native_american: true,
        vra_effectiveness: true,
        county_brush: true,
        // lakes
        number_markers: true
      },
      batonrouge: {
        number_markers: true,
        shapefile: true,
        border: true // find_unpainted: true, COI only

      },
      maine: {
        native_american: true,
        number_markers: true,
        shapefile: true,
        find_unpainted: true
      },
      maryland: {
        number_markers: true,
        county_brush: true,
        // absentee: true,
        shapefile: true,
        find_unpainted: true,
        load_coi: false
      },
      baltimore: {
        border: true,
        number_markers: true,
        shapefile: true,
        contiguity: 2,
        boundaries: [{
          id: 'cityprec',
          label: 'Voter Precincts',
          path: 'baltimore-precincts'
        }]
      },
      ma: {
        number_markers: true,
        shapefile: true,
        // find_unpainted: true,
        portal: {
          endpoint: 'https://www.massachusetts-mapping.org'
        }
      },
      ma_vra: {
        number_markers: true,
        vra_effectiveness: true // shapefile: true,
        // find_unpainted: true,

      },
      ma_vra2: {
        number_markers: true // vra_effectiveness: true,
        // shapefile: true,
        // find_unpainted: true,

      },
      boston22: {
        number_markers: true,
        shapefile: true,
        border: true,
        boundaries: [{
          id: 'council',
          label: 'Current Districts',
          path: 'boston-council',
          namefield: 'DISTRICT',
          centroids: true,
          lineColor: '#007',
          lineWidth: 2
        }, {
          id: 'precincts',
          label: 'Precinct Names',
          path: 'boston-precincts',
          namefield: 'DISTRICT',
          centroids: true
        }]
      },
      lowell: {
        neighborhoods: true,
        contiguity: 2,
        number_markers: true,
        shapefile: true,
        coalition: false,
        border: true // find_unpainted: true,

      },
      ma_worcester_fix: {
        number_markers: true,
        coalition: false,
        border: true,
        shapefile: true,
        boundaries: [{
          id: 'city_council',
          label: 'City Council Districts',
          path: 'ma_worcester/city_council'
        }, {
          id: 'wards',
          label: 'Wards (2020)',
          path: 'ma_worcester/worcester-wards'
        }, {
          id: "voting_precincts",
          label: "Voting Precincts (2020)",
          path: "ma_worcester/worcester-precincts"
        }]
      },
      in_bloomington: {
        number_markers: true,
        coalition: false,
        border: true
      },
      massachusetts: {
        portal: {
          endpoint: 'https://www.massachusetts-mapping.org'
        }
      },
      michigan: {
        load_coi: true,
        coi: {
          tilesets: [{
            source: {
              type: "vector",
              url: "mapbox://districtr.michigan_bg_clusters"
            },
            type: "fill",
            sourceLayer: "michigan_bg_clusters",
            clusterLayer: true
          }],
          clusterKey: "cluster",
          clusterData: {
            url: "/assets/clusters/MI/clusters.json"
          }
        },
        number_markers: true,
        native_american: true,
        county_brush: true,
        shapefile: true,
        find_unpainted: true,
        current_districts: true,
        school_districts: true,
        municipalities: true,
        contiguity: 2,
        portal: {
          endpoint: 'https://www.michigan-mapping.org'
        }
      },
      minnesota: {
        number_markers: true,
        county_brush: true,
        native_american: true,
        shapefile: true,
        find_unpainted: true
      },
      mn2020acs: {
        number_markers: true,
        county_brush: true,
        native_american: true,
        shapefile: true,
        find_unpainted: true
      },
      olmsted: {
        number_markers: true,
        border: true,
        boundaries: [{
          path: 'city_border/rochestermn',
          id: 'citybor',
          label: 'Show Rochester Border'
        }]
      },
      rochestermn: {
        number_markers: true,
        border: true
      },
      washington_mn: {
        border: true,
        number_markers: true,
        shapefile: true
      },
      stlouis_mn: {
        border: true,
        number_markers: true,
        shapefile: true,
        boundaries: [{
          path: 'city_border/duluth',
          id: 'citybor',
          label: 'Show Duluth Border'
        }]
      },
      minneapolis: {
        border: true,
        number_markers: true,
        shapefile: true,
        boundaries: [{
          id: 'minn_wards',
          label: 'Current City Council Wards',
          path: 'current_districts/minnesota/city_council/minneapolis',
          centroids: true
        }, {
          id: 'minn_park_dists',
          label: 'Current Park Districts',
          path: 'current_districts/minnesota/park_districts/minneapolis',
          centroids: true
        }, {
          id: 'minn_neighborhoods',
          label: 'Neighborhoods',
          path: 'neighborhoods/minnesota/minneapolis',
          centroids: true
        }],
        portal: {
          endpoint: "https://portal.minneapolis-mapping.org"
        }
      },
      mississippi: {
        number_markers: true,
        county_brush: true,
        native_american: true,
        contiguity: 2,
        shapefile: true,
        find_unpainted: true
      },
      missouri: {
        number_markers: true,
        county_brush: true,
        shapefile: true,
        load_coi: false,
        // find_unpainted: true,
        school_districts: true,
        contiguity: 2,
        portal: {
          endpoint: "https://portal.missouri-mapping.org"
        },
        coi: {
          tilesets: [{
            source: {
              type: "vector",
              url: "mapbox://districtr.missouri_bg_clusters"
            },
            type: "fill",
            sourceLayer: "missouri_bg_clusters",
            clusterLayer: true
          }],
          clusterKey: "cluster",
          clusterData: {
            url: "/assets/clusters/MO/clusters.json"
          }
        }
      },
      montana: {
        native_american: true,
        number_markers: true,
        shapefile: true,
        find_unpainted: true,
        county_brush: true
      },
      mt_pris_adj: {
        native_american: true,
        number_markers: true // shapefile: true,

      },
      nebraska: {
        number_markers: true,
        native_american: true,
        county_brush: true,
        // absentee: true,
        shapefile: true,
        load_coi: false // find_unpainted: true,

      },
      nevada: {
        native_american: true,
        number_markers: true,
        county_brush: true,
        shapefile: true,
        find_unpainted: true,
        contiguity: 2
      },
      newhampshire: {
        number_markers: true,
        shapefile: true,
        // find_unpainted: true,
        school_districts: true
      },
      newjersey: {
        number_markers: true,
        county_brush: true,
        shapefile: true,
        find_unpainted: true,
        contiguity: 2
      },
      new_mexico: {
        number_markers: true,
        county_brush: true,
        native_american: true,
        contiguity: 2,
        current_districts: true,
        shapefile: true,
        find_unpainted: true,
        block_assign: true
      },
      new_mexico_portal: {
        number_markers: true,
        county_brush: true,
        native_american: true,
        contiguity: 2,
        current_districts: true,
        shapefile: true,
        find_unpainted: true,
        election_history: false,
        block_assign: true,
        portal: {
          endpoint: 'https://portal.newmexico-mapping.org'
        }
      },
      new_mexico_bg: {
        native_american: true,
        shapefile: true,
        current_districts: true,
        county_brush: true,
        // find_unpainted: true,
        portal: {
          endpoint: 'https://portal.newmexico-mapping.org'
        }
      },
      santafe: {
        number_markers: true,
        contiguity: 2,
        shapefile: true // find_unpainted: true,

      },
      newyork: {
        number_markers: true,
        county_brush: true,
        native_american: true,
        shapefile: true // find_unpainted: true,

      },
      nyc_popdemo: {
        number_markers: true,
        shapefile: true,
        coalition: true,
        sideload: true,
        boundaries: [{
          id: 'nyc_district',
          label: 'City Council Districts (2012)',
          path: 'current_districts/nyc/city_council',
          centroids: false,
          lineColor: '#007'
        }, {
          id: 'nyc_comm',
          label: 'Community Boards link:https://communityprofiles.planning.nyc.gov/',
          path: 'current_districts/nyc/community',
          centroids: false,
          lineColor: '#700'
        }, {
          id: 'nyc_boro',
          label: 'Boroughs',
          path: 'current_districts/nyc/boroughs',
          centroids: false
        }]
      },
      northcarolina: {
        number_markers: true,
        county_brush: true,
        native_american: true,
        coi2: true,
        current_districts: true,
        shapefile: true,
        find_unpainted: true,
        coalition: false
      },
      forsyth_nc: {
        contiguity: 2,
        shapefile: true,
        boundaries: [{
          id: 'citybor',
          label: 'Show Winston-Salem Border',
          path: 'forsyth_nc_muni'
        }]
      },
      buncombe: {
        contiguity: 2,
        shapefile: true,
        number_markers: true,
        border: true,
        boundaries: [{
          path: 'city_border/asheville',
          id: 'citybor',
          label: 'Show Asheville Border'
        }]
      },
      northdakota: {
        native_american: true,
        number_markers: true,
        county_brush: true,
        shapefile: true,
        find_unpainted: true
      },
      nd_benson: {
        native_american: true,
        number_markers: true,
        shapefile: true,
        county_filter: ["all", [">", ["get", "GEOID20"], "38005"], ["<", ["get", "GEOID20"], "38006"]]
      },
      nd_dunn: {
        native_american: true,
        number_markers: true,
        shapefile: true,
        county_filter: ["all", [">", ["get", "GEOID20"], "38025"], ["<", ["get", "GEOID20"], "38026"]]
      },
      nd_mckenzie: {
        native_american: true,
        number_markers: true,
        shapefile: true,
        county_filter: ["all", [">", ["get", "GEOID20"], "38053"], ["<", ["get", "GEOID20"], "38054"]]
      },
      nd_mountrail: {
        native_american: true,
        number_markers: true,
        shapefile: true,
        county_filter: ["all", [">", ["get", "GEOID20"], "38061"], ["<", ["get", "GEOID20"], "38062"]]
      },
      nd_ramsey: {
        native_american: true,
        number_markers: true,
        shapefile: true,
        county_filter: ["all", [">", ["get", "GEOID20"], "38071"], ["<", ["get", "GEOID20"], "38072"]]
      },
      nd_rollette: {
        native_american: true,
        number_markers: true,
        shapefile: true,
        county_filter: ["all", [">", ["get", "GEOID20"], "38079"], ["<", ["get", "GEOID20"], "38080"]]
      },
      nd_sioux: {
        native_american: true,
        number_markers: true,
        shapefile: true,
        county_filter: ["all", [">", ["get", "GEOID20"], "38085"], ["<", ["get", "GEOID20"], "38086"]]
      },
      ohio: {
        number_markers: true,
        county_brush: true,
        shapefile: true,
        // find_unpainted: true - needs contiguity
        portal: {
          endpoint: 'https://portal.ohio-mapping.org'
        },
        school_districts: true,
        current_districts: true,
        // COI clusters.
        coi: {
          tilesets: [{
            source: {
              type: "vector",
              url: "mapbox://districtr.ohio_bg_clusters"
            },
            type: "fill",
            sourceLayer: "ohio_bg_clusters",
            clusterLayer: true
          }],
          clusterKey: "cluster",
          clusterData: {
            url: "/assets/clusters/OH/clusters.json"
          }
        }
      },
      ohcentral: {
        multiyear: 2019,
        number_markers: true,
        shapefile: true,
        school_districts: true,
        municipalities: 'Cities and Towns',
        portal: {
          endpoint: 'https://portal.ohio-mapping.org'
        }
      },
      ohakron: {
        multiyear: 2019,
        number_markers: true,
        shapefile: true,
        school_districts: true,
        portal: {
          endpoint: 'https://portal.ohio-mapping.org'
        }
      },
      ohcin: {
        multiyear: 2019,
        number_markers: true,
        shapefile: true,
        school_districts: true,
        portal: {
          endpoint: 'https://portal.ohio-mapping.org'
        }
      },
      ohcle: {
        multiyear: 2019,
        number_markers: true,
        shapefile: true,
        school_districts: true,
        portal: {
          endpoint: 'https://portal.ohio-mapping.org'
        }
      },
      ohse: {
        multiyear: 2019,
        number_markers: true,
        shapefile: true,
        school_districts: true,
        portal: {
          endpoint: 'https://portal.ohio-mapping.org'
        }
      },
      ohtoledo: {
        multiyear: 2019,
        number_markers: true,
        shapefile: true,
        school_districts: true,
        portal: {
          endpoint: 'https://portal.ohio-mapping.org'
        }
      },
      akroncanton: {
        number_markers: true,
        shapefile: true,
        border: true,
        portal: {
          endpoint: 'https://portal.ohio-mapping.org'
        }
      },
      cincinnati: {
        number_markers: true,
        shapefile: true,
        border: true,
        portal: {
          endpoint: 'https://portal.ohio-mapping.org'
        }
      },
      clevelandeuclid: {
        number_markers: true,
        shapefile: true,
        border: true,
        portal: {
          endpoint: 'https://portal.ohio-mapping.org'
        }
      },
      columbus: {
        number_markers: true,
        shapefile: true,
        border: true,
        portal: {
          endpoint: 'https://portal.ohio-mapping.org'
        }
      },
      dayton: {
        number_markers: true,
        shapefile: true,
        border: true,
        portal: {
          endpoint: 'https://portal.ohio-mapping.org'
        }
      },
      limaoh: {
        number_markers: true,
        shapefile: true,
        border: true,
        portal: {
          endpoint: 'https://portal.ohio-mapping.org'
        }
      },
      mansfield: {
        number_markers: true,
        shapefile: true,
        border: true,
        portal: {
          endpoint: 'https://portal.ohio-mapping.org'
        }
      },
      portsmouthoh: {
        number_markers: true,
        shapefile: true,
        border: true,
        portal: {
          endpoint: 'https://portal.ohio-mapping.org'
        }
      },
      toledo: {
        number_markers: true,
        shapefile: true,
        border: true,
        portal: {
          endpoint: 'https://portal.ohio-mapping.org'
        }
      },
      youngstown: {
        number_markers: true,
        shapefile: true,
        border: true,
        portal: {
          endpoint: 'https://portal.ohio-mapping.org'
        }
      },
      oklahoma: {
        number_markers: true,
        native_american: true,
        county_brush: true,
        contiguity: 2,
        shapefile: true,
        find_unpainted: true
      },
      ontarioca: {
        number_markers: true,
        border: true
      },
      oregon: {
        number_markers: true,
        county_brush: true,
        native_american: true,
        contiguity: 2,
        shapefile: true,
        find_unpainted: true
      },
      portlandor: {
        number_markers: true,
        contiguity: 2,
        border: true
      },
      pennsylvania: {
        number_markers: true,
        county_brush: true,
        shapefile: true,
        find_unpainted: true,
        sideload: true,
        load_coi: false,
        contiguity: 2,
        portal: {
          endpoint: "https://portal.pennsylvania-mapping.org"
        }
      },
      pa_adj: {
        number_markers: true,
        county_brush: true,
        shapefile: true,
        find_unpainted: true,
        sideload: true,
        load_coi: false,
        contiguity: 2
      },
      pa_prison_adj: {
        number_markers: true,
        county_brush: true,
        shapefile: true,
        find_unpainted: true,
        sideload: true,
        load_coi: false,
        contiguity: 2
      },
      philadelphia: {
        number_markers: true,
        contiguity: 2,
        find_unpainted: true,
        border: true
      },
      puertorico: {
        number_markers: true,
        county_brush: true,
        shapefile: true,
        find_unpainted: true
      },
      puertorico_prec: {
        number_markers: true,
        parties: ["Nuevo Progresista", "Popular Democrático", "Nuevo Progresista", "Popular Democrático"],
        shapefile: true // find_unpainted: true,

      },
      rhode_island: {
        number_markers: true,
        shapefile: true
      },
      providence_ri: {
        border: true
      },
      cranston_ri: {
        border: true,
        shapefile: true,
        number_markers: true,
        find_unpainted: true
      },
      southcarolina: {
        native_american: true,
        number_markers: true,
        county_brush: true,
        shapefile: true
      },
      southdakota: {
        native_american: true,
        number_markers: true,
        county_brush: true,
        shapefile: true
      },
      tennessee: {
        number_markers: true,
        county_brush: true,
        shapefile: true
      },
      texas: {
        number_markers: true,
        county_brush: true,
        contiguity: 2,
        shapefile: true,
        find_unpainted: true,
        sideload: true,
        portal: {
          endpoint: "https://portal.texas-mapping.org"
        }
      },
      tarranttx: {
        number_markers: true,
        contiguity: true
      },
      harristx: {
        number_markers: true,
        contiguity: true
      },
      tx_vra: {
        vra_effectiveness: true,
        county_brush: true,
        number_markers: true
      },
      dallastx: {
        border: true,
        number_markers: true,
        shapefile: true,
        current_districts: true
      },
      austin: {
        border: true,
        number_markers: true,
        shapefile: true,
        find_unpainted: true,
        contiguity: true
      },
      fortworth: {
        border: true,
        number_markers: true
      },
      houston: {
        border: true,
        number_markers: true,
        shapefile: true,
        multiyear: 2019
      },
      elpasotx: {
        border: true,
        number_markers: true,
        shapefile: true,
        boundaries: [{
          id: 'precinct_gj',
          label: 'Current Precincts',
          path: 'elpasotx_precincts',
          namefield: 'CURRENT_PC',
          unitType: 'block',
          centroids: true
        }]
      },
      elpaso2: {
        border: true,
        number_markers: true,
        shapefile: true,
        boundaries: [{
          id: 'precinct_gj',
          label: 'Current Precincts',
          path: 'elpasotx_precincts',
          namefield: 'CURRENT_PC',
          unitType: 'blockgroup',
          centroids: true
        }]
      },
      utah: {
        number_markers: true,
        county_brush: true,
        native_american: true,
        shapefile: true,
        // find_unpainted: true,
        portal: {
          endpoint: 'https://portal.utah-mapping.org'
        }
      },
      'grand_county_2': {
        portal: {
          endpoint: 'https://portal.utah-mapping.org'
        },
        shapefile: true
      },
      'grand_county_3': {
        portal: {
          endpoint: 'https://portal.utah-mapping.org'
        },
        shapefile: true
      },
      vermont: {
        number_markers: true,
        county_brush: true,
        shapefile: true // find_unpainted: true,

      },
      virginia: {
        number_markers: true,
        county_brush: true,
        // native_american: true,
        shapefile: true,
        // find_unpainted: true,
        load_coi: false,
        portal: {
          endpoint: 'https://portal.virginia-mapping.org'
        },
        boundaries: [{
          id: 'va2010',
          label: '2003-2013 Congressional Plan',
          path: 'virginia_2010'
        }, {
          id: 'va2013',
          label: '2013-2017 Congressional Plan',
          path: 'virginia_2013'
        }]
      },
      vabeach: {
        multiyear: 2018,
        number_markers: true,
        border: true // find_unpainted: true,

      },
      washington: {
        number_markers: true,
        county_brush: true,
        native_american: true,
        shapefile: true,
        find_unpainted: true,
        contiguity: 2
      },
      yakima_wa: {
        coalition: false
      },
      kingcountywa: {
        border: true
      },
      westvirginia: {
        number_markers: true,
        county_brush: true,
        shapefile: true,
        find_unpainted: true
      },
      wisconsin: {
        number_markers: true,
        county_brush: true,
        native_american: true,
        shapefile: true,
        find_unpainted: true,
        current_districts: true,
        school_districts: true,
        municipalities: true,
        contiguity: 2,
        portal: {
          endpoint: 'https://portal.wisconsin-mapping.org'
        },
        sideload: true,
        coi: {
          tilesets: [{
            source: {
              type: "vector",
              url: "mapbox://districtr.wisconsin_bg_clusters"
            },
            type: "fill",
            sourceLayer: "wisconsin_bg_clusters",
            clusterLayer: true
          }],
          clusterKey: "cluster",
          clusterData: {
            url: "/assets/clusters/WI/clusters.json"
          }
        }
      },
      wisconsin2020: {
        number_markers: true,
        county_brush: true,
        native_american: true,
        shapefile: true,
        find_unpainted: true,
        current_districts: true,
        school_districts: true,
        municipalities: true,
        contiguity: 2,
        portal: {
          endpoint: 'https://portal.wisconsin-mapping.org'
        },
        sideload: true,
        load_coi: true,
        coi: {
          tilesets: [{
            source: {
              type: "vector",
              url: "mapbox://districtr.wisconsin_bg_clusters"
            },
            type: "fill",
            sourceLayer: "wisconsin_bg_clusters",
            clusterLayer: true
          }],
          clusterKey: "cluster",
          clusterData: {
            url: "/assets/clusters/WI/clusters.json"
          }
        }
      },
      wisco2019acs: {
        number_markers: true,
        county_brush: true,
        native_american: true,
        shapefile: true,
        find_unpainted: true,
        current_districts: true,
        school_districts: true,
        municipalities: true,
        contiguity: 2,
        portal: {
          endpoint: 'https://portal.wisconsin-mapping.org'
        },
        sideload: true,
        coi: {
          tilesets: [{
            source: {
              type: "vector",
              url: "mapbox://districtr.wisconsin_bg_clusters"
            },
            type: "fill",
            sourceLayer: "wisconsin_bg_clusters",
            clusterLayer: true
          }],
          clusterKey: "cluster",
          clusterData: {
            url: "/assets/clusters/WI/clusters.json"
          }
        }
      },
      wyoming: {
        native_american: true,
        number_markers: true
      }
    };
    return status[id] || {};
  }

  var features = (function () {
    var state_table = "\n    <table id = \"state-table\" class='data'>\n    <thead class='display'><tr>\n    <th>State</th>\n    <th>Coalition Builder</th>\n    <th>Contiguity Checks</th>\n    <th>Current District Boundaries</th>\n    <th>Paint by County</th>\n    <th>Tribal Nations</th>\n    <th>Zoom to Unassigned Units</th>\n    <th>Shapefile Export</th>\n    <th>Block Groups</th>\n    <th>Precincts/Wards</th></tr>\n    </thead><tbody>";
    var other_table = "\n    <table id = \"other-table\" class='data'>\n    <thead class='display'><tr>\n    <th>Jurisdiction</th>\n    <th>Coalition Builder</th>\n    <th>Contiguity Checks</th>\n    <th>Current District Boundaries</th>\n    <th>Paint by County</th>\n    <th>Tribal Nations</th>\n    <th>Zoom to Unassigned Units</th>\n    <th>Shapefile Export</th>\n    <th>Block Groups</th>\n    <th>Precincts/Wards</th></tr>\n    </thead><tbody>";
    recursive_table_builder(state_table, other_table, 0);
  }); // couple useful globals

  var available_states = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Washington, DC', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Puerto Rico', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];
  var state_name_to_postal = {
    'Alabama': 'AL',
    'Alaska': 'AK',
    'Arizona': 'AZ',
    'Arkansas': 'AR',
    'California': 'CA',
    'Colorado': 'CO',
    'Connecticut': 'CT',
    'Delaware': 'DE',
    'District of Columbia': 'DC',
    'Florida': 'FL',
    'Georgia': 'GA',
    'Hawaii': 'HI',
    'Idaho': 'ID',
    'Illinois': 'IL',
    'Indiana': 'IN',
    'Iowa': 'IA',
    'Kansas': 'KS',
    'Kentucky': 'KY',
    'Louisiana': 'LA',
    'Maine': 'ME',
    'Maryland': 'MD',
    'Massachusetts': 'MA',
    'Michigan': 'MI',
    'Minnesota': 'MN',
    'Mississippi': 'MS',
    'Missouri': 'MO',
    'Montana': 'MT',
    'Nebraska': 'NE',
    'Nevada': 'NV',
    'New Hampshire': 'NH',
    'New Jersey': 'NJ',
    'New Mexico': 'NM',
    'New York': 'NY',
    'North Carolina': 'NC',
    'North Dakota': 'ND',
    'Ohio': 'OH',
    'Oklahoma': 'OK',
    'Oregon': 'OR',
    'Pennsylvania': 'PA',
    'Rhode Island': 'RI',
    'South Carolina': 'SC',
    'South Dakota': 'SD',
    'Tennessee': 'TN',
    'Texas': 'TX',
    'Utah': 'UT',
    'Vermont': 'VT',
    'Virginia': 'VA',
    'Washington': 'WA',
    'West Virginia': 'WV',
    'Wisconsin': 'WI',
    'Wyoming': 'WY',
    'Washington, DC': 'DC',
    'Puerto Rico': 'PR'
  };

  function recursive_table_builder(state_table, other_table, index) {
    // base case, we are done!
    if (index + 1 > available_states.length) {
      // close tables
      state_table = state_table + "</tbody></table>";
      other_table = other_table + "</tbody></table>"; // change the DOM

      var loading_message = document.getElementById('loading-msg');
      loading_message.remove();
      var state_table_container = document.getElementById('state-table-div');
      state_table_container.innerHTML = state_table;
      var other_table_container = document.getElementById('other-table-div');
      other_table_container.innerHTML = other_table; // DataTable constructor

      $(document).ready(function () {
        $('table.data').DataTable({
          "scrollY": "1200px",
          "scrollCollapse": true,
          "paging": false,
          "scrollX": true
        });
      });
      return;
    } // Recursive case, have to call the next state AFTER fetching


    var state = available_states[index];
    var str = state.concat(".json");
    fetch('../assets/data/modules/'.concat(str)).then(function (response) {
      return response.json();
    }).then(function (data) {
      var rows = build_table_for_state(data, state);
      state_table = state_table + rows['state'];
      other_table = other_table + rows['other'];
      return recursive_table_builder(state_table, other_table, index + 1);
    });
  }

  var build_table_for_state = function build_table_for_state(data, state) {
    var properties = ['coalition_builder', 'contiguity', 'current_districts', 'county_brush', 'native_american', 'find_unpainted', 'shapefile'];
    var state_html = "";
    var other_html = "";

    var _iterator = _createForOfIteratorHelper(data),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var module = _step.value;
        var spatial = spatial_abilities(module['id']);
        var row = module['name'] == state ? '<tr><td>' + module['name'] : '<tr><td>' + module['name'] + ', ' + state_name_to_postal[state];
        if (module['id'].substring(module['id'].length - 3) == "vra") row = row + " VRA";else if (["Wisconsin", "Puerto Rico", "Minnesota"].includes(state)) row = row + " (" + module['id'] + ")";
        row = row + '</td>'; // First do properties

        var _iterator2 = _createForOfIteratorHelper(properties),
            _step2;

        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var p = _step2.value;

            // deal with coalition builder differently since it is opt out
            if (p == 'coalition_builder') {
              if (p in spatial) row = row + '<td>❌</td>';else row = row + '<td>✅</td>';
              continue;
            } // for all others


            if (p in spatial) row = row + '<td>✅</td>';else row = row + '<td>❌</td>';
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }

        var units = {
          /**'blocks': "Not Available",**/
          "blockgroups": "Not Available",
          "precincts": "Not Available"
        };

        var _iterator3 = _createForOfIteratorHelper(module['units']),
            _step3;

        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
            var unit = _step3.value;
            var acc = "";
            var elections = [];

            var _iterator4 = _createForOfIteratorHelper(unit['columnSets']),
                _step4;

            try {
              for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                var c = _step4.value;
                var col_name = c['name']; // some error checking bc things are not standardized

                if (!('name' in c)) {
                  col_name = c['metadata']['year'].toString();
                } // if c is an election result


                if (is_numeric(col_name.substring(0, 4))) {
                  if (!elections.includes(col_name.substring(0, 4))) elections.push(col_name.substring(0, 4));
                } else acc = acc + col_name + ', ';
              } // final formatting

            } catch (err) {
              _iterator4.e(err);
            } finally {
              _iterator4.f();
            }

            var final = "";
            if (elections.length == 0) final = final + acc.substring(0, acc.length - 2);else final = final + acc + "Elections: " + elections.sort().join(', ');

            switch (unit['id']) {
              case 'blockgroups':
                units['blockgroups'] = final;
                break;
              //case 'blocks':
              //units['blocks'] = final;
              //break;

              case 'wards': // fall to precincts

              case 'precincts':
                units['precincts'] = final;
                break;
            }
          } // row = row + '<td>' + units['blocks'] + '</td>' 

        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }

        row = row + '<td>' + units['blockgroups'] + '</td>';
        row = row + '<td>' + units['precincts'] + '</td>';
        row = row + '</tr>';
        if (module['name'] == state) state_html = state_html + row;else other_html = other_html + row;
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    return {
      'state': state_html,
      'other': other_html
    };
  };

  function is_numeric(str) {
    return /^\d+$/.test(str);
  }

  return features;

})));
//# sourceMappingURL=features.js.map
