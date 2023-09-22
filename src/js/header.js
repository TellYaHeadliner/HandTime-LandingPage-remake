// Hàm để xử lý sự kiện nhấn vào biểu tượng thanh tiêu đề
function toggleHeaderMenu() {
    const headerLists = document.querySelector('.header__lists .lists ul');
    const headerItems = document.querySelector('.header__items');
  
    // Kiểm tra trạng thái hiển thị của danh sách liên kết
    if (headerLists.style.display === 'block') {
      headerLists.style.display = 'none';
      headerItems.style.display = 'none';
      document.querySelector('.header').classList.remove('active');
    } else {
      headerLists.style.display = 'block';
      headerItems.style.display = 'block'; // Hiển thị cả biểu tượng dưới cùng
      document.querySelector('.header').classList.add('active');
    }
  }
  