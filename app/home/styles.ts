import { Dimensions, StyleSheet } from 'react-native'

import { COLORS } from '../../styles/colors'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingHorizontal: 24,
    backgroundColor: COLORS.gray[700],
    height: Dimensions.get('screen').height * 0.25,
    width: '100%',

    alignItems: 'center',
    justifyContent: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    top: -28,
    elevation: 10,
    paddingHorizontal: 24,
    width: '100%',
    gap: 4,
  },
  input: {
    padding: 16,
    borderRadius: 6,
    backgroundColor: COLORS.gray[500],
    borderWidth: 1,
    width: '100%',
    borderColor: COLORS.gray[700],
    fontWeight: '400',
    color: COLORS.gray[100],
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 18,
    borderRadius: 6,
    backgroundColor: COLORS.blue[700],
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
    backgroundColor: COLORS.gray[600],
  },
  listHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 48,
    paddingBottom: 20,
  },
  listHeaderItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  listHeaderItemTitle: {
    color: COLORS.blue[500],
    fontWeight: '700',
    fontSize: 14,
  },
  listHeaderItemQuantity: {
    paddingHorizontal: 8,
    paddingVertical: 2,
    backgroundColor: COLORS.gray[400],
    borderRadius: 9999,
  },
  listHeaderItemQuantityText: {
    color: COLORS.gray[100],
    fontWeight: '700',
    fontSize: 12,
  },
  line: {
    height: 1,
    maxHeight: 1,
    flex: 1,
    backgroundColor: COLORS.gray[500],
  },
  clipboardIMG: {
    width: 56,
    height: 56,
  },
  emptyContainer: {
    marginTop: 48,
    gap: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: COLORS.gray[300],
  },
  emptyDescription: {
    fontSize: 14,
    fontWeight: '400',
    color: COLORS.gray[300],
  },
})
