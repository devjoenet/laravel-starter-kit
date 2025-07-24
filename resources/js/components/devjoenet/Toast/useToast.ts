import { ref } from 'vue'

export interface ToastOptions {
  variant?: 'info' | 'success' | 'warning' | 'error'
  duration?: number // in ms
}
export interface ToastMessage {
  id: number
  message: string
  variant: 'info' | 'success' | 'warning' | 'error'
  duration: number
}

const toasts = ref<ToastMessage[]>([])
let toastId = 0

export function useToast() {
  function toast(message: string, options: ToastOptions = {}) {
    const id = ++toastId
    const { variant = 'info', duration = 3000 } = options
    toasts.value.push({ id, message, variant, duration })
    return id
  }

  function removeToast(id: number) {
    toasts.value = toasts.value.filter(t => t.id !== id)
  }

  return {
    toast,
    removeToast,
    toasts,
  }
}

// Export the reactive array for the container
export { toasts }
