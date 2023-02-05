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
  const display = (target: any) => (time: any) => target(time);

  //принимает шаблонную строку и спользует ее для возврата показания часов, отформатированого по критериям, заданным
  //строкой. То есть эта функция заменяет заполнители показаниями часов, минут, секунд, и аремени суток
  const formatClock = (format: string) => (time: any) =>
    format
      .replace("hh", time.hours)
      .replace("mm", time.minutes)
      .replace("ss", time.seconds)
      .replace("tt", time.ampm);

  //принимает ключ обьекта в качестве фргумента и добавляет ноль перед значением, хранящемся под ключом этого обьекта.
  // Функция получает ключ к указанному полю и добавляет перед значениями ноль, если они меньше 10
  const pretendZero = (key: any) => (clockTime: any) => ({
    ...clockTime,
    key: clockTime[key] < 10 ? "0" + clockTime[key] : clockTime[key],
  });

  return <div className="App"></div>;
}

export default App;
