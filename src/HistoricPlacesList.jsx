import React, {useEffect, useState} from 'react';
import { FlatList, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
//import historicPlaces from "./../constants/historic-places.json";
import {Link} from "expo-router";
import {useDispatch, useSelector} from "react-redux";
import {setHistoricPlacesList} from "../redux/store";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22,
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
    visit: {
        width: 50,
        height: 20,
        borderRadius: 5,
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    visited: {
        backgroundColor: 'green'
    },
});

const HistoricPlacesList = () => {
    const dispatch = useDispatch();
    const {historicPlaces} = useSelector((state) => state.historicPlaces);

    const [selectedPlaces, setSelectedPlaces] = useState([]);

    useEffect(() => {
        if (historicPlaces.length === 0) {
            dispatch(setHistoricPlacesList());
        }
    }, []);


    const handleCheckboxPress = (place) => {
        const updatedSelectedPlaces = [...selectedPlaces];
        const index = updatedSelectedPlaces.indexOf(place);

        if (index === -1) {
            updatedSelectedPlaces.push(place);
        } else {
            updatedSelectedPlaces.splice(index, 1);
        }

        setSelectedPlaces(updatedSelectedPlaces);
    };


    const renderItem = ({ item }) => {
        let isChecked = selectedPlaces.includes(item);
        return (
            <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10 }}>
                <TouchableOpacity onPress={() => handleCheckboxPress(item)}>
                    {isChecked ? <View style={{...styles.visit, ...styles.visited, "color": '#ffffff'}}><Text>Visited</Text></View> : <View style={{...styles.visit}}/>}
                </TouchableOpacity>
                <View style={{ marginLeft: 10 }}>
                    <Link href={`/place-details/${item.id}`}>{item.name}</Link>
                    <Text style={{ fontSize: 12, color: 'gray' }}>{item.location}</Text>
                </View>
            </View>
        );
    };

    return (
        <FlatList
            data={historicPlaces}
            renderItem={renderItem}
            keyExtractor={(item) => item.name}
        />
    );
};

export default HistoricPlacesList;