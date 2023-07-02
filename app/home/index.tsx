import { AntDesign } from '@expo/vector-icons'
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native'

import ClipboardPNG from '../../images/clipboard.png'
import LogoPNG from '../../images/logo.png'

import { COLORS } from '../../styles/colors'

import { styles } from './styles'

export function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={LogoPNG} alt="" />
      </View>

      <View style={styles.content}>
        <View style={styles.section}>
          <TextInput
            style={styles.input}
            placeholder="Adicione uma nova tarefa"
            placeholderTextColor={COLORS.gray[300]}
          />

          <TouchableOpacity style={styles.button}>
            <AntDesign name="pluscircleo" size={16} color={COLORS.gray[100]} />
          </TouchableOpacity>
        </View>

        <View style={styles.listHeader}>
          <View style={styles.listHeaderItem}>
            <Text style={styles.listHeaderItemTitle}>Criadas</Text>

            <View style={styles.listHeaderItemQuantity}>
              <Text style={styles.listHeaderItemQuantityText}>0</Text>
            </View>
          </View>

          <View style={styles.listHeaderItem}>
            <Text
              style={[
                styles.listHeaderItemTitle,
                {
                  color: COLORS.purple[500],
                },
              ]}
            >
              Concluídas
            </Text>

            <View style={styles.listHeaderItemQuantity}>
              <Text style={styles.listHeaderItemQuantityText}>0</Text>
            </View>
          </View>
        </View>

        <View style={styles.line} />

        <View style={styles.emptyContainer}>
          <Image source={ClipboardPNG} style={styles.clipboardIMG} alt="" />

          <View>
            <Text style={styles.emptyTitle}>
              Você ainda não tem tarefas cadastradas
            </Text>
            <Text style={styles.emptyDescription}>
              Crie tarefas e organize seus itens a fazer
            </Text>
          </View>
        </View>
      </View>
    </View>
  )
}
