import {AsyncPaginate} from "react-select-async-paginate";
import {useState} from "react";
import {geoApiOptions, url} from "../api";

const Search= ({onSearchChange}) => {

    const [search, setSearch] = useState(null)
    const handleOnChange = (searchData) => {
        setSearch(searchData)
        onSearchChange(searchData)
    }


    const loadOptions = (inputValue) => {
        console.log('Value', inputValue)
        return  fetch(`${url}/cities?&namePrefix=${inputValue}`, geoApiOptions)
            .then(response => response.json())
            .then(response => {
                return {
                    options: response.data.map((city) => {
                        return {
                            value: `${city.latitude} ${city.longitude}`,
                            label: `${city.name} ${city.countryCode}`
                        }
                    })
                }
            })
            .catch(err => console.error(err));

    }

    const customstyles = {
        control: (provided, state) => ({
            ...provided,
            backgroundColor: 'white',
            borderRadius: '5px',
            boxShadow: '0 0 20px lightgrey',
        }),
        option: (provided, state) => ({
            ...provided,
            backgroundColor: state.isFocused ? 'lightgrey' : null,
            color: 'black',
            opacity: state.isFocused ? '100%' : '80%'
        }),
    }

    return (
        <AsyncPaginate
            placeholder={'search'}
            debounceTimeout={600}
            value={search}
            onChange={handleOnChange}
            loadOptions={loadOptions}
            styles={customstyles}
        />
    )
}

export default Search;