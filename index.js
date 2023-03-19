// code your solution here
function superbowlWin(record) {
    const winRecord = record.find(game => game.result === "W");
    if (winRecord) {
      return winRecord.year;
    }
  }
  