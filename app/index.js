import {StyleSheet, View} from 'react-native';

import HistoricPlacesList from "../src/HistoricPlacesList";


export default function Page() {

    return (
        <View style={styles.container}>
            <HistoricPlacesList/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

