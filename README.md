# Introduction
This application was created with the use of ReactJS via create-react-app as. This is the first application that I have create using ReactJS and the first time I am experiencing React style of separation of concerns. This application is used to create a CV/Resume by simply entering in a coupl inputs and relevant information needed for filling the document. The left side of the application deals with the inputs and the right side will display the CV/resume.

# Build Process
As mentioned before, the application is separated into two main parts; The left (input) side and the right (output) side. The file organization is designed to mirror this separation of concerns. Both of these component types (input and output) are then conglomerated in the App.js component and then rendered in index.js. This separation of concerns (in my opinion) is a much better design pattern than with vanilla javascript. Every component is extremely modular and can be plugged in and out of the application without concern

# Initial Build
Initially, a static version of the final application was created to work out the styling and architecture of the application. This process of the project was used to design out the necessary components needed as well as fiddle with the auxilary components and to create new components if one got too big. 

# React logic
After the initial, static version was created, the logic and methods for each component was then implemented. States were used to store the relevant information that was entered into the input side of the application and then this information was then passed down as props to the output side and displayedo n the resume.

# Final Comments
As mentioned before, this was the first time for me experiencing the design pattern of React. Although there really isn't a strict pattern to follow, the architecture of React makes the design process and implementation process so much easier to understand. React helps to create a mental image of how the application is ran and how each part of the application communicates with the rest. No more finicky functions dealing with DOM manipulation. 