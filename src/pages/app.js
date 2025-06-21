import createHeader from '../components/header.js';

export default function renderApp(container) {
    const app = document.createElement('div');
    app.className = 'flex h-screen';

    const aside = createHeader(); // header component

    const main = document.createElement('main');
    main.className = 'flex-1 p-4 overflow-auto';

    const content = document.createElement('div');
    content.className = 'pt-16';
    content.innerHTML = `
        <h2 class='center'>Welcome to the App</h2>
        <p>This is the main content area.</p>
    `;

    main.appendChild(content);

    app.appendChild(aside);
    app.appendChild(main);

    container.appendChild(app);
}
