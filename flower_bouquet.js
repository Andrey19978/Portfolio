const MAX_COST = 7 * Math.pow(2, 98); // Максимальная стоимость букета

function calculateBouquetCosts(budgets) {
    return budgets.map(budget => {
        if (budget >= MAX_COST) {
            return MAX_COST; // Он может купить букет
        } else {
            return -1; // Он не может позволить себе букет
        }
    });
}

// Пример использования:
const n = 5; // Количество дней
const budgets = [1000000000000000000, 100000000000000000, 700000000000000000, 0, 10000000000000000]; // Примеры бюджетов
const results = calculateBouquetCosts(budgets);
console.log(results);
