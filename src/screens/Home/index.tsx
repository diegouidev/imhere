import { Text, View, TextInput, TouchableOpacity, FlatList, Alert } from "react-native"
import { styles } from './styles'

import Add from '../../../assets/Add.svg'

import { Participant } from "../../components/Participant"


export function Home(){
  const participants = ['Diego', 'Jamile', 'Zé Maria', 'Raissa', 'Naldim', 'Karine', 'Dinaldo', 'Natalia', 'Tia Toto', 'Elisangela']

  function handleParticipantAdd(){
    // verificando se o participante já existe e mostrando o alerta
    if(participants.includes('Diego')){
      return Alert.alert('Participante existe', 'Já existe um participante na lista com esse nome.')
    }
  }

  function handleParticipantRemove(name: string){
    // mostrando o alerta e a confirmação de remoção
    Alert.alert('Remover', `Remover o participante ${name}?`, [
      {
        text: 'Sim',
        onPress: () => Alert.alert("Deletado!")
      },
      {
        text: 'Não',
        style: 'cancel'
      }
    ])
  }

  return(
    <View style={styles.container}>
      <Text style={styles.eventName}>
        Churras no Deck
      </Text>

      <Text style={styles.eventDate}>
        Sábado, 10 de dezembro de 2022.
      </Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Digite o nome do participante"
          placeholderTextColor="#6b6b6b"
        />

        <TouchableOpacity
          style={styles.button}
          onPress={handleParticipantAdd}
        >
          <Add width={20} height={20} />
        </TouchableOpacity>
      </View>
      <FlatList
        data={participants}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <Participant
              key={item}
              name={item}
              onRemove={() => handleParticipantRemove(item)}
            />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Ninguém chegou no evento ainda? Adicione participantes a sua lista de presença.
          </Text>
        )}
      />

    </View>
  )
}