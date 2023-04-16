const usuariosDB = [
  { email: "admin@gmail.com", pass: "1234" },
  { email: "user1@gmail.com", pass: "2345" },
  { email: "user2@gmail.com", pass: "3456" },
  { email: "user3@gmail.com", pass: "4567" },
  { email: "user4@gmail.com", pass: "5678" }
]

export function login(emailForm, passForm) {
  console.log(emailForm, passForm)
  const userMatch = usuariosDB.find(
    (u) => u.email === emailForm && u.pass === passForm
  )
  if (userMatch) {
    return userMatch
  } else {
    return null
  }
}
