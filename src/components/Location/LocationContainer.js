import React from 'react';
import Location from './Location';
import { useSelector } from 'react-redux';
import './index.scss';

const LocationContainer = () => {

    const coordinates = useSelector(({ coordinates, weather }) => ({
        country: coordinates?.country,
        city: coordinates?.name,
        date: weather?.current?.dt
    }))
    return <Location {...coordinates} />
};

export default LocationContainer;
