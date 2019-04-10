export default {
  data () {
    return {
      META_TYPE: {
        LOGIN: { key: 'userLoggedIn', value: 'User logged in' },
        LOGOUT: { key: 'userLoggedOut', value: 'User logged out' },
        LIVE_EVENT_ENROLL: { key: 'userEnrollLiveEvent', value: 'User accessed the company live event' },
        LIVE_EVENT_ENTER: { key: 'userEnterLiveEvent', value: 'User accessed the company live event' },
        LIVE_EVENT_LEAVE: { key: 'userLeaveLiveEvent', value: 'User leaves the live event' },
        PAYPAL_AUTHORIZED: { key: 'paypalAuthorizedPayment', value: 'Paypal authorized payment' },
        PAYPAL_COMPLETED: { key: 'paypalPaymentCompleted', value: 'Paypal payment completed' },
        PAYPAL_CANCELLED: { key: 'paypalPaymentCanceled', value: 'Paypal payment cancelled' },
        PAYPAL_ERROR: { key: 'paypalPaymentError', value: 'Paypal payment returned error' },
        VIDEO_ENTER: { key: 'userEnterVideo', value: 'Company Video Catalog was accessed' },
        VIDEO_LEAVE: { key: 'userEnterVideo', value: 'User leaves the video' },
        CHAT_SEND_MESSAGE: { key: 'userSendMessageChat', value: 'User send a message in the chat' },
      }
    }
  },
  methods: {
    saveMeta(_payload) {
      let vm = this

      vm.$store.dispatch('Backoffice/SAVE_META', _payload)
        .catch((error) => {
          console.log('Error unable to save meta. see log for details')
        })
    }
  }
}
