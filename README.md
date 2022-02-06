# Services for Rolls apps

## Raison d'être
Centralize, version and share Services across Rolls Apps.

## Usage
- Clone the repository on your local machine
- `cd` into to the App where you are working
- Add the following entries to package.json `services` object
```json
"copy-services": "mv src/services /tmp/services; cp -r ../services/src/services src",
"fetch-params": "export $(grep -v '^#' .env | xargs); node src/fetchParameters.js",
"compress-images": "rm -r /tmp/img.backup; mv public/img /tmp/img.backup; node src/services/imageCompressor/imageCompressor.js"
```
- Run copy-services using `npm run copy-services;`

## A note on Symlinks
Creating a Symlink from `src/services` in Apps to `--> src/services` directory in this repo was attempted, but required extra Webpack configuration as a workaround in order to work. 

We'll move straight from this hyper-simple and confusing approach, to creating a private Node package server whenever is needed.