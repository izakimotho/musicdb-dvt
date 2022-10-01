# DVT-Assessment


### Get Started

- Install NodeJS **LTS** version from NodeJs Official Page</a>
- Download the product on this page
- Unzip the downloaded file to a folder in your computer
- Open Terminal
- Go to your file project (where you’ve unzipped the product)
- (If you are on a linux based terminal) Simply run `npm run install:clean`
- (If not) Run in terminal `npm install`
- (If not) Run in terminal `npm run build` 
- (If not) Run in terminal `npm start`
- (If not) Run in terminal `npm install clean`

- Navigate to https://localhost:4200
   ng serve --host 0.0.0.0 --port 4200 -o  --disable-host-check
## docker
### docker run container
Running the Docker Container
In order to build and run the docker container, open up a command prompt and navigate to the location of your Dockerfile in your project’s directory.

Execute the following command to build the docker image.

docker build -t kish/dvt-angular-assessment:latest  .

Now that we see our container is in the list, we can run the image using following command.

docker run -d -p 4205:80 kish/dvt-angular-assessment:latest

 As per the above command, we see that the container is up and running. If we now head to http://localhost:4205/ we can see the angular application is successfully dockerized.

Now that the application is running as expected, our next step would be to push our image to an image repository, to deploy our containers to a cloud service.

If you have a DockerHub account you can execute the following commands:

docker login -u <username> -p <password>
docker push kish/dvt-angular-assessment:latest