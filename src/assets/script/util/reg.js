export default {
  checkPhone(phone) {
    return /^[1][3-9][0-9]{9}$/.test(phone)
  }
}
