from PyQt5.QtCore import Qt, QUrl, QTimer
from PyQt5.QtGui import QIcon, QFont, QKeySequence
from PyQt5.QtWidgets import (
    QMainWindow,
    QVBoxLayout,
    QHBoxLayout,
    QWidget,
    QToolBar,
    QLineEdit,
    QTabWidget,
    QPushButton,
    QDialog,
    QListWidget,
    QListWidgetItem,
    QMessageBox,
    QLabel,
)
from PyQt5.QtWebEngineWidgets import QWebEngineView
import sys

from voice_handler import VoiceHandler
from bookmark_manager import BookmarkManager
from search_handler import SearchHandler


class CDBrowser(QMainWindow):
    def __init__(self):
        super().__init__()
        self.setWindowTitle("CD Browser")
        self.setWindowIcon(QIcon())
        self.setGeometry(100, 100, 1200, 800)

        # Initialize managers
        self.bookmark_manager = BookmarkManager()
        self.voice_handler = VoiceHandler(on_command_callback=self.handle_voice_command)
        self.search_handler = SearchHandler()

        # Main widget
        main_widget = QWidget()
        self.setCentralWidget(main_widget)
        main_layout = QVBoxLayout()

        # Toolbar with address bar
        toolbar = QToolBar()
        self.addToolBar(toolbar)

        # Navigation buttons
        back_btn = QPushButton("←")
        back_btn.setMaximumWidth(40)
        back_btn.clicked.connect(self.go_back)
        toolbar.addWidget(back_btn)

        forward_btn = QPushButton("→")
        forward_btn.setMaximumWidth(40)
        forward_btn.clicked.connect(self.go_forward)
        toolbar.addWidget(forward_btn)

        refresh_btn = QPushButton("⟲")
        refresh_btn.setMaximumWidth(40)
        refresh_btn.clicked.connect(self.refresh)
        toolbar.addWidget(refresh_btn)

        # Address bar
        self.address_bar = QLineEdit()
        self.address_bar.setPlaceholderText("Enter URL or search query...")
        self.address_bar.returnPressed.connect(self.navigate)
        toolbar.addWidget(self.address_bar)

        # Voice button
        self.voice_btn = QPushButton("🎤")
        self.voice_btn.setMaximumWidth(50)
        self.voice_btn.clicked.connect(self.start_voice_command)
        if not self.voice_handler.available:
            self.voice_btn.setToolTip("Voice not available (missing aifc module)")
            self.voice_btn.setEnabled(False)
        toolbar.addWidget(self.voice_btn)

        # Bookmarks button
        bookmark_btn = QPushButton("⭐")
        bookmark_btn.setMaximumWidth(40)
        bookmark_btn.clicked.connect(self.show_bookmarks)
        toolbar.addWidget(bookmark_btn)

        # Add bookmark button
        add_bookmark_btn = QPushButton("+ ⭐")
        add_bookmark_btn.setMaximumWidth(50)
        add_bookmark_btn.clicked.connect(self.add_current_bookmark)
        toolbar.addWidget(add_bookmark_btn)

        # Tab widget
        self.tabs = QTabWidget()
        self.tabs.setTabsClosable(True)
        self.tabs.tabCloseRequested.connect(self.close_tab)
        main_layout.addWidget(self.tabs)

        # New tab button
        new_tab_btn = QPushButton("+")
        new_tab_btn.setMaximumWidth(40)
        new_tab_btn.clicked.connect(self.new_tab)
        toolbar.addWidget(new_tab_btn)

        main_widget.setLayout(main_layout)
        main_layout.insertWidget(0, toolbar)

        # Create first tab
        self.new_tab()

        # Apply dark theme styling
        self.apply_dark_theme()

        # Set up keyboard shortcuts
        self.setup_shortcuts()

    def apply_dark_theme(self):
        """Apply dark theme to the browser"""
        stylesheet = """
        QMainWindow, QWidget {
            background-color: #0f1419;
            color: #ffffff;
        }
        QToolBar {
            background-color: #1a2332;
            border-bottom: 1px solid #2a3d5a;
        }
        QLineEdit {
            background-color: #1a2332;
            color: #ffffff;
            border: 1px solid #2a3d5a;
            border-radius: 6px;
            padding: 5px;
        }
        QPushButton {
            background-color: #1a2332;
            color: #ffffff;
            border: 1px solid #2a3d5a;
            border-radius: 4px;
            padding: 5px 10px;
        }
        QPushButton:hover {
            background-color: #2a3d5a;
        }
        QPushButton:pressed {
            background-color: #3a5d8a;
        }
        QTabBar {
            background-color: #1a2332;
        }
        QTabBar::tab {
            background-color: #252d3a;
            color: #ffffff;
            padding: 8px 15px;
            border: 1px solid #2a3d5a;
        }
        QTabBar::tab:selected {
            background-color: #1a2332;
            border-bottom: 2px solid #2a6dd4;
        }
        """
        self.setStyleSheet(stylesheet)

    def setup_shortcuts(self):
        """Set up keyboard shortcuts"""
        from PyQt5.QtWidgets import QShortcut

        # Ctrl+T for new tab
        QShortcut(QKeySequence.AddTab, self, self.new_tab)

        # Ctrl+W for close tab
        QShortcut(QKeySequence.Close, self, lambda: self.close_tab(self.tabs.currentIndex()))

        # Ctrl+L for address bar
        QShortcut(QKeySequence.MoveToStartOfDocument, self, self.focus_address_bar)

        # Ctrl+M for voice
        QShortcut("Ctrl+M", self, self.start_voice_command)

    def new_tab(self, url="https://www.google.com"):
        """Create a new tab"""
        browser = QWebEngineView()
        browser.setUrl(QUrl(url))

        # Connect URL changed signal to update address bar
        browser.urlChanged.connect(self.update_address_bar)

        tab_index = self.tabs.addTab(browser, "New Tab")
        self.tabs.setCurrentIndex(tab_index)
        self.update_address_bar()

    def navigate(self):
        """Navigate to URL or search"""
        url_text = self.address_bar.text()
        if not url_text:
            return

        url = self.search_handler.normalize_url(url_text)
        if url:
            current_browser = self.tabs.currentWidget()
            if current_browser:
                current_browser.setUrl(QUrl(url))
                self.address_bar.clear()

    def go_back(self):
        """Go back"""
        current_browser = self.tabs.currentWidget()
        if current_browser:
            current_browser.back()

    def go_forward(self):
        """Go forward"""
        current_browser = self.tabs.currentWidget()
        if current_browser:
            current_browser.forward()

    def refresh(self):
        """Refresh current page"""
        current_browser = self.tabs.currentWidget()
        if current_browser:
            current_browser.reload()

    def update_address_bar(self):
        """Update address bar with current URL"""
        current_browser = self.tabs.currentWidget()
        if current_browser:
            self.address_bar.setText(current_browser.url().toString())
            self.tabs.setTabText(self.tabs.currentIndex(), current_browser.page().title() or "New Tab")

    def close_tab(self, index):
        """Close a tab"""
        if self.tabs.count() > 1:
            self.tabs.removeTab(index)
        else:
            self.close()

    def start_voice_command(self):
        """Start voice command listening"""
        if not self.voice_handler.available:
            self.statusBar().showMessage("Voice recognition not available")
            self.voice_handler.speak("Voice recognition is not available on this system")
            return

        self.statusBar().showMessage("Listening for voice command... (speak now)")

        # Use a timer to run in main thread
        timer = QTimer()
        timer.timeout.connect(self._process_voice)
        timer.start(0)

    def _process_voice(self):
        """Process voice command (moved to thread context)"""
        command = self.voice_handler.listen()
        if command:
            action = self.voice_handler.process_command(command)
            if action:
                self.voice_handler.speak_confirmation(action)
                self.handle_voice_command(action)
        self.statusBar().showMessage("")

    def handle_voice_command(self, action):
        """Handle voice command actions"""
        if isinstance(action, str):
            if action == "back":
                self.go_back()
            elif action == "forward":
                self.go_forward()
            elif action == "refresh":
                self.refresh()
            elif action == "new_tab":
                self.new_tab()
            elif action == "close_tab":
                self.close_tab(self.tabs.currentIndex())
            elif action == "bookmark_current":
                self.add_current_bookmark()
            elif action == "show_bookmarks":
                self.show_bookmarks()
        elif isinstance(action, dict):
            if action.get("action") == "search":
                query = action.get("query")
                if query:
                    self.address_bar.setText(query)
                    self.navigate()
            elif action.get("action") == "navigate":
                url = action.get("url")
                if url:
                    self.address_bar.setText(url)
                    self.navigate()
            elif action.get("action") == "switch_tab":
                tab_num = action.get("tab_number", 1) - 1
                if 0 <= tab_num < self.tabs.count():
                    self.tabs.setCurrentIndex(tab_num)

    def focus_address_bar(self):
        """Focus on address bar"""
        self.address_bar.setFocus()
        self.address_bar.selectAll()

    def add_current_bookmark(self):
        """Add current page to bookmarks"""
        current_browser = self.tabs.currentWidget()
        if current_browser:
            url = current_browser.url().toString()
            title = current_browser.page().title() or "Bookmark"
            if self.bookmark_manager.add_bookmark(title, url):
                self.statusBar().showMessage(f"Bookmarked: {title}")
                self.voice_handler.speak(f"Bookmarked: {title}")
            else:
                self.statusBar().showMessage("Already bookmarked")

    def show_bookmarks(self):
        """Show bookmarks dialog"""
        bookmarks = self.bookmark_manager.get_bookmarks()

        if not bookmarks:
            QMessageBox.information(self, "Bookmarks", "No bookmarks yet")
            return

        dialog = QDialog(self)
        dialog.setWindowTitle("Bookmarks")
        dialog.setGeometry(300, 300, 400, 300)

        layout = QVBoxLayout()

        list_widget = QListWidget()
        for bookmark in bookmarks:
            item = QListWidgetItem(f"{bookmark['title']}")
            item.setData(Qt.UserRole, bookmark["url"])
            list_widget.addItem(item)

        list_widget.itemDoubleClicked.connect(
            lambda item: self.open_bookmark_from_dialog(dialog, item)
        )

        layout.addWidget(QLabel("Double-click to open:"))
        layout.addWidget(list_widget)

        dialog.setLayout(layout)
        dialog.exec()

    def open_bookmark_from_dialog(self, dialog, item):
        """Open bookmark from dialog"""
        url = item.data(Qt.UserRole)
        current_browser = self.tabs.currentWidget()
        if current_browser:
            current_browser.setUrl(QUrl(url))
        dialog.close()
