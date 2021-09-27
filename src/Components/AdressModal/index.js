import React, { useState, useEffect } from "react";

import GeoCoder from 'react-native-geocoding';
import { mapsAPI } from "../../config";

import { Modal } from "react-native";
import {
    ModalArea,
    ModalHeader,
    ModalClose,
    ModalCloseText,
    ModalInput,
    ModalResults,
    ModalResult,
    ModalResultText
} from './styled';

let timer;

export default (props) => {

    const [results, setResults] = useState([]);
    const [searchText, setSearchText] = useState('');


    useEffect(() => {
        GeoCoder.init(mapsAPI, { language: 'pt-br' });

    }, []);

    useEffect(() => {

        if (searchText) {

            if (timer) {
                clearTimeout(timer);
            }
            timer = setTimeout(async () => {

                const geo = await GeoCoder.from(searchText);

                if (geo.results.length > 0) {
                    let tmpResults = [];
                    for(let i in geo.results){
                        tmpResults.push({
                            address:geo.results[i].formatted_address,
                            latitude: geo.results[i].geometry.location.lat,
                            longitude: geo.results[i].geometry.location.lng
                        })
                    }
                    setResults(tmpResults);
                }else{
                    setResults([]);
                }


            }, 1000);

        }

    }, [searchText]);


    const handleCloseModal = () => {
        props.visibleAction(false);
    }

    const handleClose = () => {
        setResults([]);
        setSearchText('');
    }

    return (
        <Modal
            animationType="slide"
            transparent={false}
            visible={props.visible}
            onShow={handleClose}
            
        >
            <ModalArea>
                <ModalHeader>
                    <ModalClose onPress={handleCloseModal}>
                        <ModalCloseText>X</ModalCloseText>
                    </ModalClose>
                    <ModalInput
                        onChangeText={txt => setSearchText(txt)}
                        value={searchText}
                        autoFocus={true}
                        placeholder={props.title}
                        placeholderTextColor="#999" />
                </ModalHeader>
                <ModalResults>
                    {results.map((item, key) => (
                        <ModalResult key={key} underlayColor="#EEE">
                            <ModalResultText>{item.address}</ModalResultText>
                        </ModalResult>
                    ))}
                </ModalResults>
            </ModalArea>
        </Modal>
    )
}