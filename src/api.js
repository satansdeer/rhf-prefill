export const getUserData = () => {
  return new Promise((resolve, reject) => {
    const data = {
      firstname: "User",
      lastname: "Usersson"
    }
    setTimeout(() => resolve(data), 1000)
  })
}