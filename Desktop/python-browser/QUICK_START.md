# Quick Start - CD Browser

## 1. Install Dependencies

```bash
cd python-browser
pip install -r requirements.txt
```

This will install:

- **PyQt5** - Desktop GUI framework
- **PyQtWebEngine** - Web rendering engine
- **pyttsx3** - Text-to-speech for voice feedback
- **requests** - HTTP library

### Optional: Enable Voice Recognition

If you want voice command features:

```bash
pip install SpeechRecognition pyaudio
```

**Note:** Voice commands are optional. The browser works perfectly fine without them!

## 2. Run the Browser

```bash
python main.py
```

The browser window will open with a new tab showing Google.

## 3. Basic Usage

### Navigation

- Type a URL or search query in the address bar
- Press Enter to navigate
- Use ← → buttons for back/forward
- Use ⟲ button to refresh

### Voice Commands (Press 🎤 or Ctrl+M)

- "search for [query]" → Search on DuckDuckGo
- "go to [url]" → Navigate to URL
- "back" / "forward" / "refresh" → Navigation
- "new tab" → Open new tab
- "close tab" → Close current tab
- "bookmark this" → Save current page
- "show bookmarks" → View all bookmarks

### Bookmarks

- Click + ⭐ button to bookmark current page
- Click ⭐ button to view all bookmarks
- Double-click any bookmark to open it

## 4. Keyboard Shortcuts

| Key    | Action            |
| ------ | ----------------- |
| Ctrl+T | New Tab           |
| Ctrl+W | Close Tab         |
| Ctrl+L | Focus Address Bar |
| Ctrl+M | Voice Command     |

## 5. Common Tasks

### Browse the Web

1. Click address bar
2. Type URL (e.g., "github.com") or search query
3. Press Enter
4. Use tabs for multiple sites

### Search Using Voice

1. Press 🎤 or Ctrl+M
2. Say "search for [what you want]"
3. Wait for confirmation
4. Browser searches DuckDuckGo

### Manage Bookmarks

1. Go to a page you like
2. Click + ⭐ to bookmark it
3. Click ⭐ to view all bookmarks
4. Double-click a bookmark to open it

## 6. First Time Setup

If microphone isn't working:

**On Windows:**

- Settings → Privacy & Security → Microphone → Allow apps to access
- Give Python permission

**On macOS:**

- System Preferences → Security & Privacy → Microphone → Allow

**On Linux:**

- Check PulseAudio/ALSA settings
- Test with: `arecord -d 5 test.wav`

## 7. Example Voice Commands

```
"search for python tutorials"
"go to github.com"
"go to stack overflow"
"search for machine learning"
"go to youtube.com"
"back"
"refresh"
"new tab"
"bookmark this"
"switch to tab 1"
```

## 8. Troubleshooting

**Browser won't start:**

```bash
python -m pip install --upgrade PyQt6
```

**Microphone not detected:**

- Check system sound settings
- Restart the application
- Test microphone with system tools

**Voice recognition not working:**

- Speak clearly and slowly
- Ensure stable internet connection
- Try again in a quieter environment

**Bookmarks not saving:**

- Check disk space
- Ensure write permissions to home directory
- Bookmarks file: `~/.cd_browser_bookmarks.json`

## 9. Features Explained

### Vertical Tab Management (Like Zen Browser)

- Each new tab opens in the tab bar
- Close tabs individually with the X
- Switch between tabs by clicking

### Voice-First Browsing

- Complete browsing with voice
- Voice feedback confirms actions
- No need for keyboard or mouse

### Privacy-Focused Search

- Uses DuckDuckGo (doesn't track)
- Local bookmark storage
- No data sent to third parties

### Dark Mode

- Built-in dark theme
- Easy on eyes
- Consistent with modern browser design

## 10. Next Steps

- **Learn all voice commands** - Practice different commands
- **Set up bookmarks** - Save frequently visited sites
- **Customize** - Modify colors/fonts in browser.py if desired
- **Contribute** - Suggest features or improvements

---

**Enjoy your privacy-focused, voice-controlled browser!** 🎤🌐
