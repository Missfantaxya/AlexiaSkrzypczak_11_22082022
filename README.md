# KASA project

Here is the development repository for project 11 of the Application Developer - JavaScript React training from Openclassrooms.

## Installation and startup

1. Clone repository: `https://github.com/Missfantaxya/alexiaskrzypczak_11_22082022`
2. install modules: `$ npm install`
3. Starting the local server: `npm start`
4. access the project page: [http://localhost:3000](http://localhost:3000)

## Technical constraints

### Tools

This project uses the React library, it is made with [Create React App](https://create-react-app.dev/) and [React Router](https://reactrouter.com/en/main).
No external libraries have been installed
The option to use Sass for styling was not retained. The styling was done by default with CSS.

### React

- Cutting into modular and reusable components;  
- One component per file;  
- Logical structure of the different files;  
- Using props between components;  
- Use of state in components when necessary;  
- Event management;  
- Iteration of lists with map;  
- Use of prioritized functional component;  
- The 404 page is returned for each route that does not exist, or if a value present in the URL is not part of the data informed;  
- Router logic is combined in a single file.  

### React Router

- Route parameters are managed by React Router in the URL to retrieve information for each accommodation.  
- There is one page per route.  

### General

- The code must not produce any error or warning in the console.  

### features

- For scrolling photos in the gallery (Gallery component):
  - If the user is at the first image and clicks on "previous image", the gallery displays the last image.
  - Conversely, when the image displayed is the last in the gallery, if the user clicks on "next image", the gallery displays the first image.
  - If there is only one image, the "next" and "previous" buttons do not appear.
  - The gallery must always remain the same height, that indicated on the Figma model. The images will therefore be cropped and centered within the image frame.
- Collapse: By default, Collapses are closed on page initialization.
- If the Collapse is open, the user's click closes it.
  - Conversely, if the Collapse is closed, a click opens it.


