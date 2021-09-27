import styled from "styled-components/native";


export const ModalArea = styled.View`
    flex: 1;
    background-color: #FFF;
`;


export const ModalHeader = styled.View`
    flex-direction: row;
    padding: 20px;
    align-items: center;
`;


export const ModalClose = styled.TouchableHighlight`
    width: 40px;
    height: 40px;
    align-items: center;
    justify-content: center;
    background-color: #EEE;
    border-radius: 20px;
`;

export const ModalCloseText = styled.Text`


`;

export const ModalInput = styled.TextInput`
    margin-left: 20px;
    font-size: 18px;
    font-weight: bold;
    color: #000;
    flex: 1;
`


export const ModalResults =  styled.View`


`;


export const ModalResult = styled.TouchableHighlight`
    padding: 15px;
`;

export const ModalResultText = styled.Text`
    color: #000;
    font-size: 16px;
`;