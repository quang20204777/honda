function getRandomStateXCD() {
  const states = ["Đang hoạt động", "Đang bảo trì", "Không hoạt động"];
  const randomIndex = Math.floor(Math.random() * states.length);
  return states[randomIndex];
}
export const speVerhicleData = [];

for (let i = 1; i <= 50; i++) {
  const speVerhicle = {
    id: i,
    name: `Máy số ${i}`,
    numberCode: "12345",
    location: "Kho số 1",
    own: "Maker A",
    stateXCD: getRandomStateXCD(),
    typeXCD: "XCD-lớn",
  };
  speVerhicleData.push(speVerhicle);
}
