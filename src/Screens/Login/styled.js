import styled from "styled-components";

export const Container = styled.KeyboardAvoidingView`
    flex: 1;
`;

export const Header = styled.View`
    height: 150px;
    background-color: #3574CB;
    justify-content: center;
    padding-left: 20px;
`;

export const HeaderTitle = styled.Text`
    color: #FFF;
    font-size: 27px;
`;


export const Menu = styled.View`
    flex-direction: row;
    background-color: #3574CB;
    padding-left: 20px;
`;


export const MenuItem = styled.TouchableHighlight`
    padding: 20px;
    border-bottom-width: 5px;
    border-bottom-color: ${props => props.active ? '#FFF' : '#3574CB'};
`;



export const MenuItemText = styled.Text`
    color: #FFF;
    font-size: 16px;
`;


export const Input = styled.TextInput`
    margin: 10px; 20px;
    border-bottom-width: 2px;
    border-bottom-color: #CCC;
    height: 50px;
    font-size: 16px;
    color: #333;
`;

export const ActionButton = styled.TouchableHighlight`
    background-color: #3574CB;
    justify-content: center;
    align-items: center;
    height: 50px;
    border-radius: 5px;
    margin: 10px;
    box-shadow: 0px 2px 2px #999;
`;

export const ActionButtonText = styled.Text`
    color: #FFF;
    font-size: 18px;
`;