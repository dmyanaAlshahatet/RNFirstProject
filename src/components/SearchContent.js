import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import searchData from './searchData';

const SearchContent = props => {

  return (
    <View>
      {searchData.map((data, index) => {
        return (
          <View key={index}>
            {data.id === 0 ? (
              <View style={styles.rowContainer}>
                {data.images.map((imageData, imgIndex) => {
                  return (
                    <TouchableOpacity
                      key={imgIndex}
                      onPressIn={() => props.data(imageData)}
                      onPressOut={() => props.data(null)}
                      style={styles.imageContainer}>
                      <Image
                        source={imageData}
                        style={styles.image}
                      />
                    </TouchableOpacity>
                  );
                })}
              </View>
            ) : null}
            {data.id === 1 ? (
              <View style={styles.rowContainer}>
                <View style={styles.columnContainer}>
                  {data.images.slice(0, 4).map((imageData, imgIndex) => {
                    return (
                      <TouchableOpacity
                        key={imgIndex}
                        onPressIn={() => props.data(imageData)}
                        onPressOut={() => props.data(null)}
                        style={[styles.imageContainer, styles.smallImageContainer]}>
                        <Image
                          source={imageData}
                          style={styles.image}
                        />
                      </TouchableOpacity>
                    );
                  })}
                </View>
                <TouchableOpacity
                  onPressIn={() => props.data(data.images[5])}
                  onPressOut={() => props.data(null)}
                  style={[styles.imageContainer, { width: '33%' }]}>
                  <Image
                    source={data.images[5]}
                    style={[styles.image, { height: 300 }]}
                  />
                </TouchableOpacity>
              </View>
            ) : null}
            {data.id === 2 ? (
              <View style={styles.rowContainer}>
                <TouchableOpacity
                  onPressIn={() => props.data(data.images[2])}
                  onPressOut={() => props.data(null)}
                  style={[styles.imageContainer, { width: '66.5%' }]}>
                  <Image
                    source={data.images[2]}
                    style={[styles.image, { height: 300 }]}
                  />
                </TouchableOpacity>
                <View style={styles.columnContainer}>
                  {data.images.slice(0, 2).map((imageData, imgIndex) => {
                    return (
                      <TouchableOpacity
                        key={imgIndex}
                        onPressIn={() => props.data(imageData)}
                        onPressOut={() => props.data(null)}
                        style={[styles.imageContainer, styles.smallImageContainer]}>
                        <Image
                          source={imageData}
                          style={styles.image}
                        />
                      </TouchableOpacity>
                    );
                  })}
                </View>
              </View>
            ) : null}
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%'
  },
  columnContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '66.5%',
    justifyContent: 'space-between',
  },
  imageContainer: {
    paddingBottom: 2,
    width: '33%',
  },
  smallImageContainer: {
    width: '49.5%',
  },
  image: {
    width: '100%',
    height: 150,
  },
});

export default SearchContent;
