/* eslint-disable camelcase */
import {
  Inter_400Regular,
  Inter_700Bold,
  useFonts,
} from '@expo-google-fonts/inter'
import { AntDesign, Feather } from '@expo/vector-icons'
import { useCallback, useState } from 'react'
import {
  FlatList,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'

import ClipboardPNG from '../../images/clipboard.png'
import LogoPNG from '../../images/logo.png'

import { COLORS } from '../../styles/colors'

import { styles } from './styles'

type Task = {
  name: string
  completed: boolean
}

export function Home() {
  const [fontIsLoading] = useFonts({
    Inter_400Regular,
    Inter_700Bold,
  })

  const [input, setInput] = useState('')
  const [inputIsFilled, setInputIsFilled] = useState(false)
  const [tasks, setTasks] = useState<Task[]>([])

  const handleAddTask = useCallback(() => {
    setTasks((state) => [...state, { completed: false, name: input }])

    setInput('')
  }, [input])

  const handleCompletTask = useCallback((name: string) => {
    setTasks((state) => [
      ...state.filter((item) => item.name !== name),
      { completed: true, name },
    ])

    setInput('')
  }, [])

  const handleRemoveTask = useCallback((name: string) => {
    setTasks((state) => state.filter((item) => item.name !== name))
  }, [])

  if (!fontIsLoading) {
    return null
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={LogoPNG} alt="" />
      </View>

      <View style={styles.content}>
        <View style={styles.section}>
          <TextInput
            style={[
              styles.input,
              {
                borderColor: inputIsFilled
                  ? COLORS.purple[700]
                  : COLORS.gray[500],
              },
            ]}
            placeholder="Adicione uma nova tarefa"
            placeholderTextColor={COLORS.gray[300]}
            onChangeText={setInput}
            value={input}
            onBlur={() => setInputIsFilled(false)}
            onFocus={() => setInputIsFilled(true)}
          />

          <TouchableOpacity onPress={handleAddTask} style={styles.button}>
            <AntDesign name="pluscircleo" size={16} color={COLORS.gray[100]} />
          </TouchableOpacity>
        </View>

        <View style={styles.listHeader}>
          <View style={styles.listHeaderItem}>
            <Text style={styles.listHeaderItemTitle}>Criadas</Text>

            <View style={styles.listHeaderItemQuantity}>
              <Text style={styles.listHeaderItemQuantityText}>
                {tasks.length}
              </Text>
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
              <Text style={styles.listHeaderItemQuantityText}>
                {tasks.filter((item) => item.completed).length}
              </Text>
            </View>
          </View>
        </View>

        {tasks.length === 0 ? (
          <>
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
          </>
        ) : (
          <FlatList
            data={tasks}
            keyExtractor={(item) => item.name}
            renderItem={({ item }) => (
              <View style={styles.listItem}>
                <TouchableOpacity
                  onPress={() => handleCompletTask(item.name)}
                  style={[
                    styles.listCheck,
                    {
                      borderColor: item.completed
                        ? COLORS.purple[700]
                        : COLORS.blue[500],
                    },
                  ]}
                >
                  {item.completed ? (
                    <View style={styles.checked}>
                      <Feather
                        name="check"
                        color={COLORS.gray[100]}
                        size={12}
                      />
                    </View>
                  ) : null}
                </TouchableOpacity>

                <Text
                  style={[
                    styles.listTitle,
                    {
                      textDecorationLine: item.completed
                        ? 'line-through'
                        : 'none',
                      textDecorationColor: COLORS.gray[300],
                      color: item.completed
                        ? COLORS.gray[300]
                        : COLORS.gray[100],
                    },
                  ]}
                >
                  {item.name}
                </Text>

                <TouchableOpacity onPress={() => handleRemoveTask(item.name)}>
                  <Feather name="trash-2" color={COLORS.gray[300]} size={18} />
                </TouchableOpacity>
              </View>
            )}
          />
        )}
      </View>
    </View>
  )
}
