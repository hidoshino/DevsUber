import React, { useState, useEffect, useRef } from "react";
import useDevsUberApi from '../../useDevsUberAPi';

import { mapsAPI } from "../../config";

import Geolocation from "@react-native-community/geolocation";
import GeoCoder from 'react-native-geocoding';
import MapView from 'react-native-maps';
import MapViewDirections from "react-native-maps-directions";

import AdressModal from "../../Components/AdressModal";

import {
    Container,
    IntineraryArea,
    IntineraryItem,
    IntineraryPoint,
    IntineraryTitle,
    IntineraryLabel,
    IntineraryValue,
    IntineraryPlaceHolder,
    RequestDetails,
    RequestDetail,
    RequestTiitle,
    RequestValue,
    RequestButtons,
    RequestButton,
    RequestButtonText
} from './styled'

export default () => {

    const map = useRef();
    const api = useDevsUberApi();



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

    const [toLoc, setToLoc] = useState({});
    const [fromLoc, setFromLoc] = useState({});
    const [showDirections, setShowDirections] = useState(false);
    const [requestDistance, setRequestDistance] = useState(0);
    const [requestTime, setRequestTime] = useState(0);
    const [requestPrice, setRequestPrice] = useState(0);

    const [modalTitle, setModalTitle] = useState('');
    const [modalVisible, setModalVisible] = useState(false);

    useEffect(() => {

        GeoCoder.init(mapsAPI, { language: 'pt-br' });
        getMyCurrentPosition();

    }, []);

    useEffect(() => {

        if (fromLoc.center && toLoc.center) {
            setShowDirections(true);
        }

    }, [toLoc])

    const getMyCurrentPosition = () => {
        Geolocation.getCurrentPosition(async (info) => {

            const geo = await GeoCoder.from(info.coords.latitude, info.coords.longitude);

            if (geo.results.length > 0) {
                const loc = {
                    name: geo.results[0].formatted_address,
                    center: {
                        latitude: info.coords.latitude,
                        longitude: info.coords.longitude
                    },
                    zoom: 16,
                    pitch: 0,
                    altitude: 0,
                    heading: 0
                }

                setMapLoc(loc);
                setFromLoc(loc);
                console.log(loc.center);
            }


        },
            (error) => {
                console.log(error);
            });
    };

    const handleFromClick = () => {
        setModalTitle("Escolha uma origem");
        setModalVisible(true);
    };

    const handleToClick = async () => {
        const geo = await GeoCoder.from('Natal Shooping');

        if (geo.results.length > 0) {
            const loc = {
                name: geo.results[0].formatted_address,
                center: {
                    latitude: geo.results[0].geometry.location.lat,
                    longitude: geo.results[0].geometry.location.lng
                },
                zoom: 16,
                pitch: 0,
                altitude: 0,
                heading: 0
            }

            setToLoc(loc);
            console.log(loc.center);
        }
    }

    const handleDirectionsReady = async (res) => {

        setRequestDistance(res.distance);
        setRequestTime(res.duration);

        const priceReq = await api.getRequestPrice(res.distance);

        if (!priceReq.error) {
            setRequestPrice(priceReq.price);
        }

        map.current.fitToCoordinates(res.coordinates, {
            edgePadding: {
                left: 50,
                right: 50,
                bottom: 50,
                top: 400
            }
        })

    }

    const handleMapChange = async () => {
        const cam = await map.current.getCamera();
        cam.altitude = 0;
        setMapLoc(cam);
    }

    const handleRequestCancel = () => {
        setToLoc({});
        setShowDirections(false);
        setRequestPrice(0);
        setRequestDistance(0);
        setRequestTime(0);

        setMapLoc(fromLoc);
    }

    const handleRequestGo = () => {

    }

    return (
        <Container>
            <AdressModal
                title={modalTitle}
                visible={modalVisible}
                visibleAction={setModalVisible}
            />
            <MapView
                ref={map}
                style={{ flex: 1 }}
                provider={"google"}
                camera={mapLoc}
                onRegionChangeComplete={handleMapChange}
            >
                {fromLoc.center &&
                    <MapView.Marker pinColor="black" coordinate={fromLoc.center} />
                }

                {toLoc.center &&
                    <MapView.Marker pinColor="black" coordinate={toLoc.center} />
                }

                {showDirections &&
                    <MapViewDirections
                        origin={fromLoc.center}
                        destination={toLoc.center}
                        strokeWidth={5}
                        strokeColor="black"
                        apikey={mapsAPI}
                        onReady={handleDirectionsReady}
                    />
                }

            </MapView>
            <IntineraryArea>
                <IntineraryItem onPress={handleFromClick} underlayColor="#EEE" >
                    <>
                        <IntineraryLabel>
                            <IntineraryPoint color="#0000FF" />
                            <IntineraryTitle>Origem</IntineraryTitle>
                        </IntineraryLabel>
                        {fromLoc.name &&
                            <IntineraryValue>{fromLoc.name}</IntineraryValue>
                        }
                        {!fromLoc.name &&
                            <IntineraryPlaceHolder>Escolha um local de origem</IntineraryPlaceHolder>
                        }
                    </>
                </IntineraryItem>
                <IntineraryItem onPress={handleToClick} underlayColor="#EEE" >
                    <>
                        <IntineraryLabel>
                            <IntineraryPoint color="#00FF00" />
                            <IntineraryTitle>Destino</IntineraryTitle>
                        </IntineraryLabel>
                        {toLoc.name &&
                            <IntineraryValue>{toLoc.name}</IntineraryValue>
                        }
                        {!toLoc.name &&
                            <IntineraryPlaceHolder>Escolha um local de destino</IntineraryPlaceHolder>
                        }
                    </>
                </IntineraryItem>
                {fromLoc.center && toLoc.center &&
                    <IntineraryItem>
                        <>
                            <RequestDetails>
                                <RequestDetail>
                                    <RequestTiitle>Distância</RequestTiitle>
                                    <RequestValue>{requestDistance > 0 ? `${requestDistance.toFixed(1)} Km` : '--'}</RequestValue>
                                </RequestDetail>
                                <RequestDetail>
                                    <RequestTiitle>Tempo</RequestTiitle>
                                    <RequestValue>{requestTime > 0 ? `${requestTime.toFixed(0)} mins` : '--'}</RequestValue>
                                </RequestDetail>
                                <RequestDetail>
                                    <RequestTiitle>Preço</RequestTiitle>
                                    <RequestValue>{requestPrice > 0 ? `R$ ${requestPrice.toFixed(2)}` : '--'}</RequestValue>
                                </RequestDetail>
                            </RequestDetails>
                            <RequestButtons>
                                <RequestButton flex={2} color="#27ae60" onPress={handleRequestGo} underlayColor="#EEE">
                                    <RequestButtonText>Solicitar Motorista</RequestButtonText>
                                </RequestButton>
                                <RequestButton flex={1} color="#FF0000" onPress={handleRequestCancel} underlayColor="#EEE">
                                    <RequestButtonText>Cancelar</RequestButtonText>
                                </RequestButton>
                            </RequestButtons>
                        </>
                    </IntineraryItem>
                }
            </IntineraryArea>
        </Container>
    )
}