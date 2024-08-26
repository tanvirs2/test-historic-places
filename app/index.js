import {StyleSheet, View} from 'react-native';

import HistoricPlacesList from "../src/HistoricPlacesList";
import { useDispatch, useSelector } from "react-redux";


export default function Page() {

    //const dispatch = useDispatch();
    //const reduxData = useSelector((state) => state);

    //console.log(marketplaceInfo, 'ddddd')

    /*return (
        <View>
            <Link href="/about">About</Link>
            {/!* ...other links *!/}
            <Link href="/user/bacon">View user</Link>
        </View>
    );*/
//setHistoricPlacesList
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

