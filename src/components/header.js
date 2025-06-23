export default function createHeader() {
  const header = document.createElement('header');
  header.className = "fixed md:flex fixed top-0 left-0 right-0 h-16 bg-grey-100";

  header.innerHTML = `
    <div class="flex px-4 py-2 w-screen items-center justify-center">
      <h1 class="text-2xl font-bold text-gray-100">KOMVIDA</h1>
    </div>
  `;

  return header;
}