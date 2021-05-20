# reactnative_restapi
This is a "Dockerized" API developed in nodeJS requested by Intracon

### Dependencies (installed automatically)

> nodeJS<br>
> nodemon<br>
> express<br>
> morgan<br>
> node-fetch<br>
> underscore-node


### Usage

Open terminal and run `docker build . -t api` to build the docker image.

When the build process has ended successfully, you can run:
```
docker run -p 3000:3000 api
```

At this point, the Api will start running in terminal at localhost (port 3000)

Finally, you can watch and monitor the API request status over terminal. Also you can open the next link to get the saved data:
> http://localhost:3000/api/phones
