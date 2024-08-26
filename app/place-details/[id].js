import React, {useEffect, useState} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import {useSelector} from "react-redux";

const PlaceDetails = () => {
    const {historicPlaces} = useSelector((state) => state.historicPlaces);
    const [place, setPlace] = useState({})
    const { id } = useLocalSearchParams();

    const getPlaceData = () => {
        let placeData = historicPlaces.find(place => Number(place.id) === Number(id));
        setPlace(placeData);
    }

    useEffect(() => {
        getPlaceData();
    }, []);

    return (
        <View style={styles.container}>
            {/*<Image source={{ uri: place.image }} style={styles.image} />*/}
            <Text style={styles.title}>{place.name}</Text>
            <Text style={styles.location}>Location: {place.location}</Text>
            <Text style={styles.description}>{place.description}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f0f0f0'
    },
    image: {
        width: '100%',
        height: 200,
        borderRadius: 10
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 10
    },
    location: {
        fontSize: 16,
        color: 'gray',
        marginBottom: 10
    },
    description: {
        fontSize: 14
    }
});

export default PlaceDetails;