
export function GetGreeting() {
  const currentHour = new Date().getHours();
  if (currentHour < 12) {
    return "Good Morning";
  } else if (currentHour < 16) {
    return "Good Afternoon";
  } else {
    return "Good Evening";
  }
}
