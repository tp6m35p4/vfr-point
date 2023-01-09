import { vfr } from "./VFR.js"
import {vfrrepoint} from "./VFRpoint.js"
import mapWKT from "./mapWKT.js"
import { stringify } from 'csv-stringify';
import * as fs from 'fs';
let vfrdata = vfr.features.map(x => mapWKT(x.properties.CORRIDOR, x.geometry))
let vfrPoints = vfrrepoint.features.map(x => mapWKT(x.properties.NAME_ENG, x.geometry, [x.properties.NAME_CHI, x.properties.COMPULSORY, x.properties.LAYER]))

stringify(vfrdata, {
    header: true,
    columns: ['title', 'WKT' ]
}, function (err, output) {
    fs.writeFile('someData.csv', output, function(err, result) {
     if(err) console.log('error', err);
   });
})

stringify(vfrPoints, {
    header: true,
    columns: ['title', 'coor', 'chinese', 'compulsory', 'route' ]
}, function (err, output) {
    fs.writeFile('vfrPoint.csv', output, function(err, result) {
     if(err) console.log('error', err);
   });
})