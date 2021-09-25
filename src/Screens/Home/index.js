import React, {  useState,   useRef   } from "react";
import { Container } from './styled'

import MapView from 'react-native-maps';

export default () => {

    const map = useRef();

    const [mapLoc, setMapLoc] = useState({
        center: {
            latitude: 37.78825,
            longitude: -122.4324
        },
        zoom: 16,
        pitch: 0,
        altitude: 0,
        heading: 0
    })

    return(
        <Container>
            <MapView
                ref={map}
                style={{flex: 1}}
                provider={"google"}
                camera={mapLoc}
            ></MapView>
        </Container>
    )
}