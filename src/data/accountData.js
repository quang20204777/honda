function getRandomStateAccount() {
  const states = ["Đang hoạt động", "Không hoạt động"];
  const randomIndex = Math.floor(Math.random() * states.length);
  return states[randomIndex];
}

export const accountData = [];
for (let i = 1; i <= 9; i++) {
  const account = {
    id: i,
    name: "Phạm Trần Lâm",
    phoneNumber: "0355309291",
    email: "dsadjaslkd@gmail.com",
    role: "Tài xế",
    birthDay: "19/12/2022",
    wareHouse: "Maker A",
    stateAccount: getRandomStateAccount(),
  };
  accountData.push(account);
}
