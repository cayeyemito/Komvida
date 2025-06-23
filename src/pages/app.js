import createHeader from '../components/header.js';

export default function renderApp(container) {
    const app = document.createElement('div');
    app.className = 'flex-1 h-screen w-screen overflow-auto';

    const aside = createHeader(); // header component

    const main = document.createElement('section');
    main.className = 'flex-1 h-screen w-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500';

    const content = document.createElement('div');
    content.className = 'pt-16 h-screen sm:pt-30 md:pt-40 lg:pt-50 xl:pt-70';
    content.innerHTML = `
        <h1 class="font-bold mb-10 text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mx-4 sm:mx-10 md:mx-20 lg:mx-40 xl:mx-60">
            Organiza tu vida social en un solo lugar
        </h1>
        <p class="mx-4 sm:mx-10 md:mx-20 lg:mx-30 xl:mx-50 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-white/80 mb-6 text-center">
            Crea grupos, planea eventos, comparte planes y mantente conectado con tus amigos.
        </p>
        <div class="flex justify-center">
            <a href="acceso.html" class="bg-white text-indigo-700 font-semibold px-6 py-3 rounded-lg hover:bg-indigo-100 transition w-60 text-center">
                Únete gratis
            </a>
        </div>
    `;

    main.appendChild(content);

    app.appendChild(aside);
    app.appendChild(main);

    container.appendChild(app);
}
