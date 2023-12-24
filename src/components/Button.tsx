import React from 'react';
import { FlexAlignType, StyleSheet, Text, TouchableOpacity } from 'react-native';

interface ButtonProps {
    content: string,
    backgroundColor: BackGroundColor,
    action: (content: string) => void,
    flex?: number,
    aligment?: FlexAlignType | undefined,
    padding?: number,
    active?: boolean
}

export enum BackGroundColor {
    gray,
    orange,
    lightGray
}

export default function Button({ content, backgroundColor, action, flex = 0, aligment = 'center', padding = 0, active = false}: ButtonProps){

    switch (backgroundColor){
        case BackGroundColor.gray:
            styles.container = {
                ...styles.container,
                backgroundColor: '#2D2D2D',
            };
            styles.text = {
                ...styles.text,
                color: 'white',
            };
            break;
        case BackGroundColor.lightGray:
            styles.container = {
                ...styles.container,
                backgroundColor: '#9B9B9B',
            };
            styles.text = {
                ...styles.text,
                color: 'black',
            };
            break;
        case BackGroundColor.orange:
            styles.container = {
                ...styles.container,
                backgroundColor: active ? 'white' : 'orange',
            };
             styles.text = {
                ...styles.text,
                color: active ? 'orange' : 'white',
            };
            break;
    }
    return (
        <TouchableOpacity style={{
                ...styles.container,
                flex: flex,
            }}
            onPress={() => action(content) }
        >
            <Text style={{
                ...styles.text,
                alignSelf: aligment,
                paddingLeft: padding,
            }}>
                {content}
            </Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'orange',
        height: 80,
        width: 80,
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
    },
    text: {
        color: 'white',
        fontSize: 35,
        fontWeight: '400',
    },
});


