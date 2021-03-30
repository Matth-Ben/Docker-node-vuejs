### create an image
docker build -t vue-node-image .

### run the image
docker run -d -it -p  3080:3080 --name vue-node-ui vue-node-image

### url
http://localhost:3080
