## file-uploader
A simple file uploader using multer and express

## How to run the project in your local machine

1. Install node
2. Navigate to the project directory
3. Install the dependencies by running ```npm install```
4. Start the server by running ```npm run dev```
5. Open your browser and navigate to ```http://localhost:8080```


## How to run the project in a docker container wihout ssl sertificate

1. Install docker
2. Navigate to the project directory
3. create folder named ```auth``` in the project root directory
4. Navigate to the ```auth``` folder and generate basic auth credentials by running ```htpasswd -c -B -b .htpasswd user pass```
5. Navigate back to the project root directory
6. Build and run the docker container by running ```docker-compose -f docker-compose-dev.yml up```
7. Open your browser and navigate to ```http://localhost```

## How to run the project in a docker container with ssl sertificate

1. Install docker
2. Navigate to the project directory
3. create folder named ```auth``` in the project root directory
4. Navigate to the ```auth``` folder and generate basic auth credentials by running ```htpasswd -c -B -b .htpasswd user pass```
5. Navigate back to the project root directory
6. Modify the init_letsencrypt.sh file by replacing ```domain```and ```email``` variables with your domain and email
7. Run the init_letsencrypt.sh file by running ``` ./init_letsencrypt.sh```
8. Build and run the docker container by running ```docker-compose up```
9. Open your browser and navigate to ```https://yourdomain.com```
