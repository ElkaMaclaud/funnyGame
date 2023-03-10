import React, { useMemo, useState } from 'react'
import { IGameData, value } from './userDataContext'
import { userContext } from './userDataContext'

export const UserGameProvader = ({children}:{children:React.ReactNode}) => {
    const [data, setData] = useState<IGameData>(value)
    const localValue = useMemo(() => ({data, setData}), [data])
    return (
      <userContext.Provider value={localValue}>
          {children}
      </userContext.Provider>
  )
}

