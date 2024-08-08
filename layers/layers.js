ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3403").setExtent([-2473172.943476, 5235956.269612, 2595738.383208, 6884158.136054]);
var wms_layers = [];

var format_AlbertaBoundary_0 = new ol.format.GeoJSON();
var features_AlbertaBoundary_0 = format_AlbertaBoundary_0.readFeatures(json_AlbertaBoundary_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3403'});
var jsonSource_AlbertaBoundary_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AlbertaBoundary_0.addFeatures(features_AlbertaBoundary_0);
var lyr_AlbertaBoundary_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AlbertaBoundary_0, 
                style: style_AlbertaBoundary_0,
                popuplayertitle: "Alberta Boundary",
                interactive: false,
                title: '<img src="styles/legend/AlbertaBoundary_0.png" /> Alberta Boundary'
            });
var format_FishStockingPoints_1 = new ol.format.GeoJSON();
var features_FishStockingPoints_1 = format_FishStockingPoints_1.readFeatures(json_FishStockingPoints_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3403'});
var jsonSource_FishStockingPoints_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FishStockingPoints_1.addFeatures(features_FishStockingPoints_1);
var lyr_FishStockingPoints_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FishStockingPoints_1, 
                style: style_FishStockingPoints_1,
                popuplayertitle: "Fish StockingPoints",
                interactive: true,
    title: 'Fish StockingPoints<br />\
    <img src="styles/legend/FishStockingPoints_1_0.png" /> 0 - 1807<br />\
    <img src="styles/legend/FishStockingPoints_1_1.png" /> 1807 - 5600<br />\
    <img src="styles/legend/FishStockingPoints_1_2.png" /> 5600 - 11500<br />\
    <img src="styles/legend/FishStockingPoints_1_3.png" /> 11500 - 20000<br />\
    <img src="styles/legend/FishStockingPoints_1_4.png" /> 20000 - 40000<br />\
    <img src="styles/legend/FishStockingPoints_1_5.png" /> 40000 - 110000<br />\
    <img src="styles/legend/FishStockingPoints_1_6.png" /> 110000 - 1613075<br />'
        });
var format_Waterbodies_2 = new ol.format.GeoJSON();
var features_Waterbodies_2 = format_Waterbodies_2.readFeatures(json_Waterbodies_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3403'});
var jsonSource_Waterbodies_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Waterbodies_2.addFeatures(features_Waterbodies_2);
var lyr_Waterbodies_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Waterbodies_2, 
                style: style_Waterbodies_2,
                popuplayertitle: "Waterbodies",
                interactive: false,
                title: '<img src="styles/legend/Waterbodies_2.png" /> Waterbodies'
            });

lyr_AlbertaBoundary_0.setVisible(true);lyr_FishStockingPoints_1.setVisible(true);lyr_Waterbodies_2.setVisible(true);
var layersList = [lyr_AlbertaBoundary_0,lyr_FishStockingPoints_1,lyr_Waterbodies_2];
lyr_AlbertaBoundary_0.set('fieldAliases', {'PRUID': 'PRUID', 'DGUID': 'DGUID', 'PRNAME': 'PRNAME', 'PRENAME': 'PRENAME', 'PRFNAME': 'PRFNAME', 'PREABBR': 'PREABBR', 'PRFABBR': 'PRFABBR', 'LANDAREA': 'LANDAREA', });
lyr_FishStockingPoints_1.set('fieldAliases', {'DISTRICT': 'DISTRICT', 'WATERBODY': 'WATERBODY', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'SPECIES': 'SPECIES', 'GENOTYPE': 'GENOTYPE', 'STOCKED -': 'STOCKED -', 'STOCKING N': 'STOCKING N', 'PLANNED ST': 'PLANNED ST', 'Map Author': 'Map Author', 'NumStock': 'NumStock', });
lyr_Waterbodies_2.set('fieldAliases', {'HYDROUID': 'HYDROUID', 'NAME': 'NAME', 'RANK': 'RANK', 'PRUID': 'PRUID', });
lyr_AlbertaBoundary_0.set('fieldImages', {'PRUID': 'TextEdit', 'DGUID': 'TextEdit', 'PRNAME': 'TextEdit', 'PRENAME': 'TextEdit', 'PRFNAME': 'TextEdit', 'PREABBR': 'TextEdit', 'PRFABBR': 'TextEdit', 'LANDAREA': 'TextEdit', });
lyr_FishStockingPoints_1.set('fieldImages', {'DISTRICT': 'TextEdit', 'WATERBODY': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'SPECIES': 'TextEdit', 'GENOTYPE': 'TextEdit', 'STOCKED -': 'TextEdit', 'STOCKING N': 'TextEdit', 'PLANNED ST': 'TextEdit', 'Map Author': 'TextEdit', 'NumStock': 'Range', });
lyr_Waterbodies_2.set('fieldImages', {'HYDROUID': 'TextEdit', 'NAME': 'TextEdit', 'RANK': 'Range', 'PRUID': 'TextEdit', });
lyr_AlbertaBoundary_0.set('fieldLabels', {'PRUID': 'no label', 'DGUID': 'no label', 'PRNAME': 'no label', 'PRENAME': 'no label', 'PRFNAME': 'no label', 'PREABBR': 'no label', 'PRFABBR': 'no label', 'LANDAREA': 'no label', });
lyr_FishStockingPoints_1.set('fieldLabels', {'DISTRICT': 'inline label - visible with data', 'WATERBODY': 'inline label - visible with data', 'Latitude': 'hidden field', 'Longitude': 'hidden field', 'SPECIES': 'inline label - visible with data', 'GENOTYPE': 'inline label - visible with data', 'STOCKED -': 'hidden field', 'STOCKING N': 'hidden field', 'PLANNED ST': 'hidden field', 'Map Author': 'header label - always visible', 'NumStock': 'inline label - always visible', });
lyr_Waterbodies_2.set('fieldLabels', {'HYDROUID': 'no label', 'NAME': 'no label', 'RANK': 'no label', 'PRUID': 'no label', });
lyr_Waterbodies_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});