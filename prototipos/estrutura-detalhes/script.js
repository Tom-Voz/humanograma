/**
 * HUMANOGRAMA - Interactive Scripts
 * UI Kit: Poupatempo SP.GOV.BR + Humanograma
 * Manual de Tom e Voz: cms.sp.gov.br/cms/tomevoz
 */

// Main Tabs with ARIA support
const mainTabs = document.querySelectorAll('.main-tab');
const tabContents = document.querySelectorAll('.tab-content');

mainTabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const targetId = tab.dataset.tab;
    
    mainTabs.forEach(t => {
      t.classList.remove('active');
      t.setAttribute('aria-selected', 'false');
    });
    tabContents.forEach(c => c.classList.remove('active'));
    
    tab.classList.add('active');
    tab.setAttribute('aria-selected', 'true');
    document.getElementById(targetId)?.classList.add('active');
  });
});

// Segment Filter
const segmentBtns = document.querySelectorAll('.segment-btn');

segmentBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    segmentBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  });
});

// All Dropdowns
function setupDropdown(btnId, menuId) {
  const btn = document.getElementById(btnId);
  const menu = document.getElementById(menuId);
  
  if (btn && menu) {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      // Close all other dropdowns
      document.querySelectorAll('.dropdown-menu.show').forEach(m => {
        if (m !== menu) m.classList.remove('show');
      });
      menu.classList.toggle('show');
    });
  }
}

setupDropdown('structureMenuBtn', 'structureMenu');
setupDropdown('bulkMenuBtn', 'bulkMenu');
setupDropdown('sortMenuBtn', 'sortMenu');
setupDropdown('pageMenuBtn', 'pageDropdown');

// Row menu buttons
document.querySelectorAll('.btn-menu').forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    const menuId = btn.dataset.menu;
    if (menuId) {
      const menu = document.getElementById(`menu-${menuId}`);
      if (menu) {
        document.querySelectorAll('.dropdown-menu.show').forEach(m => {
          if (m !== menu) m.classList.remove('show');
        });
        menu.classList.toggle('show');
      }
    }
  });
});

// Close dropdowns on outside click
document.addEventListener('click', () => {
  document.querySelectorAll('.dropdown-menu.show').forEach(m => {
    m.classList.remove('show');
  });
});

// Modal - Filter
const filterModal = document.getElementById('filterModal');
const filterBtn = document.getElementById('filterBtn');
const filterModalClose = document.getElementById('filterModalClose');
const filterModalCancel = document.getElementById('filterModalCancel');

if (filterBtn && filterModal) {
  filterBtn.addEventListener('click', () => {
    filterModal.classList.add('show');
  });
}

if (filterModalClose) {
  filterModalClose.addEventListener('click', () => {
    filterModal.classList.remove('show');
  });
}

if (filterModalCancel) {
  filterModalCancel.addEventListener('click', () => {
    filterModal.classList.remove('show');
  });
}

if (filterModal) {
  filterModal.addEventListener('click', (e) => {
    if (e.target === filterModal) {
      filterModal.classList.remove('show');
    }
  });
}

// Checkbox select all
const headerCheckbox = document.querySelector('thead .checkbox');
const rowCheckboxes = document.querySelectorAll('tbody .checkbox');

if (headerCheckbox) {
  headerCheckbox.addEventListener('change', () => {
    rowCheckboxes.forEach(cb => {
      cb.checked = headerCheckbox.checked;
    });
  });
}

// Tree toggle
document.querySelectorAll('.tree-toggle:not(.tree-toggle-empty)').forEach(toggle => {
  toggle.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    const item = toggle.closest('.tree-item');
    
    toggle.classList.toggle('tree-toggle-expanded');
    
    let nextElement = item.nextElementSibling;
    while (nextElement) {
      if (nextElement.classList.contains('tree-children')) {
        nextElement.style.display = nextElement.style.display === 'none' ? '' : 'none';
        break;
      }
      if (nextElement.classList.contains('tree-item')) {
        break;
      }
      nextElement = nextElement.nextElementSibling;
    }
  });
});

// Vínculo toggle with ARIA
document.querySelectorAll('.vinculo-toggle').forEach(toggle => {
  toggle.addEventListener('click', () => {
    const card = toggle.closest('.vinculo-card') || toggle.closest('.vinculo-card-v2');
    if (card) {
      const isCollapsed = card.classList.toggle('vinculo-collapsed');
      toggle.setAttribute('aria-expanded', !isCollapsed);
      toggle.setAttribute('aria-label', isCollapsed ? 'Expandir detalhes' : 'Recolher detalhes');
    }
  });
});

// Info pessoais toggle with ARIA
document.querySelectorAll('.info-section-toggle').forEach(toggle => {
  toggle.addEventListener('click', () => {
    const section = toggle.closest('.info-section');
    const isCollapsed = section.classList.toggle('collapsed');
    toggle.setAttribute('aria-expanded', !isCollapsed);
    toggle.setAttribute('aria-label', isCollapsed ? 'Expandir seção' : 'Recolher seção');
  });
});

// CPF reveal button
document.querySelectorAll('.btn-reveal-cpf').forEach(btn => {
  btn.addEventListener('click', () => {
    const cpfSpan = btn.previousElementSibling;
    if (cpfSpan && cpfSpan.classList.contains('cpf-masked')) {
      const isHidden = cpfSpan.textContent.includes('•');
      if (isHidden) {
        cpfSpan.textContent = '123.868.110-45';
        btn.setAttribute('aria-label', 'Ocultar CPF');
        btn.setAttribute('title', 'Ocultar CPF');
      } else {
        cpfSpan.textContent = '•••.868.110-••';
        btn.setAttribute('aria-label', 'Exibir CPF completo');
        btn.setAttribute('title', 'Exibir CPF completo');
      }
    }
  });
});

// "Exibir mais" links
document.querySelectorAll('.link-more').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const parent = link.closest('p');
    if (parent) {
      parent.innerHTML = parent.textContent.replace('...', '') + ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.';
    }
  });
});

// Form submit
document.querySelectorAll('form').forEach(form => {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Dados salvos com sucesso!');
    window.location.href = 'index.html';
  });
});

// Tree menu buttons
document.querySelectorAll('.tree-menu-btn').forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    e.preventDefault();
  });
});
