// src/composables/useDarkMode.js
import { ref, onMounted } from 'vue';

export function useDarkMode() {
  const isDarkMode = ref(localStorage.getItem('darkMode') === 'true');

  const toggleDarkMode = () => {
    isDarkMode.value = !isDarkMode.value;
    if (isDarkMode.value) {
      document.body.classList.add('dark'); // Áp dụng Dark Mode cho toàn bộ ứng dụng
    } else {
      document.body.classList.remove('dark');
    }
    localStorage.setItem('darkMode', isDarkMode.value);
  };

  onMounted(() => {
    if (isDarkMode.value) {
      document.body.classList.add('dark');
    }
  });

  return { isDarkMode, toggleDarkMode };
}
