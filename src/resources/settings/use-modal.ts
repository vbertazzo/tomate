import { useState } from 'react'

export function useModal () {
  const [isModalVisible, setIsModalVisible] = useState(false)

  const showModal = () => setIsModalVisible(true)

  const hideModal = () => setIsModalVisible(false)

  return {
    isModalVisible,
    showModal,
    hideModal,
  }
}
