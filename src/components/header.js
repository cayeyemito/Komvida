export default function createHeader() {
  const header = document.createElement('header');
  header.className = "hidden md:flex fixed top-0 left-0 right-0 h-16 bg-gray-900 text-white shadow-lg items-center px-6 z-50";

  header.innerHTML = `
    <i class="mr-6 cursor-pointer hover:text-blue-400">Qué es KOMVIDA</i>
    <i class="mr-6 cursor-pointer hover:text-blue-400">B</i>
    <i class="mr-6 cursor-pointer hover:text-blue-400">C</i>
    <i class="mr-6 cursor-pointer hover:text-blue-400">D</i>
    <i class="cursor-pointer hover:text-blue-400">E</i>
  `;

  return header;
}