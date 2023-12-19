import React, { useState, useEffect } from 'react';
import { View, Text, ImageBackground, TextInput, StyleSheet, FlatList, TouchableOpacity, Alert, Button } from 'react-native';
import { Ionicons } from '@expo/vector-icons';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  helpText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    padding: 5,
    marginTop: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    padding: 15,
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: 'white',
    paddingHorizontal: 10,
  },
  sendIcon: {
    marginLeft: 20,
  },
  saveButton: {
    marginTop: 10,
  },
  messageContainer: {
    marginTop: 20,
  },
  messageItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  messageText: {
    color: 'white',
    marginRight: 20,
    maxWidth: '70%', 
    flexShrink: 2,   
  },
  deleteIcon: {
    marginLeft: 10,
  },
  userLabel: {
    color: '#F5772B',
    fontWeight: 'bold',
  },
});

function HelpScreen({ navigation }) {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [selectedMessageIndex, setSelectedMessageIndex] = useState(null);

  useEffect(() => {
    const unsubscribe = navigation.addListener('beforeRemove', (e) => {
      if (messages.length > 0) {
        console.log('Leaving HelpScreen');
      }
    });


    return unsubscribe;
  }, [navigation, messages]);

  const handleSend = () => {
    if (message.trim() !== '') {
      if (selectedMessageIndex !== null) {
        setMessages((prevMessages) => {
          const updatedMessages = [...prevMessages];
          updatedMessages[selectedMessageIndex] = message;
          return updatedMessages;
        });
        setSelectedMessageIndex(null);
      } else {
        setMessages((prevMessages) => [...prevMessages, message]);
      }
      setMessage('');

      // Show alert on successful send
      showAlert();
    }
  };

  const handleDelete = (index) => {
    setMessages((prevMessages) => {
      const updatedMessages = [...prevMessages];
      updatedMessages.splice(index, 1);
      return updatedMessages;
    });
  };

  const handleEdit = (index) => {
    setMessage(messages[index]);
    setSelectedMessageIndex(index);
  };

  const showAlert = () => {
    Alert.alert(
      'Thank you!',
      'Your message has been saved. The developer will receive it.',
      [{ text: 'OK' }]
    );
  };

  const renderItem = ({ item, index }) => (
    <View style={styles.messageItem}>
      <TouchableOpacity onPress={() => handleEdit(index)}>
        <Text style={styles.userLabel}>{`User${index + 1}:`}</Text>
        <Text style={styles.messageText}>{item}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleDelete(index)}>
        <Ionicons name="trash" size={20} color="#F5772B" style={styles.deleteIcon} />
      </TouchableOpacity>
    </View>
  );


  return (
    <ImageBackground source={require('../assets/blackbg.jpg')} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.helpText}>Help us improve our app by sending your messages below:</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Type your message..."
            value={message}
            onChangeText={(text) => setMessage(text)}
          />
          <Ionicons
            name="send"
            size={24}
            color="#F5772B"
            style={styles.sendIcon}
            onPress={handleSend}
          />
        </View>

        {selectedMessageIndex !== null && (
          <Button
            title="Save"
            onPress={handleSend}
            disabled={message.trim() === ''}
            style={styles.saveButton}
          />
        )}

        <FlatList
          data={messages}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderItem}
          style={styles.messageContainer}
        />
      </View>
    </ImageBackground>
  );
}

export default HelpScreen;