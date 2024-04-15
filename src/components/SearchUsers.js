import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, Image, TouchableOpacity, StyleSheet, Keyboard } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Swipeable, GestureHandlerRootView } from 'react-native-gesture-handler/Swipeable';
// import Swipeout from 'react-native-swipeout';

const Users = (props) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [appointments, setAppointments] = useState([
    {
      id: 1,
      title: 'Big Boss Baby',
      BD: '2022-05-18',
      endDate: '3 Hours Ago',
      attendees: [
        { id: 1, remoteImage: 'https://junkee.com/wp-content/uploads/2017/04/static1.squarespace.jpg' },

      ],
      backgroundColor: '#ffdcb2',
      titleColor: '#ff8c00',

    },
    {
      id: 2,
      title: 'Jack William',
      BD: '2009-04-19',
      endDate: 'Just Now ',
      attendees: [
        { id: 2, remoteImage: 'https://m.media-amazon.com/images/S/aplus-media/vc/eeae6f85-4736-4672-9a64-a17ceefe4d87._SL300__.png' },

      ],
      backgroundColor: '#bfdfdf',
      titleColor: '#008080',
    },
    {
      id: 3,
      title: 'baby Sweetie',
      BD: '2022-05-19',
      endDate: '15 Hours Ago',
      attendees: [
        { id: 3, remoteImage: 'https://e7.pngegg.com/pngimages/231/25/png-clipart-boss-baby-character-illustration-the-boss-baby-triplets-big-boss-baby-staci-child-the-boss-baby-mammal-infant-thumbnail.png' },
      ],
      backgroundColor: '#e2caf8',
      titleColor: '#8a2be2',
    },
    {
      id: 4,
      title: 'Minister Didi',
      BD: '2022-05-19',
      endDate: '2 Minutes Ago ',
      attendees: [
        { id: 4, remoteImage: 'https://i.pinimg.com/originals/91/58/af/9158af3aadef84280c445ffab0c9b6fa.png' },
      ],
      backgroundColor: '#d8e4fa',
      titleColor: '#6495ed',
    },
    // Add more appointments here
  ]);

  const deleteAppointment = (key) => {
    // const arr = [...appointments];
    // arr.splice(key, 1);
    // setAppointments(arr);

    const filterData = appointments.filter((a) => a.id !== key)
    setAppointments(filterData);
  };

  const goHome = () => {
    props.navigation.goBack()
  }

  const renderUsersCard = ({ item, id }) => (
    <View style={[styles.card, { backgroundColor: item.backgroundColor }]}>
      {item.attendees.map((attendee) => (
        <Image key={attendee.id} source={{ uri: attendee.remoteImage }} style={styles.attendeeImage} />
      ))}
      <View style={styles.row}>
        <Text style={[styles.cardTitle, { color: item.titleColor }]}>{item.title}</Text>
        <AntDesign
          name="deleteuser"
          size={30}
          color="black"
          // style={{ marginRight: 0 }}
          onPress={() => {
            deleteAppointment(item.id);
          }} />
      </View>
      <View style={styles.cardDates}>
        <Text style={styles.cardDate}>{item.BD}</Text>
        <Text style={styles.LastSeen}> - {item.endDate}</Text>
      </View>
      <View style={styles.cardContent}>
        <View style={styles.attendeesContainer}>
        </View>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={styles.actionButton}>
            <Text style={styles.buttonText}>Call</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <Text style={styles.buttonText}>Chat</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>

  );

  const searchFilter = (item ) => {
    const query = searchQuery.toLowerCase();
    return item.title.toLowerCase().includes(query);
  };

  return (
    // <GestureHandlerRootView>
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.title}>Account Info</Text>
        <TouchableOpacity onPress={goHome}>
          <AntDesign name='arrowright' size={30} color='black' />
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <View style={styles.searchBar__clicked}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search ..."
            value={searchFilter}
            onChangeText={setSearchQuery}
            onPress={() => {
              Keyboard.dismiss();
            }}
          />
          <TouchableOpacity>
            <MaterialIcons name="cancel" size={24} color="#696969"  style={{ marginRight: 5, marginTop: 7 }}
              onPress={() => {
                Keyboard.dismiss();
                setSearchQuery("")
              }} />
          </TouchableOpacity>
        </View>
      </View>
      <FlatList
        contentContainerStyle={styles.listContainer}
        data={appointments.filter(searchFilter)}
        renderItem={renderUsersCard}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
    // </Swipeable>
    // </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "white",
  },
  goHomeIcon: {
    // marginTop:15,
    marginLeft: 350,
  },
  listContainer: {
    paddingHorizontal: 10,
    // borderWidth: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    marginLeft: 15,
    color: "black",
    fontFamily: 'serif',
  },
  row: {
    flexDirection: "row",
    justifyContent: 'space-between',
  },
  searchInput: {
    width: "90%",
    fontFamily: 'serif',
    fontWeight: 'bold',
    // borderWidth: 2,
    // borderRadius: 20,
    borderColor: '#A9A9A9',
    paddingHorizontal: 10,
  },
  searchBar__clicked: {
    // borderWidth: 1,
    marginLeft: 10,
    marginBottom: 10,
    flexDirection: "row",
    width: "95%",
    height: 40,
    backgroundColor: "#d9dbda",
    borderRadius: 20,
    justifyContent: "space-between",
  },
  card: {
    marginBottom: 20,
    padding: 10,
    borderRadius: 8,
    // borderWidth: 1,
    // borderColor: "#2f4f4f",
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingVertical: 5,
    // borderWidth: 1,
  },
  cardDates: {
    flexDirection: 'row',
    paddingVertical: 5,
    // borderWidth: 1,
  },
  cardDate: {
    color: 'black',
    fontWeight: 'bold'
  },
  cardContent: {
    justifyContent: 'space-between',
    paddingTop: 10,
    // borderWidth: 1,
  },
  attendeesContainer: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    // borderWidth: 1,
  },
  attendeeImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginLeft: 5,
    borderWidth: 0.5,
  },
  buttonsContainer: {
    flexDirection: 'row',
    // borderWidth: 1,
  },
  actionButton: {
    // borderWidth: 1,
    marginTop: 15,
    backgroundColor: '#2f4f4f',
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderRadius: 5,
    marginRight: 10,
  },
  buttonText: {
    color: 'white',
  },
});

export default Users;