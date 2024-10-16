import { useState, useEffect } from 'react';
import { Button, SafeAreaView, ScrollView, StyleSheet, TextInput, View, Text, StatusBar } from 'react-native';
import { addDoc, firestore, collection, MESSAGES, serverTimestamp, query, onSnapshot, orderBy } from './firebase/Config';
import { convertFirebaseTimeStampToJS } from './helper/Functions';

export default function App() {
  const [messages, setMessages] = useState([])
  const [newMessage, setNewMessage] = useState('')

  const save = async () => {
    const docRef = await addDoc(collection(firestore, MESSAGES), {
      text: newMessage,
      created: serverTimestamp(),
    }).catch (error => console.log(error))
    setNewMessage('')
    console.log('Message saved.')
  }

  useEffect(() => {
    const q = query(collection(firestore,MESSAGES), orderBy('created','desc'))
    const unsubscribe = onSnapshot(q,(querySnapshot) => {
      const tempMessages = []
      querySnapshot.forEach((doc) => {
        console.log(doc.id)
        tempMessages.push({...doc.data(), id: doc.id, created: convertFirebaseTimeStampToJS(doc.data().created)})
      })
      setMessages(tempMessages)
    })
    return () => {
      unsubscribe()
    }
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle='light-content' />
      <View style={styles.form}>
        <TextInput
          placeholder='Send message...'
          value={newMessage}
          onChangeText={text => setNewMessage(text)}
        />
        <Button title='Save' onPress={save} />
      </View>
      <ScrollView>
        {
          messages.map((message)=> (
            <View key={message.id} style={styles.message}>
              <Text style={styles.messageInfo}>{message.created}</Text>
              <Text>{message.text}</Text>
            </View>
          ))
        }
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'left',
    justifyContent: 'flex-start',
    margin: 8,
  },
  form: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 16,
    marginBottom: 16,
  },
  message: {
    margin: 10,
    padding: 10,
    backgroundColor: '#f5f5f5',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
  },
  messageInfo: {
    fontSize: 12,
  }
});
