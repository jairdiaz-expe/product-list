import type { FC } from 'react'
import React, { createContext, useContext } from 'react'
import type { Item } from 'vtex.checkout-graphql'

interface Context {
  item: Item
  itemIndex: number
  loading: boolean
  shouldAllowManualPrice: boolean
  onQuantityChange: (value: number) => void
  onRemove: () => void
  onSetManualPrice: (price: number, itemIndex: number) => void
}

interface ItemContextProviderProps {
  value: Context
}

export const ItemContext = createContext<Context | undefined>(undefined)

export const ItemContextProvider: FC<ItemContextProviderProps> = ({
  value,
  children,
}) => <ItemContext.Provider value={value}>{children}</ItemContext.Provider>

export const useItemContext = () => {
  const context = useContext(ItemContext)

  if (context === undefined) {
    throw new Error('useItemContext must be used within a ItemContextProvider')
  }

  return context
}

export default { useItemContext, ItemContextProvider, ItemContext }
