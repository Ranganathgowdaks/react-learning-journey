const CurrentTime = () => {
  const now = new Date();

  const ss = String(now.getDate()).padStart(2, "0"); // Day of the month (2 digits)
  const mm = String(now.getMonth() + 1).padStart(2, "0"); // Month (2 digits)
  const yyyy = now.getFullYear(); // Year (4 digits)

  const hh = String(now.getHours()).padStart(2, "0"); // Hours (2 digits)
  const minutes = String(now.getMinutes()).padStart(2, "0"); // Minutes (2 digits)
  const seconds = String(now.getSeconds()).padStart(2, "0"); // Seconds (2 digits)

  const currentTime = `${ss}/${mm}/${yyyy}-${hh}:${minutes}:${seconds}`;

  return (
    <p>
      This is current Time: <strong>{currentTime}</strong>
    </p>
  );
};

export default CurrentTime;
