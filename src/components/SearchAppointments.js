import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, Image, TouchableOpacity, StyleSheet, Keyboard} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';

const AppointmentsScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [appointments, setAppointments] = useState([
    {
      id: 1,
      title: 'Appointment 1',
      startDate: '2023-05-18',
      endDate: '2023-05-18',
      attendees: [
        { id: 1, remoteImage: 'https://bootdey.com/img/Content/avatar/avatar1.png' },
        { id: 2, remoteImage: 'https://bootdey.com/img/Content/avatar/avatar2.png' },
      ],
      backgroundColor: '#ffdcb2',
      titleColor: '#ff8c00',

    },
    {
      id: 2,
      title: 'Appointment 2',
      startDate: '2023-05-19',
      endDate: '2023-05-19',
      attendees: [
        { id: 7, remoteImage: 'https://bootdey.com/img/Content/avatar/avatar2.png' },
        { id: 8, remoteImage: 'https://bootdey.com/img/Content/avatar/avatar4.png' },
        { id: 9, remoteImage: 'https://bootdey.com/img/Content/avatar/avatar6.png' },
      ],
      backgroundColor: '#bfdfdf',
      titleColor: '#008080',
    },
    {
      id: 3,
      title: 'Appointment 2',
      startDate: '2023-05-19',
      endDate: '2023-05-19',
      attendees: [
        { id: 10, remoteImage: 'https://bootdey.com/img/Content/avatar/avatar2.png' },
        { id: 11, remoteImage: 'https://bootdey.com/img/Content/avatar/avatar4.png' },
        { id: 12, remoteImage: 'https://bootdey.com/img/Content/avatar/avatar1.png' },
        { id: 13, remoteImage: 'https://bootdey.com/img/Content/avatar/avatar3.png' },
        { id: 14, remoteImage: 'https://bootdey.com/img/Content/avatar/avatar5.png' },
      ],
      backgroundColor: '#e2caf8',
      titleColor: '#8a2be2',
    },
    {
      id: 4,
      title: 'Appointment 2',
      startDate: '2023-05-19',
      endDate: '2023-05-19',
      attendees: [
        { id: 15, remoteImage: 'https://bootdey.com/img/Content/avatar/avatar2.png' },
        { id: 16, remoteImage: 'https://bootdey.com/img/Content/avatar/avatar4.png' },
      ],
      backgroundColor: '#d8e4fa',
      titleColor: '#6495ed',
    },
    // Add more appointments here
  ]);

  const removeAppointment = (key) => {
    setAppointments(appointments.filter((t ,id) => id.key !== key));
  };

  const removeAppointmentById = (id) => {
    setAppointments(appointments.filter((t) => t.id !== id));

  };

  const renderAppointmentCard = ({ item , id}) => (
    <View style={[styles.card, { backgroundColor: item.backgroundColor }]}>
      <Text style={[styles.cardTitle, { color: item.titleColor }]}>{item.title}</Text>
      <View style={styles.cardDates}>
        <Text style={styles.cardDate}>{item.startDate}</Text>
        <Text style={styles.cardDate}> - {item.endDate}</Text>
      </View>
      <View style={styles.cardContent}>
        <View style={styles.attendeesContainer}>
          <Entypo
            name="cross"
            size={20} color="gray"
            style={{ marginRight: 10 }}
            onPress={() => {
              removeAppointment(item.key);
            }} />
          {item.attendees.map((attendee) => (
            <Image key={attendee.id} source={{ uri: attendee.remoteImage }} style={styles.attendeeImage} />

          ))}
        </View>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={styles.actionButton}>
            <Text style={styles.buttonText}>Call</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <Text style={styles.buttonText}>Video</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <Text style={styles.buttonText}>Config</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  const searchFilter = (item) => {
    const query = searchQuery.toLowerCase();
    return item.title.toLowerCase().includes(query);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Account Info</Text>
      <TextInput
        style={styles.searchInput}
        placeholder="Search . . ."
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
      <FlatList
        contentContainerStyle={styles.listContainer}
        data={appointments.filter(searchFilter)}
        renderItem={renderAppointmentCard}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    // paddingTop:60,
  },
  listContainer: {
    paddingHorizontal: 10,
    // borderWidth: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: "black",
    fontFamily: 'serif',
  },
  // row:{
  //   flexDirection:"row",
  //   // borderWidth: 1,
  //   justifyContent:'space-between',
  // },
  searchInput: {
    height: 40,
    fontFamily: 'serif',
    fontWeight: 'bold',
    borderWidth: 2,
    borderRadius: 20,
    borderColor: '#A9A9A9',
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  card: {
    marginBottom: 20,
    padding: 10,
    borderRadius: 5,
    // borderWidth: 1,
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
    color: '#888',
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
    marginLeft: -10,
    borderWidth: 0.5,
  },
  buttonsContainer: {
    flexDirection: 'row',
    // borderWidth: 1,
  },
  actionButton: {
    // borderWidth: 1,
    marginTop: 15,
    backgroundColor: 'white',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    marginRight: 10,
  },
  buttonText: {
    color: '#00008B',
  },
});

export default AppointmentsScreen;