import inquirer from "inquirer";
let ans = await inquirer.prompt([{
        name: "cost",
        type: "number",
        message: "Enter cost price",
    }, {
        name: "sell",
        type: "number",
        message: "Enter selling price"
    }]);
if (ans.sell > ans.cost) {
    let c = ans.sell - ans.cost;
    console.log(`profit=${c}`);
    let profit = ((c / ans.cost) * 100);
    console.log(`profit per cent=${profit}%`);
}
else if (ans.cost > ans.sell) {
    let d = ans.cost - ans.sell;
    console.log(`loss=${d}`);
    let loss = ((d / ans.cost) * 100);
    console.log(`Loss percent=${loss}%`);
}
