import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Button, { BackGroundColor } from '../components/Button';
import { rowObj, useCalculator } from '../hooks/useCalculator';


export default function CalculatorScreen(){

    const { firstRow, secondRow, thirdRow, fourthRow, fifthRow, number, prevNumber, concatNumber } = useCalculator();

    return (
        <View style={styles.container}>
            <View style={styles.resultContainer}>
                {
                    prevNumber !== '0' && number !== '0' && (
                    <Text
                        style={styles.littleResult}
                        adjustsFontSizeToFit={true}
                        numberOfLines={1}>
                        {prevNumber}
                    </Text>
                    )
                }

                <Text
                    style={styles.result}
                    adjustsFontSizeToFit={true}
                    numberOfLines={1}
                >{number}</Text>
            </View>
            <View style={styles.row}>
                {
                    firstRow.map((e: rowObj) => (
                        <Button key={e.content} content={e.content} action={e.operation} backgroundColor={e.color} />
                    ))
                }
            </View>
            <View style={styles.row}>
                {
                    secondRow.map((e: rowObj) => (
                        <Button key={e.content} content={e.content} action={e.operation} backgroundColor={e.color} active={e.active}/>
                    ))
                }
            </View>
            <View style={styles.row}>
                {
                    thirdRow.map((e: rowObj) => (
                        <Button key={e.content} content={e.content} action={e.operation} backgroundColor={e.color} active={e.active}/>
                    ))
                }
            </View>
            <View style={styles.row}>
                {
                    fourthRow.map((e: rowObj) => (
                        <Button key={e.content} content={e.content} action={e.operation} backgroundColor={e.color} active={e.active}/>
                    ))
                }
            </View>
            <View style={styles.row}>
                <Button content="0" action={concatNumber} backgroundColor={BackGroundColor.gray} flex={2} aligment="flex-start" padding={30} />
                {
                    fifthRow.map((e: rowObj) => (
                        <Button key={e.content} content={e.content} action={e.operation} backgroundColor={e.color} active={e.active}/>
                    ))
                }
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        paddingHorizontal: 5,
        justifyContent: 'flex-end',
        flexDirection: 'column',
        flexWrap: 'wrap',
        flex: 1,
    },
    row: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignSelf: 'stretch',
    },
    resultContainer:{
        alignSelf: 'stretch',
        alignItems: 'flex-end',
        paddingHorizontal: 20,
    },
    result: {
        fontSize: 80,
        color: 'white',
        fontWeight: '300',
    },
    littleResult: {
        fontSize: 40,
        color: 'rgba(255, 255, 255, 0.5)',
    },
});
