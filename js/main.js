/**
 * main.js - ブログサイトのJavaScript機能
 *
 * 機能:
 * 1. ダークモード切り替え（localStorageで保存）
 * 2. モバイルメニューの開閉
 */

// ========================================
// ダークモード切り替え
// ========================================

/**
 * 保存されたテーマを読み込んで適用する
 */
function loadTheme() {
  // localStorageから保存されたテーマを取得
  const savedTheme = localStorage.getItem('theme');

  if (savedTheme) {
    // 保存されたテーマがあれば適用
    document.documentElement.setAttribute('data-theme', savedTheme);
  } else {
    // なければシステムの設定を確認
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (prefersDark) {
      document.documentElement.setAttribute('data-theme', 'dark');
    }
  }
}

/**
 * テーマを切り替える
 */
function toggleTheme() {
  // 現在のテーマを取得
  const currentTheme = document.documentElement.getAttribute('data-theme');

  // テーマを切り替え
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

  // HTMLに適用
  document.documentElement.setAttribute('data-theme', newTheme);

  // localStorageに保存
  localStorage.setItem('theme', newTheme);
}

// ========================================
// モバイルメニュー
// ========================================

/**
 * モバイルメニューを開閉する
 */
function toggleMobileMenu() {
  const menuBtn = document.getElementById('mobileMenuBtn');
  const mobileMenu = document.getElementById('mobileMenu');

  menuBtn.classList.toggle('active');
  mobileMenu.classList.toggle('active');
}

/**
 * モバイルメニューを閉じる
 */
function closeMobileMenu() {
  const menuBtn = document.getElementById('mobileMenuBtn');
  const mobileMenu = document.getElementById('mobileMenu');

  menuBtn.classList.remove('active');
  mobileMenu.classList.remove('active');
}

// ========================================
// イベントリスナーの設定
// ========================================

// DOMの読み込み完了後に実行
document.addEventListener('DOMContentLoaded', function() {
  // テーマを読み込み
  loadTheme();

  // テーマ切り替えボタン
  const themeToggle = document.getElementById('themeToggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', toggleTheme);
  }

  // モバイルメニューボタン
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', toggleMobileMenu);
  }

  // モバイルメニュー内のリンクをクリックしたらメニューを閉じる
  const mobileMenuLinks = document.querySelectorAll('.mobile-menu a');
  mobileMenuLinks.forEach(function(link) {
    link.addEventListener('click', closeMobileMenu);
  });

  // ウィンドウサイズが変わったらモバイルメニューを閉じる
  window.addEventListener('resize', function() {
    if (window.innerWidth > 640) {
      closeMobileMenu();
    }
  });
});

// システムのテーマ設定が変わったら反映する
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function(e) {
  // ユーザーが手動で設定していない場合のみ反映
  if (!localStorage.getItem('theme')) {
    const newTheme = e.matches ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', newTheme);
  }
});
