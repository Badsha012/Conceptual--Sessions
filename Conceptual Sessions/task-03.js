function bestTeam(player1, player2) {
    // Check if both inputs are objects
    if (typeof player1 !== "object" || typeof player2 !== "object" || player1 === null || player2 === null || Array.isArray(player1) || Array.isArray(player2)) {
        return "Invalid";
    }

    // Calculate total violations for each team
    let team1 = player1.foul + player1.cardY + player1.cardR;
    let team2 = player2.foul + player2.cardY + player2.cardR;

    // Compare and return the fairer team
    if (team1 < team2) {
        return player1.name;
    } else if (team2 < team1) {
        return player2.name;
    } else {
        return "Tie";
    }
}
console.log(bestTeam(
    { name: "Germany", foul: 10, cardY: 1, cardR: 1 },
{ name: "France", foul: 10, cardY: 2, cardR: 1 }
 
));