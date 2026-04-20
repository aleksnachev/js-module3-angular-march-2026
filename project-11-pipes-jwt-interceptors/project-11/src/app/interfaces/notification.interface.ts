export interface Notification1 {
    type: 'success' | 'error' | 'info' | 'warning'
    message: string
    duration?: number
}