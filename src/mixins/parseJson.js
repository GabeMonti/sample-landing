export default {
  methods: {
    parseJson(_info) {
      return (typeof _info === "object") ? _info : this.parseJson(JSON.parse(_info))
    },
  }
}