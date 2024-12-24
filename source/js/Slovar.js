document.addEventListener('DOMContentLoaded', () => {
    const glossaryData = [
        { term: "Босс", description: "Глвынй босс игры - Биг Босс ." },
        { term: "Главный герой ", description: "Солид Снейк — главный герой серии игр Metal Gear" },
        { term: "Шагоходы", description: "Роботы которые запускают ракеты  " },
        { term: "Радио", description: "Япония" },
        { term: "Части игры", description: "Всего 7 частей ." },
        { term: "Ремейки ", description: "с 2004 по 2007 год ." },
        { term: "Карта", description: "Карта сокровищь" },
        { term: "Оружие", description: "Использование передовых технологий на базе Ак-47." },
        { term: "Мир", description: "Фантастика со взглядом на реальность " },
        { term: "Крепость", description: "Пост обьект всего происходящего ." }
    ];

    const searchInput = document.getElementById('search-input');
    const glossaryList = document.getElementById('glossary-list');
    const descriptionText = document.getElementById('description-text');

    function displayGlossary(terms) {
        glossaryList.innerHTML = '';
        terms.forEach(item => {
            const listItem = document.createElement('li');
            listItem.textContent = item.term;
            listItem.addEventListener('click', () => {
                descriptionText.textContent = item.description;
            });
            glossaryList.appendChild(listItem);
        });
    }

    searchInput.addEventListener('input', () => {
        const query = searchInput.value.toLowerCase();
        const filteredTerms = glossaryData.filter(item =>
            item.term.toLowerCase().includes(query)
        );
        displayGlossary(filteredTerms);
    });

    displayGlossary(glossaryData);
});
