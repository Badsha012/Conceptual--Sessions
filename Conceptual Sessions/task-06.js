function resultReport(marks) {
    // ✅ ইনপুট চেক
    if (!Array.isArray(marks)) {
        return "Invalid";
    }

    // ✅ খালি অ্যারের জন্য
    if (marks.length === 0) {
        return { finalScore: 0, pass: 0, fail: 0 };
    }

    let total = 0;
    let passCount = 0;
    let failCount = 0;

    for (let i = 0; i < marks.length; i++) {

        //total=total+ mark[i];
        total += marks[i];
        if (marks[i] >= 40) {
            passCount++;
        } else {
            failCount++;
        }
    }

    // ✅ গড় হিসাব + রাউন্ডিং

    let average = Math.round(total / marks.length);

    return {
        finalScore: average,
        pass: passCount,
        fail: failCount
    };
}

console.log(resultReport([98, 87, 67, 91, 92, 33, 87])); 