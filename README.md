# Quin Technical Assignment

## Installation and instructions

Clone down this repository. You will need node and npm installed globally on your machine.

Installation:

`npm install`

To Run Test Suite:

`npm test`

To Start development Server:

`npm run dev`

To Visit App:

`localhost:5173`

## Considerations

This test was really difficult, I understand the purpose was to do as much as I could in the allotted time.
At first I wasted too much time trying to find a good map library, the most popular ones kept giving me errors I didn't had the time to find answers to.
If I had more time, I'd love to make it work with react-globe and show a beautiful 3d dashboard showing the events, but I knew that was impossible to work in 3 hours, so I stick with the 2d ones. Eventually I found pigeon-maps, which was simple enough to make it work quickly.

My mindset going into the project was to get a rough idea of what the app should do and how would I structure it. So I began by setting up the api, a loading context and simple separation of components. I had some trouble with the api, as it was't clear by their documentation what the date format was, besides every query took upwards of 10seconds with my network.

I tried working with TDD, but my environment kept throwing errors with the typescript configuration and I couldn't make it work, so as time was running by I decided to get as much done as possible and try to solve the errors and the correct type checking after. Unfortunately even the basic setup and requests took too much of my time, and I deeply regret making some bad decisions at the start.

It's the first time I do this type of technical assignment, so I tried to focus on balancing best practices with results, creating a reducer for the form, using a good map library and good use of the useEffect hook. I'd say I'd submit a functional app with all requirements in less than 2 days.

If I had more time I'd start by fixing my environment errors, succesfully using TDD and probably use react-globe.
