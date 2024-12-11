// Toggle active class for option buttons
document.querySelectorAll('.option-button').forEach(button => {
  button.addEventListener('click', () => {
    button.classList.toggle('active');
  });
});

let swiperInstances = {}; // Store swiper instances for modal sliders

// Open modal and initialize swiper if not already created
function openModal(id) {
  const modal = document.getElementById(`modal-${id}`);
  modal.style.display = 'flex';

  // Initialize swiper only if it doesn't exist yet for this modal
  if (!swiperInstances[id]) {
    swiperInstances[id] = new Swiper(`#modal-${id} .swiper-container`, {
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      loop: true,
      slidesPerView: 1, // Show only one slide
      spaceBetween: 0, // No space between slides
      autoplay: {
        delay: 3000, // 3 seconds auto-scroll
        disableOnInteraction: false, // Keep autoplay even after interaction
      },
    });
  } else {
    // If swiper exists, just update it
    swiperInstances[id].update();
  }
}

// Close modal
function closeModal(id) {
  const modal = document.getElementById(`modal-${id}`);
  modal.style.display = 'none';
}

// Open and close authentication modal
function openAuthModal() {
  const modal = document.getElementById('auth-modal');
  modal.style.display = 'flex';
}

function closeAuthModal() {
  const modal = document.getElementById('auth-modal');
  modal.style.display = 'none';
}

// Tab switching for auth modal
document.querySelectorAll('.auth-tab-button').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.auth-tab-button').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.auth-tab-content').forEach(content => content.style.display = 'none');

    button.classList.add('active');
    document.getElementById(button.dataset.tab).style.display = 'block';
  });
});

// Open auth modal when "Добавить объявление" button is clicked
document.getElementById('open-auth-button').addEventListener('click', event => {
  event.preventDefault();
  openAuthModal();
});

// Close modal if clicked outside
window.addEventListener('click', event => {
  const modal = document.getElementById('auth-modal');
  if (event.target === modal) closeAuthModal();
});

// Open and close "Add Listing" modal
function openAddListingModal() {
  document.getElementById('add-listing-modal').style.display = 'flex';
}

function closeAddListingModal() {
  document.getElementById('add-listing-modal').style.display = 'none';
}

// Show appropriate form for listing type (sale or rent)
function showAddForm(type) {
  const saleForm = document.getElementById('sale-form');
  const rentForm = document.getElementById('rent-form');
  saleForm.style.display = type === 'sale' ? 'block' : 'none';
  rentForm.style.display = type === 'rent' ? 'block' : 'none';
}

// Event listeners for opening the "Add Listing" modal
document.getElementById('open-add-listing-button').addEventListener('click', openAddListingModal);

// Открытие модального окна для авторизации
function openAuthModal() {
  const modal = document.getElementById('auth-modal');
  modal.style.display = 'flex';
}

// Закрытие модального окна для авторизации
function closeAuthModal() {
  const modal = document.getElementById('auth-modal');
  modal.style.display = 'none';
}

// Открытие модального окна для добавления объявления
function openAddListingModal() {
  const modal = document.getElementById('add-listing-modal');
  modal.style.display = 'flex';
}

// Закрытие модального окна для добавления объявления
function closeAddListingModal() {
  const modal = document.getElementById('add-listing-modal');
  modal.style.display = 'none';
}

// Переключение вкладок в модальном окне авторизации
document.querySelectorAll('.auth-tab-button').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.auth-tab-button').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.auth-tab-content').forEach(content => content.style.display = 'none');

    button.classList.add('active');
    document.getElementById(button.dataset.tab).style.display = 'block';
  });
});

// Привязка к кнопке "Добавить объявление" (открытие модального окна для объявления)
document.getElementById('open-add-listing-button').addEventListener('click', event => {
  event.preventDefault();
  openAddListingModal(); // Открыть окно для добавления объявления
});

// Привязка к кнопке "Вход/Регистрация" (открытие модального окна для авторизации)
document.getElementById('open-auth-button').addEventListener('click', event => {
  event.preventDefault();
  openAuthModal(); // Открыть окно для авторизации
});

// Закрытие при клике вне модального окна
window.addEventListener('click', event => {
  const modalAuth = document.getElementById('auth-modal');
  const modalListing = document.getElementById('add-listing-modal');
  
  // Закрыть окно авторизации, если кликнули вне его
  if (event.target === modalAuth) closeAuthModal();

  // Закрыть окно добавления объявления, если кликнули вне его
  if (event.target === modalListing) closeAddListingModal();
});


// Открыть и закрыть модальное окно избранного
function openFavoritesModal() {
  const modal = document.getElementById('favorites-modal');
  modal.style.display = 'flex';
}

function closeFavoritesModal() {
  const modal = document.getElementById('favorites-modal');
  modal.style.display = 'none';
}

// Показать информацию о продавце
function showSellerInfo(button) {
  const sellerInfo = button.nextElementSibling;
  sellerInfo.style.display = 'block';
}

function hideSellerInfo() {
  document.querySelectorAll('.seller-info').forEach(info => info.style.display = 'none');
}

// Добавить карточку в избранное
const favorites = [];

function addToFavorites(cardId) {
  const card = document.querySelector(`.listing-card[onclick="openModal(${cardId})"]`);
  if (!favorites.includes(cardId)) {
    favorites.push(cardId);
    const favoritesList = document.querySelector('#favorites-modal .favorites-list');
    const clonedCard = card.cloneNode(true);
    favoritesList.appendChild(clonedCard);
    alert('Объект добавлен в избранное!');
  } else {
    alert('Объект уже в избранном.');
  }
}

// Привязка событий к кнопке "Сердечко"
document.getElementById('open-favorites-button').addEventListener('click', event => {
  event.preventDefault();
  openFavoritesModal();
});


// Удалить карточку из избранного
function removeFromFavorites(cardId, cardElement) {
  const index = favorites.indexOf(cardId);
  if (index > -1) {
    favorites.splice(index, 1);
    cardElement.remove();
    alert('Объект удалён из избранного.');
  }
}

// Открыть модальное окно "Избранное"
function openFavoritesModal() {
  const modal = document.getElementById('favorites-modal');
  modal.style.display = 'flex';
}

// Закрыть модальное окно "Избранное"
function closeFavoritesModal() {
  const modal = document.getElementById('favorites-modal');
  modal.style.display = 'none';
}


