import React, { useState, useEffect } from "react";
import { mapsAPI } from "../../config";

import { Modal } from "react-native";

import {
    ModalArea,
    DriverAvatar,
    DriverName,
    DriverStars,
    DriverPlate,
    DriverColor,
    DriverCar,
    DriverArea,
    DriverCarArea,
    DriverButton,
    DriverButtonText
} from './styled';


export default (props) => {

    console.log(props.driver);

    return (
        <Modal
            animationType="slide"
            transparent={false}
            visible={props.visible}
        >
            <ModalArea>
                <DriverArea>
                    <DriverAvatar source={{ uri: props.driver.avatar }} />
                    <DriverName>{props.driver.name}</DriverName>
                    <DriverStars>{props.driver.stars} estrelas</DriverStars>
                </DriverArea>
                <DriverCarArea>
                    <DriverCar>{props.driver.model}</DriverCar>
                    <DriverColor>{props.driver.color}</DriverColor>
                    <DriverPlate>{props.driver.board}</DriverPlate>
                </DriverCarArea>

                <DriverButton>
                    <DriverButtonText>Cancelar</DriverButtonText>
                </DriverButton>

            </ModalArea>
        </Modal>
    )
}