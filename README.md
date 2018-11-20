## Narratiive Front End Dev Challenge

### Description

This challenge is just to test your React and general Javascript / HTML / CSS skills, you are required to implement a simple web application following this [wireframe](https://whimsical.co/Rx2GgQeNN1irBmM7rWoTD7).

The app is based on the data from `data.js`, it provides a search functionality to the customers. The key features:

- implement a search input to collect user's input
- based on the keyword a user types, get the result list from the data source, the match should cover:
    - name
    - key
    - description
- render the result as a list under the search input, for each result item, you need to render:
    - the image of the item
    - the name of the item
    - the description about the item
    - the hierarchy of the result in the source data (see from the wireframe)
- for each result item, a "select" button needs to be made to save the item as the user's choice
- all the user's chosen items need to be rendered on the right section.
- for each chosen item, a close icon need to be provided to remove it from the user's choice list.

### Other Infos

- Use only React to render all the visual elements.
- Try to split the whole UI into different components and organize them wisely.
- The wireframe is just a reference, keep the UI minimal.
- Focus on the requirements listed here, extra features do not help you pass the challenge.
- Keep readibility and maintainability in mind when writting your code.
- start your code from `js/app.js`