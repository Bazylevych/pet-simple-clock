import Date from "../Date/Date";
import Time from "../Time/Time";
import Title from "../Title/Title";
export default function ClockLayout() {
  return (
    <div className="clock-layout">
      <Title />
      <Time />
      <Date />
    </div>
  );
}
