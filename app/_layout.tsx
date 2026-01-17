import React from 'react'

import {
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query'

// El Stack es como el outlet de react.
import { Stack } from 'expo-router'
import '../global.css'

// Create a client
const queryClient = new QueryClient()

const RootLayout = () => {
  
  return (
    <QueryClientProvider client={queryClient}>
     <Stack
      screenOptions={{
        headerShown: false,
      }}
     />
    </QueryClientProvider>
  )
}

export default RootLayout