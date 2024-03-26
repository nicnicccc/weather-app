import './cityImage.css'

import Unsplash from 'unsplash-js';

const CityImage = (city) => {
    /*const unsplash = new Unsplash({
        applicationId: "kNCMhPbfXpM0Tn4e8H4oAh4ZicnQhxX-4ny7Py6OGGU",
        secret: "hrjwH5I4PyMYXIafBk7kmLRe9PYnV0LpBdAfMb-8XLE"
    });

    const data = unsplash.search.photos(city, 1)
    console.log('data', data)*/
    console.log('city', city)
    return (
        <div className={'city-image'}>
            <img src={city}/>
        </div>
    )
}

export default CityImage