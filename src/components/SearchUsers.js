import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, Image, TouchableOpacity, StyleSheet, Keyboard } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const User = (props) => {
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
    const filterData = appointments.filter((a) => a.id !== key)
    setAppointments(filterData);
  };

  const goHome = () => {
    props.navigation.goBack();
  };

  const renderUsersCard = ({ item }) => (
    <View style={[styles.card, { backgroundColor: item.backgroundColor }]}>
      <View style={styles.header}>
        <Text style={[styles.cardTitle, { color: item.titleColor }]}>{item.title}</Text>
        <TouchableOpacity onPress={() => deleteAppointment(item.id)}>
          <AntDesign name="deleteuser" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <View style={styles.subHeader}>
        <Text style={styles.cardDate}>{item.BD}</Text>
        <Text style={styles.LastSeen}>{item.endDate}</Text>
      </View>
      <View style={styles.attendeesContainer}>
        {item.attendees.map((attendee) => (
          <Image key={attendee.id} source={{ uri: attendee.remoteImage }} style={styles.attendeeImage} />
        ))}
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
  );

  const searchFilter = (item) => {
    if (item && item.title) {
      const query = searchQuery.toLowerCase();
      return item.title.toLowerCase().includes(query);
    }
    return false;
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Account Info</Text>
        <TouchableOpacity onPress={goHome}>
          <AntDesign name='arrowright' size={30} color='black' />
        </TouchableOpacity>
      </View>
      <View style={styles.searchBar}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search ..."
          value={searchQuery}
          onChangeText={setSearchQuery}
          onPress={() => Keyboard.dismiss()}
        />
        <TouchableOpacity onPress={() => setSearchQuery('')}>
          <MaterialIcons name="cancel" size={24} color="#696969" />
        </TouchableOpacity>
      </View>
      <FlatList
        contentContainerStyle={styles.container}
        data={appointments.filter(searchFilter)}
        renderItem={renderUsersCard}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,

    backgroundColor: "white",
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: "black",
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    backgroundColor: '#d9dbda',
    borderRadius: 20,
    paddingHorizontal: 10,
  },
  searchInput: {
    flex: 1,
    paddingHorizontal: 10,
  },
  card: {
    marginBottom: 20,
    padding: 10,
    borderRadius: 8,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  subHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  cardDate: {
    color: 'black',
    fontWeight: 'bold',
  },
  LastSeen: {
    color: 'black',
    opacity: 0.7,
  },
  attendeesContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  attendeeImage: {
    width: 30,
    height: 30,
    borderRadius: 20,
    marginLeft: 5,
    borderWidth: 0.5,
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  actionButton: {
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

export default User;
