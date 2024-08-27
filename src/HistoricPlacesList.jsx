import React, {useEffect} from 'react';
import { FlatList, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
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

    useEffect(() => {
        if (historicPlaces.length === 0) {
            dispatch(setHistoricPlacesList());
        }
    }, [historicPlaces]);


    const handleCheckboxPress = (item) => {
        const updatedData = updateData(historicPlaces, item.id, { visited: !item.visited })
        dispatch(setHistoricPlacesList(updatedData));
    };

    function updateData(historicPlacesList, id, new_data) {
        const index = historicPlacesList.findIndex(item => Number(item.id) === Number(id));
        if (index !== -1) {
            historicPlacesList[index] = { ...historicPlacesList[index], ...new_data };
        }
        return historicPlacesList;
    }


    const renderItem = ({ item }) => {
        return (
            <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10 }}>
                <TouchableOpacity onPress={() => handleCheckboxPress(item)}>
                    {item.visited ? (
                        <View style={{...styles.visit, ...styles.visited, "color": '#ffffff'}}>
                            <Text>Visited</Text>
                        </View>) : (
                            <View style={{...styles.visit}}>
                                <Text>X</Text>
                            </View>
                    )}
                </TouchableOpacity>


                <View style={{ marginLeft: 10 }}>
                    <Link href={`/place-details/${item.id}`}>
                        {item.name}
                    </Link>
                    <Link href={`/place-details/${item.id}`} style={{ fontSize: 12, color: 'gray' }}>{item.location}</Link>
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