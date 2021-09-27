import styled from "styled-components/native";


export const Container = styled.SafeAreaView`
    background-color: #EEE;
    flex: 1;
`;

export const IntineraryArea = styled.View`
    position: absolute;
    left: 10px;
    top: 50px;
    right: 10px;
    background-color: #FFF;
    border-radius: 5px;
    box-shadow: 0px 0px 4px #999;
    border-color: #EEE;
    border-width: 1px;
`;

export const IntineraryItem = styled.TouchableHighlight`
    padding: 15px 20px;
    border-bottom-color: #EEE;
    border-bottom-width: 1px;
`;

export const IntineraryLabel = styled.View`
    flex-direction: row;
    align-items: center;
    margin-bottom: 10px;
`;

export const IntineraryPoint = styled.View`
    width: 10px;
    height: 10px;
    border-radius: 5px;
    background-color: ${props=>props.color};
`;

export const IntineraryTitle = styled.Text`
    margin-left: 10px;
    color: #999;
`;

export const IntineraryValue = styled.Text`
    font-size: 16px;
    color: #000;
`;


export const IntineraryPlaceHolder = styled.Text`
    font-size: 16px;
    color: #555;
    text-align: center;
`;

export const RequestDetails = styled.View`
    flex-direction: row;

`;

export const RequestDetail = styled.View`
    flex: 1;
    text-align: center;
`;

export const RequestTiitle = styled.Text`
    color: #999;
    font-weight: bold;
    font-size: 15px;
`;

export const RequestValue = styled.Text`
    color: #000;
    font-size: 17px;
`;

export const RequestButtons = styled.View`
    margin-top: 10px;
    flex-direction: row;
`;

export const RequestButton = styled.TouchableHighlight`
    height: 40px;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    background-color: ${props=>props.color};
    padding: 5px 10px;
    flex: ${props=>props.flex};
    margin: 0 5px;
`;

export const RequestButtonText = styled.Text`
    color: #FFF;
    font-size: 18px;
`;

export const LoadingArea = styled.View`
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0,0,0,0.5);
    justify-content: center;
    align-items: center;
`