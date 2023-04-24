import { useContext, createContext, ReactNode, useState } from 'react'

interface AnalysisContextProps {
    handleNextForm: (form: string) => void
    selectedForm: string
}

interface AnalysisContextProviderProps {
    children: ReactNode
}

const AnalysisToolContext = createContext({} as AnalysisContextProps)

export function useAnalysisToolContext() {
    return useContext(AnalysisToolContext)
}

export default function AnalysisToolContextProvider({ children } : AnalysisContextProviderProps) {
    const [selectedForm, setSelectedForm] = useState('address')

    function handleNextForm(form: string) {
        setSelectedForm(form)
      }

    const value = {
        selectedForm,
        handleNextForm
    }

  return (
    <AnalysisToolContext.Provider value={value}>{children}</AnalysisToolContext.Provider>
  )
}
