# CD Browser - Desktop Browser with Voice Control

A fully functional desktop browser built with Python, featuring voice command support, tab management, bookmarks, and more.

## Features

- **Web Browsing**: Full web page rendering with PyQtWebEngine
- **Voice Commands**: Control the browser entirely through voice
  - Navigation (back, forward, refresh)
  - Tab management (new tab, close tab, switch tabs)
  - Search & navigate by voice
  - Bookmark management
- **Bookmark Management**: Save, organize, and access bookmarks
- **Multiple Tabs**: Browse multiple websites simultaneously
- **Dark Theme**: Easy on the eyes with a modern dark interface
- **Free APIs**: Uses DuckDuckGo for search (no API key needed)

## Installation

### Prerequisites

- Python 3.8 or higher
- Microphone for voice commands

### Setup Steps

1. **Install Python dependencies**:

   ```bash
   cd python-browser
   pip install -r requirements.txt
   ```

2. **Run the browser**:
   ```bash
   python main.py
   ```

## Voice Commands

### Navigation Commands

- **"back"** - Go to previous page
- **"forward"** - Go to next page
- **"refresh"** or **"reload"** - Reload current page

### Tab Commands

- **"new tab"** - Open a new tab
- **"close tab"** - Close current tab
- **"switch to tab 1"** - Switch to specific tab number

### Search & Navigation

- **"search for [query]"** - Search for a query
- **"go to [url]"** - Navigate to a URL
- Example: "search for python programming"
- Example: "go to github.com"

### Bookmark Commands

- **"bookmark this"** - Save current page to bookmarks
- **"show bookmarks"** - Display all bookmarks
- **"open bookmark [name]"** - Open a saved bookmark

## Keyboard Shortcuts

| Shortcut | Action              |
| -------- | ------------------- |
| `Ctrl+T` | New Tab             |
| `Ctrl+W` | Close Tab           |
| `Ctrl+L` | Focus Address Bar   |
| `Ctrl+M` | Start Voice Command |

## How to Use

1. **Launch the browser** - Run `python main.py`
2. **Browse normally** - Type URLs or search queries in the address bar
3. **Use voice commands** - Click the 🎤 button or press `Ctrl+M` to start listening
4. **Manage bookmarks** - Use the ⭐ button to view bookmarks or the + ⭐ button to save current page

## Voice Command Examples

- "search for weather in New York"
- "go to youtube.com"
- "back"
- "refresh"
- "new tab"
- "bookmark this"
- "show bookmarks"
- "switch to tab 2"

## File Structure

```
python-browser/
├── main.py                  # Entry point
├── browser.py              # Main browser window
├── voice_handler.py        # Voice recognition & command processing
├── bookmark_manager.py     # Bookmark storage & management
├── search_handler.py       # URL normalization & search
├── requirements.txt        # Python dependencies
└── README.md              # This file
```

## Bookmarks Storage

Bookmarks are stored locally in:

- **Linux/Mac**: `~/.cd_browser_bookmarks.json`
- **Windows**: `C:\Users\YourUsername\.cd_browser_bookmarks.json`

## APIs Used

- **Web Rendering**: PyQtWebEngine (Chromium-based)
- **Voice Recognition**: Google Speech Recognition API (free tier)
- **Search**: DuckDuckGo (no API key required)
- **Text-to-Speech**: pyttsx3 (offline, free)

## Troubleshooting

### Microphone not working

- Check system microphone permissions
- Ensure microphone is connected and working
- Try adjusting microphone levels in system settings

### Voice recognition failing

- Speak clearly and slowly
- Ensure quiet environment
- Check internet connection (Google Speech API requires internet)

### PyQt6 issues on Linux

```bash
sudo apt-get install python3-pyqt6 python3-pyqt6.qtwebengine
```

## Future Enhancements

- History tracking and management
- Advanced bookmark folders
- Download manager
- Extensions support
- Profile management
- Password manager integration
- Dark/Light theme toggle

## License

This project is provided as-is for educational purposes.

## Notes

- The browser uses DuckDuckGo for searching to maintain privacy
- Bookmarks are stored locally on your computer
- Voice commands work best in quiet environments
- Internet connection required for web browsing and voice recognition
