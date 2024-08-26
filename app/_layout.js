import { Stack } from 'expo-router';
import { Provider } from 'react-redux';
import store from '../redux/store'; // Import your store


export default function Layout() {
    return (
        <Provider store={store}>
            <Stack
                screenOptions={{
                    headerStyle: {
                        backgroundColor: '#f4511e',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                }}>
                <Stack.Screen name="index"  options={{
                    title: 'Home',
                }}/>
                <Stack.Screen name="place-details/[id]" options={{
                    title: 'Details',
                }}/>
            </Stack>
        </Provider>
    );
}