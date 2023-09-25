const getLocalData = () => {
  const localData = localStorage.getItem("donations");

  if (localData) {
    return JSON.parse(localData);
  }
  else {
    return [];
  }
}

const saveLocalData = (id) => {
  const localData = getLocalData();

  if (localData.includes(id)) return true;

  localData.push(id);
  localStorage.setItem("donations", JSON.stringify(localData));
}

export { getLocalData, saveLocalData };