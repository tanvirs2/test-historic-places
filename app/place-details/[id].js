import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Button, Image} from 'react-native';
import {useLocalSearchParams, useRouter} from 'expo-router';
import {useDispatch, useSelector} from "react-redux";
import {setHistoricPlacesList} from "../../redux/store";

const PlaceDetails = () => {
    const {historicPlaces} = useSelector((state) => state.historicPlaces);
    const [place, setPlace] = useState({})
    const dispatch = useDispatch();
    const router = useRouter();
    const [selectedPlace_visited, setSelectedPlace_visited] = useState();

    const { id } = useLocalSearchParams();

    useEffect(() => {
        getPlaceData();
    }, [historicPlaces, place]);


    const getPlaceData = () => {
        let placeData = historicPlaces.find(place => Number(place.id) === Number(id));
        setPlace(placeData);
        setSelectedPlace_visited(placeData.visited)
    }


    function updateData(historicPlacesList, id, new_data) {
        const index = historicPlacesList.findIndex(item => Number(item.id) === Number(id));
        if (index !== -1) {
            historicPlacesList[index] = { ...historicPlacesList[index], ...new_data };
        }
        return historicPlacesList;
    }


    const handleCheckboxPress = (id) => {
        setSelectedPlace_visited(prevState => !prevState);
        const updatedData = updateData(historicPlaces, id, { visited: !selectedPlace_visited })
        dispatch(setHistoricPlacesList(updatedData));
    };

    return (
        <View style={{flex: 1}}>
            <View style={styles.container}>
                {/*<Image source={{ uri: place.image }} style={styles.image} />*/}
                <View>
                    <View style={{flexDirection: "row", justifyContent: "space-between"}}>
                        <Text style={styles.title}>{place.name}</Text>
                        <TouchableOpacity onPress={() => handleCheckboxPress(id)}>
                            {selectedPlace_visited ? (
                                <View style={{...styles.visit, ...styles.visited, "color": '#ffffff', ...styles.title}}>
                                    <Text>Visited</Text>
                                </View>) : (
                                <View style={{...styles.visit, ...styles.title}}>
                                    <Text>X</Text>
                                </View>
                            )}
                        </TouchableOpacity>
                    </View>

                </View>

                <Text style={styles.location}>Location: {place.location}</Text>
                <Text style={styles.description}>{place.description}</Text>

                <Image source={require('../../assets/images.jpeg')} style={{justifyContent: 'center', alignItems: 'center', marginTop:20}}/>
            </View>

            <TouchableOpacity style={{alignItems: 'center', justifyContent: 'center', marginBottom: 20, marginHorizontal: 50, backgroundColor: '#f4511e', borderRadius: 5}} onPress={() => router.back()}>
                <View style={{ padding: 10}}>
                    <Text>Back</Text>
                </View>
            </TouchableOpacity>
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
    },

    visit: {
        marginTop: 100,
        width: 80,
        height: 30,
        borderRadius: 5,
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    visited: {
        color: 'white',
        backgroundColor: 'green'
    },
});

export default PlaceDetails;