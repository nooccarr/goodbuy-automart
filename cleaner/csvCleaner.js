const csv = require('csv-parser');
const createCsvStringifier = require('csv-writer').createObjectCsvStringifier;
const fs = require('fs');
const Transform = require('stream').Transform;

const csvStringifier = createCsvStringifier({
  header: [
    { id: "", title: "id" },
    { id: "price", title: "price" },
    { id: "year", title: "year" },
    { id: "manufacturer", title: "manufacturer" },
    { id: "model", title: "model" },
    { id: "condition", title: "physical_condition" },
    { id: "cylinders", title: "cylinders" },
    { id: "fuel", title: "fuel" },
    { id: "odometer", title: "odometer" },
    { id: "title_status", title: "title_status" },
    { id: "transmission", title: "transmission" },
    { id: "VIN", title: "VIN" },
    { id: "drive", title: "drive" },
    { id: "type", title: "type" },
    { id: "paint_color", title: "paint_color" },
    { id: "image_url", title: "image_url" },
    { id: "lat", title: "latitude" },
    { id: "long", title: "longitude" },
    { id: "posting_date", title: "posting_date" }
  ],
});

let readStream = fs.createReadStream('./vehicles.csv');
let writeStream = fs.createWriteStream('./cleanedVehicles.csv');


class csvCleaner extends Transform {
  constructor(options) {
    super(options);
  }

  _transform(chunk, encoding, next) {
    let chunks = [];
    const filtered = ['id', 'region', 'region_url', 'url', 'size', 'description', 'state'];
    for (let key in chunk) {
      if (filtered.indexOf(key) >= 0) {
        delete chunk[key];
      } else if (key === 'cylinders') {
        chunk[key] = chunk[key].split(' ')[0];
      }
    }
    chunk = csvStringifier.stringifyRecords([chunk]);
    this.push(chunk);
    next();
  }
}

const transformer = new csvCleaner({ writableObjectMode: true });

writeStream.write(csvStringifier.getHeaderString());

readStream
  .pipe(csv())
  .pipe(transformer)
  .pipe(writeStream)
  .on('finish', () => {
    console.log('Finished transforming vehicles.csv');
  });