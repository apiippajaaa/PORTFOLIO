import { services } from "../config/services.config.js";

const container = document.getElementById("services-container");

function createCard(service) {
  return `
    <div class="carousel-item min-w-full md:min-w-0 relative group rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-xl p-7 md:p-8 overflow-hidden">

      <svg xmlns="http://www.w3.org/2000/svg"
           class="absolute -right-12 -top-12 w-52 h-52 text-blue-500/10 group-hover:text-blue-500/20 transition duration-500 blur-[1px]"
           fill="currentColor"
           viewBox="0 0 640 640">
           ${service.icon}
      </svg>

      <div class="relative space-y-4">
        <h3 class="text-lg md:text-xl font-semibold">
          ${service.title}
        </h3>

        <ul class="text-neutral-400 space-y-2 text-sm">
          ${service.items.map((item) => `<li>${item}</li>`).join("")}
        </ul>
      </div>

    </div>
    `;
}

services.forEach((service) => (container.innerHTML += createCard(service)));
