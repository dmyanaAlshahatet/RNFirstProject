import { StyleSheet, Text, View } from 'react-native';
import React, { useContext } from 'react';
import RNFirstProjectContext from '../../../Store/RNFirstProjectContext';

const Screen3 = () => {
    const { scree1_c, setScreen1_c, scree2_c } = useContext(RNFirstProjectContext);

    // Data for rendering iterations
    const data = [
        { key: 1, value: scree1_c },
        { key: 2, value: scree2_c }
    ];

    return (
        <View>
            <Text>Screen3</Text>

            {/* Rendering iterations */}
            {data.map(item => (
                <Text key={item.key} style={styles.txt}>{`scree${item.key}_c: ${item.value}`}</Text>
            ))}
        </View>
    );
};

export default Screen3;

const styles = StyleSheet.create({
    txt: {
        fontSize: 30
    }
});
