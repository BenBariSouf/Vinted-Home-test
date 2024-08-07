# Vinted Home Assignment - Soufiane Ben Bari 

![Image 2024-08-08 at 00 18 08](https://github.com/user-attachments/assets/4eff0f0e-81fa-45bd-b1d8-4901996049ef)


## Features

- Fetch and display a gallery of photos from the [flickr API](https://www.flickr.com/services/api/flickr.photos.search.html).
- A responsive design to fit multiple screen sizes.
- Infinite Scrolling.
- Possibility to favourite photos (with favourites maintained on page reload).
- Lazy-loaded photos (A responsive image solution which saves traffic by loading higher quality images only when needed).
- And more...

## Project Structure

```
public
├── favicon.png
src
├── components
│   ├── Album.tsx
|   └── HeartIcon.tsx
|   └── Loader.tsx
|   └── Photo.tsx
├── hooks
|   └── index.ts
|   └── useFetch.ts
|   └── useInfiniteScroll.ts
|   └── useLazyLoad.ts
|   └── useLocalStorage.ts
├── styles
|   └── GlobalStyle.ts
|   └── StyledHeartIcon.ts
|   └── StyledLoader.ts
|   └── StyledPhoto.ts
|   └── StyledPhotoGrid.ts
|   └── index.ts
|   └── variables.ts
├── utils
|   └── index.ts
├── App.tsx
├── index.tsx
├── types.ts
tests
├── e2e
├── App.test.tsx
├── Photo.test.tsx
├── setupTests.ts
index.html
tsconfig.json
...
```

### Note
By default, the page size is set to 20 (`PAGESIZE = 20`). This means we fetch a quantity of 20 photos from the API at a time. Using infinite scrolling, we dynamically load another set of 20 photos as the user scrolls to the bottom of the page.

The logic for major features of the app is decoupled from the UI logic (using JS modules, custom hooks...), thus keeping in mind maintainability and ease of future improvement.


## Installation and setup

This project requires [node](http://nodejs.org) and [npm](https://npmjs.com) installed globally.

Clone the repository to a directory of your choosing

```sh
git clone https://github.com/BenBariSouf/Vinted-Home-test
```

Install the project dependencies

```sh
npm install
```


To start up the app locally

```sh
npm start
```

To run the unit tests

```sh
npm test
```

## Tech used

| Tech       | version |
| ---------- | ------- |
| node       | v18.6   |
| React      | 18.2.0  |
| styled-components       | 6.1.12  |
| vite       | 4.2.1   |
| typescript | 4.9.5   |
| jest        | 29.5.0  |

## License

[MIT](https://github.com/BenBariSouf/Vinted-Home-test/blob/main/LICENSE)
