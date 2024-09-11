class BudgetCalculator {
    constructor() {
        this.salary = 0; // Initialize salary
        this.expenses = []; // Initialize expenses as an empty array
    }

    // Method to add salary
    addSalary(amount) {
        this.salary = amount;
        console.log(`Salary added: $${this.salary}`);
    }

    // Method to add an expense
    addExpense(name, amount) {
        this.expenses.push({ name, amount });
        console.log(`Expense added: ${name} - $${amount}`);
    }

    // Method to calculate total expenses
    calculateTotalExpenses() {
        let totalExpenses = this.expenses.reduce((total, expense) => total + expense.amount, 0);
        return totalExpenses;
    }

    // Method to calculate remaining balance
    calculateRemainingBalance() {
        let totalExpenses = this.calculateTotalExpenses();
        let remainingBalance = this.salary - totalExpenses;
        return remainingBalance;
    }

    // Method to display the budget summary
    displaySummary() {
        console.log("\n--- Budget Summary ---");
        console.log(`Salary: $${this.salary}`);
        console.log("Expenses:");
        this.expenses.forEach(expense => console.log(`- ${expense.name}: $${expense.amount}`));
        console.log(`Total Expenses: $${this.calculateTotalExpenses()}`);
        console.log(`Remaining Balance: $${this.calculateRemainingBalance()}`);
    }
}

// Example usage
let myBudget = new BudgetCalculator();
myBudget.addSalary(9000); // Add salary
myBudget.addExpense("Rent", 2500); // Add expenses
myBudget.addExpense("Groceries", 500);
myBudget.addExpense("Utilities", 350);
myBudget.addExpense("Transport", 250);
myBudget.addExpense("Entertainment", 200);

// Display budget summary
myBudget.displaySummary();
