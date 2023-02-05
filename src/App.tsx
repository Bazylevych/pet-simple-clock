function App() {
  const compose =
    (...fnc: any) =>
    (arg: any) =>
      fnc.reduce((composed: any, f: any) => f(composed), arg);

  const oneSecond = () => 1000;
  const getCurrentTime = () => new Date();
  const clear = () => console.clear();
  const log = (message: string) => console.log(message);

  // принимает обьект времени и возвращает обьект, который содержит часы, минуты и секунды
  const serializeClockTime = (date: Date) => ({
    hours: date.getHours(),
    minutes: date.getMinutes(),
    seconds: date.getSeconds(),
  });

  //принимает обьект показания часов и возвращает обьект, в котором показание преобразуется в формат граждансокого времени
  const civilianHours = (clockTime: any) => ({
    ...clockTime,
    hours: clockTime.hours > 12 ? clockTime.hours - 12 : clockTime.hours,
  });

  //принимает обьект поепзпния часов и добавляет к нему время суток(АМ или РМ)
  const appendAMPM = (clockTime: any) => ({
    ...clockTime,
    ampm: clockTime.hours >= 12 ? "PM" : "AM",
  });

  //принимает целевую функцию и возвращает функцию, которая передает время и адрес цели

  return <div className="App"></div>;
}

export default App;
