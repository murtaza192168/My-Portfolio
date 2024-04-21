# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Containerizing the Application using Docker
  ### Build Docker image
  - To build a docker image, we need to build docker file.
  - Create a new file in root directory named **Dockerfile.dev** (useful for development only and not for production)
  - Implement commands in this file that are; ```FROM``` _[technology used]_, ```WORKDIR``` _[working directory]_, ```COPY``` _[mention source destination]_, ```RUN``` _[command for ex. npm install]_, ```COPY``` _[ignore files using gitignore and copy to main folder]_
  - #### Start building the image...
  - ```docker build -t reactapp .```
  - After this command, image build will start
  - To view the image with all details: ```docker image```
  - To run the image ```docker run -it --name reactApp -p 3000:3000 reactapp ```
  - _it_ means interactive mode, _reactApp_ is the application on which it is built, _-p_ port no. , _reactapp_ is the docker image name 
