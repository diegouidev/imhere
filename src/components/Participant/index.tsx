import { View, Text, TouchableOpacity } from "react-native";

import Remove from '../../../assets/Remove.svg'
import { styles } from "./styles";

type Props = {
  name: string
  onRemove: () => void
}

export function Participant({ name, onRemove }: Props){

  return(
    <View style={styles.container}>
      <Text style={styles.name}>
        {name}
      </Text>
      <TouchableOpacity style={styles.button} onPress={onRemove}> 
          <Remove width={20} height={20} />
        </TouchableOpacity>
    </View>
  )
}